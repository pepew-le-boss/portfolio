"use client"

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import * as React from "react"
import { cn } from "@/utils/lib/tailwind/cn"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  slideCount: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [slideCount, setSlideCount] = React.useState(0)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())

      setSelectedIndex(api.selectedScrollSnap())
      setSlideCount(api.scrollSnapList().length)
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          slideCount
        }}
      >
        <div ref={ref} onKeyDownCapture={handleKeyDown} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...props} />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn("group grid h-8 w-8 place-items-center rounded-full bg-foreground disabled:opacity-50", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4 text-background transition-all ease-out group-hover:group-enabled:-translate-x-0.5" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      className={cn("group grid h-8 w-8 place-items-center rounded-full bg-foreground disabled:opacity-50", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4 text-background transition-all ease-out group-hover:group-enabled:translate-x-0.5" />
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDotIndicators = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  const { selectedIndex, slideCount, api } = useCarousel()

  if (!api || slideCount < 2) return null

  return (
    <div ref={ref} className={cn("flex items-center gap-2 rounded-full", className)} {...props}>
      {Array.from({ length: slideCount }).map((_, index) => {
        const isActive = index === selectedIndex
        return (
          <button
            key={index}
            onClick={() => api.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "relative h-7 w-7 whitespace-nowrap rounded-full border border-foreground bg-background font-sfmono text-sm leading-none text-foreground transition-all duration-300 hover:bg-foreground hover:text-background",
              {
                "w-[3.25rem] bg-foreground text-background": isActive
              }
            )}
          >
            <span
              className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[opacity,transform] duration-300", {
                "-translate-x-full opacity-100": isActive
              })}
            >
              {`//`}
            </span>
            <span
              className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-[opacity,transform] duration-300", {
                "translate-x-0": isActive
              })}
            >{`0${index + 1}`}</span>
          </button>
        )
      })}
    </div>
  )
})
CarouselDotIndicators.displayName = "CarouselDotIndicators"

export { Carousel, type CarouselApi, CarouselContent, CarouselDotIndicators, CarouselItem, CarouselNext, CarouselPrevious }
