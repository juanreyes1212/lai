import { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  src: string;
  /**
   * `sizes` attribute. Defaults to a reasonable card-grid hint.
   * For full-bleed hero images, pass `"100vw"`.
   */
  sizes?: string;
  /**
   * Widths (px) to generate in srcset. Defaults to common card breakpoints.
   */
  widths?: number[];
};

const DEFAULT_WIDTHS = [400, 600, 800, 1200, 1600];

/**
 * Generates a `srcset` from an Unsplash URL by swapping the `w=` query param.
 * Falls back to the original `src` if the URL is not an Unsplash image.
 */
const buildSrcSet = (src: string, widths: number[]): string | undefined => {
  try {
    const url = new URL(src);
    if (!url.hostname.includes("unsplash.com")) return undefined;

    return widths
      .map((w) => {
        const u = new URL(src);
        u.searchParams.set("w", String(w));
        // Preserve aspect ratio if `h` is set by scaling proportionally.
        const originalW = Number(url.searchParams.get("w"));
        const originalH = Number(url.searchParams.get("h"));
        if (originalW > 0 && originalH > 0) {
          u.searchParams.set("h", String(Math.round((originalH / originalW) * w)));
        }
        return `${u.toString()} ${w}w`;
      })
      .join(", ");
  } catch {
    return undefined;
  }
};

const ResponsiveImage = ({
  src,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  widths = DEFAULT_WIDTHS,
  loading = "lazy",
  decoding = "async",
  alt = "",
  ...rest
}: ResponsiveImageProps) => {
  const srcSet = buildSrcSet(src, widths);

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      loading={loading}
      decoding={decoding}
      alt={alt}
      {...rest}
    />
  );
};

export default ResponsiveImage;
