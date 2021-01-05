import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { useIntl } from "react-intl";

const loadData = async (locale) => {
  const response = await fetch("/api/hello", {
    headers: { "Accept-Language": locale },
  });
  const data = await response.json();
  return data;
};

export default function About() {
  const { locale, locales } = useRouter();
  const { data } = useSWR([locale, "hello"], loadData);
  const { formatMessage: f } = useIntl();

  return (
    <div>
      <nav>
        <ul>
          {locales.map((loc) => (
            <li key={loc}>
              <Link href="/" locale={loc}>
                <a>{loc}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>{f({ id: "name" })}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
