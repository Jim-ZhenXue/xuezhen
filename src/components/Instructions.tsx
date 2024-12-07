import React from 'react';
import { Level } from '../data/levels';

interface InstructionsProps {
  level: Level;
}

export const Instructions: React.FC<InstructionsProps> = ({ level }) => {
  return (
    <div className="bg-yellow-50 p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2">任务说明</h2>
      <p dangerouslySetInnerHTML={{ __html: level.instruction }} />
      <p className="mt-2 text-sm text-gray-600">
        提示：拖动红色圆点或使用按钮调整角度，使红线与灰线重合。当重合的时候，红线就会变成绿色
      </p>
    </div>
  );
};

</```rewritten_file>