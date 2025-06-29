import React, { useState } from "react";
import { tuLuyen } from "./modules/tu_luyen";
import { danhQuai } from "./modules/danh_quai";

export default function Game() {
  const [log, setLog] = useState([]);
  const [character, setCharacter] = useState({
    name: "Tiêu Dao Tán Nhân",
    hp: 100,
    mp: 50,
    atk: 25,
    def: 5,
    energy: 100,
    exp: 0,
  });

  const [quai, setQuai] = useState({
    name: "Yêu Lang",
    hp: 50,
    atk: 20,
    def: 10,
    exp: 30,
  });

  const handleTuLuyen = () => {
    const result = tuLuyen({ ...character });
    const newChar = { ...character };
    if (character.energy >= 10) {
      newChar.exp += 10;
      newChar.energy -= 10;
      setCharacter(newChar);
    }
    setLog((prev) => [result, ...prev]);
  };

  const handleDanhQuai = () => {
    const newQuai = { ...quai };
    const result = danhQuai({ ...character }, newQuai);

    if (newQuai.hp <= 0) {
      newQuai.hp = 50; // reset quái
    }

    setCharacter((prev) => ({
      ...prev,
      exp: newQuai.hp <= 0 ? prev.exp + quai.exp : prev.exp,
    }));
    setQuai(newQuai);
    setLog((prev) => [result, ...prev]);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-white bg-gray-800 rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">🧙 Hành Trình Tu Tiên</h1>

      <div className="text-sm">
        <p><strong>Tên:</strong> {character.name}</p>
        <p><strong>EXP:</strong> {character.exp}</p>
        <p><strong>Năng lượng:</strong> {character.energy}</p>
        <p><strong>HP:</strong> {character.hp}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={handleTuLuyen} className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">🧘 Tu Luyện</button>
        <button onClick={handleDanhQuai} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">⚔️ Đánh Quái</button>
      </div>

      <div className="bg-black p-2 rounded max-h-40 overflow-y-auto text-sm">
        {log.map((entry, i) => (
          <div key={i}>→ {entry}</div>
        ))}
      </div>
    </div>
  );
}
