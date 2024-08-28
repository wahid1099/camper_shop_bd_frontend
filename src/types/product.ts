export type TProduct = {
  _id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  rating: number;
  image?: string;
  delay: number;
};

export type CategoryType = {
  id: string;
  category: string;
  images: string;
};

export type ProductListProps = {
  product: TProduct[];
};
