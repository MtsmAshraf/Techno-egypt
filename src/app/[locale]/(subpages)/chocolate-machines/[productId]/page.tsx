import PageHeader from '@/components/PageHeader/PageHeader'
import products, { Product } from '@/components/Products/ProductsGrid/allProducts'
import { notFound } from 'next/navigation'
import React from 'react'

const ProductId = async ({
    params
}: {
    params: Promise<{productId: string}>
}) => {
    const {productId} = await params
    const product = products.find((ele: Product) => ele.id === productId)
    if(!product){
        return notFound()
    }
  return (
    <section>
        <PageHeader>
            {product.name}
        </PageHeader>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
        <h1>ProductId: {productId} | {product.name}</h1>
    </section>
  )
}

export default ProductId