import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";

const messages = {
  en: { name: "Name" },
  fr: { name: "Nom" },
  es: { name: "Nombre" },
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
