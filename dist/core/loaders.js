export const TEMPLATE_LOADERS = {
    aurora: () => import("@pb/templates/dist/aurora/index.js"),
    monolith: () => import("@pb/templates/dist/monolith/index.js"),
    prism: () => import("@pb/templates/dist/prism/index.js"),
};
