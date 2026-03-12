"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Leaf,
  Clock,
  MapPin,
  Phone,
  Star,
  ArrowRight,
  Shield,
  Award,
  Users,
  Syringe,
  SunMedium,
  HandHeart,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-nav";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { TextReveal } from "@/components/ui/text-reveal";

/* ─── Constants ────────────────────────────────────────────────── */

const WHATSAPP_URL =
  "https://wa.me/351912345680?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20na%20Bella%20Cl%C3%ADnica";

const ROSE = "#DB2777";
const ROSE_LIGHT = "rgba(219,39,119,0.12)";
const GOLD = "#D4A574";

const NAV_ITEMS = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

const MARQUEE_ITEMS = [
  "Limpeza de Pele",
  "Botox",
  "Preenchimento",
  "Peeling Químico",
  "Laser",
  "Anti-Aging",
  "Mesoterapia",
  "Microagulhamento",
  "Harmonização Facial",
];

const SERVICES = [
  {
    icon: Sparkles,
    title: "Tratamentos Faciais",
    description:
      "Limpezas de pele profundas, hidratação intensiva, peelings e protocolos personalizados para uma pele radiante e saudável.",
    features: ["Limpeza Profunda", "Hidração", "Peeling"],
  },
  {
    icon: Syringe,
    title: "Medicina Estética",
    description:
      "Botox, preenchimento com ácido hialurónico e harmonização facial com técnicas avançadas e resultados naturais.",
    features: ["Botox", "Preenchimento", "Harmonização"],
  },
  {
    icon: SunMedium,
    title: "Corpo & Contorno",
    description:
      "Tratamentos corporais de modelagem, reducão de gordura localizada e firmeza da pele com tecnologia de ponta.",
    features: ["Criolípolise", "Radiofrequência", "Drenagem"],
  },
  {
    icon: HandHeart,
    title: "Anti-Aging",
    description:
      "Protocolos rejuvenescedores que combinam tecnologia laser, bioestimuladores e cosméticos premium para reverter sinais do tempo.",
    features: ["Laser", "Bioestimuladores", "Colagénio"],
  },
];

const STATS = [
  { target: 3000, suffix: "+", label: "Clientes Satisfeitas" },
  { target: 10, suffix: "+", label: "Anos de Experiência" },
  { target: 49, suffix: "", label: "Avaliação Google", prefix: "4." },
  { target: 15, suffix: "+", label: "Tratamentos Disponíveis" },
];

const RESULTS = [
  {
    title: "Rejuvenescimento Facial Completo",
    description:
      "Protocolo combinado de Botox e preenchimento para suavização de linhas de expressão. Resultados visíveis após 7 dias com aparência natural e fresca.",
    metric: "Até 10 anos mais jovem",
    icon: Award,
  },
  {
    title: "Tratamento Anti-Manchas",
    description:
      "Combinação de peeling químico e laser para uniformização do tom de pele. Redução de 90% das manchas em 4 sessões.",
    metric: "90% de redução",
    icon: Sparkles,
  },
  {
    title: "Contorno Corporal",
    description:
      "Programa de remodelação corporal com criolípolise e radiofrequência. Perda de até 4cm de circunferência por zona tratada.",
    metric: "Até -4cm por zona",
    icon: Heart,
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    role: "Cliente há 3 anos",
    content:
      "A Bella Clínica transformou a minha pele. O tratamento de rejuvenescimento foi incrível — nunca me senti tão confiante. A equipa é extremamente profissional e atenciosa.",
    rating: 5,
  },
  {
    name: "Sofia Almeida",
    role: "Cliente há 1 ano",
    content:
      "Fiz harmonização facial e o resultado superou todas as expectativas. Natural, elegante, exatamente o que queria. Recomendo a todas as minhas amigas.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Cliente há 5 anos",
    content:
      "Já experimentei várias clínicas na região e nenhuma se compara à Bella. O ambiente é luxuoso, os tratamentos são impecáveis e os resultados falam por si.",
    rating: 5,
  },
];

/* ─── Fade-in helper ───────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

/* ─── Section heading ──────────────────────────────────────────── */

function SectionHeading({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-16 max-w-2xl text-center">
      {badge && (
        <span
          className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
          style={{ backgroundColor: ROSE_LIGHT, color: ROSE }}
        >
          <Sparkles className="h-3 w-3" />
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-neutral-500 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Decorative divider ───────────────────────────────────────── */

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-12 bg-rose-200" />
      <Sparkles className="h-3.5 w-3.5 text-rose-300" />
      <span className="h-px w-12 bg-rose-200" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/*  PAGE                                                          */
/* ═══════════════════════════════════════════════════════════════ */

export default function BellaClinicaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <FloatingNav
        brand="Bella Clínica"
        items={NAV_ITEMS}
        ctaLabel="Agendar Consulta"
        ctaHref={WHATSAPP_URL}
        brandColor={ROSE}
        ctaColor={ROSE}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-50 via-rose-50/40 to-white" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-pink-100/40 blur-3xl" />

        {/* Floating gold accents */}
        <motion.div
          className="pointer-events-none absolute top-1/4 left-[15%] h-2 w-2 rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/3 right-[20%] h-3 w-3 rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{ y: [10, -15, 10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-1/3 left-[25%] h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{ y: [-8, 12, -8], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
            <span
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200 px-5 py-2 text-xs font-medium tracking-wide uppercase"
              style={{ color: ROSE, backgroundColor: "rgba(253,242,248,0.8)" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Clínica de Estética Premium
              <Sparkles className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
            <TextReveal text="Beleza Natural," className="justify-center" />
            <br />
            <span style={{ color: ROSE }}>
              <TextReveal text="Resultados Reais" delay={0.4} className="justify-center" />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg"
          >
            Descubra tratamentos personalizados de estética e medicina estética.
            Realce a sua beleza com naturalidade, confiança e os melhores profissionais
            da Figueira da Foz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ShimmerButton
              href={WHATSAPP_URL}
              bgColor={ROSE}
              shimmerColor="rgba(255,255,255,0.25)"
              className="text-base shadow-lg shadow-rose-500/25"
            >
              <Sparkles className="h-4 w-4" />
              Agendar Consulta Gratuita
            </ShimmerButton>

            <a
              href="#tratamentos"
              className="group inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-6 py-4 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-rose-300 hover:shadow-md"
            >
              Explorar Tratamentos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400"
          >
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" style={{ color: GOLD }} />
              Certificada
            </span>
            <span className="h-3 w-px bg-neutral-200" />
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" style={{ color: GOLD }} />
              4.9 Google Reviews
            </span>
            <span className="h-3 w-px bg-neutral-200" />
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" style={{ color: GOLD }} />
              +3000 Clientes
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-8 w-5 rounded-full border-2 border-rose-300 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-rose-400" />
          </div>
        </motion.div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────── */}
      <section className="border-y border-rose-100 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 py-6">
        <Marquee
          items={MARQUEE_ITEMS}
          separator="✧"
          speed={45}
          className="text-sm font-medium tracking-wide text-rose-400"
        />
      </section>

      {/* ── Services ────────────────────────────────────────── */}
      <section id="tratamentos" className="scroll-mt-20 bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Serviços"
            title="Tratamentos de Excelência"
            subtitle="Combinamos técnicas avançadas com tecnologia de última geração para resultados que superam expectativas."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <SpotlightCard
                    spotlightColor={ROSE_LIGHT}
                    className="h-full rounded-3xl border-rose-100 p-8 sm:p-10"
                  >
                    <div
                      className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: ROSE_LIGHT }}
                    >
                      <Icon className="h-6 w-6" style={{ color: ROSE }} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-neutral-500">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-rose-100 bg-pink-50 px-3 py-1 text-xs font-medium text-rose-600"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About / Why Us ──────────────────────────────────── */}
      <section id="sobre" className="scroll-mt-20 bg-pink-50/60 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Sobre Nós"
            title="Porquê a Bella Clínica?"
            subtitle="Mais do que uma clínica, somos a sua parceira na jornada para a melhor versão de si mesma."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Segurança Certificada",
                text: "Todos os procedimentos seguem protocolos rigorosos de segurança. Equipa médica credenciada e produtos certificados.",
              },
              {
                icon: Leaf,
                title: "Resultados Naturais",
                text: "A nossa filosofia é realçar a beleza natural. Nada exagerado, tudo equilibrado e personalizado ao seu rosto e corpo.",
              },
              {
                icon: Heart,
                title: "Cuidado Personalizado",
                text: "Cada cliente é única. Criamos planos de tratamento individualizados após avaliação detalhada das suas necessidades.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="rounded-3xl border border-rose-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: ROSE_LIGHT }}
                  >
                    <Icon className="h-6 w-6" style={{ color: ROSE }} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white px-6 py-24">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-50/50 via-transparent to-pink-50/50" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <Divider />
            <h2 className="mt-6 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Números que Inspiram Confiança
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-rose-100 bg-gradient-to-b from-white to-pink-50/50 p-6 text-center shadow-sm sm:p-8"
              >
                <div className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                    duration={2200}
                  />
                </div>
                <p className="mt-2 text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ─────────────────────────────────────────── */}
      <section id="resultados" className="scroll-mt-20 bg-pink-50/60 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Resultados"
            title="Transformações Reais"
            subtitle="Conheça os resultados que os nossos tratamentos proporcionam — beleza natural e confiança renovada."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {RESULTS.map((result, i) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  {/* Placeholder visual */}
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full"
                        style={{ backgroundColor: ROSE_LIGHT }}
                      >
                        <Icon className="h-7 w-7" style={{ color: ROSE }} />
                      </div>
                      <span
                        className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                        style={{ backgroundColor: ROSE, color: "white" }}
                      >
                        {result.metric}
                      </span>
                    </div>

                    {/* Gold corner accent */}
                    <div
                      className="absolute top-0 right-0 h-20 w-20 rounded-bl-[3rem] opacity-20"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-neutral-900">
                      {result.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      {result.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <TestimonialCards
        testimonials={TESTIMONIALS}
        title="O que Dizem as Nossas Clientes"
        subtitle="Histórias reais de confiança, beleza e transformação"
        accentColor={ROSE}
        className="bg-white"
      />

      {/* ── CTA Final ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 px-6 py-24 lg:py-32">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

        {/* Gold accent dots */}
        <motion.div
          className="pointer-events-none absolute top-20 left-[10%] h-2 w-2 rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-20 right-[15%] h-3 w-3 rounded-full"
          style={{ backgroundColor: GOLD }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Divider />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Agende a Sua{" "}
              <span style={{ color: ROSE }}>Consulta Gratuita</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
              Dê o primeiro passo para a sua transformação. Marque uma consulta
              de avaliação gratuita e descubra o tratamento ideal para si.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <ShimmerButton
              href={WHATSAPP_URL}
              bgColor={ROSE}
              shimmerColor="rgba(255,255,255,0.25)"
              className="text-lg shadow-xl shadow-rose-500/20"
            >
              <Sparkles className="h-5 w-5" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-5 w-5" />
            </ShimmerButton>

            <p className="text-xs text-neutral-400">
              Resposta em menos de 2 horas &middot; Sem compromisso
            </p>
          </motion.div>

          {/* Trust row */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" style={{ color: GOLD }} />
              Equipa Certificada
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" style={{ color: GOLD }} />
              +3000 Clientes
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4" style={{ color: GOLD }} />
              10+ Anos
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer id="contacto" className="scroll-mt-20 border-t border-rose-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold" style={{ color: ROSE }}>
                Bella Clínica
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                Clínica de estética premium na Figueira da Foz. Beleza natural,
                resultados reais, confiança renovada.
              </p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill={GOLD}
                    stroke="none"
                  />
                ))}
                <span className="ml-1 text-xs text-neutral-400">4.9/5</span>
              </div>
            </div>

            {/* Treatments quicklinks */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                Tratamentos
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                {["Tratamentos Faciais", "Medicina Estética", "Corpo & Contorno", "Anti-Aging", "Consulta de Avaliação"].map(
                  (t) => (
                    <li key={t}>
                      <a
                        href="#tratamentos"
                        className="transition-colors hover:text-rose-600"
                      >
                        {t}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ROSE }} />
                  <span>
                    Rua da Clínica, 42
                    <br />
                    3080-100 Figueira da Foz
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" style={{ color: ROSE }} />
                  <a
                    href="tel:+351912345680"
                    className="transition-colors hover:text-rose-600"
                  >
                    +351 912 345 680
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                Horário
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" style={{ color: ROSE }} />
                  <span>Seg - Sex: 9:00 - 19:00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" style={{ color: ROSE }} />
                  <span>Sáb: 9:00 - 14:00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-neutral-300" />
                  <span className="text-neutral-400">Dom: Encerrado</span>
                </li>
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: ROSE }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Agendar Agora
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-rose-100 pt-8 sm:flex-row">
            <p className="text-xs text-neutral-400">
              &copy; {new Date().getFullYear()} Bella Clínica. Todos os direitos reservados.
            </p>
            <p className="text-xs text-neutral-400">
              Figueira da Foz, Portugal
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
