'use server';

import AllProduct from '@/components/AllProduct';
import InternalError from '@/components/InternalError';
import { Filters, ISort, Paging } from '@/interfaces/product';
import { getProduct } from '@/routes/product';

export default async function AllProductPage({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const sort = (searchParams?.sort as string) ?? 'name:asc';
  const page: number = Number(searchParams?.page as string);
  const perPage: number = Number(searchParams?.perpage as string);

  // filter form url will be a query string
  const filters: Filters = {
    gender: {
      name: 'Gender',
      type: 'checkbox',
      value: [
        { label: 'Men', checked: false },
        { label: 'Women', checked: false },
        {
          label: 'Unisex',
          checked: false,
        },
      ],
    },
    category: {
      name: 'Category',
      type: 'checkbox',
      value: [
        { label: 'Clothing', checked: false },
        { label: 'Accessories', checked: false },
        {
          label: 'Footwear',
          checked: false,
        },
      ],
    },
    brand: {
      name: 'Brand',
      type: 'checkbox',
      value: [
        { label: 'Brand A', checked: false },
        { label: 'Brand B', checked: false },
        {
          label: 'Brand C',
          checked: false,
        },
      ],
    },
    price: {
      name: 'Price Range',
      type: 'checkbox',
      value: [
        { label: '$0 - $50', checked: false },
        { label: '$50 - $100', checked: false },
        {
          label: '$100 - $200',
          checked: false,
        },
      ],
    },
    size: {
      name: 'Size (US)',
      type: 'select',
      value: [
        { label: '5', checked: false },
        { label: '5.5', checked: false },
        {
          label: '6',
          checked: false,
        },
        { label: '6.5', checked: false },
      ],
    },
  };

  Object.keys(filters).forEach((key) => {
    const filter = filters[key];
    if (searchParams) {
      filter.value.forEach((value) => {
        if (searchParams[key] && searchParams[key]?.includes(value.label)) {
          value.checked = true;
        }
      });
    }
  });

  const Paging: Paging = {
    page: page || 1,
    perPage: perPage || 10,
  };
  const sortOptions: ISort = {
    sortBy: sort.split(':')[0],
    order: sort.split(':')[1] as 'asc' | 'desc',
  };
  const productList = await getProduct(filters, Paging, sortOptions);
  if (productList === null) return <InternalError />;
  return <AllProduct initProductValue={productList} initFilter={filters} initSort={sortOptions} initPage={Paging} />;
}
