import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '+919076699515'; // Updated to the requested number

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-2 bg-white px-4 py-2 rounded-lg shadow-lg text-gray-700 text-sm whitespace-nowrap"
          >
            Chat with us on WhatsApp!
          </motion.div>
        )}
        <motion.a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </motion.a>
      </motion.div>
    </div>
  );
}