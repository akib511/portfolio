"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Project preview image with a styled fallback.
 * Shows the project number placeholder when no image is set
 * or when the image fails to load (e.g. the file is missing).
 * The image gently zoom-settles into place when scrolled into view.
 */
export default function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const { number, title, image, color } = project;

  if (!image || failed) {
    return (
      <div
        className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${color}20, #09090b 75%)`,
        }}
      >
        <span
          className="text-7xl font-black opacity-30 sm:text-8xl"
          style={{ color }}
        >
          {number}
        </span>

        <p className="mt-3 text-sm text-zinc-500">{title} Preview</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-hidden rounded-xl"
    >
      <Image
        src={image}
        alt={`${title} project preview`}
        width={1600}
        height={600}
        onError={() => setFailed(true)}
        className="w-full rounded-xl transition-transform duration-700 hover:scale-[1.02]"
      />
    </motion.div>
  );
}
