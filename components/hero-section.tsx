import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  badge: string;
  title: string;
  description: string[];
  image: string;
  imageAlt?: string;

  primaryButton?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };

  secondaryButton?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative lg:min-h-[700px]">

          {/* Background Content */}
          <div className="relative overflow-hidden rounded-md lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[85%]">

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/0 to-background/95 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 px-6 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-16 lg:pr-[30rem]">

              <p className="mb-4 text-3xl font-bold uppercase sm:text-4xl md:text-4xl lg:text-5xl">
                {badge}
              </p>

              <h1 className="text-4xl leading-tight sm:text-3xl lg:text-4xl">
                {title}
              </h1>

              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-justify sm:text-lg">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>


              {/* Buttons */}
              {(primaryButton || secondaryButton) && (
                <div className="mt-6 flex flex-wrap gap-5">

                  {primaryButton && (
                    <Button  size="lg">
                      <Link
                        href={primaryButton.href}
                        className="flex items-center gap-2"
                      >
                        {primaryButton.icon}
                        {primaryButton.label}
                      </Link>
                    </Button>
                  )}


                  {secondaryButton && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link
                        href={secondaryButton.href}
                        className="inline-flex items-center justify-center gap-2"
                      >
                        {secondaryButton.icon && (
                          <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            {secondaryButton.icon}
                          </span>
                        )}
                        <span className="font-medium">{secondaryButton.label}</span>
                      </Link>
                    </Button>
                  )}

                </div>
              )}

            </div>
          </div>


          {/* Floating Image */}
          <div className="relative mt-10 lg:absolute lg:-bottom-6 lg:right-0 lg:z-10 lg:mt-0">
            <div className="relative mx-auto h-[260px] w-full overflow-hidden rounded-md shadow-2xl sm:h-[320px] md:h-[420px] lg:h-[460px] lg:w-[580px]">

              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width:640px) 100vw,
                       (max-width:1024px) 90vw,
                       580px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            </div>
          </div>


          {/* Spacer */}
          <div className="hidden h-[700px] lg:block" />

        </div>
      </div>
    </section>
  );
}