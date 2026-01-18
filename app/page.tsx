use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = "envelope" | "opening" | "letter" | "reading";

export default function Home() {
  const [stage, setStage] = useState<Stage>("envelope");

  const handleEnvelopeClick = () => {
    if (stage === "envelope") {
      setStage("opening");
      setTimeout(() => setStage("letter"), 800);
    }
  };

  const handleLetterClick = () => {
    if (stage === "letter") {
      setStage("reading");
    }
  };

  const letterParagraphs = [
    "Mi amor,",
    "Hay días en los que me detengo un momento solo para pensar en ti. En cómo tu risa se convirtió en mi sonido favorito, en cómo tus ojos guardan un universo entero que nunca me canso de explorar.",
    "Antes de conocerte, no sabía que el amor podía sentirse así de tranquilo y a la vez tan intenso. Contigo aprendí que amar no es solo un sentimiento, es una decisión que tomo cada mañana cuando despierto pensando en ti.",
    "Me encanta la forma en que me miras cuando crees que no me doy cuenta. Me encanta cómo tu mano busca la mía sin pensarlo. Me encanta que seas mi refugio, mi calma, mi persona favorita.",
    "Gracias por elegirme cada día. Gracias por ser paciente conmigo, por reírte de mis tonterías, por abrazarme cuando las palabras no alcanzan.",
    "Quiero que sepas que no importa cuánto tiempo pase, mi corazón siempre va a latir más fuerte cuando estés cerca. Eres mi presente favorito y el futuro que más deseo.",
    "Te amo con todo lo que soy.",
    "Tuya, siempre."
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg, #faf7f2 0%, #f5e6e0 50%, #faf7f2 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #d4a5a5 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #c9a6a6 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 right-10 w-24 h-24 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d4a5a5 0%, transparent 70%)" }}
        />
      </div>

      <AnimatePresence mode="wait">
        {stage !== "reading" ? (
          <motion.div
            key="envelope-container"
            className="flex flex-col items-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative cursor-pointer select-none"
              onClick={stage === "envelope" ? handleEnvelopeClick : undefined}
            >
              <motion.div
                className="relative"
                animate={
                  stage === "envelope"
                    ? {
                        y: [0, -8, 0],
                        rotate: [-1, 1, -1],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={stage === "envelope" ? { scale: 1.02 } : {}}
                whileTap={stage === "envelope" ? { scale: 0.98 } : {}}
              >
                <svg
                  width="260"
                  height="180"
                  viewBox="0 0 280 200"
                  className="drop-shadow-xl sm:w-[320px] sm:h-[220px]"
                >
                  <defs>
                    <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fdfbf9" />
                      <stop offset="100%" stopColor="#f0e6dc" />
                    </linearGradient>
                    <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e8dcd4" />
                      <stop offset="100%" stopColor="#f5ebe4" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="10"
                    y="50"
                    width="260"
                    height="140"
                    rx="4"
                    fill="url(#envelopeGradient)"
                    stroke="#d4c4b8"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M10 190 L140 110 L270 190"
                    fill="none"
                    stroke="#d4c4b8"
                    strokeWidth="1"
                    opacity="0.4"
                  />

                  <motion.g
                    animate={
                      stage === "opening" || stage === "letter"
                        ? { rotateX: 180, opacity: 0 }
                        : { rotateX: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ transformOrigin: "140px 50px", transformStyle: "preserve-3d" }}
                  >
                    <path
                      d="M10 50 L140 120 L270 50 Z"
                      fill="url(#flapGradient)"
                      stroke="#d4c4b8"
                      strokeWidth="1.5"
                    />
                    <ellipse
                      cx="140"
                      cy="72"
                      rx="16"
                      ry="12"
                      fill="#d4a5a5"
                      opacity="0.9"
                    />
                  </motion.g>
                </svg>

                <AnimatePresence>
                  {(stage === "opening" || stage === "letter") && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
                      style={{ top: "10px" }}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: stage === "letter" ? -30 : 40, opacity: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                      onClick={handleLetterClick}
                      whileHover={stage === "letter" ? { scale: 1.03, y: -35 } : {}}
                      whileTap={stage === "letter" ? { scale: 0.98 } : {}}
                    >
                      <div
                        className="w-[180px] h-[120px] sm:w-[220px] sm:h-[140px] rounded-sm relative"
                        style={{
                          background: "linear-gradient(145deg, #fffefa 0%, #f8f4ef 100%)",
                          boxShadow: "0 4px 20px rgba(139, 126, 126, 0.2), 0 2px 8px rgba(139, 126, 126, 0.1)",
                        }}
                      >
                        <div className="absolute inset-4 flex flex-col gap-1.5">
                          <div className="h-1.5 w-3/4 rounded-full bg-[#d4a5a5] opacity-30" />
                          <div className="h-1.5 w-full rounded-full bg-[#c9a6a6] opacity-20" />
                          <div className="h-1.5 w-2/3 rounded-full bg-[#d4a5a5] opacity-25" />
                          <div className="h-1.5 w-4/5 rounded-full bg-[#c9a6a6] opacity-20" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <motion.p
              className="text-center text-[#8b7e7e] text-base sm:text-lg tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              key={stage}
            >
              {stage === "envelope" && "Presiona el sobre para abrirlo"}
              {(stage === "opening" || stage === "letter") && "Ahora presiona la carta"}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="letter-reading"
            className="w-full max-w-2xl mx-auto py-8 sm:py-12 px-2"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative rounded-sm p-6 sm:p-10 md:p-12"
              style={{
                background: "linear-gradient(145deg, #fffefa 0%, #f8f4ef 100%)",
                boxShadow: "0 10px 40px rgba(139, 126, 126, 0.15), 0 4px 12px rgba(139, 126, 126, 0.1)",
              }}
            >
              <div
                className="absolute top-4 left-4 w-16 h-16 opacity-10"
                style={{
                  background: "radial-gradient(circle, #d4a5a5 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-4 right-4 w-20 h-20 opacity-10"
                style={{
                  background: "radial-gradient(circle, #c9a6a6 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 space-y-5 sm:space-y-6">
                {letterParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className={`text-[#4a3f3f] leading-relaxed ${
                      index === 0
                        ? "text-xl sm:text-2xl font-medium mb-6"
                        : index >= letterParagraphs.length - 2
                        ? "text-lg sm:text-xl font-medium mt-8"
                        : "text-base sm:text-lg"
                    }`}
                    style={{
                      fontFamily: index === 0 || index >= letterParagraphs.length - 2
                        ? "'Playfair Display', serif"
                        : "'Cormorant Garamond', serif",
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-10 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <svg width="60" height="30" viewBox="0 0 60 30" className="opacity-30">
                  <path
                    d="M30 25 C15 25 5 15 5 8 C5 3 10 0 15 3 C20 6 25 15 30 25 C35 15 40 6 45 3 C50 0 55 3 55 8 C55 15 45 25 30 25 Z"
                    fill="#d4a5a5"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}