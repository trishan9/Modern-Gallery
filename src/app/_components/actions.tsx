"use client";

import { useState } from "react";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useImagesStore } from "~/store/images";

export default function ImageActions() {
  const setImageGrid = useImagesStore((state) => state.setImageGrid);
  const [autoGrid, setAutoGrid] = useState(true);

  return (
    <div className="flex flex-col items-end gap-4 font-inter">
      <div className="flex items-center gap-2.5">
        <span className="text-sm font-semibold text-zinc-600">Sort by</span>

        <Select
          defaultValue="last-added"
          onValueChange={(value) => console.log(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent className="font-inter text-sm">
            <SelectItem value="last-added">Last Added</SelectItem>
            <SelectItem value="first-added">First Added</SelectItem>
            <SelectItem value="name-asc">Ascending Name</SelectItem>
            <SelectItem value="name-desc">Descending Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-grid"
            defaultChecked={autoGrid}
            onCheckedChange={() => {
              autoGrid ? setImageGrid(5) : setImageGrid(0);
              setAutoGrid((prevState) => !prevState);
            }}
          />
          <Label htmlFor="auto-grid">Auto Grid</Label>
        </div>

        {!autoGrid && (
          <Tabs
            defaultValue="5"
            className="w-[200px]"
            onValueChange={(value) => setImageGrid(+value)}
          >
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="5">5</TabsTrigger>
              <TabsTrigger value="4">4</TabsTrigger>
              <TabsTrigger value="3">3</TabsTrigger>
              <TabsTrigger value="2">2</TabsTrigger>
              <TabsTrigger value="1">1</TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>
    </div>
  );
}
