export function luyenDan(nguyenLieu) {
  const soLuong = nguyenLieu.filter(item => item.name === "Linh Thảo").length;
  if (soLuong >= 3) {
    return {
      thanhCong: true,
      ketQua: { name: "Đan Hồi HP", quantity: 1, usable: true, effect: "heal" },
      thongBao: "🔥 Luyện thành công Đan Hồi HP!"
    };
  }
  return { thanhCong: false, thongBao: "❌ Không đủ Linh Thảo để luyện đan." };
}
