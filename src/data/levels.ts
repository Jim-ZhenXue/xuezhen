export interface Level {
  targetAngle: number;
  instruction: string;
}

export const levels: Level[] = [
  {
    targetAngle: 90,
    instruction: '让我们从最常见的角<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">"直角"</span>开始！试着旋转红线，使其形成90度角。'
  },
  {
    targetAngle: 45,
    instruction: "现在来尝试制作一个45度角，这是直角的一半哦！"
  },
  {
    targetAngle: 145,
    instruction: "这次要挑战一个145度角，注意观察刻度！"
  },
  {
    targetAngle: 180,
    instruction: "这次要做一个平角，两条边要成一条直线。"
  },
  {
    targetAngle: 270,
    instruction: "挑战更大的角度！试着做一个270度的优角。"
  },
  {
    targetAngle: 360,
    instruction: "最后的挑战：转一整圈，做一个360度的周角！"
  }
];