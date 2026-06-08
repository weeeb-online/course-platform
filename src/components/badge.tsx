import { cn } from "@/lib/utils";

type Props = {
  children?: string;
  className?: string;
};

export function Badge({ children, className }: Props) {
  return (
    <div
      className={cn(
        "bg-[#0000001f] text-[#494949] text-xs font-semibold uppercase py-1.5 px-4 rounded-full inline-block mb-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
