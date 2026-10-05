import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { seedFAQs } from "./controllers/faqController.js";
import { seedProducts } from "./controllers/productSeeder.js";

dotenv.config();

// Connect to database and seed defaults
connectDB().then(() => {
    seedFAQs();
    seedProducts();
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/api/products", productRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/users", userRoutes);
app.get("/api/db-status", async (req, res) => {
    try {
        const mongoose = (await import("mongoose")).default;
        const state = mongoose.connection.readyState;
        const states = ["disconnected", "connected", "connecting", "disconnecting"];

        let pingResult = "pending";
        let errorMsg = null;
        let productsCount = 0;

        if (state === 1) {
            try {
                const admin = new mongoose.mongo.Admin(mongoose.connection.db);
                const result = await admin.ping();
                pingResult = JSON.stringify(result);
                productsCount = await mongoose.connection.db.collection("products").countDocuments({});
            } catch (err) {
                errorMsg = err.message;
            }
        }

        res.json({
            status: "running",
            mongooseState: states[state],
            mongoUriConfigured: !!process.env.MONGO_URI,
            ping: pingResult,
            productsCount,
            error: errorMsg
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        });
    }
});

app.get("/", (req, res) => {
    res.json({ message: "GRF Dynamic Engineering API Running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});