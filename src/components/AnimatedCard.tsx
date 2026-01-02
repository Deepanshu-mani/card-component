import { gsap } from "gsap";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatedCardProps } from "./types";
import ImageLayer from "./ImageLayer";
import TitleBadges from "./TitleBadges";
import IconSet from "./IconSet";

/**
 * AnimatedCard component - Main container with GSAP 3D animations
 * @param imageSets - Array of image sets containing bg, avatar, item, and widget images
 * @param iconSets - Array of icon sets
 * @param titles - Array of title configurations
 * @param autoPlayInterval - Interval for auto-transitions (default: 5000ms)
 * @param enable3D - Enable 3D mouse tracking (default: true)
 * @param className - Additional CSS classes
 */
const AnimatedCard: React.FC<AnimatedCardProps> = ({
    imageSets,
    iconSets,
    titles,
    autoPlayInterval = 5000,
    enable3D = true,
    className = "",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // GSAP 3D mouse tracking effect
    useEffect(() => {
        if (!enable3D) return;

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const rotateY = ((mouseX - centerX) / centerX) * 15;
            const rotateX = ((mouseY - centerY) / centerY) * -15;

            gsap.to(".image-sec", {
                rotateY,
                rotateX,
                translateZ: 30,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1000,
                transformOrigin: "center",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [enable3D]);

    const triggerTransition = useCallback(() => {
        setIsTransitioning(true);

        // Temporarily hide elements
        const elements = document.querySelectorAll(".widget, .item, .icon");
        elements.forEach((el) => ((el as HTMLElement).style.opacity = "0"));

        // Change image and icon set halfway through the animation
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
        }, 400);

        // Trigger pop-in animation for widget, item, and icons
        setTimeout(() => {
            elements.forEach((el) => {
                (el as HTMLElement).style.opacity = "1";
                el.classList.add("pop-in");
            });

            // Remove pop-in class after animation ends
            setTimeout(() => {
                elements.forEach((el) => el.classList.remove("pop-in"));
            }, 400);
        }, 400);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 800);
    }, [imageSets.length]);

    // Auto-transition effect
    useEffect(() => {
        // Trigger the first animation after mounting
        setTimeout(() => {
            triggerTransition();
        }, 100);

        const interval = setInterval(() => {
            triggerTransition();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [triggerTransition, autoPlayInterval]);

    const handleClick = () => {
        if (!isTransitioning) triggerTransition();
    };

    const currentImageSet = imageSets[currentIndex];
    const currentIconSet = iconSets[currentIndex % iconSets.length];
    const currentTitle = titles[currentIndex % titles.length];

    return (
        <div
            className={`relative ${isTransitioning ? "animate-horizontal-rotation" : ""
                } ${className}`}
            onClick={handleClick}
        >
            <ImageLayer
                bgImage={currentImageSet.bg}
                avatarImage={currentImageSet.avatar}
                itemImage={currentImageSet.item}
                widgetImage={currentImageSet.widget}
                isTransitioning={isTransitioning}
                onClick={handleClick}
                currentIndex={currentIndex}
            />

            {/* Widget Image - rendered separately for proper z-index control */}
            <div className="widget absolute bottom-6 sm:bottom-8 left-2 sm:left-2 md:-left-20 z-50">
                <img
                    src={currentImageSet.widget}
                    alt={`Widget ${currentIndex + 1}`}
                    className="w-1/3 sm:w-1/2 md:w-1/2 object-contain rounded-lg"
                />
            </div>

            {/* Title and Icon Set Overlays */}
            <TitleBadges
                title={currentTitle}
                className="absolute w-2/3 sm:w-2/3 top-32 sm:top-40 md:top-44 left-1/2 -translate-x-1/2 z-10 text-center"
            />

            <IconSet
                icons={currentIconSet}
                className="absolute bottom-12 sm:bottom-14 md:bottom-16 right-0 z-10"
            />
        </div>
    );
};

export default AnimatedCard;
