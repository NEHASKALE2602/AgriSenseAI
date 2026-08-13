"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Upload,
  ImagePlus,
  X,
  Sparkles,
} from "lucide-react";

interface Props {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;

  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;

  setScanning: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AIScannerCore({
  image,
  setImage,
  file,
  setFile,
  setScanning,
}: Props) {

  const [dragging, setDragging] = useState(false);

  const handleFile = (selectedFile: File | undefined) => {

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setFile(selectedFile);

    const url = URL.createObjectURL(selectedFile);

    setImage(url);
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const selectedFile = e.target.files?.[0];

    handleFile(selectedFile);
  };

  const removeImage = () => {

    setImage(null);
    setFile(null);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];

    handleFile(droppedFile);
  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: 0.9,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      className="
        absolute
        z-[100]
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        h-[280px]
        w-[280px]
      "
    >

      {/* REAL FILE INPUT */}

      <input
        id="disease-image-upload"
        type="file"
        accept="image/*"
        className="
          absolute
          h-px
          w-px
          opacity-0
          pointer-events-none
        "
        onChange={handleImage}
      />

      <motion.div

        whileHover={{
          scale: 1.03,
        }}

        animate={{
          boxShadow: dragging
            ? "0 0 60px rgba(34,197,94,.45)"
            : "0 0 40px rgba(34,197,94,.18)",
        }}

        onDragOver={(e) => {

          e.preventDefault();

          setDragging(true);
        }}

        onDragLeave={() => {

          setDragging(false);
        }}

        onDrop={handleDrop}

        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-visible
          rounded-full
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          shadow-[0_0_70px_rgba(34,197,94,.18)]
        "
      >

        {/* GREEN GLOW */}

        <motion.div

          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.5, 0.25],
          }}

          transition={{
            repeat: Infinity,
            duration: 3,
          }}

          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-green-500/10
            blur-[45px]
          "
        />

        <AnimatePresence mode="wait">

          {image ? (

            /* ============================= */
            /* IMAGE SELECTED */
            /* ============================= */

            <motion.div

              key="preview"

              initial={{
                opacity: 0,
                scale: 0.85,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.8,
              }}

              className="
                relative
                z-[200]
                flex
                flex-col
                items-center
                justify-center
              "
            >

              <img

                src={image}

                alt="Selected crop"

                className="
                  h-[150px]
                  w-[150px]
                  rounded-[28px]
                  object-cover
                  border
                  border-white/15
                  shadow-[0_20px_50px_rgba(0,0,0,.35)]
                "
              />

              <p
                className="
                  mt-3
                  max-w-[200px]
                  truncate
                  text-xs
                  text-white/50
                "
              >
                {file?.name}
              </p>

              <div className="mt-4 flex gap-3">

                <button

                  type="button"

                  onClick={removeImage}

                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-red-400/20
                    bg-red-500/10
                    px-4
                    py-2
                    text-sm
                    text-red-300
                    transition
                    hover:bg-red-500/20
                  "
                >

                  <X size={15} />

                  Remove

                </button>

                <button

                  type="button"

                  onClick={() => {

                    if (!file) {
                      alert("Please select an image first.");
                      return;
                    }

                    setScanning(true);
                  }}

                  className="
                    rounded-full
                    bg-gradient-to-r
                    from-green-500
                    to-emerald-600
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(34,197,94,.35)]
                    transition
                    hover:scale-105
                  "
                >

                  Analyze

                </button>

              </div>

            </motion.div>

          ) : (

            /* ============================= */
            /* UPLOAD STATE */
            /* ============================= */

            <motion.div

              key="upload"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -20,
              }}

              className="
                relative
                z-[200]
                flex
                flex-col
                items-center
              "
            >

              <motion.div

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}

              >

                <Upload

                  size={72}

                  className="
                    text-green-300
                    drop-shadow-[0_0_25px_rgba(34,197,94,.8)]
                  "
                />

              </motion.div>

              <h2
                className="
                  mt-7
                  text-[26px]
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Upload Crop Image
              </h2>

              <p
                className="
                  mt-3
                  max-w-[210px]
                  text-center
                  leading-7
                  text-white/60
                "
              >
                Drag & Drop or browse your crop image
                for AI disease diagnosis.
              </p>

              {/* IMPORTANT:
                  LABEL DIRECTLY OPENS FILE PICKER
              */}

              <label

                htmlFor="disease-image-upload"

                className="
                  relative
                  z-[300]
                  mt-8
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-green-400/20
                  bg-green-500/10
                  px-6
                  py-3
                  font-semibold
                  text-green-200
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-green-500/20
                "
              >

                <ImagePlus size={18} />

                Choose Image

              </label>

              <div
                className="
                  mt-7
                  rounded-full
                  border
                  border-green-400/20
                  bg-green-500/10
                  px-5
                  py-2
                "
              >

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={14}
                    className="text-green-300"
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-green-200
                    "
                  >
                    AI READY
                  </span>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </motion.div>
  );
}