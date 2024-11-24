import * as React from "react";

interface FloatingActionButtonProps {
  onPress: () => void;
}

export function FloatingActionButton({ onPress }: FloatingActionButtonProps) {
  return (
    <absoluteLayout>
      <button
        className="bg-blue-600 text-white text-2xl w-16 h-16 rounded-full elevation-8"
        text="+"
        onTap={onPress}
        left="{{screen.mainScreen.widthDIPs - 80}}"
        top="{{screen.mainScreen.heightDIPs - 120}}"
      />
    </absoluteLayout>
  );
}