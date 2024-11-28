export interface IOrderProductData {
  id: string;
  orderId: string;
  productSizeId: string;
  status: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  productOptionLabel: string;
  productOptionImageUrl: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productSize: string;
  sellerName: string;
  sellerLogoUrl: string;
  sellerId: string;
}

export interface IOrderList {
  id: string;
  orderProductData: IOrderProductData[];
  userId: string;
  status: string;
  totalPrice: number;
  productPrice: number;
  shippingPrice: number;
  discount: number;
  voucherCode: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}
