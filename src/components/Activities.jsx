"use client";

import { useState } from "react";
import { Code2, Gamepad2, Keyboard } from "lucide-react";

// Newer lucide-react versions removed brand icons (like Youtube),
// so we use our own small SVG icon instead.
function Youtube({ size = 24, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
    );
}

const activities = [
    {
        title: "Coding",
        description: "Learning, building projects, and solving problems.",
        icon: Code2,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",

    },
    {
        title: "Tech YouTube Video",
        description: "Exploring technology and learning through videos.",
        icon: Youtube,
        color: "text-red-500",
        bg: "bg-red-500/10",

    },
    {
        title: "Gaming Using Laptop",
        description: "Enjoying games during my free time.",
        icon: Gamepad2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        link: "",
    },
    {
        title: "Monkeytype",
        description: "Practicing typing speed and accuracy.",
        icon: Keyboard,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",

    },
];

export default function Activities() {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <section
            id="activities"
            className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <h2 className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                        Extracurricular Activities
                    </h2>

                    <p className="mt-5 text-lg text-gray-400 sm:text-2xl">
                        I love coding &amp; growing every day
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;
                        const isActive = activeCard === index;

                        const card = (
                            <div
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                                className={`group flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/30 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-zinc-900/60 hover:shadow-[0_10px_40px_rgba(239,68,68,0.08)] ${isActive ? "scale-[1.02]" : ""
                                    } ${activity.link ? "cursor-pointer" : "cursor-default"}`}
                            >
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? `${activity.bg} scale-110` : "bg-transparent"
                                        }`}
                                >
                                    <Icon
                                        size={34}
                                        strokeWidth={2}
                                        className={`${activity.color} transition-transform duration-300 group-hover:scale-110`}
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-xl">
                                    {activity.title}
                                </h3>

                                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                                    {activity.description}
                                </p>
                            </div>
                        );

                        return activity.link ? (
                            <a
                                key={activity.title}
                                href={activity.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                            >
                                {card}
                            </a>
                        ) : (
                            <div key={activity.title}>{card}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}