import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AngleGame from './components/AngleGame';
import './index.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <div className="container mx-auto">
        {!gameStarted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <h1 className="text-4xl font-bold text-blue-800 mb-6">角度探索游戏</h1>
            <p className="text-lg text-gray-700 mb-8">
              来探索角度的奥秘吧！通过旋转、比较和创造不同的角度来学习。
            </p>
            <button
              onClick={() => setGameStarted(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              开始游戏
            </button>
          </motion.div>
        ) : (
          <AngleGame />
        )}
      </div>
    </div>
  );
}

export default App;