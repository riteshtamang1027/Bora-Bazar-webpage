import cloudinary from "../lib/cloudinary.js";
import { Categories } from "../schema/categorySchema.js";


// CRUDE OPERATIONS
// 1. Create categories
export const CreateCategories = async (req, res) => {
  try {
    const ExistCategories = await Categories.findOne({ name: req.body.name });
    if (ExistCategories) {
      return res.status(409).json({
        message: "Category already exist. please enter another name.",
      }); 
    } 
    // image handaller 
    // console.log(req.file) ;
    const cloudinaryResponce = await cloudinary.uploader.upload(req.file.path);
    // console.log(cloudinaryResponce)
    const createCategory = await new Categories({
      ...req.body,
      imgurl: cloudinaryResponce.secure_url,
    }).save();
    // console.log(createCategory);
    return res.status(201).json({
      message: "Category data created successfullly. ",
      data: createCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// 2.get all categories
export const getAllCategories = async (req, res) => {
  try {
    const getallCategories = await Categories.find();
    return res.status(200).json({
      message: "Categories fetch successfully.",
      data: getallCategories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// 3. get Single category
export const getSingleCategoryById = async (req, res) => {
  try {
    const getsingleCategory = await Categories.findById(req.params.id);
    return res.status(200).json({
      message: "Singel category fetch successfully.",
      data: getsingleCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// 4. category updated
export const updateCategoryById = async (req, res) => {
  try {
 
    //  file update 
    if (req.file) {
      const cloudinaryResponce = await cloudinary.uploader.upload(req.file.path);
      const updateCategory = await Categories.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imgurl: cloudinaryResponce.secure_url },
        { new: true }
      );
      return res.status(200).json({
        message: "Category file updated successfully.",
        data: updateCategory,
      });
    }

    // category text update 
    const updateCategory= await Categories.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if (!updateCategory) {
      return res.status(404).json({
        message: "This category is not found.",
      });
    }

    return res.status(200).json({
      message: "category updated successfully.",
      data: updateCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// 5. delete category
export const deleteCategoryById = async (req, res) => {
  try {
    const deleteCategory = await Categories.findByIdAndDelete(req.params.id);

    if (!deleteCategory) {
      return res.status(404).json({
        message: "category isn't available.",
      });
    }

    return res.status(200).json({
      message: "category deleted successfully.",
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
