import Base from "@/components/base";
import Contact from "@/components/contact/contact";
import Head from "next/head";
import data from "@/config/data.json";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - {data.profile.name}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Base>
        <Contact />
      </Base>
    </>
  );
}
