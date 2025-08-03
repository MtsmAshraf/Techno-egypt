import Logo from "@/components/Logo/logo";
import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";

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
        <Logo lo={locale}></Logo>
      </div>
      <div className={styles.parts}>
        <a href="/" className={styles.part}>
          <span>
            Cocolate Machinces
          </span>
        </a>
        <a href="/" className={styles.part}>
          <span>
            Other Services
          </span>
        </a>
      </div>
    </div>
  );
}
