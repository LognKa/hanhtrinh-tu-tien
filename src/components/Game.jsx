import React, { useState } from "react";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default function Game() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Nam");

  const createCharacter = async () => {
    const characterData = {
      name,
      gender,
      hp: 100,
      mp: 50,
      level: 1,
      exp: 0,
      realm: "Luyện Khí",
      inventory: [],
    };
    await setDoc(doc(db, "players", name), characterData);
    alert("Đã tạo nhân vật!");
  };

  return (
    <div className="space-y-2">
      <input
        className="text-black p-2"
        placeholder="Tên nhân vật"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="text-black p-2"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
      </select>
      <button className="bg-blue-500 px-4 py-2 rounded" onClick={createCharacter}>
        Tạo nhân vật
      </button>
    </div>
  );
}