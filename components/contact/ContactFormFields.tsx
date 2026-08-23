"use client"

import { ArrowRight } from "lucide-react"
import { FormEvent } from "react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    workType: string
    service: string
    project: string
    budget: string
}

interface ContactFormFieldsProps {
    formData: ContactFormData
    setFormData: React.Dispatch<
        React.SetStateAction<ContactFormData>
    >
    loading: boolean
    handleSubmit: (
        e: FormEvent<HTMLFormElement>
    ) => void
}

const workOptions = [
    {
        value: "new-project",
        key: "newProject",
    },
    {
        value: "existing-product",
        key: "existingProduct",
    },
    {
        value: "consultation",
        key: "consultation",
    },
    {
        value: "partnership",
        key: "partnership",
    },
]

const serviceOptions = [
    {
        value: "web-development",
        key: "webDevelopment",
    },
    {
        value: "mobile-development",
        key: "mobileDevelopment",
    },
    {
        value: "ui-ux",
        key: "uiUx",
    },
    {
        value: "software-development",
        key: "softwareDevelopment",
    },
    {
        value: "cloud-devops",
        key: "cloudDevops",
    },
    {
        value: "cyber-security",
        key: "cyberSecurity",
    },
]

const budgetOptions = [
    {
        value: "under-5k",
        key: "under5k",
    },
    {
        value: "5k-20k",
        key: "5k20k",
    },
    {
        value: "20k-plus",
        key: "20kPlus",
    },
]

export default function ContactFormFields({
    formData,
    setFormData,
    loading,
    handleSubmit,
}: ContactFormFieldsProps) {

    const t = useTranslations("contactForm.form")

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

    return (
        <section className="order-1 lg:order-2">

            {/* HEADER */}
            <div className="mb-10">

                <p className="
                    mb-3
                    text-sm
                    font-medium
                    tracking-wide
                    text-emerald-600
                    dark:text-emerald-400
                ">
                    {t("eyebrow")}
                </p>

                <h2 className="
                    text-3xl
                    font-bold
                    tracking-tight
                    sm:text-4xl
                ">
                    {t("title")}
                </h2>

                <p className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-relaxed
                    text-muted-foreground
                    sm:text-base
                ">
                    {t("description")}
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-9"
            >

                {/* NAME */}
                <div className="grid gap-5 sm:grid-cols-2">

                    <div className="space-y-2">
                        <Label htmlFor="firstName">
                            {t("fields.firstName")}
                        </Label>

                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder={t(
                                "placeholders.firstName"
                            )}
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
                            {t("fields.lastName")}
                        </Label>

                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder={t(
                                "placeholders.lastName"
                            )}
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
                        {t("fields.email")}
                    </Label>

                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t(
                            "placeholders.email"
                        )}
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
                            {t("workType.title")}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("workType.description")}
                        </p>
                    </div>

                    <RadioGroup
                        name="workType"
                        value={formData.workType}
                        onValueChange={(value) =>
                            setFormData((previous) => ({
                                ...previous,
                                workType: value,
                            }))
                        }
                        disabled={loading}
                        className="grid gap-3 sm:grid-cols-2"
                    >
                        {workOptions.map((option) => (
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
                                    {t(
                                        `workType.options.${option.key}`
                                    )}
                                </span>
                            </Label>
                        ))}
                    </RadioGroup>

                </div>

                {/* SERVICES */}
                <div className="space-y-4">

                    <div>
                        <h3 className="font-semibold">
                            {t("service.title")}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("service.description")}
                        </p>
                    </div>

                    <RadioGroup
                        name="service"
                        value={formData.service}
                        onValueChange={(value) =>
                            setFormData((previous) => ({
                                ...previous,
                                service: value,
                            }))
                        }
                        disabled={loading}
                        className="grid gap-3 sm:grid-cols-2"
                    >
                        {serviceOptions.map((service) => (
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
                                    {t(
                                        `service.options.${service.key}`
                                    )}
                                </span>
                            </Label>
                        ))}
                    </RadioGroup>

                </div>

                {/* PROJECT */}
                <div className="space-y-4">

                    <div>
                        <h3 className="font-semibold">
                            {t("project.title")}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("project.description")}
                        </p>
                    </div>

                    <Textarea
                        id="project"
                        name="project"
                        placeholder={t(
                            "placeholders.project"
                        )}
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
                            {t("budget.title")}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("budget.description")}
                        </p>
                    </div>

                    <RadioGroup
                        name="budget"
                        value={formData.budget}
                        onValueChange={(value) =>
                            setFormData((previous) => ({
                                ...previous,
                                budget: value,
                            }))
                        }
                        disabled={loading}
                        className="grid gap-3 sm:grid-cols-3"
                    >
                        {budgetOptions.map((budget) => (
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
                                    {t(
                                        `budget.options.${budget.key}`
                                    )}
                                </span>
                            </Label>
                        ))}
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
                                <span className="
                                    mr-2
                                    h-4
                                    w-4
                                    animate-spin
                                    rounded-full
                                    border-2
                                    border-white
                                    border-t-transparent
                                " />

                                {t("submit.sending")}
                            </>
                        ) : (
                            <>
                                {t("submit.send")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>

                    <p className="
                        mt-4
                        max-w-lg
                        text-xs
                        leading-relaxed
                        text-muted-foreground
                    ">
                        {t("submit.agreement")}
                    </p>

                </div>

            </form>
        </section>
    )
}