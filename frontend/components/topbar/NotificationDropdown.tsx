"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
};

const notifications = [
  {
    title: "Weather Alert",
    desc: "Heavy rainfall expected tomorrow",
  },
  {
    title: "Disease Alert",
    desc: "Tomato Leaf Blight detected nearby",
  },
  {
    title: "Market Price",
    desc: "Cotton price increased 8%",
  },
  {
    title: "Government Scheme",
    desc: "New PM-Kisan installment released",
  },
];

export default function NotificationDropdown({
  open,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: .95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: .95 }}
          transition={{ duration: .25 }}
          className="
          absolute
          right-0
          top-20
          w-[360px]
          rounded-3xl
          border border-white/15
          bg-white/10
          backdrop-blur-3xl
          shadow-2xl
          overflow-hidden
        "
        >
          <div className="p-5 border-b border-white/10">
            <h2 className="text-xl text-white font-bold">
              Notifications
            </h2>
          </div>

          {notifications.map((item) => (
            <button
              key={item.title}
              className="
              w-full
              text-left
              px-5
              py-4
              hover:bg-white/10
              transition
            "
            >
              <h4 className="text-white font-semibold">
                {item.title}
              </h4>

              <p className="text-white/60 text-sm mt-1">
                {item.desc}
              </p>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}