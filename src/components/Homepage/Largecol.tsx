import React from "react";

const products = [
  { name: "Shanty Cotton Seat", margin: "$981.00", sold: "29,536" },
  { name: "Practical Soft Couch", margin: "$199.00", sold: "27,700" },
  { name: "Rustic Rubber Chair", margin: "$609.00", sold: "21,778" },
  { name: "Ergonomic Frozen Bacon", margin: "$923.00", sold: "20,272" },
  { name: "Unbranded Metal Sofa", margin: "$119.00", sold: "17,374" },
  { name: "Intelligent Soft Sofa", margin: "$595.00", sold: "14,374" },
];

export default function ProductTable() {
  return (
    <div className="bg-white p-6 rounded-xl  w-full ">
      <h2 className="text-xl font-semibold mb-1">Top products</h2>
      <p className="text-gray-500 mb-4 text-sm">
        Detailed information about the products
      </p>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Product</th>
            <th className="pb-2">Margin</th>
            <th className="pb-2">Sold</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.name} className="border-b hover:bg-gray-50">
              <td className="py-3">{item.name}</td>
              <td>{item.margin}</td>
              <td>{item.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
