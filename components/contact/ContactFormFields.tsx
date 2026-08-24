"use client"

import { useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { FormEvent } from "react"
import { useTranslations } from "next-intl"
import { motion, useInView, Variants } from "framer-motion"

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

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
}

const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05,
        },
    },
}

const eyebrowVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
}

const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
}

const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.05,
        },
    },
}

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
}

const separatorVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const radioGroupVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
}

const radioOptionVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 0.4,
        },
    },
}

const submitVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
        },
    },
}

export default function ContactFormFields({
    formData,
    setFormData,
    loading,
    handleSubmit,
}: ContactFormFieldsProps) {

    const t = useTranslations("contactForm.form")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

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
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
        >
            {/* HEADER */}
            <motion.div
                variants={headerVariants}
                className="mb-10"
            >
                <motion.p
                    variants={eyebrowVariants}
                    className="mb-3 text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400"
                >
                    <Sparkles className="mr-2 inline h-3.5 w-3.5" />
                    {t("eyebrow")}
                </motion.p>

                <motion.h2
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                    {t("title")}
                </motion.h2>

                <motion.p
                    variants={descriptionVariants}
                    className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                    {t("description")}
                </motion.p>
            </motion.div>

            <form
                onSubmit={handleSubmit}
                className="space-y-9"
            >
                {/* NAME */}
                <motion.div
                    variants={containerVariants}
                    className="grid gap-5 sm:grid-cols-2"
                >
                    <motion.div variants={fieldVariants} className="space-y-2">
                        <Label htmlFor="firstName">
                            {t("fields.firstName")}
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder={t("placeholders.firstName")}
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            disabled={loading}
                            required
                            className="h-12 rounded-xl transition-all duration-300 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </motion.div>

                    <motion.div variants={fieldVariants} className="space-y-2">
                        <Label htmlFor="lastName">
                            {t("fields.lastName")}
                        </Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder={t("placeholders.lastName")}
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={loading}
                            required
                            className="h-12 rounded-xl transition-all duration-300 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </motion.div>
                </motion.div>

                {/* EMAIL */}
                <motion.div variants={fieldVariants} className="space-y-2">
                    <Label htmlFor="email">
                        {t("fields.email")}
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("placeholders.email")}
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="h-12 rounded-xl transition-all duration-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                </motion.div>

                <motion.div variants={separatorVariants}>
                    <Separator />
                </motion.div>

                {/* WORK TYPE */}
                <motion.div variants={fieldVariants} className="space-y-4">
                    <div>
                        <h3 className="font-semibold">
                            {t("workType.title")}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("workType.description")}
                        </p>
                    </div>

                    <motion.div
                        variants={radioGroupVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
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
                                <motion.div
                                    key={option.value}
                                    variants={radioOptionVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Label
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
                                            has-[[data-state=checked]]:shadow-sm
                                        "
                                    >
                                        <RadioGroupItem
                                            id={`work-${option.value}`}
                                            value={option.value}
                                        />
                                        <span className="text-sm font-medium">
                                            {t(`workType.options.${option.key}`)}
                                        </span>
                                    </Label>
                                </motion.div>
                            ))}
                        </RadioGroup>
                    </motion.div>
                </motion.div>

                {/* SERVICES */}
                <motion.div variants={fieldVariants} className="space-y-4">
                    <div>
                        <h3 className="font-semibold">
                            {t("service.title")}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("service.description")}
                        </p>
                    </div>

                    <motion.div
                        variants={radioGroupVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
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
                                <motion.div
                                    key={service.value}
                                    variants={radioOptionVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Label
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
                                            has-[[data-state=checked]]:shadow-sm
                                        "
                                    >
                                        <RadioGroupItem
                                            id={`service-${service.value}`}
                                            value={service.value}
                                        />
                                        <span className="text-sm font-medium">
                                            {t(`service.options.${service.key}`)}
                                        </span>
                                    </Label>
                                </motion.div>
                            ))}
                        </RadioGroup>
                    </motion.div>
                </motion.div>

                {/* PROJECT */}
                <motion.div variants={fieldVariants} className="space-y-4">
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
                        placeholder={t("placeholders.project")}
                        value={formData.project}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="
                            min-h-[200px]
                            resize-none
                            rounded-xl
                            p-4
                            transition-all
                            duration-300
                            focus:border-emerald-500
                            focus:ring-emerald-500
                        "
                    />
                </motion.div>

                {/* BUDGET */}
                <motion.div variants={fieldVariants} className="space-y-4">
                    <div>
                        <h3 className="font-semibold">
                            {t("budget.title")}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {t("budget.description")}
                        </p>
                    </div>

                    <motion.div
                        variants={radioGroupVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
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
                                <motion.div
                                    key={budget.value}
                                    variants={radioOptionVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Label
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
                                            has-[[data-state=checked]]:shadow-sm
                                        "
                                    >
                                        <RadioGroupItem
                                            id={`budget-${budget.value}`}
                                            value={budget.value}
                                        />
                                        <span className="text-sm font-medium">
                                            {t(`budget.options.${budget.key}`)}
                                        </span>
                                    </Label>
                                </motion.div>
                            ))}
                        </RadioGroup>
                    </motion.div>
                </motion.div>

                {/* SUBMIT */}
                <motion.div
                    variants={submitVariants}
                    className="space-y-4"
                >
                    <motion.div variants={separatorVariants}>
                        <Separator />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
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
                                shadow-lg
                                shadow-emerald-500/20
                                hover:bg-emerald-700
                                hover:shadow-xl
                                hover:shadow-emerald-500/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                sm:w-auto
                                sm:min-w-[210px]
                                transition-all
                                duration-300
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
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.span>
                                </>
                            )}
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground"
                    >
                        {t("submit.agreement")}
                    </motion.p>
                </motion.div>
            </form>
        </motion.section>
    )
}