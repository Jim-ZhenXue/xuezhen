import React from 'react';
import { Level } from '../data/levels';

interface InstructionsProps {
  level: Level;
}

export const Instructions: React.FC<InstructionsProps> = ({ level }) => {
  return (
    <div className="bg-yellow-50 p-2 rounded-lg">
      <h2 className="text-base font-bold mb-1">任务说明</h2>
      <p className="text-sm leading-tight">{level.instruction}</p>
      <p className="mt-1 text-xs text-gray-600 leading-tight">
        提示：拖动蓝色圆点或使用按钮调整角度，使蓝线与灰线重合
      </p>
    </div>
  );
};