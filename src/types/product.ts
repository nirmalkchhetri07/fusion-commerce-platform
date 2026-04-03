export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  image: string;
  category: string;
  tags: string[];
  brand: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  status: "draft" | "active" | "archived";
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
}
