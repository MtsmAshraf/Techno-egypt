import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";
import { Link } from "@/i18n/routing";
import { GiChocolateBar } from "react-icons/gi";
import Image from "next/image";
import fullLogo from "../../../public/imgs/logo-1.webp"
import { FaLightbulb } from "react-icons/fa";

// export default async function Home({
//   params
// }: {
//   params: Promise<{locale: string}>

// }) {
  export default async function Home() {
  
  // const { locale } = await params;
  
  return (
    <div className={styles.home}>
      <Loader></Loader>
      <div className={styles.logo}>
        <Image src={fullLogo} alt='Techno Egypt Logo'></Image>
      </div>
      <div className={styles.parts}>
        <Link href="/chocolate-machines" className={styles.part}>
          <GiChocolateBar />
          <span>
            Chocolate Machinces
          </span>
        </Link>
        <Link href="/industrial-solutions" className={styles.part}>
        <FaLightbulb />
          <span>
            Industrial Solutions
          </span>
        </Link>
      </div>
    </div>
  );
}
