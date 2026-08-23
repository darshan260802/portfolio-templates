export const TEMPLATE_LOADERS = {
    atlas: () => import("@pb/templates/dist/atlas/index.js"),
    aurora: () => import("@pb/templates/dist/aurora/index.js"),
    monolith: () => import("@pb/templates/dist/monolith/index.js"),
    nocturne: () => import("@pb/templates/dist/nocturne/index.js"),
    prism: () => import("@pb/templates/dist/prism/index.js"),
};
