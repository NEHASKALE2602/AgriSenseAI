"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Leaf,
  Loader2,
  MessageSquarePlus,
  Paperclip,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { askAssistant } from "@/services/assistant";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
};
const suggestions = [
  {
    icon: "🌱",
    title: "Crop Recommendation",
    description: "Find the right crop for my farm",
    prompt: "What crop should I grow this season?",
    color: "green",
  },
  {
    icon: "🩺",
    title: "Crop Health",
    description: "Understand problems in my crop",
    prompt:
      "My plants have yellow leaves. What could be wrong and what should I check?",
    color: "cyan",
  },
  {
    icon: "💧",
    title: "Irrigation Advice",
    description: "Improve my watering strategy",
    prompt: "How often should I irrigate my crop?",
    color: "blue",
  },
  {
    icon: "🧪",
    title: "Soil Health",
    description: "Improve soil quality",
    prompt: "How can I improve my soil health?",
    color: "orange",
  },
  {
    icon: "🐛",
    title: "Pest & Disease",
    description: "Understand possible crop problems",
    prompt:
      "What are the common pest and disease problems I should watch for in my crop?",
    color: "purple",
  },
  {
    icon: "🌦️",
    title: "Weather Advice",
    description: "Make decisions using weather",
    prompt:
      "How can current and upcoming weather affect my farming decisions?",
    color: "yellow",
  },
];

const quickActions = [
  {
    icon: "🌾",
    title: "Best Crop",
    prompt: "What crop would be suitable for my farm this season?",
  },
  {
    icon: "💧",
    title: "Irrigation",
    prompt: "Give me practical irrigation advice for my crop.",
  },
  {
    icon: "🧪",
    title: "Soil",
    prompt: "How can I improve the health and fertility of my soil?",
  },
  {
    icon: "🐛",
    title: "Crop Problem",
    prompt: "Help me understand a possible pest or disease problem.",
  },
];

export default function AIAssistant() {
const [messages, setMessages] = useState<Message[]>([]);
const [question, setQuestion] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [conversations, setConversations] = useState<Conversation[]>([]);
const [activeConversationId, setActiveConversationId] =
  useState<string | null>(null);

const [historyLoaded, setHistoryLoaded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const HISTORY_KEY = "agrisense-ai-history";

useEffect(() => {
  try {
    const savedHistory = localStorage.getItem(HISTORY_KEY);

    if (savedHistory) {
      const parsedHistory: Conversation[] =
        JSON.parse(savedHistory);

      if (Array.isArray(parsedHistory)) {
        setConversations(parsedHistory);

        if (parsedHistory.length > 0) {
          const latest = parsedHistory[0];

          setActiveConversationId(latest.id);
          setMessages(latest.messages);
        }
      }
    }
  } catch (error) {
    console.error(
      "Failed to load Agrisense AI history:",
      error
    );
  } finally {
    setHistoryLoaded(true);
  }
}, []);

useEffect(() => {
  if (!historyLoaded) return;

  try {
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(conversations)
    );
  } catch (error) {
    console.error(
      "Failed to save Agrisense AI history:",
      error
    );
  }
}, [conversations, historyLoaded]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
  const message = (text ?? question).trim();

  if (!message || loading) return;

  setQuestion("");
  setError("");

  const userMessage: Message = {
    id: Date.now(),
    role: "user",
    content: message,
  };

  let conversationId = activeConversationId;

  // Create a conversation automatically if none exists
  if (!conversationId) {
    conversationId = `${Date.now()}`;

    const newConversation: Conversation = {
      id: conversationId,
      title:
        message.length > 35
          ? `${message.slice(0, 35)}...`
          : message,
      messages: [userMessage],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveConversationId(conversationId);
  } else {
    // Add user message to the current conversation
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                userMessage,
              ],
              updatedAt: Date.now(),
            }
          : conversation
      )
    );
  }

  // Display user message in chat
  setMessages((previous) => [
    ...previous,
    userMessage,
  ]);

  setLoading(true);

  try {
    const data = await askAssistant(message);

    const answer =
      data?.answer ??
      data?.response ??
      data?.message ??
      data?.result ??
      data?.reply;

    if (!answer) {
      throw new Error("No AI response received.");
    }

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: "assistant",
      content: String(answer),
    };

    // Display AI response in chat
    setMessages((previous) => [
      ...previous,
      assistantMessage,
    ]);

    // Save AI response to conversation history
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                assistantMessage,
              ],
              updatedAt: Date.now(),
            }
          : conversation
      )
    );
  } catch (err) {
    console.error("Agrisense AI error:", err);

    setError(
      "Sorry, I couldn't process your request right now."
    );
  } finally {
    setLoading(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }
};

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const createConversation = () => {
  const id = `${Date.now()}`;

  const newChat: Conversation = {
    id,
    title: "New Conversation",
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  setConversations((previous) => [
    newChat,
    ...previous,
  ]);

  setActiveConversationId(id);
  setMessages([]);
  setQuestion("");
  setError("");

  setTimeout(() => {
    inputRef.current?.focus();
  }, 100);
};
const formatConversationDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }

  if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
const selectConversation = (conversation: Conversation) => {
  setActiveConversationId(conversation.id);
  setMessages(conversation.messages);
  setQuestion("");
  setError("");

  setTimeout(() => {
    inputRef.current?.focus();
  }, 100);
};

const deleteConversation = (
  conversationId: string
) => {
  setConversations((previous) => {
    const updated = previous.filter(
      (conversation) =>
        conversation.id !== conversationId
    );

    if (conversationId === activeConversationId) {
      if (updated.length > 0) {
        setActiveConversationId(updated[0].id);
        setMessages(updated[0].messages);
      } else {
        setActiveConversationId(null);
        setMessages([]);
      }
    }

    return updated;
  });
};

  return (
    <div className="relative min-h-[calc(100vh-125px)] w-full py-5">
      {/* =====================================================
          AMBIENT AI GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-green-500/10
          blur-[160px]
        "
      />

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          z-10
          mb-5
          flex
          flex-col
          gap-4
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        <div className="flex items-center gap-4">
          {/* AI ICON */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(34,211,238,.18)",
                "0 0 50px rgba(34,211,238,.35)",
                "0 0 25px rgba(34,211,238,.18)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              relative
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-green-500
            "
          >
            <BrainCircuit
              size={29}
              className="text-white"
            />

            <span
              className="
                absolute
                -right-1
                -top-1
                h-3
                w-3
                rounded-full
                border-2
                border-[#111]
                bg-green-400
              "
            />
          </motion.div>

          <div>
            <div className="flex items-center gap-3">
              <h1
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-green-300
                  bg-clip-text
                  text-2xl
                  font-black
                  text-transparent
                  md:text-3xl
                "
              >
                Agrisense AI Assistant
              </h1>
            </div>

            <p className="mt-1 text-sm text-white/50">
              Your intelligent agricultural advisor
            </p>
          </div>
        </div>

        {/* STATUS + NEW CHAT */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-green-400/20
              bg-green-400/[0.07]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <CircleDot
              size={10}
              className="fill-green-400 text-green-400"
            />

            <span className="text-xs font-medium text-green-300">
              AI Assistant Online
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={createConversation}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2.5
              text-sm
              font-medium
              text-white/80
              backdrop-blur-xl
              transition-all
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <MessageSquarePlus size={16} />

            <span>New Conversation</span>
          </motion.button>
        </div>
      </motion.div>

      {/* =====================================================
          MAIN AI WORKSPACE
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          z-10
          grid
          min-h-[calc(100vh-205px)]
          grid-cols-1
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-black/[0.18]
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
          backdrop-blur-[30px]
          grid-cols-[260px_1fr]
        "
      >
        {/* =================================================
            LEFT AI PANEL
        ================================================== */}

        <aside
  className="
    flex
    flex-col
    border-r
    border-white/10
    bg-white/[0.025]
    p-5
  "
>
          {/* AI IDENTITY */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-cyan-400/10
              bg-gradient-to-br
              from-cyan-500/[0.09]
              via-white/[0.025]
              to-green-500/[0.07]
              p-5
            "
          >
            <div
              className="
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-green-500
                shadow-[0_0_25px_rgba(34,211,238,.2)]
              "
            >
              <Bot
                size={24}
                className="text-white"
              />
            </div>

            <p className="text-sm font-bold text-white">
              Agrisense AI
            </p>

            <p className="mt-1 text-xs leading-5 text-white/45">
              Smart agricultural intelligence for better farming
              decisions.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <CheckCircle2
                size={14}
                className="text-green-400"
              />

              <span className="text-[11px] text-green-300">
                System ready
              </span>
            </div>
          </div>
          
          {/* CONVERSATION HISTORY */}

<div className="mt-6 flex min-h-0 flex-1 flex-col">
  <div className="mb-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <MessageSquarePlus
        size={13}
        className="text-cyan-300"
      />

      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-white/40
        "
      >
        Chat History
      </p>
    </div>

    <span className="text-[10px] text-white/25">
      {conversations.length}
    </span>
  </div>

  <div
    className="
      min-h-0
      flex-1
      space-y-5
      overflow-y-auto
      pr-1
      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
    "
  >
    {conversations.length === 0 ? (
      <div
        className="
          rounded-xl
          border
          border-white/5
          bg-white/[0.02]
          px-3
          py-4
        "
      >
        <p className="text-[11px] leading-5 text-white/25">
          No conversations yet.
        </p>

        <p className="mt-1 text-[10px] leading-4 text-white/15">
          Start asking Agrisense AI a question.
        </p>
      </div>
    ) : (
      conversations.map((conversation, index) => {
        const currentDate = formatConversationDate(
          conversation.updatedAt
        );

        const previousConversation =
          conversations[index - 1];

        const previousDate = previousConversation
          ? formatConversationDate(
              previousConversation.updatedAt
            )
          : null;

        const showDateHeader =
          index === 0 || currentDate !== previousDate;

        return (
          <div key={conversation.id}>
            {/* DATE GROUP */}

            {showDateHeader && (
              <p
                className="
                  mb-2
                  px-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/25
                "
              >
                {currentDate}
              </p>
            )}

            {/* CONVERSATION */}

            <div
              className={`
                group
                relative
                flex
                items-center
                gap-1
                rounded-xl
                border
                transition-all
                ${
                  activeConversationId === conversation.id
                    ? "border-cyan-400/20 bg-cyan-400/[0.07]"
                    : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"
                }
              `}
            >
              <button
                onClick={() =>
                  selectConversation(conversation)
                }
                className="
                  min-w-0
                  flex-1
                  px-3
                  py-2.5
                  text-left
                "
              >
                <div className="flex items-center gap-2">
                  <MessageSquarePlus
                    size={12}
                    className={`
                      shrink-0
                      ${
                        activeConversationId ===
                        conversation.id
                          ? "text-cyan-300"
                          : "text-white/20"
                      }
                    `}
                  />

                  <p
                    className={`
                      truncate
                      text-[11px]
                      font-medium
                      ${
                        activeConversationId ===
                        conversation.id
                          ? "text-cyan-300"
                          : "text-white/65"
                      }
                    `}
                  >
                    {conversation.title}
                  </p>
                </div>
              </button>

              {/* DELETE */}

              <button
                onClick={() =>
                  deleteConversation(conversation.id)
                }
                aria-label="Delete conversation"
                className="
                  mr-1
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-white/20
                  opacity-0
                  transition-all
                  group-hover:opacity-100
                  hover:bg-red-500/10
                  hover:text-red-300
                "
              >
                <X size={12} />
              </button>
            </div>
          </div>
        );
      })
    )}
  </div>
</div>
          {/* QUICK ACTIONS */}

          <div className="mt-7">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles
                size={13}
                className="text-cyan-300"
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Quick Actions
              </p>
            </div>

            <div className="space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  onClick={() => sendMessage(action.prompt)}
                  disabled={loading}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    text-left
                    transition-all
                    hover:border-white/10
                    hover:bg-white/[0.05]
                    disabled:opacity-40
                  "
                >
                  <span className="text-lg">
                    {action.icon}
                  </span>

                  <span className="flex-1">
                    <span className="block text-xs font-medium text-white/75">
                      {action.title}
                    </span>
                  </span>

                  <ChevronRight
                    size={14}
                    className="
                      text-white/20
                      transition-all
                      group-hover:translate-x-1
                      group-hover:text-cyan-300
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CAPABILITY */}

          <div className="mt-auto pt-6">
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-4
              "
            >
              <div className="mb-3 flex items-center gap-2">
                <Leaf
                  size={15}
                  className="text-green-400"
                />

                <span className="text-xs font-semibold text-white/70">
                  Agricultural Focus
                </span>
              </div>

              <p className="text-[11px] leading-5 text-white/35">
                Crop selection, soil health, irrigation, crop
                health, pests, diseases, weather and farming
                practices.
              </p>
            </div>
          </div>
        </aside>

        {/* =================================================
            CHAT SECTION
        ================================================== */}

        <section className="flex min-h-0 flex-col">
          {/* CHAT TOP BAR */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-white/[0.02]
              px-5
              py-4
              md:px-7
            "
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                  "
                >
                  <Leaf
                    size={19}
                    className="text-green-300"
                  />
                </div>

                <span
                  className="
                    absolute
                    -bottom-0.5
                    -right-0.5
                    h-2.5
                    w-2.5
                    rounded-full
                    border-2
                    border-[#15191a]
                    bg-green-400
                  "
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Agricultural Intelligence
                </p>

                <p className="text-[11px] text-white/35">
                  Ask questions about your farm
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-xs text-white/30 md:flex">
              <Sparkles
                size={13}
                className="text-cyan-300"
              />

              AI-powered guidance
            </div>
          </div>

          {/* =================================================
              CHAT CONTENT
          ================================================== */}

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-8">
            <AnimatePresence mode="wait">
              {messages.length === 0 ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mx-auto max-w-5xl"
                >
                  {/* WELCOME */}

                  <div className="flex flex-col items-center py-5 text-center">
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                        boxShadow: [
                          "0 0 30px rgba(34,211,238,.18)",
                          "0 0 55px rgba(34,211,238,.35)",
                          "0 0 30px rgba(34,211,238,.18)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="
                        relative
                        mb-5
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-[28px]
                        bg-gradient-to-br
                        from-cyan-400
                        via-blue-500
                        to-green-500
                      "
                    >
                      <BrainCircuit
                        size={39}
                        className="text-white"
                      />

                      <Sparkles
                        size={16}
                        className="
                          absolute
                          -right-1
                          -top-1
                          text-cyan-200
                        "
                      />
                    </motion.div>

                    <div
                      className="
                        mb-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-cyan-400/15
                        bg-cyan-500/[0.07]
                        px-4
                        py-2
                      "
                    >
                      <Sparkles
                        size={13}
                        className="text-cyan-300"
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.3em]
                          text-cyan-300
                        "
                      >
                        AI READY
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-white md:text-3xl">
                      Hello Farmer 🌱
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                      I&apos;m your Agrisense AI agricultural
                      advisor. Ask me about crops, soil, irrigation,
                      diseases, pests, weather or better farming
                      practices.
                    </p>
                  </div>

                  {/* SUGGESTIONS */}

                  <div className="mt-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.28em]
                            text-cyan-300
                          "
                        >
                          Smart Suggestions
                        </p>

                        <p className="mt-1 text-xs text-white/30">
                          Start a conversation with one of these
                          questions
                        </p>
                      </div>

                      <Sparkles
                        size={18}
                        className="text-cyan-300/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {suggestions.map(
                        (suggestion, index) => (
                          <motion.button
                            key={suggestion.title}
                            initial={{
                              opacity: 0,
                              y: 12,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: index * 0.05,
                            }}
                            whileHover={{
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            onClick={() =>
                              sendMessage(
                                suggestion.prompt
                              )
                            }
                            disabled={loading}
                            className="
                              group
                              relative
                              overflow-hidden
                              rounded-[22px]
                              border
                              border-white/10
                              bg-gradient-to-br
                              from-white/[0.045]
                              to-white/[0.015]
                              p-4
                              text-left
                              transition-all
                              hover:border-cyan-400/20
                              hover:bg-white/[0.065]
                              disabled:cursor-not-allowed
                              disabled:opacity-40
                            "
                          >
                            <div
                              className="
                                absolute
                                -right-12
                                -top-12
                                h-28
                                w-28
                                rounded-full
                                bg-cyan-400/[0.05]
                                blur-2xl
                                transition-all
                                group-hover:bg-cyan-400/10
                              "
                            />

                            <div className="relative flex items-start gap-4">
                              <div
                                className="
                                  flex
                                  h-11
                                  w-11
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-white/10
                                  bg-black/10
                                  text-xl
                                "
                              >
                                {suggestion.icon}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-3">
                                  <h3 className="text-sm font-bold text-white">
                                    {suggestion.title}
                                  </h3>

                                  <ChevronRight
                                    size={15}
                                    className="
                                      shrink-0
                                      text-white/20
                                      transition-all
                                      group-hover:translate-x-1
                                      group-hover:text-cyan-300
                                    "
                                  />
                                </div>

                                <p className="mt-1 text-xs leading-5 text-white/40">
                                  {suggestion.description}
                                </p>
                              </div>
                            </div>
                          </motion.button>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="conversation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mx-auto max-w-4xl space-y-6"
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex max-w-[92%] gap-3 md:max-w-[80%] ${
                          message.role === "user"
                            ? "flex-row-reverse"
                            : ""
                        }`}
                      >
                        {/* AVATAR */}

                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${
                              message.role === "user"
                                ? "bg-cyan-500/15 text-cyan-300"
                                : "bg-gradient-to-br from-cyan-500/20 to-green-500/20 text-green-300"
                            }
                          `}
                        >
                          {message.role === "user" ? (
                            <User size={17} />
                          ) : (
                            <Bot size={17} />
                          )}
                        </div>

                        {/* BUBBLE */}

                        <div
                          className={`
                            relative
                            rounded-[22px]
                            border
                            px-5
                            py-4
                            ${
                              message.role === "user"
                                ? "rounded-tr-md border-cyan-400/15 bg-gradient-to-br from-cyan-500/15 to-blue-500/10"
                                : "rounded-tl-md border-white/10 bg-white/[0.045] shadow-[0_10px_35px_rgba(0,0,0,.12)]"
                            }
                          `}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span
                              className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                message.role === "user"
                                  ? "text-cyan-300/70"
                                  : "text-green-300/70"
                              }`}
                            >
                              {message.role === "user"
                                ? "You"
                                : "Agrisense AI"}
                            </span>
                          </div>

                          <p className="whitespace-pre-wrap text-sm leading-7 text-white/85">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* THINKING */}

                  <AnimatePresence>
                    {loading && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-xl
                              bg-gradient-to-br
                              from-cyan-500/20
                              to-green-500/20
                              text-green-300
                            "
                          >
                            <Bot size={17} />
                          </div>

                          <div
                            className="
                              rounded-[22px]
                              rounded-tl-md
                              border
                              border-white/10
                              bg-white/[0.045]
                              px-5
                              py-4
                            "
                          >
                            <div className="flex items-center gap-3">
                              <Loader2
                                size={15}
                                className="animate-spin text-cyan-300"
                              />

                              <span className="text-xs text-white/45">
                                Agrisense AI is thinking
                              </span>

                              <div className="flex gap-1">
                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300" />

                                <span
                                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300"
                                  style={{
                                    animationDelay:
                                      "150ms",
                                  }}
                                />

                                <span
                                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300"
                                  style={{
                                    animationDelay:
                                      "300ms",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================================
              ERROR
          ================================================== */}

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="
                  border-t
                  border-red-400/10
                  bg-red-500/[0.035]
                  px-5
                  py-3
                  md:px-8
                "
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-red-300/80">
                    {error}
                  </p>

                  <button
                    onClick={() => setError("")}
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      text-white/40
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              INPUT AREA
          ================================================== */}

          <div
            className="
              border-t
              border-white/10
              bg-black/[0.08]
              p-4
              md:p-5
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-4xl
                items-center
                gap-2
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.035]
                px-3
                py-2
                shadow-[0_10px_40px_rgba(0,0,0,.18)]
                transition-all
                focus-within:border-cyan-400/30
                focus-within:bg-white/[0.05]
                focus-within:shadow-[0_0_35px_rgba(34,211,238,.08)]
              "
            >
              {/* ATTACHMENT UI */}

              <button
                type="button"
                aria-label="Attach file"
                className="
                  hidden
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  text-white/35
                  transition
                  hover:bg-white/5
                  hover:text-cyan-300
                  sm:flex
                "
              >
                <Paperclip size={18} />
              </button>

              {/* INPUT */}

              <input
                ref={inputRef}
                type="text"
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Ask Agrisense AI anything about your farm..."
                className="
                  h-11
                  min-w-0
                  flex-1
                  bg-transparent
                  px-2
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                  disabled:cursor-not-allowed
                "
              />

              {/* AI READY */}

              <div
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-green-400/10
                  bg-green-400/[0.04]
                  px-3
                  py-2
                  lg:flex
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                <span className="text-[10px] text-green-300/70">
                  READY
                </span>
              </div>

              {/* SEND */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => sendMessage()}
                disabled={!question.trim() || loading}
                aria-label="Send message"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-green-500
                  text-white
                  shadow-[0_0_25px_rgba(34,211,238,.2)]
                  transition-all
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  disabled:hover:scale-100
                "
              >
                {loading ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={18} />
                )}
              </motion.button>
            </div>

            {/* FOOTER */}

            <div className="mx-auto mt-3 flex max-w-4xl items-center justify-between px-2">
              <span className="text-[10px] text-white/25">
                Enter to send
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/20">
                  Powered by
                </span>

                <span className="text-[10px] font-semibold text-green-300/50">
                  Agrisense AI
                </span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}