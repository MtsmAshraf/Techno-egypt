import PageHeader from '@/components/PageHeader/PageHeader'
import ServicesCards from '@/components/servicesCards/ServicesCards'
import React from 'react'

const IndustrialSolutions = async ({
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
        Industrial Solutions
      </PageHeader>
      <ServicesCards lo={locale} />
    </div>
  )
}

export default IndustrialSolutions