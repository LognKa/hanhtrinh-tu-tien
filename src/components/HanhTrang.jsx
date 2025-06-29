import React from "react";
import { xemHanhTrang } from "../modules/hanh_trang";

export default function HanhTrang({ inventory, onUseItem, onRemoveItem }) {
  const renderList = () => {
    if (!inventory.length) return <p>Hành trang trống rỗng.</p>;

    return inventory.map((item, index) => (
      <div
        key={index}
        className="flex justify-between items-center bg-gray-700 px-2 py-1 my-1 rounded"
      >
        <div>
          <strong>{item.name}</strong> – SL: {item.quantity}
        </div>
        <div className="flex gap-2">
          {item.usable && (
            <button
              onClick={() => onUseItem(index)}
              className="bg-green-600 text-white px-2 py-0.5 rounded text-sm"
            >
              Dùng
            </button>
          )}
          <button
            onClick={() => onRemoveItem(index)}
            className="bg-red-600 text-white px-2 py-0.5 rounded text-sm"
          >
            Xoá
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-3 bg-gray-800 rounded shadow-md space-y-2">
      <h2 className="text-lg font-semibold">🎒 Hành Trang</h2>
      {renderList()}
    </div>
  );
}
