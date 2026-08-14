"use client";
import { useState } from "react";
import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
  ringed?: boolean;
}

const sizeMap: Record<AvatarSize, string> = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-base",
  lg: "w-20 h-20 text-xl",
  xl: "w-32 h-32 text-3xl",
  "2xl": "w-48 h-48 text-5xl",
};

const MAvatar = ({
  src,
  alt = "avatar",
  name,
  size = "md",
  className = "",
  ringed = false,
}: AvatarProps) => {
  const [errored, setErrored] = useState(false);
  const sizeClasses =
    typeof size === "string" && sizeMap[size] ? sizeMap[size] : ""; // fall through if size is a custom className/number

  const initials = name
    ? name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase())
      .join("")
    : null;

  const showImage = src && !errored;

  return (
    <div
      className={`
        relative inline-flex items-center justify-center
        rounded-full overflow-hidden shrink-0
        bg-neutral-200 text-neutral-700 font-medium
        ${ringed ? "ring-2 ring-white" : ""}
        ${sizeClasses}
        ${className}
      `}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100px, 200px"
          className="object-cover"
          onError={() => setErrored(true)}
        />
      ) : initials ? (
        <span>{initials}</span>
      ) : (
        // fallback generic person icon
        <svg
          viewBox="0 0 24 24"
          className="w-3/5 h-3/5 fill-current opacity-60"
        >
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      )}
    </div>
  );
};

export default MAvatar;
