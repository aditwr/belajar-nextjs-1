import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
      </div>
    </>
  );
}
