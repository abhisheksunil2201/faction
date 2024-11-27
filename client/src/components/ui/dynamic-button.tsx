"use client";
import Link from "next/link";
import * as React from "react";

export type DynamicButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | React.ComponentPropsWithoutRef<"button">;

export type DynamicButtonRef = React.ElementRef<typeof Link> &
  React.ElementRef<"button">;

const DynamixcButton = React.forwardRef<DynamicButtonRef, DynamicButtonProps>(
  ({ children, ...props }, ref) => {
    if ("href" in props) {
      return (
        <Link {...props} passHref ref={ref}>
          {children}
        </Link>
      );
    } else {
      return (
        <button {...props} ref={ref}>
          {children}
        </button>
      );
    }
  }
);

DynamixcButton.displayName = "DynamixcButton";

export default DynamixcButton;
