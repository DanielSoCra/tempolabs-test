import React, { useState } from "react";
import BusinessInputSection from "./BusinessInputSection";
import CompetitorResults from "./CompetitorResults";

interface HomeProps {
  initialDescription?: string;
  initialKeywords?: string[];
  initialCompetitors?: Array<{
    companyName: string;
    description: string;
    websiteUrl: string;
    similarities: string[];
    differences: string[];
  }>;
}

const Home = ({
  initialDescription = "",
  initialKeywords = [],
  initialCompetitors = [
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
}: HomeProps) => {
  const [description, setDescription] = useState(initialDescription);
  const [keywords, setKeywords] = useState(initialKeywords);
  const [isGenerating, setIsGenerating] = useState(false);
  const [competitors, setCompetitors] = useState(initialCompetitors);

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleGenerateKeywords = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setKeywords([
        "AI Technology",
        "Machine Learning",
        "Business Analytics",
        "Cloud Computing",
        "Enterprise Software",
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleSortChange = (value: string) => {
    const sortedCompetitors = [...competitors];
    switch (value) {
      case "alphabetical":
        sortedCompetitors.sort((a, b) =>
          a.companyName.localeCompare(b.companyName),
        );
        break;
      case "relevance":
        // Reset to original order
        setCompetitors(initialCompetitors);
        return;
      case "similarity":
        sortedCompetitors.sort(
          (a, b) => b.similarities.length - a.similarities.length,
        );
        break;
    }
    setCompetitors(sortedCompetitors);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Competitor Research Dashboard
        </h1>

        <BusinessInputSection
          description={description}
          onDescriptionChange={handleDescriptionChange}
          onGenerateKeywords={handleGenerateKeywords}
          keywords={keywords}
          isGenerating={isGenerating}
        />

        <div className="mt-8">
          <CompetitorResults
            competitors={competitors}
            onSortChange={handleSortChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
