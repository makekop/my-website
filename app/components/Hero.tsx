"use client";
import { Fullscreen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="w-full h-[70vh] bg-cover bg-no-repeat bg-position-[center_20%]"
            style={{ backgroundImage: "url('/images/makeJobs.jpg')" }}
        >
            <div className="flex h-full items-center justify-center">
                <h1 className="text-black text-4xl font-bold">HERO</h1>
            </div>
        </section>
    );
}
