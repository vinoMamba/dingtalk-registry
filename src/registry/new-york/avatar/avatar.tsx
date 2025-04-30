import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const avatarVariants = cva("", {
  variants: {
    variant: {
      default: "rounded-md",
      circle: "rounded-full",
    },
    size: {
      default: "size-10",
      sm: "size-8",
      lg: "size-12",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function Avatar({ className, variant, size, ...props }
  : React.ComponentProps<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex items-center justify-center overflow-hidden relative",
        avatarVariants({ variant, size, className })
      )}
      {...props}
    />
  )
}


function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={
        cn(
          "size-full",
          className
        )}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "inline-flex items-center justify-center size-full bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
}
