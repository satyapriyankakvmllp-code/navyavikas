// Splits a heading into words that slide up one by one.
// Put it inside a `.reveal` wrapper (plays on scroll) or use `hero` (plays on load).
export function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i}>
            <span className="split-word">
              <span style={{ ['--i' as string]: i + delay }}>{w}</span>
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </>
  );
}
