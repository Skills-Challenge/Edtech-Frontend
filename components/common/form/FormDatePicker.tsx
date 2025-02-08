"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import CustomCalendar from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FormDatePickerProps {
  label?: string;
  error?: string;
  value: Date | null;
  onChange: (date: Date) => void;
}

export default function FormDatePicker({
  label,
  error,
  value,
  onChange,
}: FormDatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="block font-medium text-sm">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal h-[50px]",
              !value && "text-muted-foreground",
              active ? "ring-1 ring-active" : " "
            )}
          >
            {value ? (
              format(value, "PPP")
            ) : (
              <span className="text-gray-500">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CustomCalendar
            selectedDate={value}
            setSelectedDate={(date) => {
              if (date) {
                onChange(date);
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
