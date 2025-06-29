export function xemHanhTrang(inventory) {
  if (!inventory.length) return "Hành trang trống rỗng.";
  return inventory.map((item, i) => `${i + 1}. ${item.name} - SL: ${item.quantity}`).join("\\n");
}
