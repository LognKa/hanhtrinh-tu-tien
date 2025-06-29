export const bossList = [
  {
    id: "boss1",
    name: "Huyết Lang Vương",
    hp: 500,
    atk: 80,
    def: 30,
    skills: ["Hú Gào", "Cắn Xé"],
    loot: [{ name: "Trang Bị Hiếm", rate: 0.2 }]
  }
];

export function danhBoss(nhanVat, boss) {
  const damage = Math.max(nhanVat.atk - boss.def, 5);
  const ketQua = `${nhanVat.name} gây ${damage} sát thương lên ${boss.name}.`;

  return {
    log: ketQua,
    damage,
    bossConLai: boss.hp - damage,
  };
}
