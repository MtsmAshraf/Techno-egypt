import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";
import { Link } from "@/i18n/routing";
import { GiChocolateBar } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import Image from "next/image";
import fullLogo from "../../../public/imgs/logo-1.png"

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>

}) {
  
  const { locale } = await params;
  
  return (
    <div className={styles.home}>
      <Loader lo={locale}></Loader>
      <div className={styles.logo}>
        <Image src={fullLogo} alt='Techno Egypt Logo'></Image>
      </div>
      <div className={styles.parts}>
        <Link href="/chocolate-machines" className={styles.part}>
          <GiChocolateBar />
          <span>
            Cocolate Machinces
          </span>
        </Link>
        <Link href="/engineering-solutions" className={styles.part}>
        <FcIdea />
          <span>
            Engineering Solutions
          </span>
        </Link>
      </div>
    </div>
  );
}
