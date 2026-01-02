import React from "react";
import { TitleBadgesProps } from "./types";

/**
 * TitleBadges component displays animated title badges
 * @param title - Title configuration with text and background class
 * @param className - Additional CSS classes
 */
const TitleBadges: React.FC<TitleBadgesProps> = ({ title, className = "" }) => {
    return (
        <div className={`flex flex-col items-center gap-4 mt-4 py-4 ${className}`}>
            {title.text.split(", ").map((titleText, index) => (
                <h3
                    key={index}
                    className={`w-full text-xs py-2 ${title.bgClass} rounded-full`}
                >
                    {titleText}
                </h3>
            ))}
        </div>
    );
};

export default TitleBadges;
