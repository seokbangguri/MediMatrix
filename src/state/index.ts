import { create } from 'zustand';

interface SpermState {
    data: any[]
    addData: (input: any[]) => void
}

const useSpermStore = create<SpermState>((set) => ({
    data: [],
    addData: (input) => {
        set({ data: input });
    }
}));

export default useSpermStore;