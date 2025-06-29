export function danhQuai(character, quai) {
  const damage = character.atk - quai.def;
  if (damage <= 0) return "Tấn công không hiệu quả.";
  quai.hp -= damage;
  if (quai.hp <= 0) {
    character.exp += quai.exp;
    return `Đã đánh bại ${quai.name}, nhận ${quai.exp} EXP!`;
  }
  return `Gây ${damage} sát thương lên ${quai.name}`;
}
