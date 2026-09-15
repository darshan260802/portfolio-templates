import type { PortfolioData, PortfolioLink } from "./schema.js";
import { RichText } from "./rich-text.js";
import "./portfolio-extras.css";

export function PortfolioLinks({ links }: { links?: PortfolioLink[] }) {
  if (!links?.length) return null;
  return <div className="pb-extra-links">{links.map((link) => /^https?:\/\//i.test(link.url) &&
    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">{link.label || "Visit link"} ↗</a>)}</div>;
}

function sectionId(id: string) {
  return `custom-${Array.from(id).map((char) => char.codePointAt(0)!.toString(16)).join("-")}`;
}

export function extraSectionEntries(data: PortfolioData) {
  return [
    ...(data.education?.length ? [{ id: "education", label: "Education" }] : []),
    ...(data.achievements?.length ? [{ id: "achievements", label: "Achievements" }] : []),
    ...(data.customSections ?? []).filter((s) => s.visible !== false && s.title.trim()).map((s) => ({ id: sectionId(s.id), label: s.title })),
  ];
}

export function PortfolioExtras({ data }: { data: PortfolioData }) {
  return <div className="pb-extras">
    {!!data.education?.length && <section id="education" className="pb-extra-section" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <div className="pb-extra-grid">{data.education.map((item) => <article key={item.id} className="pb-extra-card">
        <h3>{item.institution}</h3>
        {(item.degree || item.fieldOfStudy) && <p>{[item.degree, item.fieldOfStudy].filter(Boolean).join(" · ")}</p>}
        {item.range && <p className="pb-extra-meta">{item.range.start}{(item.range.current || item.range.end) && ` — ${item.range.current ? "Present" : item.range.end}`}</p>}
        <RichText html={item.summary} />
      </article>)}</div>
    </section>}
    {!!data.achievements?.length && <section id="achievements" className="pb-extra-section" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading">Achievements</h2>
      <div className="pb-extra-grid">{data.achievements.map((item) => <article key={item.id} className="pb-extra-card">
        <h3>{item.title}</h3><p className="pb-extra-meta">{[item.issuer, item.date].filter(Boolean).join(" · ")}</p>
        <RichText html={item.description} /><PortfolioLinks links={item.links} />
      </article>)}</div>
    </section>}
    {(data.customSections ?? []).filter((s) => s.visible !== false && s.title.trim()).map((section) => <section
      key={section.id} id={sectionId(section.id)} className="pb-extra-section" aria-label={section.title}>
      <h2>{section.title}</h2><div className="pb-extra-card"><RichText html={section.content} /><PortfolioLinks links={section.links} /></div>
    </section>)}
  </div>;
}
