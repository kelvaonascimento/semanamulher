import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulheres que Constroem | Cultura Builder — 7 Dias Grátis",
  description:
    "Além das flores: Incentivo real. Mulheres ocupando espaços na tecnologia. 7 dias GRÁTIS no Hub Cultura Builder. 12 cursos de IA e no-code. Sem cartão. Semana da Mulher 2026.",
  keywords: [
    "mulheres na tecnologia",
    "IA para mulheres",
    "cursos de IA grátis",
    "no-code",
    "Cultura Builder",
    "Semana da Mulher",
    "vibe coding",
  ],
  openGraph: {
    title: "Mulheres que Constroem | 7 Dias Grátis",
    description:
      "Além das flores: Incentivo real. Mulheres ocupando espaços na tecnologia. 12 cursos de IA e no-code, grátis por 7 dias. Sem cartão.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulheres que Constroem | Cultura Builder",
    description: "Além das flores: Incentivo real. Mulheres ocupando espaços na tecnologia. 7 dias GRÁTIS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
