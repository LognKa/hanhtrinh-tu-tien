export const danhSachVatPhamShop = [
  {
    id: "hp1",
    ten: "Đan Hồi HP",
    moTa: "Hồi 20 HP ngay lập tức.",
    gia: { vang: 0, bac: 1, dong: 0 }, // 1 bạc
    effect: "heal",
    usable: true,
  },
  {
    id: "mp1",
    ten: "Đan Hồi MP",
    moTa: "Hồi 15 MP khi dùng.",
    gia: { vang: 0, bac: 1, dong: 50 }, // 1 bạc 50 đồng
    effect: "mana",
    usable: true,
  },
  {
    id: "egg1",
    ten: "Trứng Sủng Vật",
    moTa: "Trứng chứa sủng vật chưa nở.",
    gia: { vang: 5, bac: 0, dong: 0 }, // 5 vàng
    usable: false,
  },
  {
    id: "book1",
    ten: "Sách Kỹ Năng: Hỏa Cầu",
    moTa: "Dạy kỹ năng Hỏa Cầu - gây sát thương lớn.",
    gia: { vang: 2, bac: 50, dong: 0 }, // 2 vàng 50 bạc
    usable: false,
  }
];

// Hàm mua vật phẩm
export function muaVatPham(vatPhamId, tienNguoiChoi) {
  const item = danhSachVatPhamShop.find((v) => v.id === vatPhamId);
  if (!item) return { loi: "Không tìm thấy vật phẩm." };

  const gia = item.gia;
  const tien = tienNguoiChoi;

  // Chuyển đổi toàn bộ sang đồng để so sánh
  const tongGia = gia.vang * 10000 + gia.bac * 100 + gia.dong;
  const tongTien = tien.vang * 10000 + tien.bac * 100 + tien.dong;

  if (tongTien < tongGia) {
    return { loi: "Không đủ tiền để mua vật phẩm này." };
  }

  // Trừ tiền
  const conLai = tongTien - tongGia;
  const vang = Math.floor(conLai / 10000);
  const bac = Math.floor((conLai % 10000) / 100);
  const dong = conLai % 100;

  return {
    thanhCong: true,
    vatPham: item,
    tienConLai: { vang, bac, dong },
  };
}
