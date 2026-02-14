"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Mascot from '../../components/Mascot';

export default function LoginForm() {
  const [isCoveringEyes, setIsCoveringEyes] = useState(false);
  const [lookDirection, setLookDirection] = useState({ x: 0, y: 0 });

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    // Simple logic to move eyes left to right based on input length
    // Max width approx 30 chars for full range
    const x = Math.min(Math.max((length / 30) * 2 - 1, -1), 1); 
    setLookDirection({ x, y: 0.2 });
  };

  const handlePasswordFocus = () => {
    setIsCoveringEyes(true);
  };

  const handlePasswordBlur = () => {
    setIsCoveringEyes(false);
    setLookDirection({ x: 0, y: 0 }); // Reset gaze
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hidden sm:flex justify-center -mt-24 mb-4 pointer-events-none">
             <Mascot isCoveringEyes={isCoveringEyes} lookDirection={lookDirection} />
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </motion.div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <motion.div variants={itemVariants} className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 ease-in-out"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                onFocus={() => setLookDirection({ x: 0, y: 0.2 })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 ease-in-out"
                placeholder="Enter your password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer select-none">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline transition-colors">
                Forgot your password?
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </motion.button>
          </motion.div>
        </form>
        <motion.div variants={itemVariants} className="text-center mt-4">
            <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors hover:underline">
                    Sign up
                </Link>
            </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
