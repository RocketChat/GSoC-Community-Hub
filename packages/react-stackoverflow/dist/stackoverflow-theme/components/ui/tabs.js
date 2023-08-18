"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
const Tabs = TabsPrimitive.Root;
const TabsList = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(TabsPrimitive.List, {
        ref: ref,
        className: "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        ...props
    }));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(TabsPrimitive.Trigger, {
        ref: ref,
        className: "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        ...props
    }));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(TabsPrimitive.Content, {
        ref: ref,
        className: "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ...props
    }));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
