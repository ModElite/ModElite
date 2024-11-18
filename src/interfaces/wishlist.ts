'use client';
export interface WishList {
  createdAt: 'string';
  product: {
    createdAt: 'string';
    deletedAt: 'string';
    description: 'string';
    id: 'string';
    imageUrl: 'string';
    name: 'string';
    price: 0;
    productOption: [
      {
        createdAt: 'string';
        deletedAt: 'string';
        id: 'string';
        imageUrl: 'string';
        label: 'string';
        productSize: [
          {
            createdAt: 'string';
            deletedAt: 'string';
            id: 'string';
            quantity: 0;
            size: {
              createdAt: 'string';
              id: 'string';
              size: 'string';
              updatedAt: 'string';
            };
            sizeId: 'string';
            updatedAt: 'string';
          },
        ];
        updatedAt: 'string';
      },
    ];
    sellerId: 'string';
    status: 'string';
    tags: [
      {
        id: 0;
        label: 'string';
        tagGroupId: 0;
      },
    ];
    updatedAt: 'string';
  };
  productId: 'string';
  updatedAt: 'string';
  user: {
    createdAt: 'string';
    email: 'string';
    firstName: 'string';
    google_id: 'string';
    id: 'string';
    lastName: 'string';
    phone: 'string';
    profileUrl: 'string';
    role: 'ADMIN';
    updateAt: 'string';
  };
  userId: 'string';
}
