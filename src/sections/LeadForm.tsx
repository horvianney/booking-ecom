import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_NUMBER, GOOGLE_SHEET_WEBAPP_URL } from "@/config";

const experiences = [
  "J'ai déjà fait l'e-commerce",
  "Je n'ai jamais fait l'e-commerce",
  "J'ai essayé mais sans succès",
];

const reseaux = ["WhatsApp", "Facebook", "Instagram", "TikTok", "Snapchat", "X (Twitter)", "Autre"];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-[#e10a17]/60 focus:ring-2 focus:ring-[#e10a17]/30";

export function LeadForm() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [appel, setAppel] = useState("");
  const [sexe, setSexe] = useState<"" | "M" | "F">("");
  const [experience, setExperience] = useState("");
  const [reseau, setReseau] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mode 1 : réception via Google Sheets (Apps Script Web App)
    if (GOOGLE_SHEET_WEBAPP_URL) {
      const data = new FormData();
      data.append("date", new Date().toLocaleString("fr-FR"));
      data.append("nom", nom);
      data.append("age", age);
      data.append("sexe", sexe);
      // L'apostrophe force le format texte dans Sheets (sinon le « + » saute)
      data.append("whatsapp", `'${whatsapp}`);
      data.append("appel", appel ? `'${appel}` : "");
      data.append("experience", experience);
      data.append("reseau", reseau);
      // mode "no-cors" : la réponse est opaque mais l'écriture Sheets fonctionne
      fetch(GOOGLE_SHEET_WEBAPP_URL, { method: "POST", mode: "no-cors", body: data }).catch(() => {});
      setSent(true);
      return;
    }

    // Mode 2 (secours) : réception via WhatsApp avec message pré-rempli
    const lines = [
      "🔥 NOUVELLE RÉSERVATION  Booking E-com Starter",
      "",
      `👤 Nom & prénom : ${nom}`,
      `🎂 Âge : ${age} ans`,
      `⚧ Sexe : ${sexe}`,
      `📱 WhatsApp : ${whatsapp}`,
      `📞 Appel : ${appel || ""}`,
      `🛒 Expérience e-commerce : ${experience}`,
      `🌐 Réseau le plus actif : ${reseau || ""}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="formulaire" className="section-watermark wm-right relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[#b3001b]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-2xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Formulaire de réservation
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Réserve ta place et{" "}
            <span className="text-brand-gradient">passe au paiement</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
            {GOOGLE_SHEET_WEBAPP_URL
              ? "Remplis tes informations. On te recontacte immédiatement sur WhatsApp pour le paiement sécurisé et finaliser ta réservation."
              : "Remplis ce formulaire  ta demande arrive directement sur notre WhatsApp et on te recontacte pour finaliser ta commande."}
          </p>
        </Reveal>

        <Reveal delay={150}>
          {sent ? (
            <div className="mt-10 rounded-2xl border border-[#6bd425]/40 bg-[#6bd425]/10 p-8 text-center">
              <p className="text-4xl">🎉</p>
              <p className="font-display mt-4 text-xl uppercase text-white">
                Réservation bien reçue !
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Merci {nom.split(" ")[0]} ! Notre équipe te recontacte très vite
                sur WhatsApp pour finaliser ta commande.
              </p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-[#0e0e0e] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:p-8"
          >
            <div>
              <label htmlFor="nom" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Nom &amp; prénom <span className="text-[#e10a17]">*</span>
              </label>
              <input id="nom" type="text" required value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Ex : Kofi Mensah" className={inputCls} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="age" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Âge <span className="text-[#e10a17]">*</span>
                </label>
                <input id="age" type="number" required min={12} max={100} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Ex : 25" className={inputCls} />
              </div>

              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Sexe <span className="text-[#e10a17]">*</span>
                </span>
                <div className="flex gap-3">
                  {(["M", "F"] as const).map((s) => (
                    <label
                      key={s}
                      className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${
                        sexe === s
                          ? "border-[#e10a17] bg-[#b3001b]/20 text-white ring-2 ring-[#e10a17]/40"
                          : "border-white/10 bg-black/60 text-neutral-400 hover:border-white/25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sexe"
                        value={s}
                        checked={sexe === s}
                        onChange={() => setSexe(s)}
                        className="sr-only"
                        required
                      />
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] transition ${
                          sexe === s ? "border-[#e10a17] bg-[#e10a17] text-white" : "border-neutral-500 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                      {s === "M" ? "Masculin" : "Féminin"}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="whatsapp" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Numéro WhatsApp <span className="text-[#e10a17]">*</span>
                </label>
                <input id="whatsapp" type="tel" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="Ex : +228 90 12 34 56" className={inputCls} />
              </div>
              <div>
                <label htmlFor="appel" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Numéro d'appel
                </label>
                <input id="appel" type="tel" value={appel} onChange={(e) => setAppel(e.target.value)} placeholder="Ex : +228 90 12 34 56" className={inputCls} />
              </div>
            </div>

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Quelle expérience as-tu de l'e-commerce ? <span className="text-[#e10a17]">*</span>
              </span>
              <div className="space-y-2">
                {experiences.map((exp) => (
                  <label
                    key={exp}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                      experience === exp
                        ? "border-[#e10a17]/60 bg-[#b3001b]/15 text-white"
                        : "border-white/10 bg-black/60 text-neutral-300 hover:border-white/25"
                    }`}
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={exp}
                      checked={experience === exp}
                      onChange={() => setExperience(exp)}
                      className="sr-only"
                      required
                    />
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 text-[10px] transition ${
                        experience === exp ? "border-[#e10a17] bg-[#e10a17] text-white" : "border-neutral-500 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    {exp}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="reseau" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Sur quel réseau es-tu le plus actif / connecté ?
              </label>
              <select id="reseau" value={reseau} onChange={(e) => setReseau(e.target.value)} className={`${inputCls} appearance-none`}>
                <option value="" disabled>Choisis un réseau…</option>
                {reseaux.map((r) => (
                  <option key={r} value={r} className="bg-[#0e0e0e]">{r}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn-red font-display block w-full rounded-xl px-7 py-4 text-center text-sm uppercase tracking-wide sm:text-base"
            >
              👉 Réserver et passer au paiement
            </button>
            <p className="text-center text-[11px] leading-relaxed text-neutral-500">
              {GOOGLE_SHEET_WEBAPP_URL
                ? "🔒 Paiement sécurisé • Réservation confirmée après paiement • Tes informations restent confidentielles."
                : "En envoyant, WhatsApp s'ouvre avec ton message pré-rempli  il ne te reste qu'à appuyer sur « Envoyer »."}
            </p>
          </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
