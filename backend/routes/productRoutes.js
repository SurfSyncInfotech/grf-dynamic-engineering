import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    getRelatedProducts,
    updateProduct,
    deleteProduct,
    addProductReview,
    deleteProductReview,
} from "../controllers/productController.js";
import { protect, protectUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
    "/",
    protect,
    upload.fields([
        { name: "images", maxCount: 10 },
        { name: "pdf", maxCount: 1 },
    ]),
    createProduct
);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/:id/related", getRelatedProducts);
router.put(
    "/:id",
    protect,
    upload.fields([
        { name: "images", maxCount: 10 },
        { name: "pdf", maxCount: 1 },
    ]),
    updateProduct
);
router.delete("/:id", protect, deleteProduct);

// Reviews routes
router.post("/:id/reviews", protectUser, addProductReview);
router.delete("/:id/reviews/:reviewId", protectUser, deleteProductReview);

export default router;