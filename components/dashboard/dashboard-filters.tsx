"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  FilterIcon,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { PLATFORMS, REGIONS } from "@/constants/dashboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import type { FilterState } from "@/types/dashboard";

export function DashboardFilters({
  filters,
  onFiltersChange,
}: {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
}) {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [activeInput, setActiveInput] = React.useState<"from" | "to" | null>(
    null
  );
  const [tempDates, setTempDates] = React.useState<{ from?: Date; to?: Date }>({
    from: filters.dateFrom,
    to: filters.dateTo,
  });

  const calendarRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  const clearDateFilter = () => {
    setTempDates({ from: undefined, to: undefined });
    onFiltersChange({ dateFrom: undefined, dateTo: undefined });
  };

  const handleDateSelect = (date: Date) => {
    const newTemp = { ...tempDates };

    if (activeInput === "from") {
      newTemp.from = date;
      if (newTemp.to && newTemp.to < date) {
        newTemp.to = date;
      }
    }

    if (activeInput === "to") {
      if (newTemp.from && date < newTemp.from) {
        newTemp.to = newTemp.from;
      } else {
        newTemp.to = date;
      }
    }

    setTempDates(newTemp);
    setActiveInput(null);
    setShowCalendar(false);

    if (newTemp.from && newTemp.to) {
      onFiltersChange({ dateFrom: newTemp.from, dateTo: newTemp.to });
    }
  };

  return (
    <div className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium flex items-center gap-1">
              <FilterIcon className="h-4 w-4 text-muted-foreground" /> Filters:
            </span>
          </div>

          {/* Source Filter */}
          <Select
            value={filters.source}
            onValueChange={(value) => onFiltersChange({ source: value })}
          >
            <SelectTrigger className="w-40 border border-gray-300 hover:border-gray-400 cursor-pointer">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              {PLATFORMS.map((platform) => (
                <SelectItem key={platform.value} value={platform.value}>
                  {platform.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Region Filter */}
          <Select
            value={filters.region}
            onValueChange={(value) => onFiltersChange({ region: value })}
          >
            <SelectTrigger className="w-40 border border-gray-300 hover:border-gray-400 cursor-pointer">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              {REGIONS.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* From - To Date Inputs */}
          <div className="flex items-center gap-2 relative">
            <div className="flex gap-1">
              {/* From Date Input */}
              <div className="relative w-32">
                <CalendarIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  readOnly
                  value={
                    tempDates.from ? format(tempDates.from, "dd-MM-yyyy") : ""
                  }
                  placeholder="From Date"
                  className="border text-sm bg-white placeholder:text-gray-600 border-gray-300 hover:border-gray-400 pl-8 h-9 rounded-md w-full cursor-pointer"
                  onClick={() => {
                    setActiveInput("from");
                    setShowCalendar(true);
                  }}
                />
              </div>

              <span className="px-1 flex text-gray-600 items-center">to</span>

              {/* To Date Input */}
              <div className="relative w-32">
                <CalendarIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  readOnly
                  value={tempDates.to ? format(tempDates.to, "dd-MM-yyyy") : ""}
                  placeholder="To Date"
                  className="border bg-white text-sm placeholder:text-gray-600 border-gray-300 hover:border-gray-400 pl-8 h-9 rounded-md w-full cursor-pointer"
                  onClick={() => {
                    setActiveInput("to");
                    setShowCalendar(true);
                  }}
                />
              </div>
            </div>

            {(filters.dateFrom || filters.dateTo) && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 cursor-pointer"
                onClick={clearDateFilter}
              >
                <X className="h-4 w-4" />
              </Button>
            )}

            {/* Calendar Popover */}
            {showCalendar && (
              <div
                ref={calendarRef}
                className="absolute z-50 top-10 p-2 bg-white border rounded shadow-lg"
              >
                <DayPicker
                  mode="single"
                  selected={
                    activeInput === "from" ? tempDates.from : tempDates.to
                  }
                  onSelect={handleDateSelect}
                  components={{
                    Chevron: (props) =>
                      props.orientation === "left" ? (
                        <ChevronLeft className="h-5 w-5 text-green-600" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-green-600" />
                      ),
                  }}
                  classNames={{
                    day_selected:
                      "border-2 border-green-600 bg-white text-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600",
                  }}
                />
                <div className="mt-2 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => setShowCalendar(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
