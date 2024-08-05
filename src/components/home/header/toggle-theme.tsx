'use client';
import React from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { toggleTheme } from '@/lib/features/themeSlice';
import { TzToggleTheme } from "topaz-react";

export function ToggleTheme() {
  const store = useAppStore();
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <TzToggleTheme onClick={handleClick} />
  );
}
