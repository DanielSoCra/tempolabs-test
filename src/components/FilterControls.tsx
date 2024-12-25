import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { ArrowDownAZ, ArrowUpDown, Target } from "lucide-react";

interface FilterControlsProps {
  onSortChange?: (value: string) => void;
}

const FilterControls = ({ onSortChange = () => {} }: FilterControlsProps) => {
  return (
    <div className="w-full bg-white border-b p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Select defaultValue="relevance" onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Relevance</span>
              </div>
            </SelectItem>
            <SelectItem value="similarity">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                <span>Similarity</span>
              </div>
            </SelectItem>
            <SelectItem value="alphabetical">
              <div className="flex items-center gap-2">
                <ArrowDownAZ className="h-4 w-4" />
                <span>Alphabetical</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-sm"
            onClick={() => onSortChange("relevance")}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing <span className="font-medium">10</span> results
      </div>
    </div>
  );
};

export default FilterControls;
