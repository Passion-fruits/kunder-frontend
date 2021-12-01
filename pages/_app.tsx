import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/layout";
import { ContextProvider } from "../lib/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
export default MyApp;
