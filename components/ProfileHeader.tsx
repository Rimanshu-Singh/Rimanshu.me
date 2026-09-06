"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { useReducedMotion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Web3 Developer",
];

function RotatingProfileRole() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="mt-1">
        <span className="flex gap-0.25 overflow-hidden text-xs sm:text-lg font-semibold text-neutral-500 font-sans w-auto">
          Full-Stack Developer
        </span>
      </div>
    );
  }

  return (
    <div className="mt-1 inline-grid grid-cols-1 align-baseline text-left">
      {/* Invisible anchor to reserve width & prevent layout shift */}
      <span className="invisible select-none opacity-0 col-start-1 row-start-1 text-xs sm:text-lg font-semibold font-sans whitespace-nowrap">
        Full-Stack Developer
      </span>

      {/* Smooth animated role with TextAnimate */}
      <span className="col-start-1 row-start-1 overflow-hidden inline-flex items-center">
        <TextAnimate
          key={roles[index]}
          as="span"
          animation="blurInUp"
          by="character"
          duration={0.35}
          startOnView={false}
          className="text-xs sm:text-lg font-semibold text-neutral-500 font-sans whitespace-nowrap"
        >
          {roles[index]}
        </TextAnimate>
      </span>
    </div>
  );
}

interface ProfileHeaderProps {
  name?: string;
  age?: string;
  title?: string;
  location?: string;
  profileImage?: string;
}

export default function ProfileHeader({
  name = "Rimanshu Singh",
  age = "20",
  location = "West Bengal, IND",
  profileImage = "/pfp.png",
}: ProfileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const [views, setViews] = useState<number | string>(1023);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.uniqueVisitors) {
          setViews(Math.max(1023, data.uniqueVisitors));
        }
      })
      .catch(() => {
        setViews(1023);
      });
  }, []);

  return (
    <div className="w-full px-2 sm:px-4 mt-2 mb-2">
      <div className="flex flex-row gap-3 sm:gap-7 items-center w-full h-auto sm:h-38 py-3 sm:py-0">
        {/* Profile Image Container */}
        <div className="relative ml-2 sm:ml-4 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 overflow-hidden shrink-0 rounded-[12px] w-27 h-27 sm:w-30 sm:h-30">
          <div className="rounded-[12px] size-25 sm:size-28">
            <Image
              alt="Profile"
              width={120}
              height={120}
              priority
              className="absolute inset-0 m-auto w-25 h-25 sm:w-28 sm:h-28 rounded-lg shadow-sm object-cover"
              src={profileImage}
            />
          </div>
        </div>

        {/* Profile Details and Right Side */}
        <div className="flex flex-row justify-between w-full items-center gap-3 pr-3 sm:pr-0 min-w-0 flex-1">
          {/* Main Info */}
          <div className="flex flex-col items-start text-left min-w-0 flex-1">
            {/* Theme Toggle Icon */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="cursor-pointer mb-2 text-neutral-800 dark:text-neutral-200 hover:opacity-80 transition-opacity"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 30 30"
                  className="rotate-180 w-4 h-4 sm:w-5 sm:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89 s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4 s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44 c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.21V4.39h-0.21c-1.36,0-2.66,0.27-3.9,0.8 S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z" />
                </svg>
              </button>
            )}

            {/* Name */}
            <p className="font-serif text-[23px] sm:text-4xl text-foreground leading-none truncate max-w-full">
              {name}
            </p>

            {/* Rotating Role Title */}
            <RotatingProfileRole />

            {/* Location & Age */}
            <p className="text-[9px] sm:text-xs text-neutral-500 font-semibold font-sans mt-0.5 truncate max-w-full">
              {age}, {location}
            </p>
          </div>

          {/* Right Side: Views Counter */}
          <div className="flex shrink-0">
            <div className="h-30 w-auto pr-4 sm:pr-7 pt-2">
              <div className="flex gap-1 items-center text-neutral-600 dark:text-neutral-500 cursor-default overflow-hidden">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sm sm:text-base shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <div className="relative h-4 sm:h-5 flex items-center justify-start min-w-[30px]">
                  <span className="font-mono text-xs sm:text-[13px]">{views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashed separator below section */}
      <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 mt-4 sm:mt-5" />
    </div>
  );
}
