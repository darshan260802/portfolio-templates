/**
 * Every section announces itself identically — a label on the left, a
 * readout on the right, a hairline underneath. The repetition is the
 * design: the page reads as one instrument with several gauges, not as a
 * stack of unrelated blocks.
 */
export function SectionHead({ id, label, readout }: { id?: string; label: string; readout: string }) {
	return (
		<div id={id} className="ins-head">
			<span className="ins-head__label">{label}</span>
			<span className="ins-head__readout">{readout}</span>
		</div>
	);
}
