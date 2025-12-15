import { useEffect } from "react";
import Head from "next/head";
import data from "@/config/data.json";

export default function ResumePage() {
  useEffect(() => {
    window.location.href = `/assets/profile/${data.profile.resume}`;
  }, []);

  return (
    <Head>
      <title>Resume - {data.profile.name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
