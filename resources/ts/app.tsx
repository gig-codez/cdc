import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { InertiaProgress } from "@inertiajs/progress";
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob("./Pages/**/*.tsx")
    ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <PrimeReactProvider>
                <App {...props} />
            </PrimeReactProvider>
        );
    },
});
InertiaProgress.init({
    color: "#205CD5",
    showSpinner: true,
});