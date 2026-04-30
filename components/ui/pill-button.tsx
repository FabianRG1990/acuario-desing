"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type PillButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "foam";
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export function PillButton({
  href,
  children,
  className,
  icon,
  onClick,
}: PillButtonProps) {
  const inner = (
    <motion.span
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-[14px] font-semibold tracking-[-0.01em] glass-bubble",
        className,
      )}
    >
      <span className="py-2">{children}</span>
      <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
        {icon ?? <ArrowUpRight weight="bold" size={14} />}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
