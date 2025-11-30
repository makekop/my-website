// src/components/types.ts
export type MediaType = "image" | "video" | "gif";

export interface ProjectSliceProps {
    title?: string;
    children?: React.ReactNode; // description or JSX
    mediaSrc: "image"; // path or imported asset
    mediaType?: MediaType; // currently only "image" used in examples
    alt?: string;
    // CSS-like object-position value or percent e.g. "center 30%"
    imagePosition?: string;
    // whether the image should be on the left (default false -> right)
    imageLeft?: boolean;
}
