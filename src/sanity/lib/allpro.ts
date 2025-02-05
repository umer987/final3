
import { client } from '../../../sanity-migration/sanityClient';






interface uProduct {
    _name: string | null;
    category: {
      _ref: string;
      _type: 'reference';
    };
    createdAt: string | null;
    price: number;
    imageUrls: string;
  }
  
  export default uProduct;
  
  
  export const AllProducts = async () => {
    try {
      const queryAllProducts = `*[_type == 'product'] 
      
      {
        _name,
        category,
        createdAt,
        price,
        "imageUrls": image.asset->url
      }`;
  
      console.log('Query being sent to Sanity:', queryAllProducts);
  
      const products2 = await client.fetch(queryAllProducts);
  
  
      return products2;
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; // Return an empty array if there's an error
    }
  };
  
