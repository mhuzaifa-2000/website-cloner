"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface TextSpacerProps {
  text: string
  className?: string
}

const DIM = "rgba(255,255,255,0.18)"
const LIT = "#ffffff"

export function TextSpacer({ text, className }: TextSpacerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const words = text.split(/\s+/).filter(Boolean)
  const [litCount, setLitCount] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let frame = 0

    if (reduceMotion) {
      frame = window.requestAnimationFrame(() => setLitCount(words.length))
      return () => {
        if (frame) window.cancelAnimationFrame(frame)
      }
    }

    const update = () => {
      frame = 0
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight || 1

      // Progress from 0 (section bottom just entering) to 1 (section
      // top passing the upper third of the viewport). Mid-reveal as the
      // section scrolls through view.
      const start = viewport * 0.85
      const end = viewport * 0.2
      const raw = (start - rect.top) / (start - end)
      const progress = Math.min(1, Math.max(0, raw))

      setLitCount(Math.round(progress * words.length))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    frame = window.requestAnimationFrame(update)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [words.length])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex min-h-[560px] items-center justify-center bg-[#001413] px-6 py-20 md:py-[120px]",
        className
      )}
    >
      <h2
        className="mx-auto max-w-[1100px] text-center font-heading font-medium leading-[1.05]"
        style={{
          fontSize: "clamp(40px, 6vw, 80px)",
          letterSpacing: "-0.03em",
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            style={{
              color: i < litCount ? LIT : DIM,
              transition: "color 200ms ease-out",
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
    </section>
  )
}
