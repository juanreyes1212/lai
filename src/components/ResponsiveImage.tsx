import { ImgHTMLAttributes } from "react";

/**
 * Widths used to build a srcset. Tuned for our card (≈400–600px on mobile,
 * up to ~800px on desktop) and hero (full-bleed up to ~1600px) usages.
 */
const DEFAULT_WIDTHS = [400, 600, 800, 1200, 1600];

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "srcSet" | "sizes"> {
  src: string;
  alt: string;
  /** CSS `sizes` attribute. Default matches a 1-col mobile → 3-col desktop card grid. */
  sizes?: string;
  /** Override widths used to build the srcset. */
  widths?: number[];
}

/**
 * Build an Unsplash URL at a given width while preserving height/fit ratio
 * hints already present in the source URL. Falls back to passing the original
 * URL through unchanged for non-Unsplash images.
 */
const buildUnsplashUrl = (src: string, width: number): string | null => {
  if (!src.includes("images.unsplash.com")) return null;
  const url = new URL(src);
  const existingH = Number(url.searchParams.get("h"));
  const existingW = Number(url.searchParams.get("w"));
  url.searchParams.set("w", String(width));
  if (existingH && existingW) {
    url.searchParams.set("h", String(Math.round((existingH / existingW) * width)));
  }
  url.searchParams.set("auto", "format");
  url.searchParams.set("q", "75");
  return url.toString();
};

const ResponsiveImage = ({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  widths = DEFAULT_WIDTHS,
  loading = "lazy",
  decoding = "async",
  ...rest
}: ResponsiveImageProps) => {
  const variants = widths
    .map((w) => {
      const u = buildUnsplashUrl(src, w);
      return u ? `${u} ${w}w` : null;
    })
    .filter(Boolean) as string[];

  const srcSet = variants.length > 0 ? variants.join(", ") : undefined;
  const resolvedSrc = buildUnsplashUrl(src, widths[Math.floor(widths.length / 2)]) ?? src;

  return (
    <img
      {...rest}
      src={resolvedSrc}
      alt={alt}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      loading={loading}
      decoding={decoding}
    />
  );
};

export default ResponsiveImage;
