import Link from "next/link";

const sites = [
  { name: "Mar & Brasa", path: "/mar-brasa", desc: "Restaurante de Marisco & Grelhos", color: "#DC2626" },
  { name: "Ondas Academy", path: "/ondas-academy", desc: "Escola de Surf", color: "#0891B2" },
  { name: "Bella Clínica", path: "/bella-clinica", desc: "Clínica de Estética", color: "#DB2777" },
  { name: "Costa Dourada", path: "/costa-dourada", desc: "Imobiliária", color: "#2563EB" },
  { name: "Pão da Serra", path: "/pao-da-serra", desc: "Padaria Artesanal", color: "#B45309" },
  { name: "Tás-cá Dentro", path: "/tasca-dentro", desc: "Gastro Club", color: "#D4A056" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-50 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-neutral-900">Figueira da Foz</h1>
        <p className="mt-3 text-lg text-neutral-500">6 websites para negócios locais</p>
      </div>
      <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <Link
            key={site.path}
            href={site.path}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-3 h-2 w-12 rounded-full" style={{ backgroundColor: site.color }} />
            <h2 className="text-xl font-bold text-neutral-900">{site.name}</h2>
            <p className="mt-1 text-sm text-neutral-500">{site.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
