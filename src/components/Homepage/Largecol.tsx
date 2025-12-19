import React, { useState } from "react";
import { Search } from "lucide-react";
import { ThreeDots } from "../ui/threedot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const allProducts = [
  {
    img: "/img/chair1.png",
    name: "Shanty Cotton Seat",
    vendors: ["#22c55e", "#ffffff", "#f97316"],
    margin: "$981.00",
    sold: "29,536",
    stock: "In Stock",
  },
  {
    img: "/img/chair2.png",
    name: "Practical Soft Couch",
    vendors: ["#f97316", "#ffffff", "#3b82f6"],
    margin: "$199.00",
    sold: "27,700",
    stock: "In Stock",
  },
  {
    img: "/img/chair3.png",
    name: "Rustic Rubber Chair",
    vendors: ["#3b82f6", "#a855f7", "#ef4444", "+2"],
    margin: "$609.00",
    sold: "21,778",
    stock: "Low Stock",
  },
  {
    img: "/img/chair4.png",
    name: "Ergonomic Frozen Bacon",
    vendors: ["#f97316", "#000000", "#a855f7"],
    margin: "$923.00",
    sold: "20,272",
    stock: "In Stock",
  },
  {
    img: "/img/chair5.png",
    name: "Unbranded Metal Sofa",
    vendors: ["#a855f7", "#3b82f6"],
    margin: "$119.00",
    sold: "17,374",
    stock: "In Stock",
  },
  {
    img: "/img/chair6.png",
    name: "Intelligent Soft Sofa",
    vendors: ["#22c55e", "#3b82f6", "#ef4444"],
    margin: "$595.00",
    sold: "14,374",
    stock: "Low Stock",
  },

  // PAGE 2
  {
    img: "/img/b1.png",
    name: "Handmade Cotton Chair",
    vendors: ["#22c55e", "#3b82f6", "#a855f7", "+2"],
    margin: "$472.00",
    sold: "12,084",
    stock: "Stockout",
  },
  {
    img: "/img/b2.png",
    name: "Fantastic Rubber Chair",
    vendors: ["#22c55e", "#3b82f6", "#f97316"],
    margin: "$98.00",
    sold: "48,604",
    stock: "In Stock",
  },
  {
    img: "/img/b3.png",
    name: "Generic Steel Divan",
    vendors: ["#3b82f6", "#000000", "#a855f7", "+2"],
    margin: "$931.00",
    sold: "2,329",
    stock: "In Stock",
  },
  {
    img: "/img/b4.png",
    name: "Handmade Beanbag",
    vendors: ["#22c55e", "#3b82f6", "#f97316"],
    margin: "$5,300.00",
    sold: "70,946",
    stock: "Low Stock",
  },
  {
    img: "/img/b5.png",
    name: "Practical Metal Sofa",
    vendors: ["#3b82f6", "#a855f7", "+2"],
    margin: "$282.00",
    sold: "57,682",
    stock: "In Stock",
  },
  {
    img: "/img/b6.png",
    name: "Advanced Soft Couch",
    vendors: ["#f97316", "#3b82f6", "#a855f7"],
    margin: "$427.00",
    sold: "32,587",
    stock: "Low Stock",
  },
];

export default function ProductTable() {
  const pageSize = 6;
  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const items = allProducts.slice(start, start + pageSize);
  const pages = Math.ceil(allProducts.length / pageSize);

  const stockColor = (stock: string) =>
    stock === "In Stock"
      ? "bg-green-100 text-green-700"
      : stock === "Low Stock"
      ? "bg-orange-100 text-orange-600"
      : "bg-red-100 text-red-600";

  return (
    <div className="bg-white p-6  border w-full shadow-sm">
      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <div>
          <h2 className="text-xl font-semibold">Top products</h2>
          <p className="text-gray-500 text-sm">
            Detailed information about the products
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-lg px-3 py-1 w-64 bg-gray-50">
            <Search size={16} className="text-gray-500" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </div>
          <ThreeDots />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Vendors</th>
              <th className="p-3">Margin</th>
              <th className="p-3">Sold</th>
              <th className="p-3">Stock</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.name}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-3 flex items-center gap-3">
                  <img src={item.img} className="w-10 h-10 rounded-md" />
                  <span className="font-medium">{item.name}</span>
                </td>

                <td className="p-3">
                  <div className="flex -space-x-2">
                    {item.vendors.map((v, i) =>
                      v.startsWith("+") ? (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gray-200 border flex items-center justify-center text-[10px] font-medium"
                        >
                          {v}
                        </div>
                      ) : (
                        <Avatar key={i} className="w-7 h-7 border">
                          <AvatarFallback
                            className="w-full h-full rounded-full"
                            style={{ backgroundColor: v }}
                          />
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@evilrabbit"
                          />
                        </Avatar>
                      )
                    )}
                  </div>
                </td>

                <td className="p-3">{item.margin}</td>
                <td className="p-3">{item.sold}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${stockColor(
                      item.stock
                    )}`}
                  >
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

      {/* Footer */}
      <div className="flex justify-between items-center text-sm mt-5 text-gray-600">
        <p>
          Showing{" "}
          <strong>
            {start + 1}–{Math.min(start + pageSize, allProducts.length)}
          </strong>{" "}
          of {allProducts.length}
          <button className="text-blue-600 font-medium ml-2 hover:underline">
            Show all
          </button>
        </p>

        <div className="flex gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={`font-medium ${
              page === 1 ? "text-gray-300" : "text-blue-600 hover:underline"
            }`}
          >
            Previous
          </button>

          <button
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
            className={`font-medium ${
              page === pages ? "text-gray-300" : "text-blue-600 hover:underline"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
