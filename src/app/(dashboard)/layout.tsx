"use client"
import { useState } from 'react';
import { Provider } from '@/components/ui/provider';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { Box, Theme } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { relative } from 'path';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>

  );
}