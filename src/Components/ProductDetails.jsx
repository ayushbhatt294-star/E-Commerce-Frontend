import { useContext, useState } from 'react'
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Truck,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import products from '../Data/Product'
import CartContext from '../Context/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Product doesn't exist
  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-zinc-50 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            Product not found
          </h2>

          <p className="mt-2 text-zinc-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft size={18} />
            Back to Shopping
          </Link>
        </div>
      </section>
    )
  }

  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((previousQuantity) =>
      previousQuantity > 1 ? previousQuantity - 1 : 1
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  return (
    <section className="bg-zinc-50 px-4 py-10 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Back */}

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-black"
        >
          <ArrowLeft size={17} />
          Back to products
        </Link>


        {/* Product Main Section */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT — IMAGES */}

          <div className="flex gap-4">

            {/* Thumbnails */}

            <div className="flex w-20 flex-col gap-3">

              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white transition ${
                    selectedImage === index
                      ? 'border-black'
                      : 'border-transparent hover:border-zinc-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain p-2"
                  />
                </button>
              ))}

            </div>


            {/* Main Image */}

            <div className="relative flex min-h-[500px] flex-1 items-center justify-center overflow-hidden rounded-3xl bg-white">

              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full max-h-[560px] w-full object-contain p-10 transition duration-300"
              />

              {/* Wishlist */}

              <button
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-black hover:text-white"
              >
                <Heart size={19} />
              </button>

            </div>

          </div>


          {/* RIGHT — PRODUCT INFORMATION */}

          <div className="flex flex-col justify-center">

            {/* Category */}

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              {product.category}
            </p>


            {/* Name */}

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {product.name}
            </h1>


            {/* Rating */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex items-center gap-1 rounded-lg bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white">
                <span>{product.rating}</span>
                <Star
                  size={14}
                  className="fill-white"
                />
              </div>

              <span className="text-sm text-zinc-400">
                120 Reviews
              </span>

            </div>


            {/* Price */}

            <div className="mt-6">

              <span className="text-3xl font-bold text-zinc-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>

              <span className="ml-3 text-sm text-green-600">
                Inclusive of all taxes
              </span>

            </div>


            {/* Divider */}

            <div className="my-7 border-t border-zinc-200" />


            {/* Description */}

            <div>

              <h2 className="text-lg font-bold text-zinc-900">
                About this product
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                {product.description}
              </p>

            </div>


            {/* Highlights */}

            <div className="mt-7">

              <h2 className="text-lg font-bold text-zinc-900">
                Highlights
              </h2>

              <ul className="mt-3 space-y-2">

                {product.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-zinc-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    {highlight}
                  </li>
                ))}

              </ul>

            </div>


            {/* Quantity + Add */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              {/* Quantity */}

              <div className="flex h-12 items-center rounded-xl border border-zinc-200 bg-white">

                <button
                  onClick={decreaseQuantity}
                  className="flex h-full w-12 items-center justify-center text-zinc-600 transition hover:bg-zinc-100"
                >
                  <Minus size={17} />
                </button>

                <span className="w-10 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="flex h-full w-12 items-center justify-center text-zinc-600 transition hover:bg-zinc-100"
                >
                  <Plus size={17} />
                </button>

              </div>


              {/* Add To Cart */}

              <button
                onClick={handleAddToCart}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-7 font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.98]"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

            </div>


            {/* Delivery */}

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white p-4">

              <Truck
                size={20}
                className="text-zinc-700"
              />

              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  Free delivery
                </p>

                <p className="text-xs text-zinc-500">
                  Available on this product
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails