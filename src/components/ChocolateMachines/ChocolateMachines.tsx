import React from 'react'
import Products from '../Products/Products'

const ChocolateMachines = ({
    lo
} : {
    lo: string
}) => {
  return (
    <div>
        <Products lo={lo} />
    </div>
  )
}

export default ChocolateMachines