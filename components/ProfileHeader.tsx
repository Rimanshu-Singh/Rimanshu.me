"use client";

import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import PortfolioStars from "./PortfolioStars";
import Image from "next/image";
import { useMounted } from "@/hooks/useMounted";

interface ProfileHeaderProps {
  name?: string;
  age?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
  };
}

export default function ProfileHeader({
  name = "Rimanshu Patel",
  age = "20",
  title = "Engineer • Developer • Builder",
  profileImage = "/pfp.png",
  socialLinks = {
    twitter: "https://x.com/rimanshu_patel",
    github: "https://github.com/Rimanshu-Singh",
    linkedin: "https://www.linkedin.com/in/rimanshu-singh-246a79245/",
  },
}: ProfileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full px-4 sm:px-8 gap-6 mt-4 relative z-10">
      {/* LEFT SIDE */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
        {/* Profile Image */}
        <div
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 sm:ring-8 ring-[var(--background)] shadow-xl bg-cover bg-center shrink-0 -mt-16 sm:-mt-24 relative z-20"
          style={{ backgroundImage: `url("${profileImage}")` }}
          aria-label={name}
        />

        {/* Info + Socials */}
        <div className="flex flex-col gap-2 pb-1">
          {/* Name */}
          <h1 className="text-2xl sm:text-4xl font-semibold flex items-center gap-1.5">
            {name}
            <span className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Image
                src="/verify-dark.png"
                alt="Verified"
                width={20}
                height={20}
                className="object-contain dark:invert"
              />
            </span>
          </h1>

          {/* Age + Title */}
          <p className="text-xs sm:text-sm opacity-40">
            {age} • {title}
          </p>

          {/* Social Links */}
          <div className="flex gap-2 pt-1">
            {socialLinks.github && (
              <SocialIcon label="GitHub" href={socialLinks.github}>
                <FaGithub />
              </SocialIcon>
            )}
            {socialLinks.twitter && (
              <SocialIcon label="Twitter" href={socialLinks.twitter}>
                <FaXTwitter />
              </SocialIcon>
            )}
            {socialLinks.resume && (
              <SocialIcon label="Resume" href={socialLinks.resume}>
                <FaPaperclip />
              </SocialIcon>
            )}
            {socialLinks.linkedin && (
              <SocialIcon label="LinkedIn" href={socialLinks.linkedin}>
                <FaLinkedin />
              </SocialIcon>
            )}

            {mounted && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center"
                  >
                    {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="sm:self-end pb-3">
        <PortfolioStars />
      </div>
    </div>
  );
}

/* Reusable Social Icon */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-black/75 dark:text-white/80"
        >
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
