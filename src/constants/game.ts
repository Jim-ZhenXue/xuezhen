import { GameConfig, CanvasConfig } from '../types/game';

export const GAME_CONFIG: GameConfig = {
  pointsPerLevel: 20,
  angleTolerance: 5,
  angleAdjustment: 5
} as const;

export const CANVAS_CONFIG: CanvasConfig = {
  width: 400,
  height: 400,
  radius: 150,
  tickCount: 36,
  mainTickInterval: 9,
  tickLengths: {
    main: 20,
    minor: 10
  }
} as const;