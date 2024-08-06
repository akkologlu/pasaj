import "@/styles/globals.css";
import "swiper/css";
import { useState } from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Footer from "@/components/footer/Footer";
import GlobalStyles from "@/styles/GlobalStyles";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
const greycliffCF = localFont({
  src: [
    {
      path: "../../public/fonts/GreycliffCF-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GreycliffCF-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GreycliffCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-greycliffcf",
});
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            <div className={`${greycliffCF.className}`}>
              <GlobalStyles />
              <Header />
              <Component {...pageProps} />
              <Footer />
            </div>
          </ThemeProvider>
        </SessionProvider>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
