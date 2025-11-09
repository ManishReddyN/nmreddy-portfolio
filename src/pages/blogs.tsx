import Base from "@/components/base";
import Archive from "@/components/archive/archive";
import Head from "next/head";
import data from "@/config/data.json";

export default function ArchivePage() {
  return (
    <>
      <Head>
        <title>Blogs - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Archive />
      </Base>
    </>
  );
}
