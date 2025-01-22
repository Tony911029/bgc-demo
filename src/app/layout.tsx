import "./globals.css";
import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  // suppressHydrationWarning seems to be a presistent issues
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}