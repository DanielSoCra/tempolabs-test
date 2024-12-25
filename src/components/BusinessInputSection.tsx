import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Wand2 } from "lucide-react";

interface BusinessInputSectionProps {
  description?: string;
  onDescriptionChange?: (value: string) => void;
  onGenerateKeywords?: () => void;
  keywords?: string[];
  isGenerating?: boolean;
}

const BusinessInputSection = ({
  description = "",
  onDescriptionChange = () => {},
  onGenerateKeywords = () => {},
  keywords = [
    "AI Technology",
    "Machine Learning",
    "Business Analytics",
    "Cloud Computing",
    "Enterprise Software",
  ],
  isGenerating = false,
}: BusinessInputSectionProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Describe Your Business
        </h2>
        <p className="text-sm text-muted-foreground">
          Enter your business description to generate relevant keywords for
          competitor analysis
        </p>
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="Enter your business description here..."
          className="min-h-[120px] resize-none"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />

        <div className="flex justify-end">
          <Button
            onClick={onGenerateKeywords}
            disabled={isGenerating || !description}
            className="w-full sm:w-auto"
          >
            <Wand2 className="mr-2 h-4 w-4" />
            {isGenerating ? "Generating Keywords..." : "Generate Keywords"}
          </Button>
        </div>

        {keywords.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Generated Keywords:</p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessInputSection;
