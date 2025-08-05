import PageHeader from '@/components/PageHeader/PageHeader';
import Products from '@/components/Products/Products'
import React from 'react'

const CocolateMachines = async ({
  children,
  params
  }
  : 
  Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>
  }>) => {
  const { locale } = await params;
  return (
    <div>
      <PageHeader />
      <Products lo={locale} />
    </div>
  )
}

export default CocolateMachines