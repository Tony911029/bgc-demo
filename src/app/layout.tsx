import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  // suppressHydrationWarning seems to be a presistent issues
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Provider>{children}</Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}