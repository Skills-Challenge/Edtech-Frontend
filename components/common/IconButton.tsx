import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconButtonVariants = cva(
  "flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        sm: "h-10 w-10",
        lg: "",
        xl: "",
      },
    },
    defaultVariants:{
        variant:"sm"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

const IconButton = () => {
  return <div className="h-[]"></div>;
};

export default IconButton;
