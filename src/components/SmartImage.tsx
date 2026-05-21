"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxNiAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIGZpbGw9JyMwZDBkMGYnLz48Y2lyY2xlIGN4PScxMicgY3k9JzInIHI9JzYnIGZpbGw9JyNmZmFlMzYnIGZpbGwtb3BhY2l0eT0nMC4yNScvPjwvc3ZnPg==";

type SmartImageProps = ImageProps & {
  wrapperClassName?: string;
};

export function SmartImage({ alt, className, wrapperClassName, onLoad, onError, ...props }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("absolute inset-0", wrapperClassName)}>
      {!failed ? (
        <Image
          {...props}
          alt={alt}
          className={cn(className, loaded ? "opacity-100" : "opacity-0")}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={(event) => {
            setLoaded(true);
            onLoad?.(event);
          }}
          onError={(event) => {
            setFailed(true);
            onError?.(event);
          }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-[linear-gradient(135deg,rgba(255,174,54,0.18),transparent_36%),repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_12px)] transition-opacity duration-300",
          loaded && !failed ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
}
