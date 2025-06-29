import React, { useState } from "react";
import { ketHon } from "../modules/ket_hon";

export default function KetHon({ nhanVat, setLog }) {
  const [doiPhuong, setDoiPhuong] = useState("");

  const handleKetHon = () => {
    const result = ketHon(nhanVat, { ten: doiPhuong });
    setLog((prev) => [result, ...prev]);
  };

  return (
    <div className="p-3 bg-pink-800 rounded space-y-2">
      <h2 className="font-bold text-lg">💞 Kết Hôn</h2>
      <input
        type="text"
        placeholder="Nhập tên người muốn kết hôn"
        className="text-black px-2 py-1 rounded w-full"
        value={doiPhuong}
        onChange={(e) => setDoiPhuong(e.target.value)}
      />
      <button onClick={handleKetHon} className="bg-pink-400 text-black px-3 py-1 rounded">
        Kết thành đạo lữ
      </button>
    </div>
  );
}
