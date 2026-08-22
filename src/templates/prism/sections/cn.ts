/** Tiny className joiner — avoids pulling in an extra dependency for one use. */
export function cn(...parts: Array<string | false | null | undefined>): string {
	return parts.filter(Boolean).join(" ");
}
