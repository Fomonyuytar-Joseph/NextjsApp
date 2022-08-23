import Link from "next/link";
import styles from '../styles/Home.module.css'
import Head from "next/head";


export default function Home() {
  return (
   <>
   <Head>
    <title>Customer List | Home</title>
    <meta name="keywords" content="customers"/>
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Customer Listing</a>
      </Link>
    </div></>
  );
}
