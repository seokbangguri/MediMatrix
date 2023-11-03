import { create } from 'zustand';

interface SpermState {
    data: any[];
    addData: (data: any[]) => void;
}

const useSpermStore = create<SpermState>((set) => ({
    data: [],
    addData: (data) => {
        set({ data });
    }
}));

export default useSpermStore;
