export function tuLuyen(character) {
  if (character.energy < 10) return "Không đủ linh lực để tu luyện.";
  character.exp += 10;
  character.energy -= 10;
  return "Tu luyện thành công, nhận 10 kinh nghiệm.";
}
