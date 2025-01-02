"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "motion/react"
import * as React from "react"
import { cn } from "@/utils/lib/tailwind/cn"

// for more info, check: https://github.com/ibelick/motion-primitives/blob/main/components/website/tabs.tsx

const Tabs = TabsPrimitive.Root

const TabsContext = React.createContext<string>("")

const TabsRoot = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>>(
  ({ ...props }, ref) => {
    const uniqueId = React.useId()
    return (
      <TabsContext.Provider value={uniqueId}>
        <Tabs ref={ref} {...props} />
      </TabsContext.Provider>
    )
  }
)
TabsRoot.displayName = TabsPrimitive.Root.displayName

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn("inline-flex h-9 w-full items-center justify-start gap-4 border-b border-border", className)} {...props} />
  )
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(
  ({ className, children, ...props }) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null)
    const [isActive, setIsActive] = React.useState(false)
    const tabsId = React.useContext(TabsContext)

    React.useEffect(() => {
      const element = triggerRef.current
      if (element) {
        setIsActive(element.dataset.state === "active")

        const observer = new MutationObserver(() => {
          setIsActive(element.dataset.state === "active")
        })

        observer.observe(element, { attributes: true })

        return () => observer.disconnect()
      }
    }, [])

    return (
      <TabsPrimitive.Trigger
        ref={triggerRef}
        className={cn(
          "group relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-muted-foreground/80 ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
          className
        )}
        {...props}
      >
        {isActive && (
          <motion.div
            layout
            className="absolute bottom-0 flex h-0.5 w-full justify-center"
            transition={{
              type: "spring",
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2
            }}
            layoutId={`underline-${tabsId}`}
          >
            <div className="h-0.5 w-full bg-foreground" />
          </motion.div>
        )}
        {children}
      </TabsPrimitive.Trigger>
    )
  }
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("relative mt-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      {...props}
    />
  )
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsRoot as Tabs, TabsContent, TabsList, TabsTrigger }
