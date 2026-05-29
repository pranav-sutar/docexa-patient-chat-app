import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SplashScreen() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={isExiting ? { x: "-100%" } : { x: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (isExiting) {
          navigate("/main-page");
        }
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 px-6"
    >
      <div className="text-center">
        <h3 className="text-white text-lg md:text-2xl font-medium tracking-wide mb-2">
          Welcome to
        </h3>

        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
          Docexa
        </h1>

        <p className="text-blue-100 text-sm md:text-lg mt-3">
          Your Digital Health Partner
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;