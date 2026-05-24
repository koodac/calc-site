import type { ToolItem } from "@/lib/tools";
import { resolveToolHeroBackground } from "@/lib/toolHeroBackground";
import { getToolHeroArt } from "@/lib/toolHeroVisual";
import { resolveToolHeroSubtitle } from "@/lib/toolHeroSubtitle";

type Props = {
  tool: ToolItem;
};

function HeroGrid({ opacity }: { opacity: number }) {
  const a = `rgba(255,255,255,${opacity})`;
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0 22px, ${a} 22px 23px), repeating-linear-gradient(0deg, transparent 0 22px, ${a} 22px 23px)`,
        maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
      }}
      aria-hidden
    />
  );
}

type GenerativeHeroBgProps = {
  art: ReturnType<typeof getToolHeroArt>;
  tool: ToolItem;
};

function GenerativeHeroBg({ art, tool }: GenerativeHeroBgProps) {
  return (
    <>
      <div className="absolute inset-0" style={{ background: art.baseGradient }} aria-hidden />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={art.orbA}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute rounded-full blur-3xl"
        style={art.orbB}
        aria-hidden
      />
      <HeroGrid opacity={art.gridOpacity} />
      <span
        className="pointer-events-none absolute right-[max(0.5rem,4vw)] top-1/2 z-0 select-none sm:right-[max(0.75rem,5vw)]"
        style={{
          opacity: art.iconOpacity,
          transform: `translateY(-50%) rotate(${art.iconRotateDeg}deg)`,
          fontSize: "clamp(3.25rem, 18vw, 9rem)",
          lineHeight: 1,
          filter: "grayscale(0.12)",
        }}
        aria-hidden
      >
        {tool.icon}
      </span>
    </>
  );
}

export function ToolHeroBanner({ tool }: Props) {
  const subtitle = resolveToolHeroSubtitle(tool);
  const bg = resolveToolHeroBackground(tool.slug);
  const art = getToolHeroArt(tool);

  return (
    <section
      className="relative isolate overflow-hidden border-b border-neutral-800/20"
      aria-labelledby="tool-hero-title"
    >
      {bg.mode === "image" ? (
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
          style={{ backgroundImage: `url(${bg.url})` }}
          aria-hidden
        />
      ) : (
        <GenerativeHeroBg art={art} tool={tool} />
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          bg.mode === "image"
            ? "from-neutral-900/80 via-neutral-900/72 to-neutral-900/85"
            : "from-neutral-950/45 via-neutral-900/28 to-neutral-950/55"
        }`}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 [&_h1]:drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] [&_p]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs sm:tracking-[0.2em]">
          {tool.category}
        </p>
        <h1
          id="tool-hero-title"
          className="mt-2 flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-white sm:mt-3 sm:gap-3 sm:text-3xl lg:text-4xl"
        >
          <span className="text-3xl sm:text-5xl" aria-hidden>
            {tool.icon}
          </span>
          <span>{tool.title}</span>
        </h1>
        <p className="mt-2 line-clamp-2 max-w-2xl text-xs leading-relaxed text-white sm:mt-4 sm:line-clamp-none sm:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
