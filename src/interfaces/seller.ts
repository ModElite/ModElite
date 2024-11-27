export interface ISeller {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  location: string;
  ownerId: string;
  isVerify: boolean;
  updateAt: Date;
  createdAt: Date;
}

export interface ISellerOrder {
  address: string;
  createdAt: string;
  discount: number;
  expressProvider: string;
  expressTrackingNumber: string;
  firstName: string;
  id: string;
  lastName: string;
  orderProduct: OrderProduct[];
  orderProductData: OrderProductDaum[];
  productPrice: number;
  sellerPaymentProductAmount: number;
  sellerPaymentShippingAmount: number;
  sellerPaymentStatus: boolean;
  shippingPrice: number;
  status: 'PENDING' | 'PAYMENT_SUCCESS' | 'DELIVERY_ON_THE_WAY' | 'REFUND' | 'END' | 'CANCEL';
  totalPrice: number;
  updatedAt: string;
  user: User;
  userId: string;
  voucherCode: string;
}

export interface OrderProduct {
  createdAt: string;
  id: string;
  orderId: string;
  price: number;
  productSizeId: string;
  quantity: number;
  sellerId: string;
  updatedAt: string;
}

export interface OrderProductDaum {
  createdAt: string;
  id: string;
  orderId: string;
  price: number;
  productDescription: string;
  productImageUrl: string;
  productName: string;
  productOptionImageUrl: string;
  productOptionLabel: string;
  productPrice: number;
  productSize: string;
  productSizeId: string;
  quantity: number;
  sellerId: string;
  sellerLogoUrl: string;
  sellerName: string;
  updatedAt: string;
}

export interface User {
  createdAt: string;
  email: string;
  firstName: string;
  google_id: string;
  id: string;
  lastName: string;
  phone: string;
  profileUrl: string;
  role: string;
  updateAt: string;
}
export interface NewUser {
  bankAccountName: string;
  bankAccountNumber: string;
  bankAccountProvider: string;
  description: string;
  location: string;
  logoUrl: string;
  name: string;
}
