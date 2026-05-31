import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Printer, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEDA Kanzlei – Website wird überarbeitet" },
      {
        name: "description",
        content:
          "Unsere Website wird derzeit überarbeitet. Kontaktieren Sie VEDA GmbH Steuerberatungsgesellschaft in München.",
      },
      { property: "og:title", content: "VEDA Kanzlei – Website wird überarbeitet" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col bg-background px-6 py-12 font-sans antialiased">
      <section className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-brand sm:text-4xl md:text-5xl">
          Unsere Website wird derzeit überarbeitet
        </h1>

        <div className="mx-auto mt-6 h-px w-16 bg-foreground/40" />
      </section>

      <footer className="mt-auto flex flex-col items-center pb-4 text-center">
        <div className="space-y-1 text-foreground">
          <p className="font-semibold">VEDA GmbH Steuerberatungsgesellschaft</p>
          <p className="text-sm text-foreground/80">
            VEDA WP GmbH Wirtschaftsprüfungsgesellschaft
          </p>
        </div>

        <ul className="mt-6 inline-flex flex-col items-start gap-2 text-left text-sm text-foreground sm:text-base">
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>Aschauer Straße 30, 81549 München</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <a href="tel:+498974118700" className="transition-colors hover:text-brand">
              +49 89 74 11 87 0 - 0
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Printer className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>+49 89 74 11 87 0 - 19</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
            <a href="mailto:info@veda-kanzlei.de" className="transition-colors hover:text-brand">
              info@veda-kanzlei.de
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
