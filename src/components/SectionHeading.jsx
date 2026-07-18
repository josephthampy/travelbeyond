import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <Reveal direction="fade">
          <span className={`eyebrow ${light ? 'text-gold-light' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08}>
        <h2 className={`h-display text-4xl md:text-5xl font-medium ${light ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.16}>
          <p className={`font-body text-base leading-relaxed ${light ? 'text-white/75' : 'text-ink/60'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal direction="fade" delay={0.2}>
        <span className="divider-gold block" />
      </Reveal>
    </div>
  )
}
