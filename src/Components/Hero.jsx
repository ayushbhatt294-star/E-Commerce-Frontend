import React from 'react'

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800',
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10  sm:mt-8">
      
      <div
  className="
    max-w-7xl mx-auto
    mt-28 sm:mt-32 lg:mt-36
    grid grid-cols-2 lg:grid-cols-4
    gap-3 sm:gap-4
    h-[350px] sm:h-[420px] lg:h-[480px]
  "
>

        {/* Main image */}
        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
          <img
            src={images[0]}
            alt="Featured product"
            className="
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform duration-500
            "
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={images[1]}
            alt="Product"
            className="
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform duration-500
            "
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={images[2]}
            alt="Product"
            className="
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform duration-500
            "
          />
        </div>

        {/* Image 4 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={images[3]}
            alt="Product"
            className="
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform duration-500
            "
          />
        </div>

        {/* Image 5 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={images[4]}
            alt="Product"
            className="
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform duration-500
            "
          />
        </div>

      </div>
    </section>
  )
}

export default Hero