import { Link } from '@/i18n/routing'
import React from 'react'

const ProductCard = ({
  children,
  productId
} : {
  children: React.ReactNode,
  productId: string
}) => {
  return(
    <Link href={`/chocolate-machines/${productId}`}>
      {children}
    </Link>
  )
}

export default ProductCard