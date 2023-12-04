export interface IProduct {
  id: number;
  name: string;
  price: number;
  sale_price: number;
  average_rating: number;
  productMedia: [
    {
      url: string;
    }
  ];
  brand: {
    brand_name: string;
  };
}
export interface IProductSale {
  id: number;
  nmae: string;
  price: number;
  sale_price: number;
  average_rating: number;
}
