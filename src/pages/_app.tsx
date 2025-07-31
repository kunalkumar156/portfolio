import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
