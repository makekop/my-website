"use client";

const navigation = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
];

export default function Header() {
    return (
        <header className="flex items-center justify-center shadow-lg p-6 bg-gray-100">
            <nav>
                {navigation.map((item) => {
                    debugger;
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-bold text-2xl p-6"
                        >
                            {item.name}
                        </a>
                    );
                })}
            </nav>
        </header>
    );
}
