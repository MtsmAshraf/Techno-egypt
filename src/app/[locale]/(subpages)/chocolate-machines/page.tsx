import React from 'react'
import styles from "./machines.module.css"
import ChocolateMachines from '@/components/ChocolateMachines/ChocolateMachines';
import PageHeader from '@/components/PageHeader/PageHeader';

const ChocolateMachinesPage = async ({
  // children,
  params
  }
  : 
  Readonly<{
    // children: React.ReactNode;
    params: Promise<{locale: string}>
  }>) => {
  const { locale } = await params;
  return (
    <section className={styles.machines}>
      <PageHeader />
      <div className={styles.pageContent}>
        <ChocolateMachines lo={locale}/>
      </div>
    </section>
  )
}

export default ChocolateMachinesPage