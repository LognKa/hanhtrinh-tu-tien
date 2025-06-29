export const thongTinBang = {
  ten: "Thiên Kiếm Môn",
  capDo: 3,
  thanhVien: 18,
  kyNang: ["Tăng 5% công", "Giảm 3% sát thương"],
};

export function thamGiaBang(nguoi, phiVang) {
  if (nguoi.bang) return "❌ Đã gia nhập bang hội.";
  if (nguoi.vang < phiVang) return "❌ Không đủ vàng để tham gia.";
  return `✅ ${nguoi.ten} đã gia nhập bang hội: Thiên Kiếm Môn`;
}

