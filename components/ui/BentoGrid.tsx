'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Technical from "./Technical";
import React from 'react';
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";


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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
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
  img: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  
}) => {

  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dlam.nguyen03@gmail.com");
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >

      <div className={`${id === 6 && 'flex justify-center'} 'h-full'  `} >
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}   
              alt={img} 
              className={cn( imgClassName, 'object-cover, object-center')} 
            />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img 
              src={spareImg} 
              alt={spareImg} 
              className={'object-cover, object-center w-full h-full'} 
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
          )}

          <div className={cn(
            titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
            <div className="font-sans font-extralight text-[#c1cc2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
            </div>
            

             {id === 2 && ( <Technical/>)}
            
            {id === 3 && (
                <div className="relative w-full max-w-md mx-auto p-4 sm:max-w-none sm:p-6 bg-gradient-to-r from-[#10132E] to-[#3c4059] rounded-md shadow-lg">
                  <div className="flex flex-wrap gap-3 sm:gap-6 justify-center">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      {["React.js", "Next.js", "TypeScript"].map((item) => (
                        <span
                          key={item}
                          className="py-2 px-4 text-sm sm:text-base font-medium text-white 
                                    bg-[#2c2f44] rounded-md shadow hover:bg-[#44485c] 
                                    transition-colors duration-200 whitespace-nowrap"
                        >
                          {item}
                        </span>
                      ))}
                      <span className="py-4 px-4 rounded-md bg-[#2c2f44]" />
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <span className="py-4 px-4 rounded-md bg-[#2c2f44]" />
                      {["Java", "Node.JS", "MySQL"].map((item) => (
                        <span
                          key={item}
                          className="py-2 px-4 text-sm sm:text-base font-medium text-white 
                                    bg-[#2c2f44] rounded-md shadow hover:bg-[#44485c] 
                                    transition-colors duration-200 whitespace-nowrap"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}/>

                </div>
                <MagicButton
                  title={copied ? "Email kopiert!" : "Kopiere Email"}
                  icon={<IoCopyOutline/>}
                  position="left"
                  otherClasses="!bg-[161a31]"
                  handleClick={handleCopy}
                />
              </div>
            )}
      </div>
    </div>
    </div>
  );
};
