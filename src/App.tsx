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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-2">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-3">
        <h1 className="text-xl font-bold text-center text-purple-600 mb-2">
          转转乐角度探险
        </h1>
        
        <div className="mb-2">
          <Instructions level={levels[currentLevel]} />
        </div>

        <div className="flex justify-center mb-2">
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