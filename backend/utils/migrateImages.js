import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Product from "../models/Product.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file");
    process.exit(1);
}

// Function to map MIME types to file extensions
const getExtensionFromMime = (mimeType) => {
    switch (mimeType) {
        case "image/png": return ".png";
        case "image/jpeg":
        case "image/jpg": return ".jpg";
        case "image/webp": return ".webp";
        case "image/gif": return ".gif";
        case "application/pdf": return ".pdf";
        default: return ".jpg"; // fallback
    }
};

const runMigration = async () => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(MONGO_URI);
        console.log("Connected successfully!");

        // Ensure uploads directory exists
        const uploadsDir = path.join(process.cwd(), "uploads");
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
            console.log("Created 'uploads' folder.");
        }

        const products = await Product.find({});
        console.log(`Found ${products.length} products to check.`);

        let migratedProductsCount = 0;
        let migratedImagesCount = 0;
        let migratedPdfsCount = 0;

        for (const product of products) {
            let isModified = false;

            // Migrate images
            if (product.images && product.images.length > 0) {
                for (let i = 0; i < product.images.length; i++) {
                    const img = product.images[i];
                    
                    // Only migrate if we have base64 data and no url yet
                    if (img.data && !img.url) {
                        try {
                            const buffer = Buffer.from(img.data, "base64");
                            const ext = getExtensionFromMime(img.contentType);
                            const uniqueName = `migrated-${product._id}-${i}-${Date.now()}${ext}`;
                            const filePath = path.join(uploadsDir, uniqueName);

                            fs.writeFileSync(filePath, buffer);

                            img.url = `/uploads/${uniqueName}`;
                            img.data = undefined; // Remove the base64 data to free database space
                            isModified = true;
                            migratedImagesCount++;
                        } catch (err) {
                            console.error(`Failed to migrate image ${i} of product "${product.name}":`, err.message);
                        }
                    }
                }
            }

            // Migrate PDF brochure
            if (product.pdf && product.pdf.data && !product.pdf.url) {
                try {
                    const pdfData = product.pdf;
                    const buffer = Buffer.from(pdfData.data, "base64");
                    const ext = ".pdf";
                    const safeFilename = pdfData.filename ? path.parse(pdfData.filename).name : "brochure";
                    const uniqueName = `migrated-pdf-${product._id}-${safeFilename}-${Date.now()}${ext}`;
                    const filePath = path.join(uploadsDir, uniqueName);

                    fs.writeFileSync(filePath, buffer);

                    pdfData.url = `/uploads/${uniqueName}`;
                    pdfData.data = undefined; // Remove base64 data
                    isModified = true;
                    migratedPdfsCount++;
                } catch (err) {
                    console.error(`Failed to migrate PDF for product "${product.name}":`, err.message);
                }
            }

            if (isModified) {
                // Mark sub-paths modified for Mongoose if nested keys are deleted
                product.markModified("images");
                product.markModified("pdf");
                await product.save();
                migratedProductsCount++;
                console.log(`Migrated product: "${product.name}"`);
            }
        }

        console.log("\n====================================");
        console.log("MIGRATION COMPLETED SUCCESSFULLY!");
        console.log(`- Total products migrated: ${migratedProductsCount}`);
        console.log(`- Images saved to uploads/: ${migratedImagesCount}`);
        console.log(`- PDFs saved to uploads/: ${migratedPdfsCount}`);
        console.log("====================================");

    } catch (err) {
        console.error("Migration error:", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from database.");
        process.exit(0);
    }
};

runMigration();
