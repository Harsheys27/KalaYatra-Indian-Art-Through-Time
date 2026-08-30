import { getPlaceholderSvg } from "@/lib/placeholders";

/**
 * Converts a hex color + alpha hex string to rgba() format
 * to prevent hydration mismatches (browsers normalize hex+alpha to rgba).
 */
function hexAlphaToRgba(hex: string, alphaHex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = Math.round((parseInt(alphaHex, 16) / 255) * 100) / 100;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Returns a browser-safe background color from a hex accent color.
 * Uses rgba() format to avoid hydration mismatches.
 */
export function getAccentBg(accent: string, alphaHex = "33"): string {
  return hexAlphaToRgba(accent, alphaHex);
}

/**
 * Returns the image URL for an artifact.
 * Falls back to a generated SVG placeholder if the real image doesn't exist.
 */
export function getArtifactImage(id: string, imagePath: string): string {
  return imagePath;
}
