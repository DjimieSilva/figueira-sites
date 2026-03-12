"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Maximize,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Scale,
  Landmark,
  HeartHandshake,
  Building2,
  Waves,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import { FloatingNav } from "@/components/ui/floating-nav";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCards } from "@/components/ui/testimonial-cards";
import { TextReveal } from "@/components/ui/text-reveal";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const WHATSAPP_URL =
  "https://wa.me/351912345681?text=Ol%C3%A1!%20Estou%20interessado%20em%20im%C3%B3veis%20na%20Costa%20Dourada";

const NAV_ITEMS = [
  { label: "Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const MARQUEE_ITEMS = [
  "Apartamentos",
  "Moradias",
  "Terrenos",
  "Investimento",
  "Vista Mar",
  "Centro Histórico",
  "Buarcos",
  "Figueira da Foz",
];

const PROPERTIES = [
  {
    title: "T2 Vista Mar",
    location: "Figueira da Foz, Frente Marítima",
    price: "180.000",
    area: 85,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    tag: "Destaque",
  },
  {
    title: "Moradia T3 Buarcos",
    location: "Buarcos, Figueira da Foz",
    price: "320.000",
    area: 140,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    tag: "Exclusivo",
  },
  {
    title: "Apartamento Centro",
    location: "Centro Histórico, Figueira da Foz",
    price: "145.000",
    area: 72,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    tag: "Oportunidade",
  },
];

const STATS = [
  { target: 500, suffix: "+", label: "Imóveis Vendidos" },
  { target: 15, suffix: "", label: "Anos de Mercado" },
  { target: 98, suffix: "%", label: "Satisfação" },
  { target: 50, suffix: "M+", label: "Em Vendas" },
];

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Avaliação Gratuita",
    description:
      "Avaliamos o seu imóvel sem qualquer custo ou compromisso, com base em dados de mercado atualizados.",
  },
  {
    icon: Scale,
    title: "Apoio Jurídico",
    description:
      "Equipa jurídica dedicada para garantir que todas as transações decorrem com total segurança.",
  },
  {
    icon: Landmark,
    title: "Financiamento",
    description:
      "Parcerias com as principais instituições bancárias para obter as melhores condições de crédito.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Personalizado",
    description:
      "Um consultor dedicado do primeiro contacto até a escritura. Estamos consigo em cada passo.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Ferreira",
    role: "Compradora, Figueira da Foz",
    content:
      "Encontrar a casa perfeita parecia impossível até conhecer a Costa Dourada. A equipa foi incansável e encontrou exatamente o que procurávamos. Profissionalismo do mais alto nível.",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "Investidor, Lisboa",
    content:
      "Investi em dois apartamentos na Figueira e o retorno superou as expectativas. A Costa Dourada conhece o mercado local como ninguém. Recomendo vivamente.",
    rating: 5,
  },
  {
    name: "Carla e Miguel Santos",
    role: "Compradores, Buarcos",
    content:
      "Desde a avaliação até ao financiamento, trataram de tudo. Em três meses estávamos na nossa moradia de sonho em Buarcos. Serviço cinco estrelas!",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function CostaDouradaPage() {
  return (
    <main className="relative bg-white text-neutral-900">
      {/* ---- NAV ---- */}
      <FloatingNav
        brand="Costa Dourada"
        items={NAV_ITEMS}
        ctaLabel="Falar com Consultor"
        ctaHref={WHATSAPP_URL}
        brandColor="#D4A574"
        ctaColor="#2563EB"
      />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0F172A] px-6 text-center">
        {/* Gradient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#D4A574]/10 blur-[100px]" />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
          >
            <Building2 className="h-4 w-4 text-[#D4A574]" />
            <span className="text-sm font-medium text-white/70">
              Imobiliária em Figueira da Foz
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            <TextReveal text="O seu futuro começa a beira-mar" />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Descubra imóveis exclusivos na costa prateada. Apartamentos com
            vista mar, moradias de sonho e investimentos com retorno garantido
            em Figueira da Foz.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <ShimmerButton
              href={WHATSAPP_URL}
              bgColor="#2563EB"
              shimmerColor="rgba(212,165,116,0.25)"
              className="text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Consultor
            </ShimmerButton>

            <a
              href="#imoveis"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              Ver Imóveis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  MARQUEE                                                     */}
      {/* ============================================================ */}
      <div className="border-b border-neutral-100 bg-[#F8FAFC] py-5">
        <Marquee
          items={MARQUEE_ITEMS}
          separator="/"
          speed={35}
          className="text-sm font-semibold uppercase tracking-widest text-neutral-400"
        />
      </div>

      {/* ============================================================ */}
      {/*  FEATURED PROPERTIES                                         */}
      {/* ============================================================ */}
      <section id="imoveis" className="scroll-mt-24 bg-[#F8FAFC] py-28 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Destaques
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              Imóveis em Destaque
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Uma seleção exclusiva dos melhores imóveis disponíveis em Figueira
              da Foz e arredores.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {PROPERTIES.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} custom={i}>
                <SpotlightCard
                  spotlightColor="rgba(37,99,235,0.12)"
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Tag badge */}
                    <span className="absolute left-4 top-4 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                      {p.tag}
                    </span>
                    {/* Price overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
                      <span className="text-2xl font-bold text-white">
                        {p.price}&euro;
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-neutral-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </p>
                    <div className="mt-4 flex items-center gap-4 border-t border-neutral-100 pt-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4 text-[#2563EB]" />
                        {p.area} m&sup2;
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="h-4 w-4 text-[#2563EB]" />
                        T{p.rooms}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* View all CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1d4ed8]"
            >
              Ver todos os imóveis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS                                                       */}
      {/* ============================================================ */}
      <section id="sobre" className="scroll-mt-24 relative overflow-hidden bg-[#0F172A] py-24 px-6">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#D4A574]">
              A nossa história
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Números que falam por nós
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    target={s.target}
                    suffix={s.suffix}
                    prefix={s.label === "Em Vendas" ? "" : ""}
                    className="tabular-nums"
                  />
                  {s.label === "Em Vendas" && (
                    <span className="ml-1 text-2xl text-[#D4A574]">&euro;</span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-white/50">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES                                                    */}
      {/* ============================================================ */}
      <section id="servicos" className="scroll-mt-24 bg-white py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Porque a Costa Dourada
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              Um serviço completo
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Da procura a escritura, tratamos de tudo para que a sua experiência
              seja simples, segura e sem stress.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i}
                  className="group rounded-2xl border border-neutral-100 bg-[#F8FAFC] p-7 transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-lg hover:shadow-[#2563EB]/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="h-6 w-6 text-[#2563EB] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <section className="bg-[#F8FAFC]">
        <TestimonialCards
          testimonials={TESTIMONIALS}
          title="O que dizem os nossos clientes"
          subtitle="Centenas de famílias já encontraram o seu lar connosco"
          accentColor="#2563EB"
        />
      </section>

      {/* ============================================================ */}
      {/*  CTA FINAL                                                   */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#0F172A] py-28 px-6">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#2563EB]/15 blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#D4A574]/10 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Waves className="mx-auto mb-6 h-10 w-10 text-[#D4A574]" />
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Encontre o imóvel dos seus sonhos
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/50">
              Fale com um dos nossos consultores especializados e descubra as
              melhores oportunidades em Figueira da Foz.
            </p>
            <div className="mt-10">
              <ShimmerButton
                href={WHATSAPP_URL}
                bgColor="#2563EB"
                shimmerColor="rgba(212,165,116,0.25)"
                className="text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Contactar via WhatsApp
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer id="contacto" className="scroll-mt-24 border-t border-neutral-100 bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold" style={{ color: "#D4A574" }}>
                Costa Dourada
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                A sua imobiliária de confiança em Figueira da Foz. Desde 2011 a
                ajudar famílias a encontrar o lar perfeito na costa prateada.
              </p>
              <p className="mt-4 text-xs font-medium text-neutral-400">
                AMI 12345
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-900">
                Escritório
              </h4>
              <address className="space-y-2 text-sm not-italic text-neutral-500">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                  Rua 5 de Outubro, 32 - 1o Andar
                  <br />
                  3080-084 Figueira da Foz
                </p>
              </address>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-900">
                Contactos
              </h4>
              <div className="space-y-3 text-sm text-neutral-500">
                <a
                  href="tel:+351912345681"
                  className="flex items-center gap-2 transition-colors hover:text-[#2563EB]"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" />
                  +351 912 345 681
                </a>
                <a
                  href="mailto:info@costadourada.pt"
                  className="flex items-center gap-2 transition-colors hover:text-[#2563EB]"
                >
                  <Mail className="h-4 w-4 text-[#2563EB]" />
                  info@costadourada.pt
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#2563EB]"
                >
                  <MessageCircle className="h-4 w-4 text-[#2563EB]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 md:flex-row">
            <p className="text-xs text-neutral-400">
              &copy; {new Date().getFullYear()} Costa Dourada - Mediação
              Imobiliária, Lda. Todos os direitos reservados.
            </p>
            <p className="text-xs text-neutral-400">
              Licença AMI 12345 &middot; Figueira da Foz, Portugal
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
