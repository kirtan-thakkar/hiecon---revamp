import { create } from 'zustand';

export type EnquiryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

type EnquiryStore = {
  items: EnquiryItem[];
  addItem: (item: EnquiryItem) => void;
  removeItem: (id: string) => void;
  clearEnquiry: () => void;
  isInEnquiry: (id: string) => boolean;
};

export const useEnquiry = create<EnquiryStore>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => {
    if (state.items.find((i) => i.id === item.id)) return state;
    return { items: [...state.items, item] };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id)
  })),
  clearEnquiry: () => set({ items: [] }),
  isInEnquiry: (id) => get().items.some((item) => item.id === id),
}));
