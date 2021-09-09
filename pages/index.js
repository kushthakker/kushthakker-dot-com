import Head from "next/head";
// import Image from "next/image";
// import useSWR from "swr";
// import fetch from "../libs/fetch";

export default function Home() {
  // use swr

  // const { data, error } = useSWR(url, fetch);

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex w-screen h-screen justify-center items-center text-red">
      <div>Boilerplate for Tailwind css</div>
    </div>
  );
}
