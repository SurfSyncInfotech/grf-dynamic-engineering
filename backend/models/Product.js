import mongoose from "mongoose";

const specificationSchema = new mongoose.Schema({
    key: {
        type: String,
        trim: true,
    },
    value: {
        type: String,
        trim: true,
    },
});

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },

        category: {
            type: String,
            required: [true, "Category is required"],
            enum: [
                "Storage Tank",
                "Milk Storage Tank",
                "Silo System",
                "Brewery Tank",
                "Reactor Vessel",
                "High Pressure Vessel",
                "Mixing Tank",
                "Jacketed Vessel",
                "Underground Oil Storage Tank",
                "Custom Equipment",
            ],
        },

        description: {
            type: String,
            trim: true,
        },

        specifications: [specificationSchema],

        images: [
            {
                url: {
                    type: String,
                },
                data: {
                    type: String,
                },
                contentType: {
                    type: String,
                },
            },
        ],

        pdf: {
            url: {
                type: String,
            },
            data: {
                type: String,
            },
            contentType: {
                type: String,
            },
            filename: {
                type: String,
            },
        },

        brochureUrl: {
            type: String,
        },

        material: {
            type: [String],
            enum: ["Stainless Steel", "Mild Steel", "Custom"],
        },

        capacityRange: {
            min: Number,
            max: Number,
            unit: {
                type: String,
                default: "Liters",
            },
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        order: {
            type: Number,
            default: 0,
        },

        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;