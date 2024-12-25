import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CompetitorCardProps {
  companyName?: string;
  description?: string;
  websiteUrl?: string;
  similarities?: string[];
  differences?: string[];
}

const CompetitorCard = ({
  companyName = "Sample Company",
  description = "A technology company focused on innovative solutions for business growth and digital transformation.",
  websiteUrl = "https://example.com",
  similarities = [
    "Focus on digital transformation",
    "Cloud-based solutions",
    "Enterprise clients",
  ],
  differences = [
    "Different pricing model",
    "Limited geographic reach",
    "Narrower product range",
  ],
}: CompetitorCardProps) => {
  return (
    <Card className="w-[400px] h-[300px] overflow-y-auto bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold flex justify-between items-center">
          {companyName}
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <Globe className="w-5 h-5" />
          </a>
        </CardTitle>
        <p className="text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center py-2"
            >
              <span>Similarities</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4">
            <ul className="list-disc list-inside space-y-1">
              {similarities.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center py-2"
            >
              <span>Differences</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4">
            <ul className="list-disc list-inside space-y-1">
              {differences.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CompetitorCard;
