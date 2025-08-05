import { Link } from '@/i18n/routing'
import React from 'react'

const ProductCard = ({
  children
} : {
  children: React.ReactNode
}) => {
  return(
    <Link href={"/chocolate-machines"}>
      {children}
    </Link>
  )
}

export default ProductCard