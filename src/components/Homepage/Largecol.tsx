import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { ThreeDots } from "../ui/threedot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProductTable() {

  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const start = (page - 1) * pageSize;
  const items = products.slice(start, start + pageSize);
  const pages = Math.ceil(products.length / pageSize);

  const stockColor = (stock: number) =>
    stock > 10
      ? "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200"
      : stock > 0
      ? "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200"
      : "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200";

  return (
    <div className="bg-white dark:bg-gray-900 p-6 border w-full shadow-sm rounded-lg text-gray-900 dark:text-gray-100">

      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <div>
          <h2 className="text-xl font-semibold">Products</h2>
          <p className="text-gray-500 text-sm">
            Products from backend
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-lg px-3 py-1 w-64 bg-gray-100 dark:bg-gray-800">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </div>
          <ThreeDots />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b">
              <th className="p-3"></th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Category</th>
              <th className="p-3">Sold</th>
              <th className="p-3">Stock</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item: any) => (
              <tr key={item._id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-800">

                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-10 h-10 rounded-md"
                  />
                  <span className="font-medium">{item.title}</span>
                </td>

                <td className="p-3">${item.price}</td>

                <td className="p-3">{item.category}</td>

                <td className="p-3">{item.totalSoldQuantity || 0}</td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${stockColor(item.stock)}`}>
                    {item.stock}
                  </span>
                </td>

                <td className="p-3">
                  <ThreeDots />
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center text-sm mt-5">

        <p>
          Showing{" "}
          <strong>
            {start + 1}–{Math.min(start + pageSize, products.length)}
          </strong>{" "}
          of {products.length}
        </p>

        <div className="flex gap-4">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={page === 1 ? "text-gray-400" : "text-blue-500"}
          >
            Previous
          </button>

          <button
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
            className={page === pages ? "text-gray-400" : "text-blue-500"}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}