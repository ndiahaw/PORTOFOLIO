import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variasi gaya visual (variants) untuk komponen Badge menggunakan `class-variance-authority`.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25",
        secondary:
          "bg-secondary/15 text-secondary border border-secondary/20 hover:bg-secondary/25",
        accent:
          "bg-accent/15 text-accent border border-accent/20 hover:bg-accent/25",
        outline: "text-foreground border border-border hover:bg-muted",
        glass:
          "glass-panel text-foreground shadow-sm hover:bg-white/90 dark:hover:bg-slate-800/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Properti untuk komponen Badge.
 * Mewarisi semua atribut elemen HTML div standar dan properti variasi gaya badge.
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Komponen Badge atomik yang digunakan untuk menampilkan tag kecil, kategori, atau status.
 * 
 * @param props - Properti komponen Badge.
 * @param props.className - Kelas Tailwind kustom tambahan.
 * @param props.variant - Variasi gaya visual (default, secondary, accent, outline, glass).
 * @returns Elemen visual Badge div.
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
