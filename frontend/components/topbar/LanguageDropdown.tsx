"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
};

const languages = [
  "English",
  "मराठी",
  "हिन्दी",
  "தமிழ்",
  "తెలుగు",
  "ગુજરાતી",
  "ಕನ್ನಡ",
  "বাংলা",
];

export default function LanguageDropdown({ open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: .95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: .95 }}
          transition={{ duration: .25 }}
          className="
          absolute
          top-20
          left-0
          w-56
          rounded-3xl
          border border-white/15
          bg-white/10
          backdrop-blur-3xl
          shadow-2xl
          overflow-hidden
        "
        >
          {languages.map((lang) => (
            <button
              key={lang}
              className="
              w-full
              px-6
              py-4
              text-left
              text-white
              hover:bg-green-500/20
              transition-all
              duration-300
            "
            >
              {lang}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}