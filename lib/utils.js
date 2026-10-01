/**
 * Concatenates class names filtering out falsy values.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats date into readable string
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
