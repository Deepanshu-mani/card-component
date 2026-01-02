import React from "react";

/**
 * Configuration for a single image set
 */
export interface ImageSet {
    bg: string;
    avatar: string;
    item: string;
    widget: string;
}

/**
 * Configuration for title badges
 */
export interface TitleConfig {
    text: string;
    bgClass: string;
}

/**
 * Props for the AnimatedCard component
 */
export interface AnimatedCardProps {
    imageSets: ImageSet[];
    iconSets: React.ReactNode[][];
    titles: TitleConfig[];
    autoPlayInterval?: number;
    enable3D?: boolean;
    className?: string;
}

/**
 * Props for the ImageLayer component
 */
export interface ImageLayerProps {
    bgImage: string;
    avatarImage: string;
    itemImage: string;
    widgetImage: string;
    isTransitioning: boolean;
    onClick: () => void;
    currentIndex: number;
}

/**
 * Props for the TitleBadges component
 */
export interface TitleBadgesProps {
    title: TitleConfig;
    className?: string;
}

/**
 * Props for the IconSet component
 */
export interface IconSetProps {
    icons: React.ReactNode[];
    className?: string;
}
