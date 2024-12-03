import { GameCanvas } from './components/GameCanvas';
import { Instructions } from './components/Instructions';
import { Controls } from './components/Controls';
import { Celebration } from './components/Celebration';
import { levels } from './data/levels';
import { useAngleGame } from './hooks/useAngleGame';

function App() {
  const {
    currentLevel,
    angle,
    isCorrect,
    score,
    isGameComplete,
    handleAngleChange,
    nextLevel,
    restartGame,
  } = useAngleGame();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-5">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
          转转乐角度探险
        </h1>
        
        <div className="mb-4">
          <Instructions level={levels[currentLevel]} />
        </div>

        <div className="flex justify-center mb-4">
          <GameCanvas 
            angle={angle}
            targetAngle={levels[currentLevel].targetAngle}
            isCorrect={isCorrect}
            onDragMove={handleAngleChange}
          />
        </div>

        <Controls 
          angle={angle}
          onAngleChange={handleAngleChange}
          onNextLevel={nextLevel}
          isCorrect={isCorrect}
          score={score}
          level={currentLevel + 1}
        />
      </div>

      {isGameComplete && (
        <Celebration 
          score={score} 
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;