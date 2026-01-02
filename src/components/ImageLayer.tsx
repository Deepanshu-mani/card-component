import React from "react";
import { ImageLayerProps } from "./types";

/**
 * ImageLayer component renders the layered image composition
 * @param bgImage - Background image URL
 * @param avatarImage - Avatar image URL
 * @param itemImage - Item image URL
 * @param widgetImage - Widget image URL
 * @param isTransitioning - Whether the component is transitioning
 * @param onClick - Click handler
 * @param currentIndex - Current image index
 */
const ImageLayer: React.FC<ImageLayerProps> = ({
    bgImage,
    avatarImage,
    itemImage,
    widgetImage,
    isTransitioning,
    onClick,
    currentIndex,
}) => {
    return (
        <div className="relative w-full cursor-pointer">
            {/* Item Image */}
            <div className="absolute top-0 -right-16 sm:-right-20 md:-right-24 z-0">
                <img
                    src={itemImage}
                    alt={`Item ${currentIndex + 1}`}
                    className="item w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain"
                />
            </div>

            {/* Background Image */}
            <img
                src={bgImage}
                alt={`Background ${currentIndex + 1}`}
                className="bgimg w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] object-cover rounded-lg z-10 relative"
            />

            {/* Avatar Image */}
            <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 z-20">
                <img
                    src={avatarImage}
                    alt={`Avatar ${currentIndex + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default ImageLayer;
