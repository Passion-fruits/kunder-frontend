import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/layout";
import { ContextProvider } from "../lib/context";
import LoadingBar from "react-top-loading-bar";
import { ColorMap } from "../styles/color";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const loadingBarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  useEffect(() => {
    if (pageLoading) {
      loadingBarRef.current.staticStart();
    } else {
      loadingBarRef.current.complete();
    }
  }, [pageLoading]);

  return (
    <ContextProvider>
      <LoadingBar
        color={ColorMap.mainColor}
        ref={loadingBarRef}
        waitingTime={300}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
export default MyApp;
