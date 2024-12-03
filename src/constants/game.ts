import { GameConfig, CanvasConfig } from '../types/game';

export const GAME_CONFIG: GameConfig = {
  pointsPerLevel: 20,
  angleTolerance: 5,
  angleAdjustment: 5
} as const;

export const CANVAS_CONFIG: CanvasConfig = {
  width: 280,
  height: 280,
  radius: 100,
  tickCount: 36,
  mainTickInterval: 9,
  tickLengths: {
    main: 15,
    minor: 8
  }
} as const;