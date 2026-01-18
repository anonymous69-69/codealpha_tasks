"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/ui/background-paths";
import ProfileSection from "../components/ProfileSection";

export default function Home() {
  const [isDiscovered, setIsDiscovered] = useState(false);

  return (
    // Fixed: Added h-screen and overflow-hidden to prevent global scrolling
    <main className="bg-black h-screen w-screen overflow-hidden">
      <motion.div
        className="flex w-[200vw] h-full"
        animate={{ x: isDiscovered ? "-100vw" : "0vw" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* --- SECTION 1: HERO --- */}
        <div className="w-screen h-full relative flex-shrink-0">
          <BackgroundPaths 
            title="RHYTHM SARMA'S PORTFOLIO" 
            onDiscover={() => setIsDiscovered(true)}
          />
        </div>

        {/* --- SECTION 2: BIOGRAPHY --- */}
        {/* Fixed: Added h-full and overflow-y-auto so ONLY this section scrolls */}
        <div className="w-screen h-full relative flex-shrink-0 overflow-y-auto">
          <ProfileSection />
        </div>
      </motion.div>
    </main>
  );
}