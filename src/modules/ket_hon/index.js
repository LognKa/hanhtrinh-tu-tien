export function ketHon(nguoi1, nguoi2) {
  if (!nguoi1 || !nguoi2) return "❌ Thông tin không hợp lệ.";
  if (nguoi1.ten === nguoi2.ten) return "❌ Không thể kết hôn với chính mình!";
  return `💞 ${nguoi1.ten} và ${nguoi2.ten} đã kết thành đạo lữ!`;
}
