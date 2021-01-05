import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
