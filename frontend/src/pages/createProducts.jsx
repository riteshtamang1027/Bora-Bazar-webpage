import axios from "axios";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CreateProducts() {
  const [iscategoryCreate, setIscategoryCreate] = useState(false);
  const [name, setName] = useState("");
  const [sale, setSale] = useState("");
  const [Description, setDescription] = useState("");
  const [Imgurl, setImgurl] = useState("");
  const [Price, setPrice] = useState();
  const [PreviousPrice, setPreviousPrice] = useState();

  const createProducts = async (e) => {
    e.preventDefault();
    try {
      setIscategoryCreate(true);
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("sale", sale);
      formdata.append("description", Description);
      formdata.append("imgurl", Imgurl);
      formdata.append("price", Price),
        formdata.append("previousPrice", PreviousPrice);
      const response = await axios.post(
        "http://localhost:4007/products",
        formdata
      );
      setIscategoryCreate(false);
      setName("");
      setSale("");
      setDescription("");
      setImgurl(null);
      setPreviousPrice(null);
      setPrice(null);
    } catch (error) {
      console.log("Something went wrong to create Product", error);
      setIscategoryCreate(false);
    }
  };

  const [allProduct, setallProduct] = useState();
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4007/products");
      setallProduct(response.data.data);
    } catch (error) {
      console.log("Somethig went wrong to fetch all products.", error);
    }
  };
// Handel delete product 
const [isdeleting, setisdeleting] = useState(false);


  const Handeldelete = async (_id) => {
    try {
      setisdeleting(true)
      const response = await axios.delete(
        `http://localhost:4007/products/${_id}`
      );
      setisdeleting(false)
      fetchAllProducts();
    } catch (error) {
      console.log("Something went wrong to delete Products.", error);
      setisdeleting(false)
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-2xl font-bold opacity-80 ">Create Products</p>

      <div className="border border-gray-300 rounded-sm px-6 py-4 mb-12">
        <form onSubmit={createProducts} className="flex flex-col gap-4">
          <label className="opacity-80 flex items-center ">
            Product Name <span className="text-red-600">*</span>
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="font-semibold opacity-80 outline-none border border-gray-300 px-4 py-2 rounded-sm"
            placeholder="Enter product name"
          />
          <label className="opacity-80">Sale </label>
          <input
            value={sale}
            onChange={(e) => setSale(e.target.value)}
            type="text"
            className="font-semibold opacity-80 outline-none border border-gray-300 px-4 py-2 rounded-sm"
            placeholder="Enter product category"
          />
          <label className="opacity-80">Description </label>
          <textarea
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="font-semibold opacity-80 outline-none border border-gray-300 px-4 py-2 rounded-sm"
            placeholder="Add descriptions"
          />
          <span className="grid grid-cols-2 items-center justify-between gap-4 ">
            <div>
              <label className="opacity-80 flex items-center ">
                Previous Price <span className="text-red-600">*</span>
              </label>
              <input
                required
                value={PreviousPrice}
                onChange={(e) => setPreviousPrice(e.target.value)}
                type="number"
                className="font-semibold opacity-80 outline-none border border-gray-300 w-full px-4 py-2 rounded-sm"
                placeholder="Enter product previous price"
              />
            </div>
            <div>
              <label className="opacity-80 flex items-center">
                {" "}
                Price <span className="text-red-600">*</span>
              </label>
              <input
                required
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="font-semibold opacity-80 outline-none border w-full border-gray-300 px-4 py-2 rounded-sm"
                placeholder="Enter product price"
              />
            </div>
          </span>
          <label className="opacity-80 flex items-center">
            {" "}
            Choose Image <span className="text-red-600">*</span>
          </label>
          <input
            required
            onChange={(e) => setImgurl(e.target.files[0])}
            type="file"
            className="font-semibold opacity-60 outline-none border  border-gray-300 px-4 py-2 rounded-sm"
            placeholder="Choose product files"
          />
          <button
            type="submit"
            className="font-semibold opacity-60 outline-none border  border-gray-300 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500 duration-500 px-4 py-2 rounded-sm flex justify-center gap-2"
          >
            {iscategoryCreate && <Loader size={20} />}
            {iscategoryCreate ? "Create Product..." : "Create Product"}
          </button>
        </form>
      </div>

      <div>
        <p className="text-2xl font-bold opacity-80">Delete Product</p>
        <div className="space-y-4">
          {allProduct?.map((eachItem) => (
            <div key={eachItem._id} className="flex items-center gap-4">
              {eachItem.name}
              <button onClick={()=>{Handeldelete(eachItem._id)}} className="bg-red-600 px-4 py-1 rounded-sm text-white cursor-pointer font-semibold opacity-80">
               {
                isdeleting ? "Deleting..." :"Delete"
               }
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
