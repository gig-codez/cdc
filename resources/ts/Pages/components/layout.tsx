import { Link } from '@inertiajs/react'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    )
}