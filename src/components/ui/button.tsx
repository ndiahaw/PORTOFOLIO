import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variasi gaya visual (variants) dan ukuran (sizes) untuk komponen Button menggunakan `class-variance-authority`.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-amber-700/25 hover:shadow-amber-700/40 hover:opacity-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border bg-background shadow-sm hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "glass-panel text-foreground shadow-md hover:bg-white/90 dark:hover:bg-stone-900/90",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Properti untuk komponen Button.
 * Mewarisi semua atribut tombol HTML standar, properti variasi gaya tombol,
 * serta opsi `asChild` untuk render polimorfik menggunakan Radix Slot.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Jika true, tombol akan dirender sebagai elemen anaknya (slot) dan mewarisi semua behavior. */
  asChild?: boolean;
}

/**
 * Komponen Button atomik yang responsif terhadap interaksi pengguna.
 * Mampu merender diri sebagai tombol standar maupun elemen kustom lainnya jika `asChild` bernilai true.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
