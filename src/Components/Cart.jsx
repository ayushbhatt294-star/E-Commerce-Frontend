import { useContext } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import CartContext from '../Context/CartContext'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
     const navigate = useNavigate()
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext)

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Your Cart
        </h2>
        <button
        onClick={()=>{
            navigate('/')

        }}
  className="mb-4 flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-black"
>
  ← Continue Shopping
</button>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <p className="text-lg text-slate-500">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

            {/* Cart Products */}

            <div className="space-y-4">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
                >

                  {/* Image */}

                  <div className="h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Details */}

                  <div className="flex flex-1 flex-col justify-between">

                    <div className="flex justify-between gap-4">

                      <div>
                        <p className="text-sm text-slate-400">
                          {product.category}
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          {product.name}
                        </h3>

                        <p className="mt-1 font-semibold text-slate-700">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="h-fit rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                    {/* Quantity */}

                    <div className="flex items-center gap-4">

                      <div className="flex items-center rounded-lg border border-slate-200">

                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="flex h-9 w-9 items-center justify-center hover:bg-slate-100"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-10 text-center font-semibold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() => addToCart(product)}
                          className="flex h-9 w-9 items-center justify-center hover:bg-slate-100"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                      <p className="font-bold text-slate-900">
                        ₹{(product.price * product.quantity).toLocaleString('en-IN')}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Summary */}

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h3 className="text-xl font-bold text-slate-900">
                Order Summary
              </h3>

              <div className="mt-6 flex justify-between text-slate-600">
                <span>Subtotal</span>

                <span className="font-semibold text-slate-900">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="my-5 border-t border-slate-200" />

              <div className="flex justify-between">
                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-xl font-bold">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-slate-800">
                Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default Cart