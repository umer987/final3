import Image from "next/image";
 import {AllProducts} from "@/sanity/lib/allpro";
 import uProduct from "@/sanity/lib/allpro";
 export default async function Productcard1() {
           const products:uProduct[] = await AllProducts();
         
         return (
           <main className="container mx-auto p-4">
        
         <h1 className="text-3xl drop-shadow-xl font-bold text-center">ALL PRODUCTS ARE HERE</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
           {products.map((product2, index) => (
             <div key={index} className="border p-4 rounded-md shadow-md">
               <img src={product2.imageUrls} alt={product2._name || 'Product'} className="w-full h-40 object-cover rounded-md" />
               <h2 className="text-lg font-semibold mt-2">{product2._name || 'Unnamed Product'}</h2>
               <p className="text-gray-600">Price: ${product2.price} </p>
               
             </div>
             
           ))}
           
         </div>
        
         </main>
         )
  }
 

  





