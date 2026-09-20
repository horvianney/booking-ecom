import { CTA_URL } from "@/config";

export function CtaButton({
  children,
  href = CTA_URL,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-red font-display inline-block rounded-xl px-7 py-4 text-center text-sm uppercase tracking-wide sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}
