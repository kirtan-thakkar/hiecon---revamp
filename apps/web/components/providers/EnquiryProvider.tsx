"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type EnquiryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

type EnquiryContextType = {
  items: EnquiryItem[];
  addItem: (item: EnquiryItem) => void;
  removeItem: (id: string) => void;
  clearEnquiry: () => void;
  isInEnquiry: (id: string) => boolean;
};

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>([]);

  // We are NOT using localStorage to persist the cart per the user's request: 
  // "no need for keeping track of what was in the cart btw... inquiry list is lost if the website is closed"
  
  const addItem = (item: EnquiryItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearEnquiry = () => {
    setItems([]);
  };

  const isInEnquiry = (id: string) => {
    return items.some((item) => item.id === id);
  };

  return (
    <EnquiryContext.Provider value={{ items, addItem, removeItem, clearEnquiry, isInEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
