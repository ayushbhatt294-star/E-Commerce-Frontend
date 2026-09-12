import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import ProductSection from './Components/ProductSection'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import Auth from './Components/Auth'

const App = () => {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')

  // Show login page first
  if (!name) {
    return <Auth setName={setName} />
  }

  return (
    <>
      <NavBar
        name={name}
        search={search}
        setSearch={setSearch}
      />

      <main className="pt-28 sm:pt-7 lg:pt-7">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <ProductSection search={search} />
              </>
            }
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

        </Routes>
      </main>
    </>
  )
}

export default App