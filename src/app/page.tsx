"use client";
import React, { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";

// --- Interface untuk Props CountdownItem ---
interface CountdownItemProps {
  value: string | number;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.03] w-20 sm:w-28 lg:w-36">
    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 sm:mb-2 tracking-tighter">
      {value.toString().padStart(2, "0")}
    </div>
    <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const launchDate = new Date("2025-12-08T00:00:00");

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = launchDate.getTime() - now.getTime();

  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsLaunched(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const countdownData = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center
                    bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900"
    >
      <main
        className="max-w-4xl w-full p-8 space-y-8 bg-white/5 backdrop-blur-md rounded-3xl
                      border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.5)]"
      >
        {/* Clock */}
        <div className="flex justify-center mb-8">
          <Clock className="w-14 h-14 sm:w-16 sm:h-16 text-white animate-spin-slow" />
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text
                       bg-gradient-to-r from-purple-400 to-pink-400 tracking-tighter"
        >
          {isLaunched
            ? "🎉 Portfolio Is Live!"
            : "Henry Albiri S. | Software Engineer Portfolio"}
        </h1>

        {/* SUBTEKS */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {isLaunched ? (
            "Access our Marketplace, SAAS, and Real-Time projects now."
          ) : (
            <>
              This portfolio is launching soon, showcasing my expertise as a
              <strong className="text-white">
                {" "}
                Senior Full-Stack Software Engineer
              </strong>
              .{/* Blok Teknologi dengan Animasi */}
              <div className="flex flex-wrap justify-center items-center my-4 space-x-3 sm:space-x-4">
                <strong className="text-purple-300">Core Stack:</strong>
                <span className="flex items-center space-x-3 sm:space-x-4">
                  <strong className="text-white">Next.js (TS)</strong>
                  <Clock className="w-4 h-4 text-pink-400 animate-pulse" />
                  <strong className="text-white">React</strong>
                  <Clock className="w-4 h-4 text-pink-400 animate-pulse" />
                  <strong className="text-white">Node.js</strong>
                  <Clock className="w-4 h-4 text-pink-400 animate-pulse" />
                  <strong className="text-white">Laravel / .NET Core</strong>
                </span>
              </div>
              I specialize in high-performance architecture, proven by reducing
              Marketplace load time by
              <strong className="text-white"> 40%</strong> and boosting system
              performance up to <strong className="text-white">65%</strong>.
              Follow my progress and connect with me!
            </>
          )}
        </p>

        {/* Area Countdown Timer */}
        {!isLaunched && (
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 lg:space-x-6 py-4">
            {countdownData.map((item) => (
              <CountdownItem
                key={item.label}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        )}

        {/*  Button to LinkedIn */}
        <div className="flex justify-center pt-4">
          {isLaunched ? (
            // Tampilan saat sudah diluncurkan
            <a
              href="https://www.linkedin.com/in/henry-albiri-salsabila-376b92151/" // Ganti dengan URL Portofolio Anda
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs flex items-center justify-center space-x-2 p-3 sm:p-4
                         bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold
                         rounded-xl shadow-lg hover:from-green-600 hover:to-teal-600
                         transition duration-300 ease-in-out transform hover:scale-[1.05]"
            >
              <span>Access Portfolio Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          ) : (
            //  Connect on LinkedIn
            <a
              href="https://www.linkedin.com/in/henry-albiri-salsabila-376b92151/" // Link LinkedIn Anda
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs flex items-center justify-center space-x-2 p-3 sm:p-4
                         bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold
                         rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700
                         transition duration-300 ease-in-out transform hover:scale-[1.05]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </main>

      {/* Teks Footer */}
      <footer className="mt-8 text-gray-400 text-sm">
        Contact me: ashenry325@gmail.com | LinkedIn: Henry Albiri S.
      </footer>
    </div>
  );
}
