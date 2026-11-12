export type Category =
  | 'smartphones'
  | 'laptops'
  | 'audio'
  | 'wearables'
  | 'cameras'
  | 'tablets'
  | 'gaming'
  | 'accessories';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
