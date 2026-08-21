import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function OfficeLocations() {
    const offices = [
        {
            city: "Kathmandu",
            country: "Nepal",
            location: "Kathmandu, Nepal",
            description:
                "Our Kathmandu office is the central hub for technology, product development, and client collaboration.",
            image: "/images/contact.png",
        },
        {
            city: "Tokyo",
            country: "Japan",
            location: "Tokyo, Japan",
            description:
                "Our Tokyo office supports international partnerships and technology-driven business opportunities.",
            image: "/images/contact.png",
        },
    ]

    return (
        <section className="border-t bg-muted/20 py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">

                {/* HEADER */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <Badge
                        className="
                            mb-5 inline-flex items-center gap-2
                            border-emerald-200
                            bg-emerald-50
                            text-emerald-700
                            hover:bg-emerald-100
                            dark:border-emerald-800
                            dark:bg-emerald-950/30
                            dark:text-emerald-400
                        "
                    >
                        <MapPin className="h-3.5 w-3.5" />
                        Our Locations
                    </Badge>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Find us around the world
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        InfiniGrow Technologies brings together people,
                        ideas, and technology across Nepal and Japan.
                        Connect with our team at one of our offices.
                    </p>
                </div>

                {/* OFFICE GRID */}
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                    {offices.map((office) => (
                        <Card
                            key={`${office.city}-${office.country}`}
                            className="
                                group overflow-hidden rounded-2xl border
                                bg-background shadow-none
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-emerald-300
                                hover:shadow-lg
                                dark:hover:border-emerald-800
                            "
                        >
                            {/* IMAGE */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={office.image}
                                    alt={`${office.city} office`}
                                    fill
                                    sizes="
                                        (max-width: 768px) 100vw,
                                        50vw
                                    "
                                    className="
                                        object-cover
                                        transition-transform duration-500
                                        group-hover:scale-105
                                    "
                                />

                                <div className="absolute left-4 top-4">
                                    <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                                        {office.country}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                {/* LOCATION */}
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                                        <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight">
                                            {office.city}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                            {office.location}
                                        </p>
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                                    {office.description}
                                </p>

                                {/* VIEW LOCATION */}
                                <button
                                    type="button"
                                    className="
                                        mt-6 inline-flex items-center
                                        text-sm font-medium
                                        text-foreground transition-colors
                                        hover:text-emerald-600
                                        dark:hover:text-emerald-400
                                    "
                                >
                                    View location
                                    <ArrowRight
                                        className="
                                            ml-2 h-4 w-4
                                            transition-transform
                                            group-hover:translate-x-1
                                        "
                                    />
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}