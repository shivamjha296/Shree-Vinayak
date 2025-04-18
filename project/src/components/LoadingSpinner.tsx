import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-primary-600',
    white: 'text-white'
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]}`}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="0"
          />
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current opacity-40"
          />
        </svg>
      </motion.div>
    </div>
  );
}