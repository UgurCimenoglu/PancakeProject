export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  sales?: number;
}

export interface Product {
  products: ProductDetail[];
  total: number;
  skip: number;
  limit: number;
}
