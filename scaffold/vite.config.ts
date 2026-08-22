import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Generated project used for both the ZIP download and the hosted build.
// No React Compiler here on purpose: templates already ship compiled from
// the templates repo's own lib build, so this project only needs to bundle
// plain, already-optimized JSX.
export default defineConfig({
	plugins: [react()],
});
