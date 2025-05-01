
import React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ name, color, size = 24, className, fallback = "AlertCircle", ...props }: IconProps) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return (
    <IconComponent
      color={color}
      size={size}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
