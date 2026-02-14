"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Mascot from '../../components/Mascot';

export default function RegisterForm() {
  const [isCoveringEyes, setIsCoveringEyes] = useState(false);
  const [lookDirection, setLookDirection] = useState({ x: 0, y: 0 });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    // Simple logic to move eyes left to right based on input length
    const x = Math.min(Math.max((length / 30) * 2 - 1, -1), 1); 
    setLookDirection({ x, y: 0.2 });
  };

  const handlePasswordFocus = () => {
    setIsCoveringEyes(true);
  };

  const handlePasswordBlur = () => {
    setIsCoveringEyes(false);
    setLookDirection({ x: 0, y: 0 }); 
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.08
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
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
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
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join us to start your journey
          </p>
        </motion.div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <motion.div variants={itemVariants} className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 ease-in-out"
                placeholder="Enter your full name"
                onChange={handleInputChange}
                onFocus={() => setLookDirection({ x: 0, y: 0.2 })}
              />
            </div>
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
                onChange={handleInputChange}
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
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 ease-in-out"
                placeholder="Create a password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
             <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 ease-in-out"
                placeholder="Confirm your password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 cursor-pointer select-none">
              I agree to the{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
                Terms and Conditions
              </a>
            </label>
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
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                 >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              Sign up
            </motion.button>
          </motion.div>
        </form>
         <motion.div variants={itemVariants} className="text-center mt-4">
            <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors hover:underline">
                    Sign in
                </Link>
            </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
