import React from "react";
import { bossList } from "../modules/boss";

export default function PhuBan({ onChonBoss }) {
  return (
    <div className="p-3 bg-gray-700 rounded">
      <h2 className="text-lg font-bold">🏯 Phụ Bản</h2>
      {bossList.map((boss) => (
        <div key={boss.id} className="p-2 border-b border-gray-500">
          <p className="font-semibold">{boss.name}</p>
          <p className="text-sm">HP: {boss.hp} | ATK: {boss.atk}</p>
          <button onClick={() => onChonBoss(boss)} className="mt-1 bg-red-500 px-2 py-1 rounded text-sm">
            Khiêu chiến
          </button>
        </div>
      ))}
    </div>
  );
}
