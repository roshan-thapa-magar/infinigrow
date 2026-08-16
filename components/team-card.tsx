import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface TeamCardProps {
  name: string
  designation: string
  image: string
  badge?: string
  about?: string
  priority?: boolean
  className?: string
}

const cardShape = {
  borderRadius: "32px 32px 0 0",
  clipPath:
    "polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)",
}

export default function TeamCard({
  name,
  designation,
  image,
  badge,
  about,
  priority = false,
  className = "",
}: TeamCardProps) {
  return (
    <article
      className={`group mx-auto w-full max-w-[350px] cursor-pointer ${className}`}
    >
      {/* =========================================
          BORDER WRAPPER
          ========================================= */}
      <div
        className="
          relative
          bg-primary/30
          p-[1px]
          transition-all
          duration-500
          ease-out
          group-hover:bg-primary
          group-hover:shadow-2xl
          group-hover:shadow-primary/20
        "
        style={cardShape}
      >
        {/* =========================================
            MAIN CARD
            ========================================= */}
        <div
          className="
            relative
            overflow-hidden
            bg-card
            transition-all
            duration-500
            ease-out
            group-hover:-translate-y-1
          "
          style={cardShape}
        >
          {/* =========================================
              DECORATIVE GLOW
              ========================================= */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              z-0
              h-64
              w-64
              rounded-full
              bg-primary/10
              blur-3xl
              transition-all
              duration-700
              group-hover:scale-150
              group-hover:bg-primary/20
            "
          />

          {/* =========================================
              IMAGE
              ========================================= */}
          <div
            className="
              relative
              z-10
              flex
              h-[420px]
              items-end
              justify-center
              overflow-hidden
              pt-10
            "
          >
            <Image
              src={image}
              alt={`${name} - ${designation}`}
              width={500}
              height={700}
              priority={priority}
              className="
                h-full
                w-auto
                object-contain
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.07]
              "
            />

            {/* Bottom image gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-card
                via-card/50
                to-transparent
              "
            />
          </div>

          {/* =========================================
              BADGE
              ========================================= */}
          {badge && (
            <Badge
              className="
                absolute
                left-6
                top-6
                z-20
                rounded-full
                border
                border-primary/20
                bg-background/80
                px-3
                py-1
                text-xs
                font-medium
                text-primary
                shadow-sm
                backdrop-blur-md
              "
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {badge}
            </Badge>
          )}

          {/* =========================================
              CARD INFORMATION
              ========================================= */}
          <div className="relative z-10 px-8 pb-10 text-center">
            <h3
              className="
                text-xl
                font-bold
                tracking-tight
                text-card-foreground
                transition-colors
                duration-300
                group-hover:text-primary
              "
            >
              {name}
            </h3>

            {/* Decorative divider */}
            <div className="mx-auto my-5 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-border" />

              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <span className="h-px w-8 bg-border" />
            </div>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              {designation}
            </p>
          </div>

          {/* =========================================
              HOVER OVERLAY
              ========================================= */}
          {about && (
            <div
              className="
                absolute
                inset-0
                z-30
                flex
                items-center
                justify-center
                bg-background/80
                px-8
                text-center
                opacity-0
                backdrop-blur-2xl
                transition-all
                duration-500
                ease-out
                group-hover:opacity-100
              "
            >
              {/* Inner overlay border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-5
                  border
                  border-primary/20
                "
                style={{
                  clipPath:
                    "polygon(5% 0%, 95% 0%, 100% 5%, 100% 92%, 50% 100%, 0% 92%, 0% 5%)",
                }}
              />

              {/* Center glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -z-10
                  h-64
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-primary/10
                  blur-3xl
                "
              />

              {/* Overlay content */}
              <div
                className="
                  relative
                  max-w-[270px]
                  translate-y-8
                  scale-95
                  opacity-0
                  transition-all
                  duration-500
                  ease-out
                  group-hover:translate-y-0
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                {/* About label */}
                <div className="mb-5 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-primary/50" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    About
                  </span>

                  <span className="h-px w-6 bg-primary/50" />
                </div>

                {/* Name */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  {name}
                </h3>

                {/* Designation */}
                <p
                  className="
                    mt-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                >
                  {designation}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {about}
                </p>

                {/* Arrow */}
                <div className="mt-7 flex justify-center">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-primary/30
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:bg-primary/20
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              HOVER CORNER GLOW
              ========================================= */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              z-40
              h-px
              w-0
              -translate-x-1/2
              bg-primary
              opacity-0
              shadow-[0_0_20px_4px]
              shadow-primary
              transition-all
              duration-700
              group-hover:w-1/2
              group-hover:opacity-100
            "
          />
        </div>
      </div>
    </article>
  )
}