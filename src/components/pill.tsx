import { cn } from "@/lib/utils";

type Props = {
  children?: string;
  className?: string;
};

export function Pill({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center py-1 px-3 rounded-full font-semibold uppercase bg-[#3d3d3d] text-white text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
