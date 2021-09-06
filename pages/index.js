import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
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
    <div className={styles.container}>
      <h1>Boilerplate</h1>
    </div>
  );
}
