"use client"

import {
    ArrowRight,
    Briefcase,
    GraduationCap,
    Phone,
} from "lucide-react"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ContactSidebar() {
    const t = useTranslations("contactSidebar")

    return (
        <aside
            className="
                order-2
                lg:order-1
                lg:sticky
                lg:top-24
            "
        >
            <div className="space-y-10">

                {/* IMAGE */}
                <div className="w-full">
                    <div
                        className="
                            relative
                            aspect-[420/517]
                            w-full
                            overflow-hidden
                            rounded-3xl
                            rounded-br-[42%]
                            bg-muted
                        "
                    >
                        <Image
                            src="/images/contact.png"
                            alt={t("imageAlt")}
                            fill
                            priority
                            sizes="
                                (max-width: 1024px) 100vw,
                                40vw
                            "
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* PHONE */}
                <div>
                    <div className="mb-5 flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-50
                                dark:bg-emerald-950/40
                            "
                        >
                            <Phone
                                className="
                                    h-5
                                    w-5
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            />
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                {t("phone.title")}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                {t("phone.subtitle")}
                            </p>
                        </div>

                    </div>

                    <a
                        href="tel:8008152044"
                        className="
                            text-2xl
                            font-semibold
                            tracking-tight
                            transition-colors
                            hover:text-emerald-600
                            dark:hover:text-emerald-400
                        "
                    >
                        (800) 815-2044
                    </a>

                    <p
                        className="
                            mt-3
                            max-w-md
                            text-sm
                            leading-relaxed
                            text-muted-foreground
                        "
                    >
                        {t("phone.availability")}
                    </p>
                </div>

                <Separator />

                {/* JOB */}
                <div>
                    <div className="mb-5 flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-50
                                dark:bg-emerald-950/40
                            "
                        >
                            <Briefcase
                                className="
                                    h-5
                                    w-5
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            />
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                {t("job.title")}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                {t("job.subtitle")}
                            </p>
                        </div>

                    </div>

                    <p
                        className="
                            max-w-md
                            text-sm
                            leading-relaxed
                            text-muted-foreground
                        "
                    >
                        {t("job.description")}
                    </p>

                    <Button
                        type="button"
                        variant="outline"
                        className="mt-5 rounded-xl"
                    >
                        {t("job.button")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <Separator />

                {/* FELLOWSHIP */}
                <div>
                    <div className="mb-5 flex items-center gap-4">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-50
                                dark:bg-emerald-950/40
                            "
                        >
                            <GraduationCap
                                className="
                                    h-5
                                    w-5
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            />
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                {t("fellowship.title")}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                {t("fellowship.subtitle")}
                            </p>
                        </div>

                    </div>

                    <p
                        className="
                            max-w-md
                            text-sm
                            leading-relaxed
                            text-muted-foreground
                        "
                    >
                        {t("fellowship.description")}
                    </p>

                    <Button
                        type="button"
                        variant="outline"
                        className="mt-5 rounded-xl"
                    >
                        {t("fellowship.button")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

            </div>
        </aside>
    )
}