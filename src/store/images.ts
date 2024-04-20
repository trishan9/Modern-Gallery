import { create } from "zustand";

interface ImagesState {
    imageGrid: number
    setImageGrid: (by: number) => void
}

export const useImagesStore = create<ImagesState>((set) => ({
    imageGrid: 0,
    setImageGrid: (grid: number) => set((state) => ({ imageGrid: grid })),
}));