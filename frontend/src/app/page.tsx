import Image from "next/image";

export default function Home() {
  const products = [
    { title: "Leopard Print Scarf", price: 80, id: 1, image: "/product-image-1.png" },
    { title: "Blue Silk Scarf", price: 80, id: 2, image: "/product-image-2.png" },
    { title: "Pink Scarf", price: 80, id: 3, image: "/product-image-3.png" },
    { title: "Vintage Scarf", price: 80, id: 4, image: "/product-image-4.png" },
  ];

  return (
    <div className="pt-0 pb-[36px] max-w-[1920px] mx-auto">
      {/* Hero Section */}
      <section className="mb-24 px-4 md:px-12 lg:px-[160px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-[552fr_515fr_533fr] w-full aspect-auto md:aspect-[1600/640] overflow-hidden">
             <div className="relative w-full h-full">
               <Image 
                 src="/hero-image-1.png" 
                 alt="Hero Image 1" 
                 fill 
                 className="object-cover"
                 priority
               />
             </div>
             <div className="relative w-full h-full">
               <Image 
                 src="/hero-image-2.png" 
                 alt="Hero Image 2" 
                 fill 
                 className="object-cover"
                 priority
               />
             </div>
             <div className="relative w-full h-full">
               <Image 
                 src="/hero-image-3.png" 
                 alt="Hero Image 3" 
                 fill 
                 className="object-cover"
                 priority
               />
             </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="w-full px-4 md:px-12 lg:px-[160px]">
        <div className="text-center mb-[48px] flex justify-center">
          <h2 
            className="text-[40px] font-extralight text-black"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', lineHeight: '1.2' }}
          >
            Recommended products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              {/* Image Container - Taller Aspect Ratio to match Figma */}
              <div className="relative aspect-[3/4] mb-4 bg-gray-100 overflow-hidden w-full">
                <Image 
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col space-y-1.5 px-1">
                <h3 className="text-[13px] font-semibold text-gray-900 tracking-wide">
                  {product.title}
                </h3>
                <p className="text-[13px] text-gray-500 font-light">
                  $ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
