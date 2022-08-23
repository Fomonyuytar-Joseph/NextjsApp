import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1> Home Page </h1>
      <p>
       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ex
        eu lorem malesuada auctor in fring
      </p>
      <p>
       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ex
        eu lorem malesuada auctor in fring
      </p>
      <Link href="/customers">
      <a>See customers Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
