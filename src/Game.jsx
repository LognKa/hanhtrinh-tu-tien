import React, { useState } from "react";
import { tuLuyen } from "./modules/tu_luyen";
import { danhQuai } from "./modules/danh_quai";
import HanhTrang from "./components/HanhTrang";

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

  const [inventory, setInventory] = useState([
    { name: "Đan Hồi HP", quantity: 2, usable: true, effect: "heal" },
    { name: "Đan Hồi MP", quantity: 1, usable: true, effect: "mana" },
    { name: "Linh Thạch", quantity: 5, usable: false },
  ]);

  const quai = {
    name: "Yêu Lang",
    hp: 30,
    def: 10,
    exp: 20,
  };

  const handleTuLuyen = () => {
    const result = tuLuyen({ ...character });
    if (character.energy >= 10) {
      setCharacter((prev) => ({
        ...prev,
        exp: prev.exp + 10,
        energy: prev.energy - 10,
      }));
    }
    setLog((prev) => [result, ...prev]);
  };

  const handleDanhQuai = () => {
    const fakeQuai = { ...quai };
    const result = danhQuai(character, fakeQuai);

    if (fakeQuai.hp <= 0) {
      setCharacter((prev) => ({
        ...prev,
        exp: prev.exp + fakeQuai.exp,
      }));
    }
    setLog((prev) => [result, ...prev]);
  };

  const useItem = (index) => {
    const item = inventory[index];
    if (!item || item.quantity <= 0) return;

    let message = "";
    const updatedChar = { ...character };

    if (item.effect === "heal") {
      updatedChar.hp += 20;
      message = "Dùng Đan Hồi HP, hồi 20 HP.";
    } else if (item.effect === "mana") {
      updatedChar.mp += 15;
      message = "Dùng Đan Hồi MP, hồi 15 MP.";
    }

    setCharacter(updatedChar);

    const updatedInventory = [...inventory];
    updatedInventory[index].quantity -= 1;
    if (updatedInventory[index].quantity === 0) updatedInventory.splice(index, 1);
    setInventory(updatedInventory);

    setLog((prev) => [message, ...prev]);
  };

  const removeItem = (index) => {
    const removed = inventory[index];
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
    setLog((prev) => [`Đã xoá vật phẩm: ${removed.name}`, ...prev]);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-white bg-gray-800 rounded-xl space-y-4">
      <h1 className="text-xl font-bold">🧙 Hành Trình Tu Tiên</h1>

      <div className="text-sm space-y-1">
        <p><strong>Tên:</strong> {character.name}</p>
        <p><strong>EXP:</strong> {character.exp}</p>
        <p><strong>Năng lượng:</strong> {character.energy}</p>
        <p><strong>HP:</strong> {character.hp}</p>
        <p><strong>MP:</strong> {character.mp}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={handleTuLuyen} className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">🧘 Tu Luyện</button>
        <button onClick={handleDanhQuai} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">⚔️ Đánh Quái</button>
      </div>

      <HanhTrang
        inventory={inventory}
        onUseItem={useItem}
        onRemoveItem={removeItem}
      />

      <div className="bg-black p-2 rounded max-h-40 overflow-y-auto text-sm">
        {log.map((entry, i) => (
          <div key={i}>→ {entry}</div>
        ))}
      </div>
    </div>
  );
}

