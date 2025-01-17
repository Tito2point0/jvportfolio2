"use client";

import { useState } from "react";
import { cn } from "../utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jasvasquez@live.com");
    setCopied(true);
  };

  return (
    <div
      id={`bento-grid-item-${id}`}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition py-5 duration-200 shadow-input dark:shadow-none ",
        " bg-white border-transparent flex flex-col space-y-4 border-2 justify-between",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(8,42,110,0.7) 18%, rgba(22,128,162,0.6) 40%, rgba(14,73,80,0.5) 56%, rgba(19,70,73,0.8) 78%)",
        minHeight: id === 1 ? "24rem" : "auto",
      }}
    >
      {/* BackgroundGradientAnimation for Box 6 */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-40 flex items-center justify-center font-bold text-3xl text-pink-300">
          
          </div>
        </BackgroundGradientAnimation>
      )}

      {/* Spare Image for Box 5 */}
      {spareImg && id === 5 && (
        <div className="absolute inset-0 z-10 opacity-80 pointer-events-none">
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {/* Main Image Layer */}
      {img && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src={img}
            alt={img}
            className={cn(
              "w-full h-full object-cover object-center",
              imgClassName
            )}
          />
        </div>
      )}

      {/* Content Layer */}
      <div
        className={cn(
          "relative z-30 group-hover/bento:translate-x-2 transition duration-200",
          titleClassName
        )}
      >
        {description && (
          <div className="font-sans font-normal text-[#c1c2d3] text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10">
            {description}
          </div>
        )}

        {title && (
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mt-2 text-white">
            {title}
          </div>
        )}

        {id === 3 && (
          <div className="flex gap-2 mt-3">
            {["React.js", "Next.js", "TailwindCSS", "TypeScript"].map((item) => (
              <span
                key={item}
                className="py-1 px-2 text-sm bg-[#10132E] text-white rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        )}

{id === 6 && (
          <div className="mt-5 relative">
            <div
              className="absolute -bottom-5 right-0 z-50 pointer-events-none"
              style={{ width: "100px", height: "100px" }}
            >
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              title={copied ? "Copied!" : "Copy my Email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
