import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  UserPlus,
  Sparkles,
  Construction,
} from "lucide-react";
import ParallaxSection from "@app/src/components/ParallaxSection";
import Link from "next/link";

interface RegisterPageProps {
  onRegister: (name: string, email: string, password: string) => void;
}

export default function RegisterComponent({ onRegister }: RegisterPageProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toggle this to TRUE to show the Coming Soon state
  const isComingSoon = true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComingSoon) return; // Prevent submission if not available
    onRegister(name, email, password);
    router.push("/customer");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
      </ParallaxSection>

      <ParallaxSection speed={0.5} className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tl from-blue-500/15 to-cyan-400/15 rounded-full blur-3xl" />
      </ParallaxSection>

      {/* Register Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
          {/* Coming Soon Overlay */}
          {isComingSoon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm px-6 text-center"
            >
              <Construction className="w-12 h-12 text-cyan-400 mb-4" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Registration Coming Soon
              </h2>
              <p className="text-gray-800 text-sm mb-6">
                We&apos;re fine-tuning the experience. Join our waitlist to be
                the first to know when we launch!
              </p>
              <Link
                href="/"
                className="px-6 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-xs font-bold hover:bg-cyan-500/10 transition-all uppercase tracking-widest"
              >
                Back to Home
              </Link>
            </motion.div>
          )}

          <div
            className={`text-center mb-8 transition-all ${
              isComingSoon ? "blur-sm grayscale" : ""
            }`}
          >
            <h1 className="text-3xl mb-2 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Register Account
            </h1>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all ${
              isComingSoon
                ? "blur-sm grayscale select-none pointer-events-none"
                : ""
            }`}
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-2 font-medium"
              >
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-2 font-medium"
              >
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-2 font-medium"
              >
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  disabled={isComingSoon}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white placeholder:text-gray-600"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={isComingSoon}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2"
            >
              <UserPlus className="w-5 h-5" />
              <span>Create Account</span>
            </button>
          </form>

          {/* Login Link */}
          {!isComingSoon && (
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-cyan-400 font-bold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
