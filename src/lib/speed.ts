/** The pace the speed button set: 1, 1.5 or 2. Divide any duration by it. */
export function speed(): number {
  return Number(getComputedStyle(document.documentElement).getPropertyValue("--speed")) || 1;
}

export const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
