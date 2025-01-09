import { create } from "zustand";

interface useUserStoreType {
  userName: string | null;
  setUserName: (userName: string | null) => void;
}

export const useUserStore = create<useUserStoreType>((set) => ({
  userName: null,
  setUserName: (userName: string | null) => set({ userName: userName }),
}));
