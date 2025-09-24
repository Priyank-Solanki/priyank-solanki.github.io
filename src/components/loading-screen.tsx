import { motion } from 'motion/react';

export function LoadingScreen() {
  // Split name into characters for individual animation
  const firstName = "Priyank";
  const lastName = "Solanki";
  
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.7,
      rotate: 0
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: Math.random() * 4 - 2, // Random slight rotation for handwritten feel
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120
      }
    })
  };

  const signatureVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: (firstName.length + lastName.length) * 0.08 + 0.2,
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Minimal background with subtle depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-background to-purple-50/20 dark:from-blue-950/5 dark:via-background dark:to-purple-950/5"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-2xl opacity-60" />
      </div>
      
      <div className="text-center relative z-10 px-4 max-w-4xl mx-auto">
        {/* Handwritten signature animation */}
        <div className="mb-12 relative">
          {/* Main signature text */}
          <div className="relative inline-block">
            <div className="flex flex-wrap justify-center items-baseline gap-x-4 mb-6">
              {/* First Name with enhanced cursive styling */}
              <div className="flex">
                {firstName.split('').map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-7xl md:text-8xl lg:text-9xl text-foreground inline-block relative"
                    style={{
                      fontFamily: "'Great Vibes', 'Brush Script MT', 'Lucida Handwriting', 'Dancing Script', cursive",
                      textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Last Name */}
              <div className="flex">
                {lastName.split('').map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    custom={firstName.length + index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-7xl md:text-8xl lg:text-9xl text-foreground inline-block relative"
                    style={{
                      fontFamily: "'Great Vibes', 'Brush Script MT', 'Lucida Handwriting', 'Dancing Script', cursive",
                      textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Signature underline flourish */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              style={{ width: '120%' }}
            >
              <svg
                width="100%"
                height="40"
                viewBox="0 0 400 40"
                className="overflow-visible"
              >
                <defs>
                  <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Main signature flourish */}
                <motion.path
                  d="M50 25 Q120 10, 200 20 Q280 30, 350 15"
                  stroke="url(#signatureGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={signatureVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                />
                
                {/* Decorative dots */}
                <motion.circle
                  cx="370"
                  cy="18"
                  r="2.5"
                  fill="url(#signatureGradient)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: (firstName.length + lastName.length) * 0.08 + 1.5,
                    duration: 0.4,
                    ease: "backOut"
                  }}
                />
                
                <motion.circle
                  cx="385"
                  cy="22"
                  r="1.5"
                  fill="#8b5cf6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: (firstName.length + lastName.length) * 0.08 + 1.7,
                    duration: 0.4,
                    ease: "backOut"
                  }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Professional subtitle */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: (firstName.length + lastName.length) * 0.08 + 1.8,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <h2 
            className="text-xl md:text-2xl text-muted-foreground font-light tracking-wider"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
            }}
          >
            Full Stack Software Engineer
          </h2>
          
          {/* Elegant loading indicator */}
          <motion.div
            className="flex justify-center items-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: (firstName.length + lastName.length) * 0.08 + 2.2,
              duration: 0.6
            }}
          >
            {/* Three elegant dots */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          {/* Subtle status text */}
          <motion.p
            className="text-sm text-muted-foreground/60 mt-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              delay: (firstName.length + lastName.length) * 0.08 + 3,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
            }}
          >
            Welcome
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}