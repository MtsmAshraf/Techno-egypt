import PageHeader from '@/components/PageHeader/PageHeader';
import Products from '@/components/Products/Products'
import React from 'react'

const ChocolateMachines = async ({
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
    <div>
      <PageHeader>
        Chocolate Machines
      </PageHeader>
      <Products lo={locale} />
    </div>
  )
}

export default ChocolateMachines