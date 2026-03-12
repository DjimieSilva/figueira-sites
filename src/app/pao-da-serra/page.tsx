"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Wheat,
  ChefHat,
  Cake,
  UtensilsCrossed,
  Heart,
  ArrowRight,
} from "lucide-react";

import { FloatingNav } from "@/components/ui/floating-nav";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { TextReveal } from "@/components/ui/text-reveal";

/* ─────────── constants ─────────── */

const WHATSAPP_URL =
  "https://wa.me/351912345682?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda%20no%20P%C3%A3o%20da%20Serra";

const NAV_ITEMS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Opiniões", href: "#opiniões" },
  { label: "Contacto", href: "#contacto" },
];

const MARQUEE_ITEMS = [
  "Pão de Centeio",
  "Broa de Milho",
  "Croissants",
  "Bolo de Laranja",
  "Pão de Forma",
  "Focaccia",
  "Bola de Berlim",
  "Pão Alentejano",
];

const PRODUCTS = [
  {
    icon: <Wheat className="h-8 w-8" />,
    emoji: "\uD83C\uDF5E",
    title: "Pão Artesanal",
    description:
      "Massa-mãe com mais de 15 anos, farinha moída em pedra e fermentação lenta de 24 horas. Cada pão é único.",
  },
  {
    icon: <ChefHat className="h-8 w-8" />,
    emoji: "\uD83E\uDD50",
    title: "Pastelaria",
    description:
      "Croissants folhados, pastéis de nata, tartes e muito mais. Tudo feito de manhã, todos os dias.",
  },
  {
    icon: <Cake className="h-8 w-8" />,
    emoji: "\uD83C\uDF82",
    title: "Bolos de Festa",
    description:
      "Bolos personalizados para aniversários, batizados e casamentos. Decoração artesanal com ingredientes naturais.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8" />,
    emoji: "\uD83C\uDF7D\uFE0F",
    title: "Catering",
    description:
      "Serviço de catering para eventos com cestos de pão fresco, mini-pastelaria e mesas de brunch completas.",
  },
];

const STATS = [
  { target: 15, suffix: "", label: "Anos de Tradição" },
  { target: 2000, suffix: "+", label: "Pães por Dia" },
  { target: 49, suffix: "", label: "Google Rating", prefix: "", decimal: true },
  { target: 30, suffix: "+", label: "Variedades" },
];

const TESTIMONIALS = [
  {
    name: "Maria Santos",
    role: "Cliente desde 2012",
    content:
      "O melhor pão de Figueira da Foz, sem dúvida. A broa de milho lembra-me a da minha avó. Venho cá todos os sábados com a família.",
    rating: 5,
  },
  {
    name: "Carlos Ferreira",
    role: "Dono de restaurante local",
    content:
      "Forneço o meu restaurante com o pão da Serra há 8 anos. A qualidade é sempre impecável e a equipa é fantástica. Recomendo a todos.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Cliente habitual",
    content:
      "Encomendei o bolo de casamento da minha filha e foi uma obra de arte. Bonito e delicioso. Toda a gente perguntou de onde era!",
    rating: 5,
  },
];

/* ─────────── helpers ─────────── */

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.12 },
});

/* ═══════════ PAGE ═══════════ */

export default function PaoDaSerraPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-neutral-900 selection:bg-amber-600 selection:text-white">
      {/* ── NAV ── */}
      <FloatingNav
        brand="Pão da Serra"
        items={NAV_ITEMS}
        ctaLabel="Encomendar"
        ctaHref={WHATSAPP_URL}
        brandColor="#92400E"
        ctaColor="#D97706"
      />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        {/* warm radial bg */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, #fef3c7 0%, #fffbeb 50%, #fff7ed 100%)",
          }}
        />

        {/* decorative floating elements */}
        <motion.div
          className="pointer-events-none absolute top-20 left-[12%] text-6xl opacity-20 animate-float"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
        >
          {"\uD83C\uDF3E"}
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-[10%] bottom-32 text-7xl opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.4 }}
        >
          {"\uD83C\uDF5E"}
        </motion.div>
        <motion.div
          className="pointer-events-none absolute top-40 right-[20%] text-5xl opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.8 }}
        >
          {"\u2728"}
        </motion.div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-5 py-2 text-sm font-medium text-amber-800 backdrop-blur-sm"
          >
            <Wheat className="h-4 w-4" />
            Padaria Artesanal desde 2010
          </motion.div>

          {/* headline */}
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-neutral-900 md:text-7xl md:leading-[1.1]">
            <TextReveal text="Pão feito com alma," className="justify-center" />
            <br />
            <TextReveal
              text="servido com amor."
              className="justify-center"
              delay={0.5}
            />
          </h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl"
          >
            Na Serra da Boa Viagem, entre farinha e forno a lenha, criamos pão
            artesanal todos os dias desde 2010. Receitas de família, ingredientes
            locais e muito amor em cada fatia.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <ShimmerButton
              href={WHATSAPP_URL}
              bgColor="#D97706"
              shimmerColor="rgba(255,255,255,0.25)"
              className="text-lg"
            >
              <Phone className="h-5 w-5" />
              Encomendar pelo WhatsApp
            </ShimmerButton>

            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              Ver os nossos produtos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-white py-6">
        <Marquee
          items={MARQUEE_ITEMS}
          separator="\uD83C\uDF3E"
          speed={25}
          className="text-xl font-semibold text-amber-700/80"
        />
      </section>

      {/* ── PRODUCTS ── */}
      <section id="produtos" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-amber-600 uppercase">
              O que fazemos
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              Os Nossos Produtos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
              Do forno para a sua mesa, com ingredientes selecionados e receitas
              que passam de geração em geração.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <motion.div key={product.title} {...stagger(i)}>
                <SpotlightCard
                  spotlightColor="rgba(217,119,6,0.12)"
                  className="h-full rounded-3xl border-amber-100 p-8 transition-all duration-300 hover:border-amber-200"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-4xl">{product.emoji}</span>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "rgba(217,119,6,0.1)" }}
                    >
                      <span className="text-amber-700">{product.icon}</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-900">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {product.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-amber-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...stagger(i)}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-amber-700 md:text-5xl">
                  {stat.decimal ? (
                    <>
                      <AnimatedCounter
                        target={stat.target}
                        className="text-4xl font-bold md:text-5xl"
                      />
                      <span className="text-4xl font-bold md:text-5xl">
                        {" "}
                      </span>
                    </>
                  ) : (
                    <>
                      {stat.prefix && (
                        <span className="text-4xl font-bold md:text-5xl">
                          {stat.prefix}
                        </span>
                      )}
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        className="text-4xl font-bold md:text-5xl"
                      />
                    </>
                  )}
                </div>
                <p className="text-sm font-medium text-neutral-500 md:text-base">
                  {stat.label}
                </p>
                {stat.decimal && (
                  <p className="mt-1 text-xs text-amber-600/60">
                    {"\u2605"} de 5.0
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="sobre" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* text */}
            <motion.div {...fadeUp}>
              <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-amber-600 uppercase">
                A nossa história
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                Uma Família,
                <br />
                <span className="text-amber-700">Um Forno,</span>
                <br />
                Mil Histórias.
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600">
                <p>
                  Tudo começou em 2010, quando o Manuel e a Teresa decidiram
                  transformar uma paixão de família numa padaria de bairro. Com
                  um forno a lenha, farinha local e as receitas da avó Conceição,
                  nasceu o Pão da Serra.
                </p>
                <p>
                  Hoje, mantemos os mesmos princípios: massa-mãe com mais de 15
                  anos, fermentação lenta, zero aditivos e ingredientes da
                  região. Cada pão que sai do nosso forno carrega a história e o
                  carinho de quem faz com as próprias mãos.
                </p>
                <p>
                  Mais do que uma padaria, somos um ponto de encontro. Um sítio
                  onde se conversa, se partilha e se celebra a vida em comunidade
                  -- uma fatia de cada vez.
                </p>
              </div>
            </motion.div>

            {/* visual card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50 p-10">
                {/* decorative grain circles */}
                <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-amber-200/30" />
                <div className="absolute bottom-8 left-8 h-14 w-14 rounded-full bg-orange-200/30" />

                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-600/10">
                      <Heart className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">
                        Receitas de Família
                      </h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Receitas da avó Conceição, passadas de geração em
                        geração com todo o carinho.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-600/10">
                      <Wheat className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">
                        Ingredientes Locais
                      </h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Farinha moída em pedra, ovos de quintas vizinhas e
                        azeite da região.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-600/10">
                      <Clock className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">
                        Fermentação Lenta
                      </h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        24 horas de fermentação natural para um sabor profundo e
                        uma crosta perfeita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="opiniões" className="bg-amber-50">
        <TestimonialCards
          testimonials={TESTIMONIALS}
          title="O Que Dizem os Nossos Clientes"
          subtitle="Opiniões reais de quem nos visita todos os dias."
          accentColor="#D97706"
        />
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-white px-6 py-24">
        {/* warm gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(254,243,199,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div
          {...fadeUp}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-5xl">{"\uD83C\uDF5E"}</span>
          <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
            Encomende o seu
            <br />
            <span className="text-amber-700">pão fresco</span>
          </h2>
          <p className="mb-8 text-lg text-neutral-500">
            Faça a sua encomenda pelo WhatsApp e levante na loja quentinho, acabado
            de sair do forno.
          </p>
          <ShimmerButton
            href={WHATSAPP_URL}
            bgColor="#D97706"
            shimmerColor="rgba(255,255,255,0.25)"
            className="text-lg"
          >
            <Phone className="h-5 w-5" />
            Encomendar Agora
          </ShimmerButton>
          <p className="mt-4 text-xs text-neutral-400">
            Resposta em menos de 30 minutos, normalmente muito mais rápido!
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contacto" className="bg-neutral-900 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {/* brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-amber-400">
              Pão da Serra
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Padaria artesanal em Figueira da Foz. Pão feito com alma, receitas
              de família e ingredientes da região desde 2010.
            </p>
          </div>

          {/* contact info */}
          <div className="space-y-4">
            <h4 className="mb-2 text-sm font-semibold tracking-widest text-amber-400 uppercase">
              Contacto
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <p className="text-sm text-neutral-300">
                Rua da Padaria, 42
                <br />
                3080-123 Figueira da Foz
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-amber-500" />
              <a
                href="tel:+351912345682"
                className="text-sm text-neutral-300 transition-colors hover:text-amber-400"
              >
                912 345 682
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <div className="text-sm text-neutral-300">
                <p>Seg - Dom</p>
                <p className="text-neutral-400">06:30 - 20:00</p>
              </div>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-amber-400 uppercase">
              Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-amber-500 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mx-auto mt-12 max-w-6xl border-t border-neutral-800 pt-8 text-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Pão da Serra. Todos os direitos
            reservados. Feito com{" "}
            <Heart className="inline h-3 w-3 text-amber-500" /> em Figueira da
            Foz.
          </p>
        </div>
      </footer>
    </main>
  );
}
