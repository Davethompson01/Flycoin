// import React from "react";

// const SunburstBackground = ({ children }) => {
//   return (
//     <div className="relative min-h-screen w-full bg-amber-900 overflow-hidden">
//       {/* Sunburst rays */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 origin-center animate-[spin_120s_linear_infinite]">
//           {[...Array(18)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute inset-0 origin-center"
//               style={{
//                 transform: `rotate(${i * 20}deg)`,
//               }}
//             >
//               <div className="absolute left-1/2 h-full w-4 -ml-2 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Clouds */}
//       <div className="absolute inset-0">
//         {/* Cloud 1 */}
//         <div className="absolute top-20 left-32">
//           <div className="relative w-32 h-10">
//             <div className="absolute w-32 h-10 bg-orange-100 rounded-full" />
//             <div className="absolute w-12 h-12 -top-4 left-6 bg-orange-100 rounded-full" />
//             <div className="absolute w-16 h-16 -top-6 left-14 bg-orange-100 rounded-full" />
//           </div>
//         </div>

//         {/* Cloud 2 */}
//         <div className="absolute top-16 right-44">
//           <div className="relative w-28 h-8">
//             <div className="absolute w-28 h-8 bg-orange-100 rounded-full" />
//             <div className="absolute w-10 h-10 -top-4 left-4 bg-orange-100 rounded-full" />
//             <div className="absolute w-14 h-14 -top-6 left-12 bg-orange-100 rounded-full" />
//           </div>
//         </div>

//         {/* Cloud 3 */}
//         <div className="absolute top-32 right-20">
//           <div className="relative w-24 h-8">
//             <div className="absolute w-24 h-8 bg-orange-100 rounded-full" />
//             <div className="absolute w-10 h-10 -top-4 left-4 bg-orange-100 rounded-full" />
//             <div className="absolute w-12 h-12 -top-5 left-10 bg-orange-100 rounded-full" />
//           </div>
//         </div>
//       </div>

//       {/* Navigation bar */}
//       <div className="relative z-10">
//         <nav className="flex items-center justify-between px-6 py-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-black rounded-full">
//               <div className="w-4 h-4 bg-white rounded-full ml-3 mt-1" />
//               <div className="w-6 h-3 bg-orange-400 rounded-full ml-4 mt-1" />
//             </div>
//             <span className="text-white font-bold text-xl">Fly coin</span>
//           </div>
//           <div className="flex items-center space-x-8">
//             <a href="#" className="text-white">
//               Home
//             </a>
//             <a href="#" className="text-white">
//               About
//             </a>
//             <a href="#" className="text-white">
//               Community
//             </a>
//             <button className="bg-white px-4 py-2 rounded-full font-semibold">
//               Buy token
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center pt-20">
//         <h1 className="text-6xl font-bold text-amber-800 [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]">
//           Fly High with
//         </h1>
//         <h1 className="text-6xl font-bold text-amber-800 mt-2 [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]">
//           FlyCoin!
//         </h1>
//       </div>

//       {children}
//     </div>
//   );
// };

// export default SunburstBackground;
