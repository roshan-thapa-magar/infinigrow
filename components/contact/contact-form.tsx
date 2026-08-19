"use client"

import {
    ArrowRight,
    Briefcase,
    GraduationCap,
    Phone,
    Sparkles,
} from "lucide-react"

import Image from "next/image"

import {
    FormEvent,
    useState,
} from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

import { toast } from "sonner"


// =========================================================
// API URL
// =========================================================

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://127.0.0.1:8000"


// =========================================================
// FORM DATA TYPE
// =========================================================

interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    workType: string
    service: string
    project: string
    budget: string
}


// =========================================================
// COMPONENT
// =========================================================

export default function ContactForm() {

    // =====================================================
    // OPTIONS
    // =====================================================

    const workOptions = [
        {
            value: "new-project",
            label: "Start a new project",
        },
        {
            value: "existing-product",
            label: "Improve an existing product",
        },
        {
            value: "consultation",
            label: "Technology consultation",
        },
        {
            value: "partnership",
            label: "Long-term partnership",
        },
    ]

    const serviceOptions = [
        {
            value: "web-development",
            label: "Web Development",
        },
        {
            value: "mobile-development",
            label: "Mobile App Development",
        },
        {
            value: "ui-ux",
            label: "UI / UX Design",
        },
        {
            value: "software-development",
            label: "Software Development",
        },
        {
            value: "cloud-devops",
            label: "Cloud & DevOps",
        },
        {
            value: "cyber-security",
            label: "Cyber Security",
        },
    ]

    const budgetOptions = [
        {
            value: "under-5k",
            label: "Under $5K",
        },
        {
            value: "5k-20k",
            label: "$5K – $20K",
        },
        {
            value: "20k-plus",
            label: "$20K+",
        },
    ]


    // =====================================================
    // INITIAL FORM
    // =====================================================

    const initialFormData: ContactFormData = {
        firstName: "",
        lastName: "",
        email: "",
        workType: "",
        service: "",
        project: "",
        budget: "",
    }


    // =====================================================
    // STATE
    // =====================================================

    const [formData, setFormData] =
        useState<ContactFormData>(
            initialFormData
        )

    const [loading, setLoading] =
        useState(false)


    // =====================================================
    // INPUT HANDLER
    // =====================================================

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {

        const {
            name,
            value,
        } = e.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }


    // =====================================================
    // SUBMIT
    // =====================================================

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault()


        // =================================================
        // VALIDATION
        // =================================================

        if (!formData.firstName.trim()) {
            toast.error("First name is required.")
            return
        }

        if (!formData.lastName.trim()) {
            toast.error("Last name is required.")
            return
        }

        if (!formData.email.trim()) {
            toast.error("Email address is required.")
            return
        }

        if (!formData.workType) {
            toast.error("Please select how you want to work with us.")
            return
        }

        if (!formData.service) {
            toast.error("Please select a service.")
            return
        }

        if (!formData.project.trim()) {
            toast.error("Please tell us about your project.")
            return
        }

        if (!formData.budget) {
            toast.error("Please select your estimated budget.")
            return
        }


        // =================================================
        // START LOADING
        // =================================================

        setLoading(true)


        try {

            // =============================================
            // SEND TO FASTAPI
            // =============================================

            const response = await fetch(
                `${API_URL}/contacts`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(
                        formData
                    ),
                }
            )


            // =============================================
            // READ RESPONSE
            // =============================================

            const data =
                await response.json()


            // =============================================
            // ERROR
            // =============================================

            if (!response.ok) {

                let errorMessage =
                    "Failed to submit your inquiry."

                if (
                    typeof data?.detail ===
                    "string"
                ) {
                    errorMessage =
                        data.detail
                }

                throw new Error(
                    errorMessage
                )
            }


            // =============================================
            // SUCCESS
            // =============================================

            toast.success(
                "Inquiry submitted successfully!",
                {
                    description:
                        "Thank you for contacting us. Our team will get back to you soon.",
                    duration: 5000,
                }
            )


            // =============================================
            // RESET FORM
            // =============================================

            setFormData(
                initialFormData
            )

        } catch (error) {

            console.error(
                "Contact form error:",
                error
            )


            // =============================================
            // ERROR TOAST
            // =============================================

            toast.error(
                "Something went wrong.",
                {
                    description:
                        error instanceof Error
                            ? error.message
                            : "Unable to submit your inquiry. Please try again.",
                    duration: 5000,
                }
            )

        } finally {

            setLoading(false)

        }
    }


    // =====================================================
    // UI
    // =====================================================

    return (
        <section className="py-16 sm:py-20 lg:py-24">

            <div className="mx-auto max-w-7xl px-4 md:px-8">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="mb-14 max-w-3xl sm:mb-16">

                    <Badge
                        variant="outline"
                        className="
                            mb-5
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border-emerald-200
                            bg-emerald-50
                            px-3
                            py-1
                            text-emerald-700
                            dark:border-emerald-800
                            dark:bg-emerald-950/30
                            dark:text-emerald-400
                        "
                    >
                        <Sparkles className="h-3.5 w-3.5" />

                        Contact Us
                    </Badge>


                    <h1
                        className="
                            text-4xl
                            font-bold
                            tracking-tight
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Let's build together
                    </h1>


                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-muted-foreground
                            sm:text-lg
                        "
                    >
                        Have an idea, project, or challenge
                        in mind? Tell us what you're working
                        on and let's explore how we can create
                        something meaningful together.
                    </p>

                </div>


                {/* =================================================
                    MAIN GRID
                ================================================== */}

                <div
                    className="
                        grid
                        items-start
                        gap-14
                        lg:grid-cols-[0.8fr_1.2fr]
                        lg:gap-20
                        xl:gap-24
                    "
                >

                    {/* =================================================
                        LEFT
                    ================================================== */}

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
                                        alt="InfiniGrow Technologies"
                                        fill
                                        priority
                                        sizes="
                                            (max-width: 1024px) 100vw,
                                            40vw
                                        "
                                        className="
                                            object-cover
                                            object-center
                                        "
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                LET'S TALK
                            ================================================== */}

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
                                            Let's talk
                                        </h2>

                                        <p className="text-sm text-muted-foreground">
                                            Have a quick conversation
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
                                    We're available Monday
                                    through Friday during US
                                    working hours.
                                </p>

                            </div>


                            <Separator />


                            {/* =================================================
                                CAREER
                            ================================================== */}

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
                                            Looking for a job?
                                        </h2>

                                        <p className="text-sm text-muted-foreground">
                                            Join our growing team
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
                                    Explore opportunities to
                                    work with our team. We're
                                    always interested in meeting
                                    talented and motivated people.
                                </p>


                                <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-5 rounded-xl"
                                >
                                    View Openings

                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                            </div>


                            <Separator />


                            {/* =================================================
                                FELLOWSHIP
                            ================================================== */}

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
                                            Get a fellowship
                                        </h2>

                                        <p className="text-sm text-muted-foreground">
                                            Learn and grow with us
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
                                    Discover our fellowship
                                    opportunities and find a way
                                    to learn, contribute, and
                                    grow with our team.
                                </p>


                                <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-5 rounded-xl"
                                >
                                    Become a Fellow

                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                            </div>

                        </div>

                    </aside>


                    {/* =================================================
                        RIGHT — FORM
                    ================================================== */}

                    <section className="order-1 lg:order-2">

                        {/* FORM HEADER */}

                        <div className="mb-10">

                            <p
                                className="
                                    mb-3
                                    text-sm
                                    font-medium
                                    tracking-wide
                                    text-emerald-600
                                    dark:text-emerald-400
                                "
                            >
                                START A CONVERSATION
                            </p>


                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    sm:text-4xl
                                "
                            >
                                Tell us about your project
                            </h2>


                            <p
                                className="
                                    mt-3
                                    max-w-xl
                                    text-sm
                                    leading-relaxed
                                    text-muted-foreground
                                    sm:text-base
                                "
                            >
                                Answer a few quick questions
                                so we can better understand your
                                goals and connect you with the
                                right people.
                            </p>

                        </div>


                        {/* =================================================
                            FORM
                        ================================================== */}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-9"
                        >

                            {/* NAME */}

                            <div className="grid gap-5 sm:grid-cols-2">

                                <div className="space-y-2">

                                    <Label htmlFor="firstName">
                                        First Name
                                    </Label>

                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="John"
                                        autoComplete="given-name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        disabled={loading}
                                        required
                                        className="h-12 rounded-xl"
                                    />

                                </div>


                                <div className="space-y-2">

                                    <Label htmlFor="lastName">
                                        Last Name
                                    </Label>

                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Doe"
                                        autoComplete="family-name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        disabled={loading}
                                        required
                                        className="h-12 rounded-xl"
                                    />

                                </div>

                            </div>


                            {/* EMAIL */}

                            <div className="space-y-2">

                                <Label htmlFor="email">
                                    Email Address
                                </Label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                    className="h-12 rounded-xl"
                                />

                            </div>


                            <Separator />


                            {/* WORK TYPE */}

                            <div className="space-y-4">

                                <div>

                                    <h3 className="font-semibold">
                                        How do you want to work with us?
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Choose the option that best
                                        describes your needs.
                                    </p>

                                </div>


                                <RadioGroup
                                    name="workType"
                                    value={formData.workType}
                                    onValueChange={(value) =>
                                        setFormData(
                                            (previous) => ({
                                                ...previous,
                                                workType: value,
                                            })
                                        )
                                    }
                                    disabled={loading}
                                    className="grid gap-3 sm:grid-cols-2"
                                >

                                    {workOptions.map(
                                        (option) => (

                                            <Label
                                                key={option.value}
                                                htmlFor={`work-${option.value}`}
                                                className="
                                                    flex
                                                    cursor-pointer
                                                    items-center
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    p-4
                                                    transition-all
                                                    hover:border-emerald-500
                                                    hover:bg-emerald-50/50
                                                    dark:hover:bg-emerald-950/20
                                                    has-[[data-state=checked]]:border-emerald-500
                                                    has-[[data-state=checked]]:bg-emerald-50
                                                    dark:has-[[data-state=checked]]:bg-emerald-950/30
                                                "
                                            >

                                                <RadioGroupItem
                                                    id={`work-${option.value}`}
                                                    value={option.value}
                                                />

                                                <span className="text-sm font-medium">
                                                    {option.label}
                                                </span>

                                            </Label>

                                        )
                                    )}

                                </RadioGroup>

                            </div>


                            {/* SERVICES */}

                            <div className="space-y-4">

                                <div>

                                    <h3 className="font-semibold">
                                        What service do you require?
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Select the service closest
                                        to your project requirements.
                                    </p>

                                </div>


                                <RadioGroup
                                    name="service"
                                    value={formData.service}
                                    onValueChange={(value) =>
                                        setFormData(
                                            (previous) => ({
                                                ...previous,
                                                service: value,
                                            })
                                        )
                                    }
                                    disabled={loading}
                                    className="grid gap-3 sm:grid-cols-2"
                                >

                                    {serviceOptions.map(
                                        (service) => (

                                            <Label
                                                key={service.value}
                                                htmlFor={`service-${service.value}`}
                                                className="
                                                    flex
                                                    cursor-pointer
                                                    items-center
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    p-4
                                                    transition-all
                                                    hover:border-emerald-500
                                                    hover:bg-emerald-50/50
                                                    dark:hover:bg-emerald-950/20
                                                    has-[[data-state=checked]]:border-emerald-500
                                                    has-[[data-state=checked]]:bg-emerald-50
                                                    dark:has-[[data-state=checked]]:bg-emerald-950/30
                                                "
                                            >

                                                <RadioGroupItem
                                                    id={`service-${service.value}`}
                                                    value={service.value}
                                                />

                                                <span className="text-sm font-medium">
                                                    {service.label}
                                                </span>

                                            </Label>

                                        )
                                    )}

                                </RadioGroup>

                            </div>


                            {/* PROJECT */}

                            <div className="space-y-4">

                                <div>

                                    <h3 className="font-semibold">
                                        Tell us something about your project
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Give us a brief overview of your
                                        idea, goals, timeline, or anything
                                        else we should know.
                                    </p>

                                </div>


                                <Textarea
                                    id="project"
                                    name="project"
                                    placeholder="Tell us what you're building, what problem you're trying to solve, and how we can help..."
                                    value={formData.project}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                    className="
                                        min-h-[200px]
                                        resize-none
                                        rounded-xl
                                        p-4
                                    "
                                />

                            </div>


                            {/* BUDGET */}

                            <div className="space-y-4">

                                <div>

                                    <h3 className="font-semibold">
                                        What is your estimated project budget?
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        An approximate range helps us
                                        understand the project scope.
                                    </p>

                                </div>


                                <RadioGroup
                                    name="budget"
                                    value={formData.budget}
                                    onValueChange={(value) =>
                                        setFormData(
                                            (previous) => ({
                                                ...previous,
                                                budget: value,
                                            })
                                        )
                                    }
                                    disabled={loading}
                                    className="grid gap-3 sm:grid-cols-3"
                                >

                                    {budgetOptions.map(
                                        (budget) => (

                                            <Label
                                                key={budget.value}
                                                htmlFor={`budget-${budget.value}`}
                                                className="
                                                    flex
                                                    cursor-pointer
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                    rounded-xl
                                                    border
                                                    p-4
                                                    text-center
                                                    transition-all
                                                    hover:border-emerald-500
                                                    hover:bg-emerald-50/50
                                                    dark:hover:bg-emerald-950/20
                                                    has-[[data-state=checked]]:border-emerald-500
                                                    has-[[data-state=checked]]:bg-emerald-50
                                                    dark:has-[[data-state=checked]]:bg-emerald-950/30
                                                "
                                            >

                                                <RadioGroupItem
                                                    id={`budget-${budget.value}`}
                                                    value={budget.value}
                                                />

                                                <span className="text-sm font-medium">
                                                    {budget.label}
                                                </span>

                                            </Label>

                                        )
                                    )}

                                </RadioGroup>

                            </div>


                            {/* SUBMIT */}

                            <div>

                                <Separator className="mb-8" />


                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={loading}
                                    className="
                                        h-12
                                        w-full
                                        rounded-xl
                                        bg-emerald-600
                                        px-8
                                        text-white
                                        hover:bg-emerald-700
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                        sm:w-auto
                                        sm:min-w-[210px]
                                    "
                                >

                                    {loading ? (
                                        <>
                                            <span
                                                className="
                                                    mr-2
                                                    h-4
                                                    w-4
                                                    animate-spin
                                                    rounded-full
                                                    border-2
                                                    border-white
                                                    border-t-transparent
                                                "
                                            />

                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry

                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </>
                                    )}

                                </Button>


                                <p
                                    className="
                                        mt-4
                                        max-w-lg
                                        text-xs
                                        leading-relaxed
                                        text-muted-foreground
                                    "
                                >
                                    By submitting this form, you agree
                                    that our team may contact you
                                    regarding your inquiry.
                                </p>

                            </div>

                        </form>

                    </section>

                </div>

            </div>

        </section>
    )
}