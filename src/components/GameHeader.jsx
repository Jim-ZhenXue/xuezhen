import React from 'react';

const GameHeader = ({ level, levelName, score }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-blue-800">
        第 {level} 关: {levelName}
      </h2>
      <p className="text-lg text-gray-600 mt-2">得分: {score}</p>
    </div>
  );
};

export default GameHeader;