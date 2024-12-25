import React from "react";
import FilterControls from "./FilterControls";
import CompetitorCard from "./CompetitorCard";

interface CompetitorResultsProps {
  competitors?: Array<{
    companyName: string;
    description: string;
    websiteUrl: string;
    similarities: string[];
    differences: string[];
  }>;
  onSortChange?: (value: string) => void;
}

const CompetitorResults = ({
  competitors = [
    {
      companyName: "TechCorp Solutions",
      description: "Enterprise software solutions for digital transformation",
      websiteUrl: "https://example.com/techcorp",
      similarities: [
        "Cloud solutions",
        "Enterprise focus",
        "Digital transformation",
      ],
      differences: [
        "Higher pricing",
        "Limited market reach",
        "Fewer integrations",
      ],
    },
    {
      companyName: "InnovateX",
      description: "AI-powered business automation platform",
      websiteUrl: "https://example.com/innovatex",
      similarities: ["AI technology", "Business automation", "Cloud-based"],
      differences: [
        "Focused on SMBs",
        "Limited customization",
        "Newer company",
      ],
    },
    {
      companyName: "DataFlow Systems",
      description: "Data analytics and visualization platform",
      websiteUrl: "https://example.com/dataflow",
      similarities: [
        "Data analytics",
        "Business intelligence",
        "Real-time processing",
      ],
      differences: [
        "Data-only focus",
        "No automation features",
        "Different target market",
      ],
    },
  ],
  onSortChange = () => {},
}: CompetitorResultsProps) => {
  return (
    <div className="w-full min-h-[700px] bg-gray-50 flex flex-col">
      <FilterControls onSortChange={onSortChange} />

      <div className="p-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {competitors.map((competitor, index) => (
            <CompetitorCard
              key={index}
              companyName={competitor.companyName}
              description={competitor.description}
              websiteUrl={competitor.websiteUrl}
              similarities={competitor.similarities}
              differences={competitor.differences}
            />
          ))}
        </div>

        {competitors.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[400px] text-gray-500">
            <p className="text-lg">No competitors found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitorResults;
