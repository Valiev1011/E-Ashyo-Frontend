export interface IProduct {
  name: string;
  price: number;
  sale_price: number;
  average_rating: number;
  productMedia: {
    url: string;
  };
}
export interface IProductSale {
  nmae: string;
  price: number;
  sale_price: number;
  average_rating: number;
}
