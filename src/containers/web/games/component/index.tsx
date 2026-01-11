import { motion } from "motion/react";
import { Gamepad2, Play, Star, Lock } from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";

export default function GamesComponent() {
  const games = [
    {
      title: "Stickman Adventure",
      description:
        "Classic platformer game featuring stickman character navigating through challenging levels.",
      image: "🏃",
      rating: 4.5,
      plays: "10K+",
      available: false, // Set availability
    },
    {
      title: "Space Shooter",
      description:
        "Fast-paced arcade shooter where you defend Earth from alien invaders.",
      image: "🚀",
      rating: 4.8,
      plays: "25K+",
      available: false,
    },
    {
      title: "Puzzle Master",
      description:
        "Brain-teasing puzzle game with hundreds of challenging levels.",
      image: "🧩",
      rating: 0.0,
      plays: "0",
      available: false, // Coming soon
    },
    {
      title: "Racing Thunder",
      description: "High-speed racing game with multiple tracks and vehicles.",
      image: "🏎️",
      rating: 0.0,
      plays: "0",
      available: false, // Coming soon
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <ParallaxSection speed={0.25} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Gamepad2 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
            Games Collection
          </h1>
          <p className="text-xl text-gray-400">
            Fun and interactive games built with modern web technologies
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={game.available ? { y: -10 } : {}}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border backdrop-blur-sm transition-all overflow-hidden ${
                game.available
                  ? "border-cyan-500/20 hover:border-cyan-400/50 cursor-pointer"
                  : "border-white/5 opacity-60 grayscale-[0.5]"
              }`}
            >
              {/* Status Badge */}
              {!game.available && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800/80 text-gray-400 text-xs border border-white/10 backdrop-blur-md">
                    <Lock className="w-3 h-3" />
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Hover glow effect */}
              {game.available && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all" />
              )}

              <div className="relative">
                {/* Game Preview */}
                <div
                  className={`w-full h-48 rounded-xl flex items-center justify-center text-8xl mb-6 transition-transform duration-500 ${
                    game.available
                      ? "bg-gradient-to-br from-cyan-500/30 to-blue-600/30 group-hover:scale-105 shadow-inner"
                      : "bg-gray-800/50"
                  }`}
                >
                  {game.image}
                </div>

                {/* Game Info */}
                <h3
                  className={`text-2xl mb-3 transition-colors font-semibold ${
                    game.available
                      ? "group-hover:text-cyan-400 text-white"
                      : "text-gray-500"
                  }`}
                >
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {game.description}
                </p>

                {/* Stats */}
                <div
                  className={`flex items-center space-x-6 mb-6 text-sm ${
                    game.available ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 font-medium">
                      {game.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 font-medium">
                      {game.plays} plays
                    </span>
                  </div>
                </div>

                {/* Play Button */}
                <button
                  disabled={!game.available}
                  className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 font-bold transition-all ${
                    game.available
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/40 active:scale-95"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5"
                  }`}
                >
                  {game.available ? (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      <span>Play Now</span>
                    </>
                  ) : (
                    <span>Locked</span>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-12 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 border border-cyan-500/20 text-center"
        >
          <h2 className="text-3xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
            More Games Coming Soon!
          </h2>
          <p className="text-gray-400 text-lg">
            Stay tuned for exciting new games and updates
          </p>
        </motion.div>
      </div>
    </div>
  );
}
