// @chenglou/pretext API:
//   prepare(text, font) → PreparedText   (font is a CSS string e.g. "16px Tiempos Text")
//   layout(prepared, maxWidth, lineHeight) → { lineCount, height }
//
// Must be imported dynamically — the package is ESM-only and can't run during SSR.

/**
 * Dynamically loads @chenglou/pretext and returns helpers.
 * Call inside onMount or an async context.
 *
 * @example
 * let pt = null;
 * onMount(async () => { pt = await loadPretext(); });
 * // then: const { height } = pt.layout("Hello world", "16px Tiempos Text", 400, 1.7);
 */
export async function loadPretext() {
	const { prepare, layout } = await import("@chenglou/pretext");
	return {
		/**
		 * @param {string} text
		 * @param {string} font  CSS font string e.g. "16px Tiempos Text, serif"
		 * @param {number} maxWidth
		 * @param {number} lineHeight  absolute px line height (fontSize * lineHeightMultiplier)
		 */
		layout(text, font, maxWidth, lineHeight) {
			const prepared = prepare(text, font);
			return layout(prepared, maxWidth, lineHeight);
		}
	};
}
