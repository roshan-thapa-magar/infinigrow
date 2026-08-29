"use client";

import { motion } from "framer-motion";
import ProjectRequestForm from "@/components/project-request-form";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Users } from "lucide-react";

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-10 pt-16 lg:px-8 lg:pb-14 lg:pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Start a Project
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Let&apos;s build something
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-primary"
            >
              great together.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Tell us about your project. Our business analysis team
            will review your request and contact you to discuss your
            requirements.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-sm">
                <Clock className="h-3.5 w-3.5" />
                Response within 24 hours
              </Badge>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-sm">
                <Users className="h-3.5 w-3.5" />
                100+ projects delivered
              </Badge>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-sm">
                <Shield className="h-3.5 w-3.5" />
                No-obligation consultation
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Request Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-6 pb-20 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectRequestForm />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}