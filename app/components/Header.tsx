"use client";

import { useState } from "react";

const navigation = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="mx-auto flex items-center justify-center shadow-lg gap-x-4 mb-6 p-4">
            <nav className="flex items-center gap-x-6">
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-semibold text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
