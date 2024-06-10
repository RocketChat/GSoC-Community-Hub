import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../../utils";
const Card = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("div", {
        ref: ref,
        className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("div", {
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("h3", {
        ref: ref,
        className: cn("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("p", {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("div", {
        ref: ref,
        className: cn("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("div", {
        ref: ref,
        className: cn(" flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
