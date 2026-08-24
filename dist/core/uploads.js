/**
 * What a user is allowed to upload — their profile photo and their résumé —
 * and how a template turns a résumé into a link a visitor can click.
 *
 * Every consumer imports these rules instead of restating them: the wizard's
 * file pickers (the accept attribute and the check before uploading), the API
 * (the check it actually enforces, on the bytes it receives), and the six
 * templates (the download link itself). Stated once, a UI can't start
 * accepting a file the server then rejects.
 *
 * SAFE FOR THE BUILDER UI TO IMPORT — pure data and string helpers, no React,
 * nothing under src/templates. Exported from index.ts for that reason, unlike
 * rich-text.tsx.
 */
/**
 * A .docx is a ZIP, so "starts with PK\x03\x04" is true of every archive ever
 * renamed to .docx. WordprocessingML always stores its body at word/document.xml,
 * and ZIP keeps entry names uncompressed in both the local headers and the
 * central directory, so that path appears literally in the bytes of any real
 * .docx — and in a plain .zip only if someone went out of their way.
 */
function looksLikeDocx(bytes) {
    return indexOfAscii(bytes, "word/document.xml") !== -1;
}
/** 5 MB for both kinds — enough for a design-heavy résumé or an unresized phone photo. */
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
export const RESUME_RULES = {
    kind: "resume",
    noun: "résumé",
    maxBytes: MAX_UPLOAD_BYTES,
    formats: [
        {
            label: "PDF",
            mimeType: "application/pdf",
            extensions: ["pdf"],
            signatures: [{ offset: 0, bytes: [0x25, 0x50, 0x44, 0x46, 0x2d] }], // "%PDF-"
        },
        {
            label: "DOCX",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            extensions: ["docx"],
            signatures: [{ offset: 0, bytes: [0x50, 0x4b, 0x03, 0x04] }], // "PK\x03\x04"
            verify: looksLikeDocx,
        },
    ],
};
export const AVATAR_RULES = {
    kind: "avatar",
    noun: "profile photo",
    maxBytes: MAX_UPLOAD_BYTES,
    formats: [
        {
            label: "JPEG",
            mimeType: "image/jpeg",
            extensions: ["jpg", "jpeg"],
            signatures: [{ offset: 0, bytes: [0xff, 0xd8, 0xff] }],
        },
        {
            label: "PNG",
            mimeType: "image/png",
            extensions: ["png"],
            signatures: [{ offset: 0, bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a] }],
        },
        {
            label: "WebP",
            mimeType: "image/webp",
            extensions: ["webp"],
            signatures: [
                { offset: 0, bytes: [0x52, 0x49, 0x46, 0x46] }, // "RIFF"
                { offset: 8, bytes: [0x57, 0x45, 0x42, 0x50] }, // "WEBP"
            ],
        },
    ],
};
export const UPLOAD_RULES = {
    avatar: AVATAR_RULES,
    resume: RESUME_RULES,
};
export function isUploadKind(value) {
    return value === "avatar" || value === "resume";
}
/** Every extension this kind accepts, lowercase and without the dot. */
export function uploadExtensions(rules) {
    return rules.formats.flatMap((f) => [...f.extensions]);
}
/**
 * For an <input type="file"> accept attribute. Both the extensions and the
 * MIME types are listed: macOS Safari filters on the MIME type and ignores
 * bare extensions, while some Android pickers do the reverse.
 */
export function uploadAccept(rules) {
    return [
        ...uploadExtensions(rules).map((ext) => `.${ext}`),
        ...rules.formats.map((f) => f.mimeType),
    ].join(",");
}
/** Human-readable list for error copy — "PDF or DOCX", "JPEG, PNG or WebP". */
export function uploadFormatList(rules) {
    const labels = rules.formats.map((f) => f.label);
    if (labels.length < 2)
        return labels.join("");
    return `${labels.slice(0, -1).join(", ")} or ${labels[labels.length - 1]}`;
}
/** The format this kind uses for `extension`, if it accepts it at all. */
export function uploadFormatForExtension(rules, extension) {
    const lower = extension.toLowerCase();
    return rules.formats.find((f) => f.extensions.includes(lower));
}
/**
 * The format the BYTES actually are, ignoring whatever the filename and the
 * browser-declared Content-Type claim — neither is anything an uploader is
 * obliged to get right, and both are attacker-controlled. Returns undefined
 * when the content matches nothing this kind accepts.
 */
export function uploadFormatForBytes(rules, bytes) {
    return rules.formats.find((format) => {
        const headerMatches = format.signatures.every((signature) => signature.bytes.every((byte, i) => bytes[signature.offset + i] === byte));
        return headerMatches && (format.verify?.(bytes) ?? true);
    });
}
/**
 * The extension of a filename or URL, lowercase and without the dot.
 * Deliberately a regex over the string rather than `new URL(…).pathname`:
 * once the API's localizeAssets has run, an asset URL is a root-relative
 * "/assets/<hash>.pdf", which `new URL` throws on without a base.
 */
export function extensionOf(nameOrUrl) {
    if (!nameOrUrl)
        return undefined;
    // Stop at the first ? or # so a signed URL's query string can't swallow
    // the extension, then take what follows the last dot of the path.
    const path = nameOrUrl.split(/[?#]/, 1)[0] ?? "";
    return /\.([a-z0-9]+)$/i.exec(path)?.[1]?.toLowerCase();
}
/** Bytes as something a person reads — "820 KB", "1.4 MB". */
export function formatBytes(bytes) {
    if (bytes < 1024)
        return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024)
        return `${Math.round(kb)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
}
/** "PDF" / "DOCX" for the résumé on this profile, or undefined if it has none. */
export function resumeFormatLabel(profile) {
    const extension = extensionOf(profile.resumeFilename) ?? extensionOf(profile.resumeUrl);
    if (!extension)
        return undefined;
    return uploadFormatForExtension(RESUME_RULES, extension)?.label;
}
/**
 * What to put in the anchor's `download` attribute — the name the visitor's
 * browser saves the file under.
 *
 * The attribute is only honoured same-origin, which is exactly the case that
 * matters: in an exported or hosted build the API has already rewritten
 * `resumeUrl` to a local /assets/ path, so the download happens and this name
 * is used. In the wizard's live preview the URL still points at Supabase
 * Storage, where the browser ignores `download` and simply opens the file —
 * acceptable, and the reason every template also sets target="_blank", so
 * that case opens a tab instead of navigating the portfolio away.
 *
 * Falls back to the owner's name when `resumeFilename` is missing (a résumé
 * URL typed in by hand, or one saved before that field existed) so a visitor
 * never ends up with a UUID on their desktop.
 */
export function resumeDownloadName(profile) {
    if (!profile.resumeUrl)
        return undefined;
    if (profile.resumeFilename)
        return profile.resumeFilename;
    const extension = extensionOf(profile.resumeUrl);
    if (!extension || !uploadFormatForExtension(RESUME_RULES, extension))
        return undefined;
    const slug = profile.fullName
        .normalize("NFKD")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    return slug ? `${slug}-resume.${extension}` : `resume.${extension}`;
}
/**
 * Everything a template needs to render one résumé link, or null when the
 * profile has no résumé and the affordance should not render at all. Six
 * templates each assembling this by hand is six chances to forget the
 * `download` attribute, or the target that keeps a cross-origin click from
 * navigating the portfolio away.
 */
export function resumeDownload(profile) {
    if (!profile.resumeUrl)
        return null;
    return {
        href: profile.resumeUrl,
        download: resumeDownloadName(profile),
        format: resumeFormatLabel(profile),
    };
}
/** Index of `needle`'s ASCII bytes in `haystack`, or -1. */
function indexOfAscii(haystack, needle) {
    const target = new Uint8Array(needle.length);
    for (let i = 0; i < needle.length; i++)
        target[i] = needle.charCodeAt(i);
    outer: for (let start = 0; start <= haystack.length - target.length; start++) {
        for (let i = 0; i < target.length; i++) {
            if (haystack[start + i] !== target[i])
                continue outer;
        }
        return start;
    }
    return -1;
}
