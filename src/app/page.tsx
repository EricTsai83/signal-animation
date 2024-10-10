"use client";
import Signal from "@/components/signal";

const LightningEffect: React.FC = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <Signal
        className="absolute left-4 top-28"
        signalRadius="10vmin"
        signalRingCount={6}
        dotSize=".5vmin"
        showPointer={true}
        showCenterDot={true}
        showSignalRing={true}
        disableRingEffect={true}
      />
    </div>
  );
};

export default LightningEffect;
