"use client";

import React from "react";
import EnhancedPortfolio from "@/components/Portfolio";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {
  return (
    <ReactLenis root>
      <EnhancedPortfolio />
    </ReactLenis>
  );
}
