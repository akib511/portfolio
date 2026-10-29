"use client";

import { useEffect, useState } from "react";

const GITHUB_USERNAME = "akib511";

// Builds the 364-day grid ending "today", aligned to whole weeks.
// Only call this on the client (e.g. after a fetch settles).
function buildDays(contributions) {
    const contributionMap = new Map(
        contributions.map((item) => [item.date, item])
    );

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 363);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const days = [];

    for (let i = 0; i < 364; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const dateString = [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0"),
            String(date.getDate()).padStart(2, "0"),
        ].join("-");

        const contribution = contributionMap.get(dateString);

        days.push({
            date: dateString,
            count: contribution?.count || 0,
            level: contribution?.level || 0,
        });
    }

    return days;
}

export default function GitHubActivity() {
    const [contributions, setContributions] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        let cancelled = false;

        async function getContributions() {
            let items = [];

            try {
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
                );


                if (!response.ok) {
                    throw new Error("Failed to fetch contributions");
                }

                const data = await response.json();
                items = data.contributions || [];
            } catch (error) {
                console.error("GitHub contributions error:", error);
            }

            if (cancelled) return;

            setContributions(items);
            // Built after the fetch settles so `new Date()` ("now") is only
            // read on the client, never during the prerender.
            setDays(buildDays(items));
        }

        getContributions();

        return () => {
            cancelled = true;
        };
    }, []);

    const weeks = [];

    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    const months = [];
    let previousMonth = "";

    weeks.forEach((week, index) => {
        const firstDay = week[0];


        if (firstDay) {
            const month = new Date(firstDay.date).toLocaleString("en-US", {
                month: "short",
                timeZone: "UTC",
            });

            if (month !== previousMonth) {
                months.push({ label: month, index });
                previousMonth = month;
            }
        }


    });

    const totalContributions = contributions.reduce(
        (total, item) => total + item.count,
        0
    );

    return (<section
        id="coding-activity"
        className="relative overflow-hidden bg-[#090909] px-5 py-20 text-white sm:px-8 lg:px-16"
    > <div className="mx-auto max-w-7xl"> <div className="mb-8 text-center"> <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
        Open Source Journey </p>


        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Coding <span className="text-red-500">Activity</span>
        </h2>

        <p className="mt-4 text-sm text-gray-400 sm:text-base">
            Every contribution is a step forward.
        </p>
    </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e] p-5 shadow-2xl sm:p-8">
                <div className="mb-8 overflow-x-auto">
                    <p className="mb-7 whitespace-nowrap font-mono text-xs text-gray-400 sm:text-sm">
                        contributions.log —{" "}
                        <span className="text-green-400">$</span>{" "}
                        <span className="text-orange-500">
                            git log --since=12.months --author=me --pretty=oneline | wc -l
                        </span>
                    </p>

                    <div className="min-w-[700px]">
                        <div className="relative mb-3 h-5 text-xs text-gray-400">
                            {months.map((month) => (
                                <span
                                    key={`${month.label}-${month.index}`}
                                    className="absolute"
                                    style={{
                                        left: `${(month.index / weeks.length) * 100}%`,
                                    }}
                                >
                                    {month.label}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-[3px]">
                            {weeks.map((week, weekIndex) => (
                                <div
                                    key={weekIndex}
                                    className="flex min-w-0 flex-1 flex-col gap-[3px]"
                                >
                                    {week.map((day) => (
                                        <div
                                            key={day.date}
                                            title={`${day.count} contributions on ${day.date}`}
                                            className="aspect-square w-full rounded-[3px] transition-transform duration-150 hover:scale-125"
                                            style={{
                                                backgroundColor:
                                                    day.level === 0
                                                        ? "#241f1fff"
                                                        : day.level === 1
                                                            ? "#842732ff"
                                                            : day.level === 2
                                                                ? "#ef0e0eff"
                                                                : day.level === 3
                                                                    ? "#c94b1c"
                                                                    : "#f44242ff",
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                    <p className="text-sm text-gray-400">
                        <span className="font-semibold text-white">
                            {totalContributions.toLocaleString()}
                        </span>{" "}
                        contributions in the last year
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>Less</span>

                        {["#292929", "#542516", "#8f3518", "#c94b1c", "#ff5b24"].map(
                            (color) => (
                                <span
                                    key={color}
                                    className="h-3 w-3 rounded-[3px]"
                                    style={{ backgroundColor: color }}
                                />
                            )
                        )}

                        <span>More</span>
                    </div>
                </div>

                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                    View GitHub Profile →
                </a>
            </div>
        </div>
    </section>


    );
}
