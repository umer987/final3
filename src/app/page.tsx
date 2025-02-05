 import Image from "next/image";
 import {getAllProducts} from "@/sanity/lib/data";
import iProduct from "@/sanity/lib/data";
import  Header_1  from '@/components/header';
import Footer from '@/components/footer';
import Hero from "@/components/Hero";
import Joinclub from "@/components/joinclub";
import Productcard1 from "@/components/productcard1";
 export default async function Home() {
           const products:iProduct[] = await getAllProducts();
         
         return (
           <main className="container mx-auto p-4">
        <Header_1/>
        <Hero/>
         <h1 className="text-2xl font-bold">Product List</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
           {products.map((product, index) => (
             <div key={index} className="border p-4 rounded-md shadow-md">
               <img src={product.imageUrls} alt={product._name || 'Product'} className="w-full h-40 object-cover rounded-md" />
               <h2 className="text-lg font-semibold mt-2">{product._name || 'Unnamed Product'}</h2>
               <p className="text-gray-600">Price: ${product.price} </p>
             </div>
           ))}
         </div>
         <Joinclub/>
         <Footer/>
      
         </main>
         )
  }
 

  





