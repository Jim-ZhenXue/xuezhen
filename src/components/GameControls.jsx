import React from 'react';

const GameControls = ({ angle, setAngle, onCheck }) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-xl font-bold text-gray-700">当前角度: {angle}°</div>
      <button
        onClick={onCheck}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        检查答案
      </button>
    </div>
  );
};

export default GameControls;