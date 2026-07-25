"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

type Props = {
  open: boolean;
};

const items = [
  { icon: User, label: "My Profile" },
  { icon: Settings, label: "Account Settings" },
  { icon: HelpCircle, label: "Help Center" },
  { icon: LogOut, label: "Logout" },
];

export default function ProfileDropdown({ open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="absolute right-0 top-20 w-64 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="flex w-full items-center gap-4 px-5 py-4 text-white hover:bg-green-500/20 transition"
              >
                <Icon size={20} />
                {item.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}