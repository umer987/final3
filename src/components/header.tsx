"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header_1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 100, image: "/product-a.jpg", quantity: 1 },
    { id: 2, name: "Product B", price: 200, image: "/product-b.jpg", quantity: 2 },
  ]);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <header className="text-gray-600 body-font relative">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center border rounded-md px-3 py-1">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none p-1"
          />
          <button type="submit">
            <CiSearch className="text-xl ml-2 cursor-pointer" />
          </button>
        </form>

        {/* Logo */}
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-80 text-xl">Avion</span>
        </a>

        {/* Navigation */}
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link className="text-xs mr-2" href={"/about"}>
            About
          </Link>
          <Link className="text-xs mr-2" href={"/allproducts"}>
            Products
          </Link>

          {/* Cart */}
          <div className="relative">
            <button onClick={() => setShowCart(!showCart)}>
              <CiShoppingCart className="text-2xl mx-10" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {showCart && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md p-4 z-50">
                <h2 className="text-lg font-semibold">Cart</h2>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b py-2">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md" />
                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">
                        Remove
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Cart is empty</p>
                )}
                <Link href="/cart" className="block text-center text-blue-600 mt-2">
                  View Cart
                </Link>
              </div>
            )}
          </div>

          <CgProfile />
        </div>
      </div>

      {/* Categories */}
      <div className="items-center text-xs font-small w-full mt-3">
        <nav className="ml-30 md:mr-auto flex flex-wrap text-xs items-center justify-center">
          <a className="mr-5 hover:text-gray-900" href="/allproducts">
            All Products
          </a>
          <a className="mr-5 hover:text-gray-900">Plant Pots</a>
          <a className="mr-5 hover:text-gray-900">Ceramics</a>
          <a className="mr-5 hover:text-gray-900">Tables</a>
          <a className="mr-5 hover:text-gray-900">Chairs</a>
          <a className="mr-5 hover:text-gray-900">Crockery</a>
          <a className="mr-5 hover:text-gray-900">Tableware</a>
          <a className="mr-5 hover:text-gray-900">Cutlery</a>
        </nav>
      </div>
    </header>
  );
};

export default Header_1;
