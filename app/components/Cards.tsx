"use client";
import Image from "next/image";

export default function Cards() {
    return (
        <div className="flex items-center justify-center shadow-lg p-6 bg-gray-100">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image
                        src="/images/makeJobs.jpg"
                        width={150}
                        height={50}
                        //className="w-full object-cover md:h-full md:w-48"
                        alt="Modern building architecture"
                    />
                </div>
                <div className="p-8">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                        Company retreats
                    </div>
                    <a
                        href="#"
                        className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
                    >
                        Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-gray-500">
                        Looking to take your team away on a retreat to enjoy
                        awesome food and take in some sunshine? We have a list
                        of places to do just that.
                    </p>
                </div>
            </div>
        </div>
    );
}
