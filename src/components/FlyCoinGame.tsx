import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Trophy, Star, Coins } from "lucide-react";
import logo from "../assets/rabbit.png";

interface Achievement {
  id: string;
  name: string;
  description: string;
  achieved: boolean;
  icon: JSX.Element;
}

interface PowerUp {
  id: number;
  type: "shield" | "multiplier" | "slowTime";
  position: { x: number; y: number };
}

interface Coin {
  id: number;
  position: { x: number; y: number };
  collected: boolean;
}

const FlyCoinGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [birdPosition, setBirdPosition] = useState(50); // Percentage of game height
  const [obstacleHeight, setObstacleHeight] = useState(30); // Percentage of game height
  const [obstacleLeft, setObstacleLeft] = useState(100); // Percentage of game width
  const [powerUps, setPowerUps] = useState<PowerUp[]>([]);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [coinsCollected, setCoinsCollected] = useState(0);
  const [muted, setMuted] = useState(false);
  const [activeEffects, setActiveEffects] = useState({
    shield: false,
    multiplier: false,
    slowTime: false,
  });

  const gravity = 0.5; // Reduced gravity (percentage of game height)
  const jumpHeight = 8; // Reduced jump height (percentage of game height)
  const obstacleWidth = 10; // Percentage of game width
  const birdWidth = 5; // Percentage of game width
  const birdHeight = 5; // Percentage of game height
  const gameContainerRef = useRef<HTMLDivElement>(null);

  // Initialize achievements
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "first-10",
      name: "Getting Started",
      description: "Score 10 points",
      achieved: false,
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
    {
      id: "coin-collector",
      name: "Coin Collector",
      description: "Collect 10 coins",
      achieved: false,
      icon: <Coins className="w-6 h-6 text-[#1F1F1F]" />,
    },
  ]);

  // Handle game updates
  useEffect(() => {
    let timeId: NodeJS.Timeout;

    if (gameStarted && !gameOver) {
      timeId = setInterval(() => {
        setBirdPosition((position) => position + gravity);

        // Check collision with ground or ceiling
        if (birdPosition >= 95 || birdPosition <= 0) {
          setGameOver(true);
        }
      }, 30); // Increased interval time (50ms instead of 24ms)
    }

    return () => {
      clearInterval(timeId);
    };
  }, [gameStarted, gameOver, birdPosition]);

  // Handle obstacle movement
  useEffect(() => {
    let obstacleId: NodeJS.Timeout;

    if (gameStarted && !gameOver) {
      obstacleId = setInterval(() => {
        setObstacleLeft((left) => {
          if (left <= -obstacleWidth) {
            setScore((score) => score + 1);
            return 100;
          }
          return left - 0.5; 
        });
      }, 30); 
    }

    return () => {
      clearInterval(obstacleId);
    };
  }, [gameStarted, gameOver]);

  // Handle collision detection
  useEffect(() => {
    const hasCollision =
      obstacleLeft >= 10 - birdWidth &&
      obstacleLeft <= 10 + birdWidth &&
      (birdPosition <= obstacleHeight || birdPosition >= obstacleHeight + 20);

    if (hasCollision) {
      setGameOver(true);
    }
  }, [birdPosition, obstacleHeight, obstacleLeft]);

  // Handle click/tap to start/jump/restart
  const handleClick = () => {
    if (!gameStarted) {
      setGameStarted(true);
    } else if (!gameOver) {
      setBirdPosition((position) => position - jumpHeight);
    }
    if (gameOver) {
      setGameStarted(false);
      setGameOver(false);
      setBirdPosition(50);
      setObstacleLeft(100);
      setScore(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1F1F] py-16">
      {/* Score Display */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-white text-2xl font-bold">Score: {score}</div>
        <div className="flex items-center gap-2 text-[#93E45A]">
          <Coins className="w-6 h-6" />
          <span className="text-xl">{coinsCollected}</span>
        </div>
        <div className="text-white text-xl">High Score: {highScore}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMuted(!muted);
          }}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30"
        >
          {muted ? (
            <VolumeX className="text-white" />
          ) : (
            <Volume2 className="text-white" />
          )}
        </button>
      </div>

      {/* Game Container */}
      <div
        ref={gameContainerRef}
        onClick={handleClick}
        onTouchStart={handleClick}
        className="relative w-[90vw] h-[80vh] max-w-[800px] max-h-[600px] border-4 border-white rounded-lg overflow-hidden bg-[#93E45A] cursor-pointer"
      >
        {!gameStarted ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-3xl font-bold">Click to Start</div>
          </div>
        ) : null}

        {/* Bird */}
        <div
          className="absolute transition-all duration-100 ease-linear"
          style={{
            width: `${birdWidth}%`,
            height: `${birdHeight}%`,
            left: "10%",
            top: `${birdPosition}%`,
          }}
        >
          <div className="w-full h-full bg-[#1F1F1F] rounded-full flex items-center justify-center transform rotate-0">
            <div className="w-3/4 h-3/4 bg-[#1F1F1F] rounded-full">
              <div className="w-1/4 h-1/4 bg-[#93E45A] rounded-full absolute top-1/4 left-1/4"></div>
            </div>
          </div>
        </div>

        {/* Obstacles */}
        <div
          className="absolute bg-green-500"
          style={{
            width: `${obstacleWidth}%`,
            height: `${obstacleHeight}%`,
            left: `${obstacleLeft}%`,
            top: 0,
          }}
        />
        <div
          className="absolute bg-green-500"
          style={{
            width: `${obstacleWidth}%`,
            height: `${100 - obstacleHeight - 20}%`,
            left: `${obstacleLeft}%`,
            top: `${obstacleHeight + 20}%`,
          }}
        />

        {/* Game Over Screen */}
        {gameOver ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-3xl font-bold">
              Game Over! Click to restart
            </div>
          </div>
        ) : null}
      </div>

      {/* Achievements */}
      <div className="mt-4 bg-white/10 rounded-lg p-4 w-[90vw] max-w-[800px]">
        <div className="text-white font-bold mb-2">Achievements</div>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                achievement.achieved ? "bg-white/20" : "bg-white/5"
              }`}
            >
              {achievement.icon}
              <div>
                <div className="text-white font-bold">{achievement.name}</div>
                <div className="text-white/80 text-sm">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlyCoinGame;

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Volume2, VolumeX, Trophy, Star, Coins } from "lucide-react";

// interface PowerUp {
//   id: number;
//   type: "shield" | "multiplier" | "slowTime";
//   position: { x: number; y: number };
// }

// interface Coin {
//   id: number;
//   position: { x: number; y: number };
//   collected: boolean;
// }

// interface Achievement {
//   id: string;
//   name: string;
//   description: string;
//   achieved: boolean;
//   icon: JSX.Element;
// }

// const FlyCoinGame = () => {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);
//   const [birdPosition, setBirdPosition] = useState(300);
//   const [birdRotation, setBirdRotation] = useState(0);
//   const [obstacleHeight, setObstacleHeight] = useState(200);
//   const [obstacleLeft, setObstacleLeft] = useState(800);
//   const [powerUps, setPowerUps] = useState<PowerUp[]>([]);
//   const [coins, setCoins] = useState<Coin[]>([]);
//   const [coinsCollected, setCoinsCollected] = useState(0);
//   const [muted, setMuted] = useState(false);
//   const [activeEffects, setActiveEffects] = useState({
//     shield: false,
//     multiplier: false,
//     slowTime: false,
//   });

//   const gravity = activeEffects.slowTime ? 2 : 3;
//   const jumpHeight = 70;
//   const obstacleWidth = 60;
//   const birdWidth = 40;
//   const birdHeight = 40;
//   const gameSpeed = activeEffects.slowTime ? 3 : 5;

//   const gameContainerRef = useRef<HTMLDivElement>(null);

//   // Sound effects
//   const playJump = () =>
//     !muted && new Audio("/jump.mp3").play().catch(() => {});
//   const playCollect = () =>
//     !muted && new Audio("/collect.mp3").play().catch(() => {});
//   const playGameOver = () =>
//     !muted && new Audio("/gameover.mp3").play().catch(() => {});

//   // Initialize achievements
//   const [achievements, setAchievements] = useState<Achievement[]>([
//     {
//       id: "first-10",
//       name: "Getting Started",
//       description: "Score 10 points",
//       achieved: false,
//       icon: <Trophy className="w-6 h-6 text-yellow-400" />,
//     },
//     {
//       id: "coin-collector",
//       name: "Coin Collector",
//       description: "Collect 10 coins",
//       achieved: false,
//       icon: <Coins className="w-6 h-6 text-yellow-400" />,
//     },
//   ]);

//   const handleGameOver = () => {
//     setGameOver(true);
//     playGameOver();
//     if (score > highScore) {
//       setHighScore(score);
//     }
//   };

//   const resetGame = () => {
//     setGameStarted(false);
//     setGameOver(false);
//     setBirdPosition(300);
//     setObstacleLeft(800);
//     setObstacleHeight(Math.floor(Math.random() * 400));
//     setScore(0);
//     setCoins([]);
//     setCoinsCollected(0);
//     setPowerUps([]);
//     setActiveEffects({
//       shield: false,
//       multiplier: false,
//       slowTime: false,
//     });
//     setBirdRotation(0);
//   };

//   // Bird jump function
//   const handleJump = () => {
//     if (!gameStarted) {
//       setGameStarted(true);
//     } else if (!gameOver) {
//       setBirdPosition((position) => Math.max(0, position - jumpHeight));
//       setBirdRotation(-20);
//       playJump();
//     }
//   };

//   // Handle click events
//   const handleClick = () => {
//     if (gameOver) {
//       resetGame();
//     } else {
//       handleJump();
//     }
//   };

//   // Handle keyboard controls - Fixed implementation
//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (event.code === "Space") {
//         event.preventDefault();
//         if (gameOver) {
//           resetGame();
//         } else {
//           handleJump();
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, [gameStarted, gameOver]); // Add dependencies that affect the jump behavior

//   // Bird movement and collision detection with boundaries
//   useEffect(() => {
//     let timeId: NodeJS.Timeout;

//     if (gameStarted && !gameOver) {
//       timeId = setInterval(() => {
//         setBirdPosition((position) => {
//           const newPosition = position + gravity;
//           if (newPosition >= 560 || newPosition <= 0) {
//             handleGameOver();
//             return position;
//           }
//           return newPosition;
//         });
//         setBirdRotation((rotation) => Math.min(rotation + 2, 45));
//       }, 24);
//     }

//     return () => {
//       if (timeId) clearInterval(timeId);
//     };
//   }, [gameStarted, gameOver, gravity]);

//   // / Add back the spawnCoin function
//   const spawnCoin = () => {
//     if (Math.random() < 0.3) {
//       // Increased spawn chance for better gameplay
//       setCoins((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           position: {
//             x: 800,
//             y: Math.random() * 500,
//           },
//           collected: false,
//         },
//       ]);
//     }
//   };

//   // Add back obstacle movement effect
//   useEffect(() => {
//     let obstacleId: NodeJS.Timeout;

//     if (gameStarted && !gameOver) {
//       obstacleId = setInterval(() => {
//         setObstacleLeft((left) => {
//           if (left >= 100 - birdWidth && left <= 100 + birdWidth) {
//             const birdTop = birdPosition;
//             const birdBottom = birdPosition + birdHeight;

//             if (
//               birdTop <= obstacleHeight ||
//               birdBottom >= obstacleHeight + 150
//             ) {
//               if (!activeEffects.shield) {
//                 handleGameOver();
//               }
//             }
//           }

//           if (left <= -obstacleWidth) {
//             setObstacleHeight(Math.floor(Math.random() * 300) + 100);
//             spawnCoin();
//             setScore((s) => s + 1);
//             return 800;
//           }
//           return left - gameSpeed;
//         });
//       }, 24);
//     }

//     return () => {
//       if (obstacleId) clearInterval(obstacleId);
//     };
//   }, [gameStarted, gameOver, birdPosition, activeEffects.shield, gameSpeed]);

//   // Add back coin movement effect
//   useEffect(() => {
//     let coinId: NodeJS.Timeout;

//     if (gameStarted && !gameOver) {
//       coinId = setInterval(() => {
//         setCoins((prev) =>
//           prev
//             .map((coin) => {
//               if (!coin.collected) {
//                 if (
//                   Math.abs(coin.position.x - 100) < 40 &&
//                   Math.abs(coin.position.y - birdPosition) < 40
//                 ) {
//                   playCollect();
//                   setScore((s) => s + 2);
//                   setCoinsCollected((c) => c + 1);
//                   return { ...coin, collected: true };
//                 }

//                 return {
//                   ...coin,
//                   position: {
//                     ...coin.position,
//                     x: coin.position.x - gameSpeed,
//                   },
//                 };
//               }
//               return coin;
//             })
//             .filter((coin) => coin.position.x > -50 || coin.collected)
//         );
//       }, 24);
//     }

//     return () => {
//       if (coinId) clearInterval(coinId);
//     };
//   }, [gameStarted, gameOver, birdPosition, gameSpeed]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
//       {/* Score Display */}
//       <div className="flex items-center gap-4 mb-4">
//         <div className="text-white text-2xl font-bold">Score: {score}</div>
//         <div className="flex items-center gap-2 text-yellow-400">
//           <Coins className="w-6 h-6" />
//           <span className="text-xl">{coinsCollected}</span>
//         </div>
//         <div className="text-white text-xl">High Score: {highScore}</div>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             setMuted(!muted);
//           }}
//           className="p-2 rounded-full bg-white/20 hover:bg-white/30"
//         >
//           {muted ? (
//             <VolumeX className="text-white" />
//           ) : (
//             <Volume2 className="text-white" />
//           )}
//         </button>
//       </div>

//       {/* Game Container */}
//       <div
//         ref={gameContainerRef}
//         onClick={handleClick}
//         className="relative w-[800px] h-[600px] border-4 border-[#FFB86C] rounded-lg overflow-hidden bg-secondary"
//       >
//         {/* Start Screen */}
//         {!gameStarted && !gameOver && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//             <div className="text-white text-3xl font-bold mb-4">FlyCoin</div>
//             <div className="text-white text-xl">
//               Click or Press Space to Start
//             </div>
//             <div className="mt-4 text-white text-sm">
//               Collect coins for extra points!
//             </div>
//           </div>
//         )}

//         {/* Bird */}
//         <motion.div
//           animate={{
//             rotate: birdRotation,
//             transition: { type: "spring", stiffness: 500 },
//           }}
//           className={`absolute transition-all duration-100 ease-linear ${
//             activeEffects.shield
//               ? "ring-4 ring-blue-400 ring-opacity-50 rounded-full"
//               : ""
//           }`}
//           style={{
//             width: birdWidth,
//             height: birdHeight,
//             left: "100px",
//             top: `${birdPosition}px`,
//           }}
//         >
//           <div className="relative w-full h-full">
//             <div className="absolute inset-0 bg-black rounded-full" />
//             <div className="absolute inset-2 bg-yellow-400 rounded-full">
//               <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white rounded-full" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Obstacles */}
//         <div
//           className="absolute bg-gradient-to-b from-green-600 to-green-500"
//           style={{
//             width: obstacleWidth,
//             height: obstacleHeight,
//             left: obstacleLeft,
//             top: 0,
//           }}
//         >
//           <div className="absolute bottom-0 w-full h-8 bg-green-700 rounded-b-lg" />
//         </div>
//         <div
//           className="absolute bg-gradient-to-b from-green-500 to-green-600"
//           style={{
//             width: obstacleWidth,
//             height: "100%",
//             left: obstacleLeft,
//             top: obstacleHeight + 150,
//           }}
//         >
//           <div className="absolute top-0 w-full h-8 bg-green-700 rounded-t-lg" />
//         </div>

//         {/* Coins */}
//         <AnimatePresence>
//           {coins.map(
//             (coin) =>
//               !coin.collected && (
//                 <motion.div
//                   key={coin.id}
//                   initial={{ scale: 0, rotate: 0 }}
//                   animate={{
//                     scale: 1,
//                     rotate: 360,
//                     transition: {
//                       rotate: {
//                         duration: 1,
//                         repeat: Infinity,
//                         ease: "linear",
//                       },
//                     },
//                   }}
//                   exit={{ scale: 0 }}
//                   className="absolute w-8 h-8"
//                   style={{
//                     left: coin.position.x,
//                     top: coin.position.y,
//                   }}
//                 >
//                   <div className="w-full h-full rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center shadow-lg">
//                     <Coins className="w-5 h-5 text-yellow-600" />
//                   </div>
//                 </motion.div>
//               )
//           )}
//         </AnimatePresence>

//         {/* Game Over Screen */}
//         {gameOver && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//             <div className="text-white text-3xl font-bold mb-4">Game Over!</div>
//             <div className="text-white text-xl mb-2">Score: {score}</div>
//             <div className="text-yellow-400 text-xl mb-4">
//               <div className="flex items-center gap-2">
//                 <Coins className="w-6 h-6" />
//                 <span>Coins Collected: {coinsCollected}</span>
//               </div>
//             </div>
//             {score === highScore && score > 0 && (
//               <div className="text-yellow-400 text-xl mb-4">
//                 New High Score!
//               </div>
//             )}
//             <button
//               onClick={resetGame}
//               className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white font-bold"
//             >
//               Play Again
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Achievements */}
//       <div className="mt-4 bg-white/10 rounded-lg p-4 w-[800px]">
//         <div className="text-white font-bold mb-2">Achievements</div>
//         <div className="grid grid-cols-2 gap-4">
//           {achievements.map((achievement) => (
//             <div
//               key={achievement.id}
//               className={`flex items-center gap-2 p-2 rounded-lg ${
//                 achievement.achieved ? "bg-white/20" : "bg-white/5"
//               }`}
//             >
//               {achievement.icon}
//               <div>
//                 <div className="text-white font-bold">{achievement.name}</div>
//                 <div className="text-white/80 text-sm">
//                   {achievement.description}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlyCoinGame;
