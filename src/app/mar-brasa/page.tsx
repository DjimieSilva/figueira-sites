"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Flame,
  Fish,
  UtensilsCrossed,
  ChevronDown,
  Anchor,
  Waves,
  MessageCircle,
  Star,
} from "lucide-react";

import { FloatingNav } from "@/components/ui/floating-nav";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { TextReveal } from "@/components/ui/text-reveal";

/* ─── Constants ─── */
const WHATSAPP_URL =
  "https://wa.me/351912345678?text=Ol%C3%A1!%20Quero%20reservar%20mesa%20no%20Mar%20%26%20Brasa";

const NAV_ITEMS = [
  { label: "Ementa", href: "#ementa" },
  { label: "Sobre", href: "#sobre" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#contacto" },
];

const MARQUEE_ITEMS = [
  "Marisco Fresco",
  "Grelhados na Brasa",
  "Vista para o Mar",
  "Peixe do Dia",
  "Cataplana",
  "Arroz de Marisco",
  "Lagosta",
  "Percebes",
  "Santola",
];

const MENU_HIGHLIGHTS = [
  {
    emoji: "🦞",
    title: "Cataplana de Marisco",
    description:
      "A receita tradicional do Algarve reinventada com marisco fresco da lota da Figueira. Camaroes, ameijoas e lagostins num caldo aromático de coentros e tomate.",
    price: "38",
    tag: "Especialidade",
  },
  {
    emoji: "🐟",
    title: "Robalo Grelhado na Brasa",
    description:
      "Robalo selvagem do Atlântico, grelhado lentamente sobre carvão de azinheira. Servido com legumes da época e azeite da serra.",
    price: "28",
    tag: "Mais Pedido",
  },
  {
    emoji: "🦐",
    title: "Arroz de Lavagante",
    description:
      "Lavagante inteiro cozinhado em arroz malandro com pimentão doce e um toque de brasa. Um prato para dois que conta a história do mar.",
    price: "52",
    tag: "Premium",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Marques",
    role: "Cliente frequente",
    content:
      "A melhor cataplana que já comi fora do Algarve. O marisco é sempre fresquissimo e o ambiente faz-nos sentir à beira-mar. Voltamos todos os meses!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Turista de Lisboa",
    content:
      "Descobrimos o Mar & Brasa por acaso e foi a melhor decisão da viagem. O robalo grelhado na brasa é divinal. Equipa super atenciosa.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Celebração de aniversário",
    content:
      "Festejámos o aniversário do meu marido aqui e superou todas as expectativas. O arroz de lavagante é uma obra de arte. Obrigada pela noite perfeita!",
    rating: 5,
  },
];

const STATS = [
  { target: 15, suffix: "+", label: "Anos de Experiência" },
  { target: 200, suffix: "+", label: "Clientes por Semana" },
  { target: 4.8, suffix: "", label: "Rating Google" },
  { target: 50, suffix: "+", label: "Pratos na Ementa" },
];

/* ─── Fade-up animation wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ─── */
export default function MarBrasa() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white selection:bg-amber-600 selection:text-white">
      {/* ─── Floating Navigation ─── */}
      <FloatingNav
        brand="Mar & Brasa"
        items={NAV_ITEMS}
        ctaLabel="Reservar Mesa"
        ctaHref={WHATSAPP_URL}
        brandColor="#D97706"
        ctaColor="#D97706"
      />

      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(217,119,6,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_120%,rgba(234,88,12,0.1),transparent)]" />

        {/* Decorative floating embers */}
        <motion.div
          className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-amber-500/30"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-500/25"
          animate={{ y: [15, -25, 15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-[35%] top-[60%] h-1 w-1 rounded-full bg-amber-400/20"
          animate={{ y: [-15, 20, -15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute right-[30%] top-[70%] h-2.5 w-2.5 rounded-full bg-orange-400/15"
          animate={{ y: [10, -30, 10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217,119,6,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-950/40 px-5 py-2 text-sm text-amber-400 backdrop-blur-sm"
          >
            <Flame className="h-4 w-4" />
            <span>Restaurante de Marisco & Grelhos</span>
            <Fish className="h-4 w-4" />
          </motion.div>

          {/* Main heading with TextReveal */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <TextReveal
              text="Sabores do Mar,"
              className="text-white"
              delay={0.3}
            />
            <br />
            <TextReveal
              text="Alma da Brasa"
              className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent"
              delay={0.8}
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
          >
            Marisco fresco da costa da Figueira da Foz, grelhado na perfeição
            sobre brasa de azinheira. Uma experiência gastronómica onde o
            Atlântico encontra a tradição.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <ShimmerButton
              href={WHATSAPP_URL}
              bgColor="#D97706"
              shimmerColor="rgba(255,255,255,0.15)"
              className="text-lg px-10 py-5"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar Mesa
            </ShimmerButton>
            <a
              href="#ementa"
              className="group flex items-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-amber-700 hover:text-amber-400"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Ver Ementa
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-neutral-500 uppercase">
              Descubra
            </span>
            <ChevronDown className="h-5 w-5 text-amber-600/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Marquee Band ─── */}
      <section className="relative border-y border-amber-900/20 bg-neutral-900/50 py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-transparent to-amber-950/20" />
        <Marquee
          items={MARQUEE_ITEMS}
          separator="🔥"
          speed={25}
          className="text-base font-semibold tracking-wide text-amber-400/80 sm:text-lg"
        />
      </section>

      {/* ─── About / Story Section ─── */}
      <section id="sobre" className="relative overflow-hidden py-28 px-6 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(234,88,12,0.06),transparent)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <FadeUp>
                <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-amber-500 uppercase">
                  <Anchor className="h-4 w-4" />
                  A Nossa História
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                  Do mar para a mesa,{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    com alma
                  </span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mb-6 text-lg leading-relaxed text-neutral-400">
                  Nascemos da paixão pelo mar e pelo fogo. Todos os dias, ao
                  nascer do sol, selecionamos o melhor marisco e peixe
                  diretamente da lota da Figueira da Foz. Cada prato é uma
                  homenagem às tradições da costa portuguesa.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mb-8 text-lg leading-relaxed text-neutral-400">
                  A nossa brasa de azinheira confere um sabor inconfundível aos
                  grelhados, enquanto a vista para o Atlântico completa a
                  experiência. No Mar & Brasa, cada refeição é uma celebração.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                    <Fish className="h-4 w-4 text-amber-500" />
                    Peixe do Dia
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                    <Flame className="h-4 w-4 text-orange-500" />
                    Brasa de Azinheira
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                    <Waves className="h-4 w-4 text-blue-400" />
                    Vista para o Mar
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right: Visual card */}
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 sm:p-14">
                  <div className="mb-8 text-7xl">🔥</div>
                  <blockquote className="mb-6 text-2xl font-semibold leading-snug text-neutral-200 italic">
                    &ldquo;A cozinha é um ato de amor. Cada grelhado na brasa
                    conta a história do mar.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-700/50 to-transparent" />
                    <span className="text-sm font-medium text-amber-500">
                      Chef António Figueira
                    </span>
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-600/10 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-orange-600/10 blur-3xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section className="relative border-y border-neutral-800 bg-neutral-900/30 py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(217,119,6,0.05),transparent)]" />
        <div className="relative z-10 mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-amber-400 sm:text-5xl">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ─── Menu Highlights ─── */}
      <section id="ementa" className="relative py-28 px-6 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_30%,rgba(234,88,12,0.05),transparent)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-amber-500 uppercase">
                <UtensilsCrossed className="h-4 w-4" />
                A Nossa Ementa
              </span>
              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                Pratos que contam{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  histórias
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-400">
                Cada prato é preparado com ingredientes frescos do dia,
                cozinhados com técnicas tradicionais e um toque contemporâneo.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-3">
            {MENU_HIGHLIGHTS.map((dish, i) => (
              <FadeUp key={dish.title} delay={i * 0.15}>
                <SpotlightCard
                  spotlightColor="rgba(217,119,6,0.15)"
                  className="!border-neutral-800 !bg-neutral-900/80 p-0 transition-all duration-300 hover:!border-amber-800/50 hover:!bg-neutral-900"
                >
                  <div className="p-8">
                    {/* Tag */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-amber-950/50 px-3 py-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                        {dish.tag}
                      </span>
                      <span className="text-2xl font-bold text-amber-500">
                        {dish.price}&euro;
                      </span>
                    </div>
                    {/* Emoji + Title */}
                    <div className="mb-4 text-5xl">{dish.emoji}</div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-100">
                      {dish.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {dish.description}
                    </p>
                    {/* Separator line */}
                    <div className="mt-6 h-px bg-gradient-to-r from-amber-700/30 via-amber-700/10 to-transparent" />
                    {/* CTA */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-500 transition-colors hover:text-amber-400"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Reservar este prato
                    </a>
                  </div>
                </SpotlightCard>
              </FadeUp>
            ))}
          </div>

          {/* Extra menu items teaser */}
          <FadeUp delay={0.3}>
            <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { emoji: "🦀", name: "Santola Recheada", price: "35" },
                  { emoji: "🦪", name: "Ostras do Sado", price: "18" },
                  { emoji: "🍖", name: "Costela na Brasa", price: "22" },
                  { emoji: "🥘", name: "Arroz de Tamboril", price: "30" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-xl border border-neutral-800/50 bg-neutral-950/50 p-4 transition-all duration-300 hover:border-amber-800/30"
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-neutral-200">
                        {item.name}
                      </p>
                      <p className="text-sm text-amber-500">{item.price}&euro;</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-neutral-500">
                E muitos mais... Consulte a ementa completa no restaurante.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Second Marquee (reverse) ─── */}
      <section className="border-y border-amber-900/15 bg-neutral-900/30 py-4">
        <Marquee
          items={[
            "Tradição Portuguesa",
            "Lota da Figueira",
            "Brasa de Azinheira",
            "Vinhos Regionais",
            "Costa Atlântica",
            "Desde 2011",
          ]}
          separator="--"
          speed={35}
          reverse
          className="text-sm font-medium tracking-wider text-neutral-600 uppercase"
        />
      </section>

      {/* ─── Experience / Ambiance Section ─── */}
      <section className="relative py-28 px-6 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(217,119,6,0.06),transparent)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-amber-500 uppercase">
                <Waves className="h-4 w-4" />
                A Experiência
              </span>
              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                Mais do que uma refeição,{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  uma viagem
                </span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Waves className="h-8 w-8" />,
                title: "Vista Atlântica",
                desc: "Janelas panorâmicas com vista direta para o oceano. Veja o pôr do sol enquanto saboreia o seu prato.",
              },
              {
                icon: <Flame className="h-8 w-8" />,
                title: "Cozinha Aberta",
                desc: "Assista à preparação dos seus pratos na nossa cozinha aberta com grelha de carvão visível.",
              },
              {
                icon: <Fish className="h-8 w-8" />,
                title: "Fresco do Dia",
                desc: "Todo o peixe e marisco é adquirido diariamente na lota local. Frescura é a nossa promessa.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-500 hover:border-amber-800/40 hover:bg-neutral-900/80">
                  <div className="mb-5 inline-flex rounded-xl bg-amber-950/40 p-3 text-amber-500 transition-colors group-hover:bg-amber-950/60 group-hover:text-amber-400">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section
        id="testemunhos"
        className="relative border-y border-neutral-800 bg-neutral-900/20 [&_h2]:!text-white [&_p.mt-3]:!text-neutral-400 [&_p.mb-4]:!text-neutral-300 [&_p.text-xs]:!text-neutral-500 [&_p.font-semibold]:!text-neutral-100 [&>section]:!py-0 [&_div.rounded-2xl]:!border-neutral-800 [&_div.rounded-2xl]:!bg-neutral-900/60"
      >
        <div className="py-28 sm:py-36">
          <FadeUp>
            <div className="mb-4 text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest text-amber-500 uppercase">
                <Star className="h-4 w-4" />
                Testemunhos
              </span>
            </div>
          </FadeUp>
          <TestimonialCards
            testimonials={TESTIMONIALS}
            title="O que dizem os nossos clientes"
            subtitle="Opiniões reais de quem já viveu a experiência Mar & Brasa"
            accentColor="#D97706"
          />
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <section className="relative overflow-hidden py-32 px-6 sm:py-40">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(217,119,6,0.1),transparent)]" />

        {/* Floating embers */}
        <motion.div
          className="absolute left-[25%] top-[30%] h-3 w-3 rounded-full bg-amber-500/20"
          animate={{ y: [-20, 25, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[25%] top-[60%] h-2 w-2 rounded-full bg-orange-500/25"
          animate={{ y: [15, -20, 15], x: [5, -15, 5] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <FadeUp>
            <div className="mb-6 text-6xl">🍽️</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A sua mesa está{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                à espera
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-400">
              Reserve agora a sua mesa e venha descobrir os sabores do
              Atlântico, grelhados na perfeição sobre brasa de azinheira.
              Esperamos por si.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <ShimmerButton
                href={WHATSAPP_URL}
                bgColor="#D97706"
                shimmerColor="rgba(255,255,255,0.15)"
                className="text-lg px-12 py-5"
              >
                <MessageCircle className="h-5 w-5" />
                Reservar via WhatsApp
              </ShimmerButton>
              <a
                href="tel:+351912345678"
                className="flex items-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-amber-700 hover:text-amber-400"
              >
                <Phone className="h-4 w-4" />
                Ligar Agora
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 text-sm text-neutral-600">
              Resposta em menos de 30 minutos durante o horário de funcionamento
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer id="contacto" className="border-t border-neutral-800 bg-neutral-950 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand + description */}
            <FadeUp>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-amber-500">
                  Mar & Brasa
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                  Restaurante de marisco e grelhados em Figueira da Foz.
                  Tradição, frescura e sabor desde 2011.
                </p>
                <div className="flex gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all hover:border-amber-700 hover:text-amber-500"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+351912345678"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all hover:border-amber-700 hover:text-amber-500"
                    aria-label="Telefone"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Contact info */}
            <FadeUp delay={0.1}>
              <div>
                <h4 className="mb-5 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
                  Contacto
                </h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>
                      Rua da Praia, 42
                      <br />
                      3080-159 Figueira da Foz
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-amber-600" />
                    <a
                      href="tel:+351912345678"
                      className="transition-colors hover:text-amber-500"
                    >
                      +351 912 345 678
                    </a>
                  </li>
                </ul>
              </div>
            </FadeUp>

            {/* Hours */}
            <FadeUp delay={0.2}>
              <div>
                <h4 className="mb-5 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
                  Horário
                </h4>
                <ul className="space-y-3 text-sm text-neutral-500">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-amber-600" />
                    <div>
                      <p className="font-medium text-neutral-300">
                        Terça a Domingo
                      </p>
                      <p>12:00 - 15:00 | 19:00 - 23:00</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-neutral-700" />
                    <div>
                      <p className="font-medium text-neutral-500">
                        Segunda-feira
                      </p>
                      <p className="text-neutral-600">Encerrado</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/50 pt-8 text-xs text-neutral-600 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Mar & Brasa. Todos os direitos reservados.</p>
            <p>Figueira da Foz, Portugal</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

