
import { client } from '../../../sanity-migration/sanityClient';






interface iProduct {
    _name: string | null;
    category: {
      _ref: string;
      _type: 'reference';
    };
    createdAt: string | null;
    price: number;
    imageUrls: string;
  }
  
  export default iProduct;
  
  
  export const getAllProducts = async () => {
    try {
      const queryAllProducts = `*[_type == 'product'] | order(createdAt desc)  [0..5]
      
      {
        _name,
        category,
        createdAt,
        price,
        "imageUrls": image.asset->url
      }`;
  
      console.log('Query being sent to Sanity:', queryAllProducts);
  
      const products = await client.fetch(queryAllProducts);
  
  
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; // Return an empty array if there's an error
    }
  };
  
