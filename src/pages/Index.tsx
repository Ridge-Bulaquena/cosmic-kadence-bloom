
import { useState } from "react";
import { ThemeHeader } from "@/components/ThemeHeader";
import { ThemePreview } from "@/components/ThemePreview";
import { CustomizationSidebar } from "@/components/CustomizationSidebar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FeaturedArticlesGrid from "@/components/FeaturedArticlesGrid";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <ThemeHeader />
        <div className="flex h-[calc(100vh-64px)]">
          <CustomizationSidebar />
          <div className="flex-1 overflow-auto">
            <ThemePreview />
            <FeaturedArticlesGrid />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
