"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { askAssistant } from "@/services/assistant";

import {
  BrainCircuit,
  Sparkles,
  X,
  CircleDot,
} from "lucide-react";

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

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
}

const HISTORY_KEY = "agrisense-market-assistant-history";

export default function AssistantPanel({
  open,
  onClose,
}: AssistantPanelProps) {
  /* =========================================================
     STATE
  ========================================================= */

  const [question, setQuestion] = useState("");

  const [conversations, setConversations] = useState<
    Conversation[]
  >([]);

  const [activeConversationId, setActiveConversationId] =
    useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  /* =========================================================
     LOAD HISTORY FROM LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    try {
      const savedHistory =
        localStorage.getItem(HISTORY_KEY);

      if (!savedHistory) {
        return;
      }

      const parsedHistory: Conversation[] =
        JSON.parse(savedHistory);

      if (
        !Array.isArray(parsedHistory) ||
        parsedHistory.length === 0
      ) {
        return;
      }

      setConversations(parsedHistory);

      /*
        Open the most recently updated conversation.
      */

      const sortedHistory = [...parsedHistory].sort(
        (a, b) => b.updatedAt - a.updatedAt
      );

      const latestConversation =
        sortedHistory[0];

      setActiveConversationId(
        latestConversation.id
      );

      setMessages(
        latestConversation.messages || []
      );
    } catch (error) {
      console.error(
        "Failed to load assistant history:",
        error
      );
    }
  }, []);

  /* =========================================================
     SAVE HISTORY TO LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    try {
      localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(conversations)
      );
    } catch (error) {
      console.error(
        "Failed to save assistant history:",
        error
      );
    }
  }, [conversations]);

  /* =========================================================
     CREATE NEW CONVERSATION
  ========================================================= */

  const createConversation = () => {
    const id =
      `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)}`;

    const now = Date.now();

    const newConversation: Conversation = {
      id,
      title: "New Conversation",
      messages: [],
      createdAt: now,
      updatedAt: now,
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveConversationId(id);

    setMessages([]);

    setQuestion("");
  };

  /* =========================================================
     SELECT EXISTING CONVERSATION
  ========================================================= */

  const selectConversation = (
    conversation: Conversation
  ) => {
    setActiveConversationId(
      conversation.id
    );

    setMessages(
      conversation.messages || []
    );

    setQuestion("");
  };

  /* =========================================================
     DELETE CONVERSATION
  ========================================================= */

  const deleteConversation = (
    conversationId: string
  ) => {
    setConversations((previous) => {
      const updated =
        previous.filter(
          (conversation) =>
            conversation.id !==
            conversationId
        );

      /*
        If the deleted conversation was active,
        automatically open another conversation.
      */

      if (
        conversationId ===
        activeConversationId
      ) {
        if (updated.length > 0) {
          const nextConversation =
            updated[0];

          setActiveConversationId(
            nextConversation.id
          );

          setMessages(
            nextConversation.messages || []
          );
        } else {
          setActiveConversationId(null);

          setMessages([]);
        }
      }

      return updated;
    });

    setQuestion("");
  };

  /* =========================================================
     UPDATE CURRENT CONVERSATION
  ========================================================= */

  const updateConversationMessages = (
    conversationId: string,
    updatedMessages: Message[]
  ) => {
    setConversations((previous) =>
      previous.map((conversation) => {
        if (
          conversation.id !==
          conversationId
        ) {
          return conversation;
        }

        return {
          ...conversation,
          messages: updatedMessages,
          updatedAt: Date.now(),
        };
      })
    );

    setMessages(updatedMessages);
  };

  /* =========================================================
     CREATE CONVERSATION WHEN FIRST MESSAGE IS SENT
  ========================================================= */

  const ensureConversation = (
    firstMessage: string
  ): string => {
    /*
      If an active conversation already exists,
      use it.
    */

    if (activeConversationId) {
      return activeConversationId;
    }

    /*
      Otherwise create a brand-new conversation.
    */

    const now = Date.now();

    const id =
      `${now}-${Math.random()
        .toString(36)
        .substring(2, 8)}`;

    const title =
      firstMessage.length > 45
        ? firstMessage.substring(0, 45) + "..."
        : firstMessage;

    const newConversation: Conversation = {
      id,
      title,
      messages: [],
      createdAt: now,
      updatedAt: now,
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveConversationId(id);

    return id;
  };

  /* =========================================================
     SEND QUESTION
  ========================================================= */

  const sendQuestion = async (
    text?: string
  ) => {
    const message =
      (text ?? question).trim();

    if (!message || loading) {
      return;
    }

    /*
      Clear input immediately.
    */

    setQuestion("");

    setLoading(true);

    /*
      Find or create conversation.
    */

    const conversationId =
      ensureConversation(message);

    const now = Date.now();

    /*
      User message.
    */

    const userMessage: Message = {
      id: now,
      role: "user",
      content: message,
    };

    /*
      Get current messages.

      We use the current React state because
      this function sends messages one by one.
    */

    let currentMessages = [
      ...messages,
      userMessage,
    ];

    /*
      Update conversation title.

      Only change "New Conversation" to
      the first question.
    */

    setConversations((previous) =>
      previous.map((conversation) => {
        if (
          conversation.id !==
          conversationId
        ) {
          return conversation;
        }

        let updatedTitle =
          conversation.title;

        if (
          conversation.title ===
            "New Conversation" &&
          conversation.messages.length === 0
        ) {
          updatedTitle =
            message.length > 45
              ? message.substring(0, 45) +
                "..."
              : message;
        }

        return {
          ...conversation,
          title: updatedTitle,
          messages: currentMessages,
          updatedAt: Date.now(),
        };
      })
    );

    /*
      Immediately show user's message.
    */

    setMessages(currentMessages);

    try {
      console.log(
        "Sending question:",
        message
      );

      /*
        Call your existing AI service.
      */

      const data =
        await askAssistant(message);

      console.log(
        "AI response:",
        data
      );

      /*
        Support different response formats
        from your backend.
      */

      const aiAnswer =
        data?.answer ??
        data?.response ??
        data?.message ??
        data?.result ??
        data?.reply;

      if (!aiAnswer) {
        throw new Error(
          "No AI response received from backend."
        );
      }

      const finalAnswer =
        String(aiAnswer);

      /*
        Create AI message.
      */

      const assistantMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: finalAnswer,
      };

      /*
        Add AI response to current messages.
      */

      currentMessages = [
        ...currentMessages,
        assistantMessage,
      ];

      /*
        SAVE COMPLETE CONVERSATION.
      */

      updateConversationMessages(
        conversationId,
        currentMessages
      );

    } catch (error) {
      console.error(
        "Assistant Panel error:",
        error
      );

      /*
        Keep the error inside the conversation
        so the conversation itself remains saved.
      */

      const errorMessage =
        "Sorry, I couldn't process your request right now.";

      const assistantErrorMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: errorMessage,
      };

      currentMessages = [
        ...currentMessages,
        assistantErrorMessage,
      ];

      updateConversationMessages(
        conversationId,
        currentMessages
      );

    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     QUICK ACTIONS
  ========================================================= */

  const handleQuickQuestion = (
    text: string
  ) => {
    sendQuestion(text);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 30,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            fixed
            top-24
            bottom-6
            right-8
            z-[9999]
            w-[430px]
            max-w-[calc(100vw-32px)]
            overflow-hidden
            rounded-[36px]
            border
            border-cyan-400/20
            bg-white/[0.06]
            backdrop-blur-[35px]
            shadow-[0_0_80px_rgba(6,182,212,.18)]
          "
        >
          {/* =================================================
              GLOW EFFECTS
          ================================================= */}

          <div
            className="
              absolute
              -top-36
              -right-36
              h-[420px]
              w-[420px]
              rounded-full
              bg-cyan-500/15
              blur-[160px]
            "
          />

          <div
            className="
              absolute
              -bottom-44
              -left-44
              h-[420px]
              w-[420px]
              rounded-full
              bg-green-500/10
              blur-[180px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              overflow-hidden
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                relative
                flex
                items-center
                justify-between
                border-b
                border-white/10
                bg-white/[0.03]
                px-8
                py-6
              "
            >
              <div className="flex items-center gap-5">

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 25px rgba(34,211,238,.25)",
                      "0 0 55px rgba(34,211,238,.45)",
                      "0 0 25px rgba(34,211,238,.25)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500
                    via-sky-500
                    to-green-500
                  "
                >
                  <BrainCircuit
                    size={32}
                    className="text-white"
                  />
                </motion.div>

                <div>
                  <h2
                    className="
                      bg-gradient-to-r
                      from-cyan-300
                      via-white
                      to-green-300
                      bg-clip-text
                      text-2xl
                      font-black
                      text-transparent
                    "
                  >
                    AI Market Assistant
                  </h2>

                  <div className="mt-2 flex items-center gap-3">

                    <CircleDot
                      size={10}
                      className="
                        fill-green-400
                        text-green-400
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-green-300
                      "
                    >
                      Neural Engine Online
                    </span>

                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={onClose}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  text-white/80
                  transition-all
                  hover:border-red-400/40
                  hover:bg-red-500/10
                  hover:text-red-300
                "
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* =================================================
                CONVERSATION HISTORY
            ================================================= */}

            <div
              className="
                border-b
                border-white/10
                px-6
                py-4
              "
            >

              {/* NEW CONVERSATION */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={
                  createConversation
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/[0.08]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-300
                  transition-all
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/[0.14]
                "
              >
                <Sparkles size={15} />

                New Conversation
              </motion.button>

              {/* HISTORY TITLE */}

              <div
                className="
                  mt-5
                  mb-3
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Recent Conversations
                </span>

                <span
                  className="
                    text-[10px]
                    text-white/20
                  "
                >
                  {conversations.length}
                </span>
              </div>

              {/* HISTORY LIST */}

              <div
                className="
                  max-h-[170px]
                  space-y-1
                  overflow-y-auto
                  pr-1
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                "
              >

                {conversations.length === 0 ? (
                  <p
                    className="
                      py-3
                      text-center
                      text-[11px]
                      text-white/25
                    "
                  >
                    No conversations yet
                  </p>
                ) : (
                  conversations.map(
                    (conversation) => (
                      <div
                        key={
                          conversation.id
                        }
                        className={`
                          group
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          px-3
                          py-2.5
                          transition-all
                          ${
                            activeConversationId ===
                            conversation.id
                              ? "border-cyan-400/20 bg-cyan-400/[0.07]"
                              : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"
                          }
                        `}
                      >

                        {/* CHAT TITLE */}

                        <button
                          onClick={() =>
                            selectConversation(
                              conversation
                            )
                          }
                          className="
                            min-w-0
                            flex-1
                            text-left
                          "
                        >
                          <p
                            className={`
                              truncate
                              text-xs
                              ${
                                activeConversationId ===
                                conversation.id
                                  ? "font-medium text-cyan-300"
                                  : "text-white/60"
                              }
                            `}
                          >
                            {conversation.title}
                          </p>
                        </button>

                        {/* DELETE */}

                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();

                            deleteConversation(
                              conversation.id
                            );
                          }}
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            text-white/30
                            opacity-0
                            transition-all
                            group-hover:opacity-100
                            hover:bg-red-500/15
                            hover:text-red-300
                          "
                          aria-label="Delete conversation"
                          title="Delete conversation"
                        >
                          <X size={14} />
                        </button>

                      </div>
                    )
                  )
                )}

              </div>
            </div>

            {/* =================================================
                CHAT AREA
            ================================================= */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-6
                pb-4
              "
            >

              {/* =================================================
                  IF NO MESSAGES SHOW WELCOME SCREEN
              ================================================= */}

              {messages.length === 0 && (
                <>
                  {/* WELCOME HERO */}

                  <div
                    className="
                      relative
                      px-8
                      pt-5
                      pb-3
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                      className="
                        rounded-[30px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-cyan-500/8
                        via-white/[0.02]
                        to-green-500/8
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          gap-6
                        "
                      >

                        <motion.div
                          animate={{
                            y: [-4, 4, -4],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-3xl
                            bg-gradient-to-br
                            from-cyan-500
                            via-blue-500
                            to-green-500
                            shadow-[0_0_40px_rgba(34,211,238,.35)]
                          "
                        >
                          <BrainCircuit
                            size={40}
                            className="text-white"
                          />
                        </motion.div>

                        <div className="flex-1">

                          <div
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-cyan-400/20
                              bg-cyan-500/10
                              px-4
                              py-2
                            "
                          >
                            <Sparkles
                              size={14}
                              className="text-cyan-300"
                            />

                            <span
                              className="
                                text-[11px]
                                uppercase
                                tracking-[0.28em]
                                font-semibold
                                text-cyan-300
                              "
                            >
                              AI READY
                            </span>
                          </div>

                          <h2
                            className="
                              mt-3
                              text-3xl
                              font-black
                              leading-tight
                              text-white
                            "
                          >
                            Hello Farmer 👋
                          </h2>

                          <p
                            className="
                              mt-5
                              leading-7
                              text-white/65
                            "
                          >
                            I can analyze
                            <span
                              className="
                                font-semibold
                                text-cyan-300
                              "
                            >
                              {" "}
                              live mandi prices
                            </span>
                            , predict future crop
                            trends, compare nearby
                            markets, estimate
                            transport cost, and
                            recommend the
                            <span
                              className="
                                font-semibold
                                text-green-300
                              "
                            >
                              {" "}
                              best selling opportunity
                            </span>
                            {" "}using AI.
                          </p>

                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* SMART SUGGESTIONS */}

                  <div
                    className="
                      px-8
                      pb-6
                    "
                  >
                    <h3
                      className="
                        mb-5
                        text-xs
                        uppercase
                        tracking-[0.35em]
                        font-semibold
                        text-cyan-300
                      "
                    >
                      Smart Suggestions
                    </h3>

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-4
                      "
                    >

                      {/* CARD 1 */}

                      <motion.button
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          handleQuickQuestion(
                            "Which crop has the highest market price today?"
                          )
                        }
                        className="
                          rounded-[24px]
                          border
                          border-cyan-400/15
                          bg-gradient-to-br
                          from-cyan-500/10
                          to-cyan-500/5
                          p-5
                          text-left
                          transition-all
                          hover:border-cyan-300/40
                          hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
                        "
                      >
                        <div className="text-3xl">
                          📈
                        </div>

                        <h4
                          className="
                            mt-4
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          Highest Price
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-white/60
                          "
                        >
                          Find today's highest
                          soybean market.
                        </p>
                      </motion.button>

                      {/* CARD 2 */}

                      <motion.button
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          handleQuickQuestion(
                            "Should I sell my crop today or wait for a better price?"
                          )
                        }
                        className="
                          rounded-[24px]
                          border
                          border-green-400/15
                          bg-gradient-to-br
                          from-green-500/10
                          to-green-500/5
                          p-5
                          text-left
                          transition-all
                          hover:border-green-300/40
                          hover:shadow-[0_0_35px_rgba(34,197,94,.15)]
                        "
                      >
                        <div className="text-3xl">
                          💰
                        </div>

                        <h4
                          className="
                            mt-4
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          Sell Today?
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-white/60
                          "
                        >
                          AI recommends whether
                          you should wait.
                        </p>
                      </motion.button>

                      {/* CARD 3 */}

                      <motion.button
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          handleQuickQuestion(
                            "How can today's weather affect crop prices and farming decisions?"
                          )
                        }
                        className="
                          rounded-[24px]
                          border
                          border-yellow-400/15
                          bg-gradient-to-br
                          from-yellow-500/10
                          to-orange-500/5
                          p-5
                          text-left
                          transition-all
                          hover:border-yellow-300/40
                        "
                      >
                        <div className="text-3xl">
                          🌦️
                        </div>

                        <h4
                          className="
                            mt-4
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          Weather Impact
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-white/60
                          "
                        >
                          Analyze weather
                          influence on prices.
                        </p>
                      </motion.button>

                      {/* CARD 4 */}

                      <motion.button
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          handleQuickQuestion(
                            "Which nearby market is the best place to sell my crop?"
                          )
                        }
                        className="
                          rounded-[24px]
                          border
                          border-purple-400/15
                          bg-gradient-to-br
                          from-purple-500/10
                          to-blue-500/5
                          p-5
                          text-left
                          transition-all
                          hover:border-purple-300/40
                        "
                      >
                        <div className="text-3xl">
                          🚜
                        </div>

                        <h4
                          className="
                            mt-4
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          Best Market
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-white/60
                          "
                        >
                          Find the most profitable
                          nearby mandi.
                        </p>
                      </motion.button>

                    </div>
                  </div>
                </>
              )}

              {/* =================================================
                  CHAT MESSAGES
              ================================================= */}

              {messages.length > 0 && (
                <div
                  className="
                    space-y-4
                    px-2
                    pt-5
                    pb-6
                  "
                >
                  {messages.map(
                    (message) => (
                      <div
                        key={message.id}
                        className={`
                          flex
                          ${
                            message.role ===
                            "user"
                              ? "justify-end"
                              : "justify-start"
                          }
                        `}
                      >

                        <div
                          className={`
                            max-w-[88%]
                            rounded-[22px]
                            border
                            p-4
                            ${
                              message.role ===
                              "user"
                                ? "border-cyan-400/20 bg-cyan-500/10"
                                : "border-green-400/15 bg-green-500/[0.06]"
                            }
                          `}
                        >

                          <div
                            className="
                              mb-2
                              flex
                              items-center
                              gap-2
                            "
                          >
                            {message.role ===
                            "assistant" ? (
                              <>
                                <BrainCircuit
                                  size={16}
                                  className="text-green-300"
                                />

                                <span
                                  className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-green-300
                                  "
                                >
                                  AgriSense AI
                                </span>
                              </>
                            ) : (
                              <span
                                className="
                                  text-[10px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.2em]
                                  text-cyan-300
                                "
                              >
                                You
                              </span>
                            )}
                          </div>

                          <p
                            className="
                              whitespace-pre-wrap
                              text-sm
                              leading-7
                              text-white/75
                            "
                          >
                            {message.content}
                          </p>

                        </div>
                      </div>
                    )
                  )}

                  {/* LOADING */}

                  {loading && (
                    <div
                      className="
                        flex
                        justify-start
                      "
                    >
                      <div
                        className="
                          rounded-[22px]
                          border
                          border-cyan-400/15
                          bg-cyan-500/[0.05]
                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <BrainCircuit
                            size={20}
                            className="
                              animate-pulse
                              text-cyan-300
                            "
                          />

                          <span
                            className="
                              text-sm
                              text-white/60
                            "
                          >
                            AgriSense AI is
                            thinking...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>

            {/* =================================================
                CHAT INPUT
            ================================================= */}

            <div
              className="
                mt-auto
                border-t
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-2xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  transition-all
                  focus-within:border-cyan-400/40
                  focus-within:shadow-[0_0_25px_rgba(34,211,238,.12)]
                "
              >

                {/* ATTACHMENT */}

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-lg
                    transition-all
                    hover:bg-cyan-500/10
                  "
                >
                  📎
                </button>

                {/* INPUT */}

                <input
                  type="text"
                  value={question}
                  onChange={(event) =>
                    setQuestion(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key ===
                      "Enter"
                    ) {
                      event.preventDefault();

                      sendQuestion();
                    }
                  }}
                  placeholder="
                    Ask AI anything about today's market...
                  "
                  className="
                    flex-1
                    bg-transparent
                    text-white
                    placeholder:text-white/40
                    outline-none
                  "
                />

                {/* VOICE */}

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-lg
                    transition-all
                    hover:bg-green-500/10
                  "
                >
                  🎤
                </button>

                {/* SEND */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    sendQuestion()
                  }
                  disabled={
                    !question.trim() ||
                    loading
                  }
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-green-500
                    text-xl
                    text-white
                    shadow-[0_0_30px_rgba(34,211,238,.25)]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  {loading
                    ? "⏳"
                    : "➜"}
                </motion.button>

              </div>

              {/* FOOTER */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-xs
                    text-white/40
                  "
                >
                  Powered by AgriSense AI
                </span>

                <span
                  className="
                    text-xs
                    text-cyan-300
                  "
                >
                  AI Engine Ready
                </span>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}