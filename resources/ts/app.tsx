// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { createInertiaApp } from '@inertiajs/inertia-react'
// // import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
// import Layout from "./Pages/components/layout";

// // declare global {
// //     interface ImportMeta {
// //         glob: (pattern: string) => Record<string, any>;
// //     }
// // }

// createInertiaApp({
//     // Below you can see that we are going to get all React components from resources/js/Pages folder
//     // resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.tsx')
//         let page: { default: React.ComponentType<any> & { layout?: React.ComponentType<any> | undefined } } = pages[`./Pages/${name}.tsx`];
//         page.default.layout = page.default.layout || ((page: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <Layout children={page} />)
//         return page
//     },
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />)
//     },

// });

import "./bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});