import React from 'react'

const Categories = () => {
  const Content = [
    {
      id: 1,
      name: "Shoes",
      image: "https://m.media-amazon.com/images/I/71A-T7rYeGL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://m.media-amazon.com/images/I/617C-jFqhxL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      name: "Watches",
      image: "https://m.media-amazon.com/images/I/71egL1-6z6L._AC_SX416_CB1169409_QL70_.jpg"
    },
    {
      id: 4,
      name: "Beauty",
      image: "https://m.media-amazon.com/images/I/61isLNUmHZL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 5,
      name: "Gadgets",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/t/g/-original-imahft5gqkxzyeqa.jpeg?q=70"
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 mt-12">

      {/* Centered container */}
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-bold mb-5">
          Shop by Category
        </h2>

        {/* Categories */}
        <div
          className="
            grid grid-cols-2 gap-4

            lg:flex
            lg:gap-5
            lg:overflow-x-auto
            lg:pb-4
          "
        >

          {Content.map((e) => (
            <div
              key={e.id}
              className="
                group
                bg-white
                border border-zinc-200
                rounded-2xl
                overflow-hidden

                lg:shrink-0
                lg:w-64
              "
            >

              {/* Image */}
              <div className="
                h-44
                sm:h-52
                lg:h-60
                flex items-center justify-center
                bg-zinc-50
                overflow-hidden
              ">
                <img
                  src={e.image}
                  alt={e.name}
                  className="
                    w-full
                    h-full
                    object-contain
                    p-3
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Category name */}
              <div className="px-4 py-3">
                <h3 className="text-base sm:text-lg font-semibold">
                  {e.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories