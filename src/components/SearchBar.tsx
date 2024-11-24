import * as React from "react";

interface SearchBarProps {
  value: string;
  onSearch: (text: string) => void;
  onClear: () => void;
}

export function SearchBar({ value, onSearch, onClear }: SearchBarProps) {
  return (
    <stackLayout className="bg-white p-4 elevation-4">
      <gridLayout columns="*, auto" className="bg-gray-100 rounded-full p-2">
        <textField
          col="0"
          text={value}
          hint="Search notes..."
          className="pl-4 text-base"
          onTextChange={(args) => onSearch(args.value)}
        />
        {value ? (
          <button
            col="1"
            className="w-10 h-10 rounded-full text-gray-500"
            text="✕"
            onTap={onClear}
          />
        ) : null}
      </gridLayout>
    </stackLayout>
  );
}