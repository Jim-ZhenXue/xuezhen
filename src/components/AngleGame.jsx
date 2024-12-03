import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AngleVisualizer from './AngleVisualizer';
import GameHeader from './GameHeader';
import GameControls from './GameControls';

const AngleGame = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [angle, setAngle] = useState(0);
  const [score, setScore] = useState(0);
  const [targetAngle, setTargetAngle] = useState(90);
  const [feedback, setFeedback] = useState('');
  const [gameMode, setGameMode] = useState('create');

  const levels = [
    { mode: 'create', target: 90, name: '直角创建' },
    { mode: 'create', target: 180, name: '平角创建' },
    { mode: 'create', target: 45, name: '锐角创建' },
    { mode: 'compare', name: '角度比较' },
    { mode: 'identify', name: '角度识别' }
  ];

  const checkAngle = () => {
    const difference = Math.abs(angle - targetAngle);
    if (difference <= 10) {
      setScore(score + 100);
      setFeedback('太棒了！你做对了！');
      setTimeout(() => {
        setCurrentLevel(currentLevel + 1);
        setFeedback('');
      }, 1500);
    } else {
      setFeedback('再试一次！提示：观察角的开口大小');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full mx-auto my-8">
      <GameHeader 
        level={currentLevel}
        levelName={levels[currentLevel - 1].name}
        score={score}
      />

      {feedback && (
        <div className={`text-center mb-4 text-lg ${feedback.includes('太棒') ? 'text-green-500' : 'text-orange-500'}`}>
          {feedback}
        </div>
      )}

      <div className="flex flex-col items-center space-y-6">
        <AngleVisualizer angle={angle} />
        <GameControls 
          angle={angle}
          setAngle={setAngle}
          onCheck={checkAngle}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          提示：使用滑块来调整角度，观察两条边之间的开口大小
        </p>
      </div>
    </div>
  );
};

export default AngleGame;