import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
  score: number;
  onRestart: () => void;
}

export const Celebration: React.FC<CelebrationProps> = ({ score, onRestart }) => {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const runAnimation = () => {
      const timeLeft = animationEnd - Date.now();
      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0.6 },
        angle: randomInRange(55, 125),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(runAnimation);
      }
    };

    runAnimation();
  }, []);

  if (!shown) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl text-center">
        <h2 className="text-4xl font-bold mb-6">🎉 恭喜通关！</h2>
        <p className="text-xl mb-6">
          你的最终得分：<span className="font-bold text-green-600">{score}</span> 分
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setShown(false)}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-bold transition-colors"
          >
            完成
          </button>
          <button
            onClick={() => {
              setShown(false);
              onRestart();
            }}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-colors"
          >
            再玩一次
          </button>
        </div>
      </div>
    </div>
  );
};