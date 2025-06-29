import React from "react";
import { thongTinBang, thamGiaBang } from "../modules/bang_phai";

export default function BangPhai({ nhanVat, setLog }) {
  const handleThamGia = () => {
    const result = thamGiaBang(nhanVat, 1); // Phí 1 vàng
    setLog((prev) => [result, ...prev]);
  };

  return (
    <div className="p-3 bg-blue-800 rounded space-y-2">
      <h2 className="font-bold text-lg">🏯 Bang Hội</h2>
      <p><strong>{thongTinBang.ten}</strong> - Cấp {thongTinBang.capDo}</p>
      <p>Thành viên: {thongTinBang.thanhVien}</p>
      <ul className="list-disc pl-5 text-sm">
        {thongTinBang.kyNang.map((kn, idx) => (
          <li key={idx}>{kn}</li>
        ))}
      </ul>
      <button onClick={handleThamGia} className="bg-blue-500 px-3 py-1 rounded">
        Tham gia với 1 vàng
      </button>
    </div>
  );
}
