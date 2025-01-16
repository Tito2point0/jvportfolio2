import { cn } from "../utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";

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
  return (
    <div
      id={`bento-grid-item-${id}`}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4",
        "dark:bg-black dark:border-white/[0.2] bg-white border-transparent flex flex-col space-y-4 border-2 justify-between",
        className
      )}
      style={{
        // 1) Keep the original background gradient but reduce opacity so images show through
        //    or remove it if you want the image fully visible. Adjust to your taste:
        background:
          "linear-gradient(90deg, rgba(8,42,110,0.7) 18%, rgba(22,128,162,0.6) 40%, rgba(14,73,80,0.5) 56%, rgba(19,70,73,0.8) 78%)",

        // 2) For the first box, give more height so the image is larger
        minHeight: id === 1 ? "24rem" : "auto",
      }}
    >
      {/* BackgroundGradientAnimation for Box 6 */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}

      {/* Spare Image for Box 5 (Behind everything, but visible if partially transparent) */}
      {spareImg && id === 5 && (
        <div className="absolute inset-0 z-10 opacity-80 pointer-events-none">
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {/* Main Image Layer (z-20 so it's above the gradient but below content) */}
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

      {/* Content Layer (z-30 so text is above images and gradient) */}
      <div
        className={cn(
          "relative z-30 group-hover/bento:translate-x-2 transition duration-200",
          titleClassName
        )}
      >
        {/* Description */}
        {description && (
          <div className="font-sans font-normal text-[#c1c2d3] text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10">
            {description}
          </div>
        )}

        {/* Title */}
        {title && (
          <div className="font-sans font-extralight text-lg lg:text-3xl max-w-96 z-10 mt-2 text-white">
            {title}
          </div>
        )}

        {/* Sample Tech Stack for Box 3 */}
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
      </div>
    </div>
  );
};
