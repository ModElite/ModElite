'use client';
import FilterSidebar from '@/components/FilterSidebar';
import { Filters, IProduct, ISort, Paging } from '@/interfaces/product';
import { getProduct } from '@/routes/product';
import { Button, Pagination, Select, Spin } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { BsSliders2 } from 'react-icons/bs';
import FilterPill from './FilterPill';
import { ProductCard } from './ProductCard';

type Props = {
  initProductValue: IProduct[];
  initFilter: Filters;
  initSort: ISort;
  initPage: Paging;
};
const AllProduct: FC<Props> = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const defaultPage = { page: 1, perPage: 10 };
  const defaultSort = { sortBy: 'name', order: 'asc' };
  const [productValue, setProductValue] = useState<IProduct[]>(props.initProductValue);
  const [filter, setFilter] = useState<Filters>(props.initFilter);
  const [sort, setSort] = useState<ISort>(props.initSort);
  const [page, setPage] = useState<Paging>(props.initPage);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const getProductFn = async () => {
    setLoading(true);
    const productList = await getProduct(filter, page, sort);
    if (productList === null) {
      setLoading(false);
      console.log('Error');
      return;
    }

    setLoading(false);
    setProductValue(productList);
  };
  useEffect(() => {
    const setQueryParams = () => {
      const queryParams = new URLSearchParams();
      if (sort.sortBy !== defaultSort.sortBy || sort.order !== defaultSort.order) {
        queryParams.set('sort', `${sort.sortBy}:${sort.order}`);
      }
      if (page.page !== defaultPage.page) {
        queryParams.set('page', `${page.page}`);
      }

      if (page.perPage !== defaultPage.perPage) {
        queryParams.set('perPage', `${page.perPage}`);
      }

      Object.keys(filter).forEach((key) => {
        filter[key].value.forEach((value) => {
          if (value.checked) {
            queryParams.append(key, value.label);
          }
        });
      });
      router.push(`${pathname}?${queryParams.toString()}`);
    };

    getProductFn();
    setQueryParams();
  }, [filter, sort, page]);

  return (
    <div className={`flex`}>
      <div className={`absolute ${showFilter ? 'block' : 'hidden'} w-full min-w-40 lg:relative lg:block lg:w-1/5`}>
        <FilterSidebar filterList={filter} setFilterList={setFilter} setOpenFilter={setShowFilter} />
      </div>
      <div className={`w-full lg:w-4/5 ${showFilter ? 'hidden' : 'block'}`}>
        <div className='flex h-16 w-full bg-white p-4'>
          <div className='hidden w-full items-center gap-1 overflow-x-auto px-3 py-2 lg:flex'>
            {Object.keys(filter).some((key) => filter[key].value.some((value) => value.checked)) && (
              <div
                className='flex h-8 cursor-pointer gap-x-2 rounded-full border bg-purple3 px-3 py-1'
                onClick={() => {
                  setFilter((prev) => {
                    return Object.keys(prev).reduce((acc, key) => {
                      acc[key] = { ...prev[key], value: prev[key].value.map((val) => ({ ...val, checked: false })) };
                      return acc;
                    }, {} as Filters);
                  });
                }}
              >
                <span className='text-nowrap'>Delete All</span>
              </div>
            )}
            {Object.keys(filter).map((key) => {
              return filter[key].value
                .filter((value) => value.checked)
                .map((value) => {
                  return <FilterPill key={value.label} filterKey={key} value={value} setFilter={setFilter} />;
                });
            })}
          </div>
          <div className='flex w-full items-center lg:hidden'>
            <Button
              size='large'
              style={{
                backgroundColor: '#CFCBF6',
                color: 'white',
                border: 'none',
              }}
              variant='solid'
              onClick={() => setShowFilter(!showFilter)}
            >
              <BsSliders2 />
              {/* Show filter amount with circle and number*/}
              <span className={`aspect-square size-5 rounded-full bg-purple1 text-center text-sm text-white`}>
                {Object.keys(filter).reduce((acc, key) => {
                  return acc + filter[key].value.filter((value) => value.checked).length;
                }, 0)}
              </span>
            </Button>
          </div>

          <div className='flex h-full items-center gap-x-4 px-3 py-2'>
            <Select
              defaultValue={sort.sortBy + ':' + sort.order}
              onChange={(value) => {
                const [sortBy, order] = value.split(':') as [string, 'asc' | 'desc'];
                setSort({ sortBy, order });
              }}
            >
              {[
                { label: 'Name: Ascending', value: 'name:asc' },
                { label: 'Name: Descending', value: 'name:desc' },
                { label: 'Price: Ascending', value: 'price:asc' },
                { label: 'Price: Descending', value: 'price:desc' },
              ].map((item) => (
                <Select.Option key={item.value} value={item.value}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
            <span className='hidden text-nowrap lg:block'>Showing 8 result</span>
          </div>
        </div>

        {loading && (
          <div className='flex h-64 items-center justify-center'>
            <Spin spinning={loading} />
          </div>
        )}
        {!loading && (
          <div className='grid grid-cols-2 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-4'>
            {productValue.map((product) => (
              <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.imageUrl} />
            ))}
          </div>
        )}
        <Pagination
          align='center'
          defaultCurrent={page.page}
          pageSize={page.perPage}
          onShowSizeChange={(current, size) => {
            setPage((prev) => {
              return { ...prev, page: current, perPage: size };
            });
          }}
          responsive
          showSizeChanger={true}
          total={80}
          onChange={(e) => {
            setPage((prev) => {
              return { ...prev, page: e };
            });
          }}
        />
      </div>
    </div>
  );
};

export default AllProduct;
