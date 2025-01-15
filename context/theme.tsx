"use client";

import React from "react";
import {
  ThemeProviderProps,
  ThemeProvider as NextThmesProvider,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThmesProvider {...props}>{children}</NextThmesProvider>;
};

export default ThemeProvider;
