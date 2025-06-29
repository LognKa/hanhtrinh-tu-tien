import React from "react";
import { luyenDan } from "../modules/luyen_dan";

export default function LuyenDan({ inventory, setInventory, setLog }) {
  const handleLuyen = () => {
    const ketQua = luyenDan(inventory);
    setLog((prev) => [ketQua.thongBao, ...prev]);

    if (ketQua.thanhCong) {
      const newInventory = [...inventory];
      // Trừ 3 Linh Thảo
      let count = 3;
      for (let i = 0; i < newInventory.length && count > 0; i++) {
        if (newInventory[i].name === "Linh Thảo") {
          const remove = Math.min(count, newInventory[i].quantity);
          newInventory[i].quantity -= remove;
          count -= remove;
          if (newInventory[i].quantity === 0) {
            newInventory.splice(i, 1);
            i--;
          }
        }
      }

      // Thêm đan dược mới
      const existing = newInventory.find(i => i.name === ketQua.ketQua.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        newInventory.push({ ...ketQua.ketQua });
      }

      setInventory(newInventory);
    }
  };

  return (
    <div className="p-3 bg-purple-800 rounded space-y-2">
      <h2 className="font-bold text-lg">🔥 Luyện Đan</h2>
      <p>Cần 3x Linh Thảo để luyện ra 1x Đan Hồi HP.</p>
      <button onClick={handleLuyen} className="bg-yellow-500 text-black px-3 py-1 rounded">
        Bắt đầu luyện
      </button>
    </div>
  );
}
