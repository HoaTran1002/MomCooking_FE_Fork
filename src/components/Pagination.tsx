import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

interface IPropsPaginnation {
  items?: any[];
  numberToShows?: number | undefined;
}

const Pagination: React.FC<IPropsPaginnation> = ({ items, numberToShows }: IPropsPaginnation): JSX.Element => {
  const [active, setActive] = React.useState<number>(1);
  const params = useParams<{ page: string }>();
  const totalPages = items ? Math.ceil(items.length / (numberToShows || 1)) : 0;
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    const parsedPage = Number(params.page); 
    if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= totalPages) {
      setActive(parsedPage);
    }
  }, [params.page, totalPages]);

  return (
    <div className='flex items-center justify-center'>
      <ul className='flex gap-3 items-center text-2xl'>
        <li>
          <Link to={`?page=${1}`} className='w-full h-full flex items-center justify-center ' onClick={() => setActive(1)}>
            <i className='ri-arrow-left-double-line'></i>
          </Link>
        </li>
        <li>
          <Link
            to={`?page=${Math.max(1, active - 1)}`}
            className=' w-full h-full flex items-center justify-center '
            onClick={() => setActive(Math.max(1, active - 1))}
          >
            <i className='ri-arrow-left-s-line'></i>
          </Link>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`w-8 transition-all h-8 border border-solid border-black text-base cursor-pointer ${pageNumber === active ? ' bg-black text-white' : ''}`}>
            <Link
              to={`?page=${pageNumber}`}
              className=' w-full h-full flex items-center justify-center '
              onClick={() => setActive(pageNumber)}
            >
              {pageNumber}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={`?page=${Math.min(totalPages, active + 1)}`}
            className=' w-full h-full flex items-center justify-center '
            onClick={() => setActive(Math.min(totalPages, active + 1))}
          >
            <i className='ri-arrow-right-s-line'></i>
          </Link>
        </li>
        <li>
          <Link to={`?page=${totalPages}`} className=' w-full h-full flex items-center justify-center ' onClick={() => setActive(totalPages)}>
            <i className='ri-arrow-right-double-line'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
