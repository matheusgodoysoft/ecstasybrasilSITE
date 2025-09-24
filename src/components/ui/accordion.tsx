"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  value?: string
  onValueChange?: (value: string) => void
  type?: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue>({})

interface AccordionProps {
  value?: string
  onValueChange?: (value: string) => void
  type?: "single" | "multiple"
  children: React.ReactNode
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ value, onValueChange, type = "single", children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)
    
    const handleValueChange = (newValue: string) => {
      if (type === "single") {
        const finalValue = internalValue === newValue ? "" : newValue
        setInternalValue(finalValue)
        onValueChange?.(finalValue)
      }
    }

    return (
      <AccordionContext.Provider value={{ value: internalValue, onValueChange: handleValueChange, type }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("border rounded-lg", className)} 
        data-value={value}
        {...props} 
      />
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, value, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    const isOpen = context.value === value

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:underline text-left w-full",
          className
        )}
        onClick={() => context.onValueChange?.(value)}
        aria-expanded={isOpen}
        {...props}
      >
        <span>{children}</span>
        <svg
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, value, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    const isOpen = context.value === value

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up hidden"
        )}
        {...props}
      >
        <div className={cn("pb-4 pt-0 px-6", className)}>
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

