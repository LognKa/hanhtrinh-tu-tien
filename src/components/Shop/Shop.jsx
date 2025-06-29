import React from "react";
import { danhSachVatPhamShop } from "../../modules/shop";

export default function Shop({ onMua, tien }) {
  return (
    <div className="p-4 bg-gray-700 rounded space-y-2">
      <h2 className="text-lg font-bold">🛒 Cửa Hàng</h2>
      <p>💰 Tiền: {tien.vang} vàng, {tien.bac} bạc, {tien.dong} đồng</p>
      {danhSachVatPhamShop.map((item) => (
        <div key={item.id} className="bg-gray-800 p-2 rounded flex justify-between items-center">
          <div>
            <p className="font-semibold">{item.ten}</p>
            <p className="text-sm">{item.moTa}</p>
            <p className="text-xs">Giá: {item.gia.vang}v {item.gia.bac}b {item.gia.dong}đ</p>
          </div>
          <button
            onClick={() => onMua(item.id)}
            className="bg-green-600 text-sm px-3 py-1 rounded"
          >
            Mua
          </button>
        </div>
      ))}
    </div>
  );
}
