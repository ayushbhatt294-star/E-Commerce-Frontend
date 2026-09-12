import React from 'react'
import { Search, ShoppingBag, User, ChevronDown } from 'lucide-react'
import logo from '../assets/attachment_127449509.webp'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ search, setSearch,name }) => {
  const { cart } = useContext(CartContext)

const cartCount = cart.reduce(
  (total, product) => total + product.quantity,
  0
)
 const navigate = useNavigate()
  return (
   <nav className=" w-full z-50 px-4 sm:px-6 lg:px-10 py-5">
      <div
        className="
          max-w-7xl mx-auto
          flex items-center gap-4
          bg-white
          border border-zinc-200
          rounded-2xl
          px-4 sm:px-6
          py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        "
      >

        {/* LOGO */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Store logo"
            className="w-14 h-14 sm:w-14 sm:h-14 object-contain"
          />
        </div>


        {/* SEARCH */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div
            className="
              flex items-center
              h-11 sm:h-12
              bg-zinc-100
              rounded-xl
              px-4
              gap-3
              transition-all
              focus-within:bg-white
              focus-within:ring-2
              focus-within:ring-black/10
            "
          >
            <Search
              size={19}
              className="text-zinc-500 shrink-0"
            />

            <input
             value={search}
  onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search your product..."
              className="
                w-full
                bg-transparent
                outline-none
                text-sm
                text-zinc-900
                placeholder:text-zinc-500
              "
            />
          </div>
        </div>


        {/* CATEGORIES */}
        <div className="hidden lg:block">
          <button
            className="
              flex items-center gap-2
              h-11
              px-4
              rounded-xl
              text-sm font-medium
              text-zinc-700
              hover:bg-zinc-100
              transition
            "
          >
            Categories
            <ChevronDown size={16} />
          </button>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* CART */}
         <button onClick={() => navigate('/cart')}>
  <ShoppingBag size={20} />
  
  {cartCount > 0 && (
    <span>{cartCount}</span>
  )}
</button>


          {/* PROFILE */}
          <button
            className="
  flex
  items-center gap-2
  pl-2
  pr-3
  h-11
  rounded-xl
  hover:bg-zinc-100
  transition
"
          >
            <div
              className="
                flex items-center justify-center
                w-8 h-8
                rounded-full
                bg-zinc-900
                text-white
              "
            >
              <User size={16} />
            </div>

            <div className="text-left">
              <p className="text-[10px] text-zinc-500 leading-none">
                Welcome
              </p>

              <p className="text-sm font-semibold leading-tight mt-1">
                {name}
              </p>
            </div>
          </button>

        </div>

      </div>
    </nav>
  )
}

export default NavBar