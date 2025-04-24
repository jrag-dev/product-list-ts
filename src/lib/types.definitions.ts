export interface IDessert {
  image: Image;
  name: string;
  category: string;
  price: number;
}

export interface Image {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export interface ICart {
  product: IDessert;
  subTotal: number;
  quantity: number;
}

export interface ICartState {
  cart: ICart[];
  total: number;
}