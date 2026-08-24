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
 * A run of bytes a real file of some format starts with. `offset` exists for
 * container formats that put their real marker past the header — WebP's
 * "WEBP" tag sits at byte 8, behind the generic RIFF one at byte 0.
 */
export interface ByteSignature {
    offset: number;
    bytes: readonly number[];
}
export interface UploadFormat {
    /** Short display name — "PDF", "JPEG". */
    label: string;
    /** Canonical MIME type, used for the accept attribute and the stored object. */
    mimeType: string;
    /** Every extension that means this format. Lowercase, no leading dot. */
    extensions: readonly string[];
    /** ALL of these must match for the bytes to be this format. */
    signatures: readonly ByteSignature[];
    /**
     * An extra content check for formats whose signature is too generic to
     * stand alone. Only .docx has one: it is an ordinary ZIP, so the ZIP
     * header alone would accept any archive someone renamed.
     */
    verify?: (bytes: Uint8Array) => boolean;
}
export interface UploadRules {
    kind: UploadKind;
    /** What the user calls this thing, for error copy. */
    noun: string;
    maxBytes: number;
    formats: readonly UploadFormat[];
}
export type UploadKind = "avatar" | "resume";
export declare const RESUME_RULES: UploadRules;
export declare const AVATAR_RULES: UploadRules;
export declare const UPLOAD_RULES: Record<UploadKind, UploadRules>;
export declare function isUploadKind(value: string): value is UploadKind;
/** Every extension this kind accepts, lowercase and without the dot. */
export declare function uploadExtensions(rules: UploadRules): string[];
/**
 * For an <input type="file"> accept attribute. Both the extensions and the
 * MIME types are listed: macOS Safari filters on the MIME type and ignores
 * bare extensions, while some Android pickers do the reverse.
 */
export declare function uploadAccept(rules: UploadRules): string;
/** Human-readable list for error copy — "PDF or DOCX", "JPEG, PNG or WebP". */
export declare function uploadFormatList(rules: UploadRules): string;
/** The format this kind uses for `extension`, if it accepts it at all. */
export declare function uploadFormatForExtension(rules: UploadRules, extension: string): UploadFormat | undefined;
/**
 * The format the BYTES actually are, ignoring whatever the filename and the
 * browser-declared Content-Type claim — neither is anything an uploader is
 * obliged to get right, and both are attacker-controlled. Returns undefined
 * when the content matches nothing this kind accepts.
 */
export declare function uploadFormatForBytes(rules: UploadRules, bytes: Uint8Array): UploadFormat | undefined;
/**
 * The extension of a filename or URL, lowercase and without the dot.
 * Deliberately a regex over the string rather than `new URL(…).pathname`:
 * once the API's localizeAssets has run, an asset URL is a root-relative
 * "/assets/<hash>.pdf", which `new URL` throws on without a base.
 */
export declare function extensionOf(nameOrUrl: string | undefined): string | undefined;
/** Bytes as something a person reads — "820 KB", "1.4 MB". */
export declare function formatBytes(bytes: number): string;
interface ResumeProfile {
    fullName: string;
    resumeUrl?: string | undefined;
    resumeFilename?: string | undefined;
}
/** "PDF" / "DOCX" for the résumé on this profile, or undefined if it has none. */
export declare function resumeFormatLabel(profile: ResumeProfile): string | undefined;
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
export declare function resumeDownloadName(profile: ResumeProfile): string | undefined;
export interface ResumeDownload {
    /** Where the file lives. Safe to use directly as an anchor href. */
    href: string;
    /** For the anchor's `download` attribute; undefined omits the attribute. */
    download: string | undefined;
    /** "PDF" / "DOCX", or undefined when the format can't be told from the name. */
    format: string | undefined;
}
/**
 * Everything a template needs to render one résumé link, or null when the
 * profile has no résumé and the affordance should not render at all. Six
 * templates each assembling this by hand is six chances to forget the
 * `download` attribute, or the target that keeps a cross-origin click from
 * navigating the portfolio away.
 */
export declare function resumeDownload(profile: ResumeProfile): ResumeDownload | null;
export {};
