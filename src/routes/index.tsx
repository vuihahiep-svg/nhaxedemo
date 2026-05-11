import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  ShieldCheck,
  Hospital,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UtChiLogo } from "@/components/UtChiLogo";
import { homeCopy, hospitalsFor, type Lang } from "@/lib/i18n-home";
import {
  allBusRoutes,
  busRouteCategoryLabels,
  type BusRouteCategoryId,
} from "@/lib/bus-routes";
import heroImg from "@/assets/hero-limousine.jpg";
import interiorImg from "@/assets/interior.jpg";
import patientImg from "@/assets/patient-care.jpg";

/** Hotline: shown only in the bottom contact/footer area per product request. */
const PHONE = "036 908 8090";
const PHONE_LINK = "tel:0369088090";

const pickupPlaces = [
  "Đồng Xoài",
  "Bình Long",
  "Phước Long",
  "Chơn Thành",
  "Đồng Phú",
  "Hớn Quản",
  "Bù Đăng",
  "Bù Gia Mập",
  "Lộc Ninh",
  "Bù Đốp",
];

const routeCategoryOrder: BusRouteCategoryId[] = ["bp-hcm", "lien-tinh", "noi-tinh"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeCopy.vi.metaTitle },
      { name: "description", content: homeCopy.vi.metaDescription },
    ],
  }),
  component: Index,
});

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="relative inline-flex rounded-full border border-border bg-card p-0.5 text-xs font-semibold shadow-sm">
      <button
        type="button"
        onClick={() => onChange("vi")}
        className={`rounded-full px-3 py-1.5 transition ${lang === "vi" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("vi");
  const t = homeCopy[lang];
  const hospitals = hospitalsFor(lang);

  useEffect(() => {
    document.title = t.metaTitle;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", t.metaDescription);
  }, [t.metaDescription, t.metaTitle]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3 scroll-mt-24">
            <UtChiLogo className="h-10 w-10 shrink-0" />
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight">Út Chí</p>
              <p className="text-xs text-muted-foreground">{t.brandSubtitle}</p>
            </div>
          </a>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:justify-center">
            <nav
              className="flex max-w-full items-center gap-1 overflow-x-auto pb-1 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Primary"
            >
              <NavLink href="#top">{t.navHome}</NavLink>
              <NavLink href="#dich-vu">{t.navServices}</NavLink>
              <NavLink href="#lo-trinh">{t.navRoutes}</NavLink>
              <NavLink href="#gia-tuyen">{t.navPopular}</NavLink>
              <NavLink href="#gio-chay">{t.navSchedule}</NavLink>
              <NavLink href="#lien-he">{t.navContact}</NavLink>
            </nav>
            <div className="flex shrink-0 items-center gap-2 pl-1">
              <span className="sr-only">{lang === "vi" ? t.langVi : t.langEn}</span>
              <LangSwitch lang={lang} onChange={setLang} />
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="relative scroll-mt-28 overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-primary-foreground sm:py-28 lg:py-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <Heart className="h-3.5 w-3.5" aria-hidden /> {t.heroBadge}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {t.heroTitle1}
            <br />
            <span className="text-accent">{t.heroTitle2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">{t.heroLead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#lien-he">
              <Button
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t.heroCtaPrimary} <ChevronDown className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </a>
            <a href="#lo-trinh">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                {t.heroCtaSecondary} <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="dich-vu" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.navServices}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.servicesIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Hospital, ...t.highlights[0] },
              { icon: Heart, ...t.highlights[1] },
              { icon: ShieldCheck, ...t.highlights[2] },
              { icon: Clock, ...t.highlights[3] },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
              >
                <f.icon className="h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gia-tuyen" className="scroll-mt-28 bg-muted/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.popularTitle}</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">{t.popularLead}</p>
          <p className="mt-2 text-sm font-medium text-primary">
            {lang === "vi" ? "Tổng số tuyến liệt kê:" : "Routes listed:"}{" "}
            <span className="tabular-nums">{allBusRoutes.length}</span>
          </p>

          <div className="mt-10 space-y-12">
            {routeCategoryOrder.map((cat) => {
              const catMeta = busRouteCategoryLabels[cat];
              const rows = allBusRoutes.filter((r) => r.category === cat);
              const title = lang === "vi" ? catMeta.titleVi : catMeta.titleEn;
              const blurb = lang === "vi" ? catMeta.blurbVi : catMeta.blurbEn;
              return (
                <div key={cat}>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{blurb}</p>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
                        <tr>
                          <th className="w-12 px-3 py-3 font-medium">{t.tableHeadNo}</th>
                          <th className="px-4 py-3 font-medium">{t.tableHeadRoute}</th>
                          <th className="px-4 py-3 font-medium">{t.tableHeadPrice}</th>
                          <th className="px-4 py-3 font-medium">{t.tableHeadDist}</th>
                          <th className="px-4 py-3 font-medium">{t.tableHeadTime}</th>
                          <th className="px-4 py-3 font-medium">{t.tableHeadVehicle}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, idx) => (
                          <tr key={row.id} className="border-b border-border/80 last:border-0">
                            <td className="px-3 py-3 text-muted-foreground tabular-nums">{idx + 1}</td>
                            <td className="px-4 py-3 font-medium">
                              {lang === "vi" ? row.routeVi : row.routeEn}
                            </td>
                            <td className="px-4 py-3 text-primary">
                              {lang === "vi" ? row.priceVi : row.priceEn}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">{row.distKm}</td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {lang === "vi" ? row.durationVi : row.durationEn}
                            </td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {lang === "vi" ? row.vehicleVi : row.vehicleEn}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">{t.popularFootnote}</p>
        </div>
      </section>

      <section id="lo-trinh" className="scroll-mt-28 bg-secondary/60 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">{t.routesTitle}</h2>
            <p className="mt-3 text-muted-foreground">{t.routesLead}</p>

            <div className="mt-7 space-y-5">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                  <h3 className="font-semibold">{t.pickupTitle}</h3>
                </div>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  {pickupPlaces.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden /> {p}{" "}
                      {t.pickupItem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Hospital className="h-5 w-5" aria-hidden />
                  <h3 className="font-semibold">{t.hospitalTitle}</h3>
                </div>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  {hospitals.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <img
              src={patientImg}
              alt=""
              loading="lazy"
              width={1200}
              height={800}
              className="h-64 w-full rounded-2xl object-cover shadow-[var(--shadow-card)] sm:h-80"
            />
            <img
              src={interiorImg}
              alt=""
              loading="lazy"
              width={1200}
              height={800}
              className="h-48 w-full rounded-2xl object-cover shadow-[var(--shadow-card)] sm:h-64"
            />
          </div>
        </div>
      </section>

      <section id="gio-chay" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.scheduleTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.scheduleLead}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-medium text-primary">{t.scheduleBpHcm}</p>
              <p className="mt-2 text-2xl font-bold">04:00 – 06:00 – 08:00 – 11:00 – 14:00</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.scheduleBpNote}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-medium text-primary">{t.scheduleHcmBp}</p>
              <p className="mt-2 text-2xl font-bold">09:00 – 12:00 – 15:00 – 17:00 – 19:00</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.scheduleHcmNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">{t.ctaLead}</p>
          <a href="#lien-he">
            <Button
              size="lg"
              variant="secondary"
              className="mt-6 rounded-full px-8 font-semibold shadow-[var(--shadow-soft)]"
            >
              {t.ctaButton} <ChevronDown className="ml-2 h-4 w-4" aria-hidden />
            </Button>
          </a>
        </div>
      </section>

      <footer id="lien-he" className="scroll-mt-28 border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <UtChiLogo className="h-12 w-12" />
              <p className="text-sm font-semibold">{t.footerCopyright}</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.footerAddressLabel}:</span>{" "}
                {t.footerAddress}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-8 py-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t.footerContactLabel}
              </p>
              <a
                href={PHONE_LINK}
                className="mt-2 inline-flex items-center justify-center gap-2 text-2xl font-bold text-primary hover:underline"
              >
                <Phone className="h-7 w-7 shrink-0" aria-hidden />
                {PHONE}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                {lang === "vi"
                  ? "Gọi để đặt chỗ, báo điểm đón và giờ khám."
                  : "Call to reserve seats, pickup point, and clinic time."}
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Út Chí • {t.footerCopyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
