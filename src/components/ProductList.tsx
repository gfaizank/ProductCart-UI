import React from 'react';

type ProductProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  colors: string[];
  sizes: string[];
};

const products: ProductProps[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  title: `Nike Airmax v${i + 1}`,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  tags: ["#Sneakers", "#Nike", "#Airmax"],
  colors: ["bg-red-400", "bg-purple-400", "bg-orange-400"],
  sizes: ["8 UK", "9 UK", "10 UK"],
}));

export function ProductList(): JSX.Element {
  return (
    <div className="mx-auto my-4 bg-white grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="rounded-md border">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
            <p className="mt-3 text-sm text-gray-600">
              {product.description}
            </p>
            <div className="mt-4">
              {product.tags.map((tag, index) => (
                <span key={index} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Colors : </span>
              {product.colors.map((color, index) => (
                <span key={index} className={`block h-4 w-4 rounded-full border-2 border-gray-300 ${color}`}></span>
              ))}
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              {product.sizes.map((size, index) => (
                <span key={index} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  {size}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
