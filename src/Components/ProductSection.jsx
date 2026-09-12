import React, { useState } from 'react'
import products from '../Data/Product'
import ProductCard from './ProductCard'

const ProductSection = ({ search }) => {

  // Stores which category the user selected
  const [category, setCategory] = useState('All')


  // Filter products according to selected category
 const filteredProducts = products.filter((product) => {

  const matchesCategory =
    category === 'All' ||
    product.category === category

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())

  return matchesCategory && matchesSearch
})


  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 mt-16">

      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-8">

          <p className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-zinc-400
            font-semibold
          ">
            Our Collection
          </p>

          <h2 className="
            mt-2
            text-3xl sm:text-4xl
            font-black
            tracking-tight
          ">
            Latest Products
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Discover products picked just for you.
          </p>

        </div>


        {/* Category buttons */}
        <div className="flex gap-2 overflow-x-auto pb-6">

          {['All', 'Shoes', 'Clothing', 'Watches', 'Beauty'].map(
            (item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  shrink-0
                  px-5 py-2.5
                  rounded-full
                  text-sm font-medium
                  transition-all duration-300

                  ${
                    category === item
                      ? 'bg-black text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }
                `}
              >
                {item}
              </button>

            )
          )}

        </div>


        {/* Product grid */}
        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          sm:gap-5
          lg:gap-6
        ">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>


        {/* No products */}
        {filteredProducts.length === 0 && (
          <div className="
            py-16
            text-center
            text-zinc-500
          ">
            No products found.
          </div>
        )}

      </div>

    </section>
  )
}

export default ProductSection