import React, { useState } from 'react';
import { Stage, Layer, Line, Circle, Text, Group, Arc } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { CANVAS_CONFIG } from '../constants/game';

interface GameCanvasProps {
  angle: number;
  targetAngle: number;
  isCorrect: boolean;
  onDragMove: (angle: number) => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  angle,
  targetAngle,
  isCorrect,
  onDragMove,
}) => {
  const [hasStartedRotating, setHasStartedRotating] = useState(false);
  const { width, height, radius } = CANVAS_CONFIG;
  const centerX = width / 2;
  const centerY = height / 2;

  const handleDragStart = () => {
    setHasStartedRotating(true);
  };

  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    const stage = e.target.getStage();
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const dx = pointer.x - centerX;
    const dy = pointer.y - centerY;
    let newAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
    if (newAngle < 0) newAngle += 360;
    
    onDragMove(newAngle);
  };

  // Calculate sector angles for the blue fill
  const sectorAngles = (() => {
    const start = -90; // Always start from top (12 o'clock)
    const end = angle - 90; // Convert to Konva's coordinate system
    return {
      startAngle: start,
      endAngle: end,
      angle: ((end - start + 360) % 360) // Ensure positive angle
    };
  })();

  const ticks = Array.from({ length: 36 }, (_, i) => {
    const tickAngle = i * 10;
    const isMainTick = i % 9 === 0;
    const tickLength = isMainTick ? 20 : 10;
    const startRadius = radius - tickLength;
    const startX = centerX + startRadius * Math.cos((tickAngle - 90) * Math.PI / 180);
    const startY = centerY + startRadius * Math.sin((tickAngle - 90) * Math.PI / 180);
    const endX = centerX + radius * Math.cos((tickAngle - 90) * Math.PI / 180);
    const endY = centerY + radius * Math.sin((tickAngle - 90) * Math.PI / 180);

    return (
      <Line
        key={tickAngle}
        points={[startX, startY, endX, endY]}
        stroke={isMainTick ? "#666" : "#999"}
        strokeWidth={isMainTick ? 2 : 1}
      />
    );
  });

  return (
    <Stage width={width} height={height}>
      <Layer>
        {/* Background circle */}
        <Circle
          x={centerX}
          y={centerY}
          radius={radius}
          stroke="#ddd"
          strokeWidth={2}
        />

        {/* Tick marks */}
        {ticks}

        {/* Blue sector - only show when rotating */}
        {hasStartedRotating && (
          <Arc
            x={centerX}
            y={centerY}
            innerRadius={0}
            outerRadius={radius}
            angle={sectorAngles.angle}
            rotation={sectorAngles.startAngle}
            fill="#2196F3"
            opacity={0.1}
          />
        )}

        {/* Target angle line */}
        <Line
          points={[
            centerX,
            centerY,
            centerX + radius * Math.cos((targetAngle - 90) * Math.PI / 180),
            centerY + radius * Math.sin((targetAngle - 90) * Math.PI / 180)
          ]}
          stroke="#aaa"
          strokeWidth={4}
          opacity={0.5}
        />

        {/* Current angle line */}
        <Line
          points={[
            centerX,
            centerY,
            centerX + radius * Math.cos((angle - 90) * Math.PI / 180),
            centerY + radius * Math.sin((angle - 90) * Math.PI / 180)
          ]}
          stroke={isCorrect ? "#4CAF50" : "#2196F3"}
          strokeWidth={4}
        />

        {/* Draggable handle */}
        <Group
          x={centerX + radius * Math.cos((angle - 90) * Math.PI / 180)}
          y={centerY + radius * Math.sin((angle - 90) * Math.PI / 180)}
          draggable
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
        >
          <Circle
            radius={24}
            fill="transparent"
            hitStrokeWidth={20}
          />
          <Circle
            radius={12}
            fill={isCorrect ? "#4CAF50" : "#2196F3"}
            opacity={0.2}
          />
          <Circle
            radius={8}
            fill={isCorrect ? "#4CAF50" : "#2196F3"}
          />
        </Group>

        {/* Center point */}
        <Circle
          x={centerX}
          y={centerY}
          radius={5}
          fill="#666"
        />

        {/* Angle text */}
        <Text
          x={centerX - 20}
          y={centerY + radius + 20}
          text={`${Math.round(angle)}°`}
          fontSize={20}
          fill="#333"
        />
      </Layer>
    </Stage>
  );
};