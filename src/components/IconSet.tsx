import React from "react";
import { IconSetProps } from "./types";

/**
 * IconSet component displays a set of icons with animations
 * @param icons - Array of React nodes representing icons
 * @param className - Additional CSS classes
 */
const IconSet: React.FC<IconSetProps> = ({ icons, className = "" }) => {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="icon p-1.5 rounded-full text-black text-sm"
                >
                    {icon}
                </div>
            ))}
        </div>
    );
};

export default IconSet;
