import axios from "axios";
import { Flag, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import CreateProducts from "./createProducts";

export default function Category() {
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [imgurl, setImgurl] = useState("");

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("imgurl", imgurl);
      const response = await axios.post(
        "http://localhost:4007/Categories",
        formdata
      );
      console.log(response);
      setIsSubmitting(false);
      setName("");
    } catch (error) {
      console.log("Something went wrong to create category.", error);
      setIsSubmitting(false);
    }
  };

  const [allCategories, setAllCategories] = useState();
  const fetchAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4007/categories");
      setAllCategories(response.data.data);
    } catch (error) {
      console.log("Something went wrong to fetch all categories.", error);
    }
  };

  // handel delete category
  const [isDelete, setIsDelete] = useState(false);
  const handelDelete = async (_id) => {
    try {
      setIsDelete(true);
      const response = await axios.delete(
        `http://localhost:4007/categories/${_id}`
      );
      setIsDelete(false);
      fetchAllCategories();
    } catch (error) {
      console.log("Something went wrong.", error);
      setIsDelete(false);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-24">
      <CreateProducts/>
      <div className="space-y-4">

      <p className="text-2xl font-bold opacity-80 ">
          Create Categories
        </p>
        <div className="border border-gray-300 rounded-sm px-6 py-4">
      
      
      <form
        onSubmit={createCategory}
        className="flex flex-col space-y-4"
      >
        <label className="font-semibold opacity-80">
          Enter Category name <span className="text-red-700">*</span>
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-300 rounded-sm px-4 py-2 outline-none font-semibold"
          placeholder="Enter category name"
        />
        <label className="font-semibold opacity-80">
          Choose file <span className="text-red-700">*</span>
        </label>
        <input
          required
          onChange={(e) => setImgurl(e.target.files[0])}
          type="file"
          className="border border-gray-300 rounded-sm px-4 py-2 outline-none font-semibold opacity-60"
        />
        <button
          type="submit"
          className="font-semibold flex gap-4 justify-center text-white hover:bg-emerald-500 rounded-sm border border-gray-300 opacity-70 px-4 py-2 bg-emerald-600 cursor-pointer duration-300"
        >
          {IsSubmitting && <Loader className=" animate-spin" />}
          Create Category
        </button>
      </form>
    </div>
      
      </div>
     
     

      <div className="mt-12 space-y-4">
        <p className="text-2xl font-bold opacity-80">Delete Category</p>
        {allCategories?.map((eachItem) => (
          <div key={eachItem._id} className=" font-semibold opacity-80">
            {eachItem.name}{" "}
            <button
              onClick={() => {
                handelDelete(eachItem._id);
              }}
              className="bg-red-600 text-white px-4  py-1 rounded-sm cursor-pointer"
            >
              {isDelete ? "Deleting.." : " Delete"}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
