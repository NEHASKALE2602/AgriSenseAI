"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
};

export default function SettingsDropdown({ open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="absolute right-0 top-20 w-72 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-3xl shadow-2xl p-6"
        >
          <h2 className="text-white text-lg font-bold mb-5">
            Settings
          </h2>

          <div className="space-y-4">
            <button className="w-full rounded-xl bg-white/10 py-3 text-white hover:bg-green-500/20 transition">
              Language
            </button>

            <button className="w-full rounded-xl bg-white/10 py-3 text-white hover:bg-green-500/20 transition">
              Theme
            </button>

            <button className="w-full rounded-xl bg-white/10 py-3 text-white hover:bg-green-500/20 transition">
              Units
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}