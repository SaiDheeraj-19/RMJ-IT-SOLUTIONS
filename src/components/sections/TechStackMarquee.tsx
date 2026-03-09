"use client";

/* ─────────────────────────────────────────────────────────────────
   Tech stack marquee — single row, logo-cloud animation
   Sources:
     D = DevIcons CDN      (colored icons)
     S = SimpleIcons CDN   (clean white/brand-colored SVGs)
─────────────────────────────────────────────────────────────────── */

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

const logos = [
    /* ── New additions ── */
    { src: `${D}/react/react-original.svg`, label: "React" },
    { src: `${D}/figma/figma-original.svg`, label: "Figma" },
    { src: `${S}/vercel/ffffff`, label: "Vercel" },
    { src: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`, label: "AWS" },
    { src: `${S}/greensock/88ce02`, label: "GSAP" },

    /* ── Core stack ── */
    { src: `${D}/html5/html5-original.svg`, label: "HTML5" },
    { src: `${D}/css3/css3-original.svg`, label: "CSS3" },
    { src: `${D}/javascript/javascript-original.svg`, label: "JavaScript" },
    { src: `${S}/nextdotjs/ffffff`, label: "Next.js" },   /* ← SimpleIcons white */
    { src: `${D}/nodejs/nodejs-original.svg`, label: "Node.js" },
    { src: `${D}/flutter/flutter-original.svg`, label: "Flutter" },
    { src: `${D}/python/python-original.svg`, label: "Python" },
    { src: `${D}/tensorflow/tensorflow-original.svg`, label: "TensorFlow" },
    { src: `${D}/pytorch/pytorch-original.svg`, label: "PyTorch" },
    { src: `${D}/docker/docker-original.svg`, label: "Docker" },
    { src: `${D}/kubernetes/kubernetes-plain.svg`, label: "Kubernetes" },
    { src: `${D}/linux/linux-original.svg`, label: "Linux" },
    { src: `${D}/postgresql/postgresql-original.svg`, label: "PostgreSQL" },
    { src: `${D}/mongodb/mongodb-original.svg`, label: "MongoDB" },
    { src: `${S}/express/ffffff`, label: "Express.js" }, /* ← SimpleIcons white */
    { src: `${S}/github/ffffff`, label: "GitHub" },     /* ← SimpleIcons white */
];

export default function TechStackMarquee() {
    const items = [...logos, ...logos, ...logos];

    return (
        <div
            className="relative w-full overflow-hidden py-9"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
        >

            {/* Label */}
            <p
                className="text-center text-[9px] font-black uppercase tracking-[0.6em] mb-7 font-mono"
                style={{ color: "var(--foreground)", opacity: 0.2 }}
            >
                Technologies &amp; Tools We Work With
            </p>

            {/* Scrolling track */}
            <div
                className="flex items-center w-max"
                style={{ animation: "logo-cloud 50s linear infinite" }}
                onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
                }
                onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
                }
            >
                {items.map((logo, i) => (
                    <div
                        key={i}
                        className="group flex items-center gap-3 px-8 shrink-0 select-none cursor-default"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logo.src}
                            alt={logo.label}
                            className="h-9 w-auto object-contain transition-opacity duration-300"
                            style={{ opacity: 0.75 }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "1")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.75")}
                        />
                        <span
                            className="text-sm font-semibold whitespace-nowrap"
                            style={{ color: "var(--foreground)", opacity: 0.6 }}
                        >
                            {logo.label}
                        </span>
                        {/* Dot separator */}
                        <span
                            className="w-1 h-1 rounded-full ml-6 shrink-0"
                            style={{ background: "var(--border)" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
