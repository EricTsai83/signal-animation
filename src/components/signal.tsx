import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  signalRadius: string;
  signalRingCount: number;
  dotSize?: string; // Optional prop for dot size
  showPointer?: boolean; // Optional prop to hide pointer
  showCenterDot?: boolean; // Optional prop to hide center dot
  showSignalRing?: boolean; // Optional prop to disable signal ring animation
  disableRingEffect?: boolean; // Optional prop to disable ring animation
};

export default function Signal({
  className,
  signalRadius,
  signalRingCount,
  dotSize, // Default dot size
  showPointer,
  showCenterDot,
  showSignalRing,
  disableRingEffect,
}: Props) {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div
        className="relative"
        style={{
          width: `calc(2 * ${signalRadius})`,
          height: `calc(2 * ${signalRadius})`,
        }}
      >
        {/* Signal Dot */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white",
            { hidden: !showCenterDot },
          )}
          style={{
            height: dotSize,
            width: dotSize,
          }}
        ></div>

        {/* Signal Radar */}
        <div
          className={cn(
            "animate-signal-radar absolute left-0 top-0 h-full w-full rounded-full bg-[conic-gradient(from_0deg_at_center,rgba(255,255,255,0.6),rgba(255,255,255,0.2),rgba(255,255,255,0.1)_18deg,rgba(255,255,255,0)_30deg)]",
            { hidden: !showPointer },
          )}
        ></div>

        {/* Signal Rings */}
        {Array.from({ length: signalRingCount }).map((_, index) => {
          const progress = (index + 1) / signalRingCount;
          const radius = `${progress * (2 * parseFloat(signalRadius))}vmin`;

          return (
            <span
              key={index}
              className={cn(
                "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform",
                { hidden: !showSignalRing },
                { "animate-signal-ring-after": !disableRingEffect },
              )}
              style={{
                width: radius,
                height: radius,
                fontSize: "2vmin", // Font size for the rings
                borderRadius: "99999px",
                border: "solid 1px rgba(255, 255, 255, 0.3)",
                color: "white",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
