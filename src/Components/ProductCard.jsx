import React, { useContext } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border border-zinc-200
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
      "
    >

      {/* Product Details → Click to open product page */}
      <Link to={`/product/${product.id}`}>

        {/* Product Image */}
        <div
          className="
            relative
            h-64 sm:h-72
            overflow-hidden
            bg-zinc-100
          "
        >

          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-full
              object-contain
              p-6
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          {/* New Badge */}
          <div
            className="
              absolute top-4 left-4
              px-3 py-1.5
              rounded-full
              bg-black
              text-white
              text-xs font-semibold
            "
          >
            NEW
          </div>

        </div>


        {/* Product Information */}
        <div className="p-5">

          {/* Category */}
          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-zinc-400
              font-medium
            "
          >
            {product.category}
          </p>

          {/* Name */}
          <h3
            className="
              mt-2
              text-base sm:text-lg
              font-semibold
              text-zinc-900
              truncate
            "
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">

            <div className="flex items-center gap-1">

              <Star
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-sm font-medium">
                {product.rating}
              </span>

            </div>

            <span className="text-zinc-300">•</span>

            <span className="text-xs text-zinc-400">
              120 reviews
            </span>

          </div>


          {/* Price */}
          <div className="flex items-center justify-between mt-4">

            <span className="text-xl font-bold">
              ₹{product.price.toLocaleString('en-IN')}
            </span>

          </div>

        </div>

      </Link>


      {/* Quick Add */}
      <button
        onClick={() => addToCart(product)}
        className="
          absolute
          bottom-[92px] left-4 right-4
          flex items-center justify-center gap-2
          py-3
          rounded-xl
          bg-black
          text-white
          text-sm font-semibold
          opacity-0
          translate-y-3
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all duration-300
        "
      >
        <ShoppingBag size={17} />
        Add to Cart
      </button>


      {/* Wishlist */}
      <button
        className="
          absolute top-4 right-4
          w-10 h-10
          flex items-center justify-center
          rounded-full
          bg-white/90
          backdrop-blur-sm
          shadow-sm
          hover:bg-black
          hover:text-white
          transition
        "
      >
        <Heart size={18} />
      </button>


      {/* Small Add To Cart */}
      <button
        onClick={() => addToCart(product)}
        className="
          absolute
          bottom-5 right-5
          w-10 h-10
          rounded-full
          bg-zinc-100
          flex items-center justify-center
          hover:bg-black
          hover:text-white
          transition
        "
      >
        <ShoppingBag size={18} />
      </button>

    </div>
  )
}

export default ProductCard