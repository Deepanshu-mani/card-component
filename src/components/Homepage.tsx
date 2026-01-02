import React from "react";

import {
  avatarArray,
  bgArray,
  itemArray,
  widgetArray,
} from "../utils/imagesArray";
import { iconSets } from "../utils/icons";
import { titles } from "../utils/titles";
import { ImageSet } from "./types";
import AnimatedCard from "./AnimatedCard";

/**
 * Homepage component - Main landing page with animated card
 */
const HomePage: React.FC = () => {
  // Transform the separate arrays into ImageSet objects
  const imageSets: ImageSet[] = avatarArray.map((_, index) => ({
    bg: bgArray[index],
    avatar: avatarArray[index],
    item: itemArray[index],
    widget: widgetArray[index],
  }));

  return (
    <div className="bg-[#111111] overflow-hidden min-h-screen flex items-center justify-center text-white">
      {/* Image Section - Centered and properly sized */}
      <div className="image-sec w-auto max-w-md px-8">
        <AnimatedCard
          imageSets={imageSets}
          iconSets={iconSets}
          titles={titles}
          autoPlayInterval={5000}
          enable3D={true}
        />

      </div>
    </div>
  );
};

export default HomePage;
