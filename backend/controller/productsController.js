import { product } from "../schema/productSchema.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createProducts = async (req, res) => {
  try {
    const checkProduct = await product.findOne({ name: req.body.name });
    if (checkProduct) {
      return res.status(409).json({
        message: "the product was already exist.",
      });
    }
    const cloudinaryResponce = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResponce);

    const createProduct = await new product({
      ...req.body,
      imgurl: cloudinaryResponce.secure_url,
    }).save();
    return res.status(201).json({
      message: "Product Create Successfully.",
      data: createProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const getAllproducts = await product.find();
    return res.status(200).json({
      message: "All products fetch successfully.",
      data: getAllproducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
export const getSingleProductById = async (req, res) => {
try {
  const getSingleProduct = await product.findById(req.params.id);
return res.status(200).json({
  message:"Single product fetch successfully.",
  data:getSingleProduct
})
  
} catch (error) {
  return res.status(500).json({
    message: "Internal Server Error.",
  });
  
}
};

export const updateProductById = async (req, res) => {
  try {
    //  file update 
    let cloudinaryResponce;
    if (req.file) {
      const cloudinaryResponce = await cloudinary.uploader.upload(req.file.path);
      const updateProduct = await product.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imgurl: cloudinaryResponce.secure_url },
        { new: true }
      );
      return res.status(200).json({
        message: "Product file updated successfully.",
        data: updateProduct,
      });
    }

    // Product text update 
    const updateProduct= await product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if (!updateProduct) {
      return res.status(404).json({
        message: "This Product is not found.",
      });
    }

    return res.status(200).json({ 
      message: "Product updated successfully.",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "This product is not found.",
      });
    }
    return res.status(200).json({
      message: "product deleted successfully.",
      data: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
