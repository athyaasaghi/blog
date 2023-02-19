import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react';
import Link from 'next/link';


function CardBlog(props){
    const{ data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <>
        <article>

            {currentItems.map(artikelisi => {
                return(
                    <div class="konten">
                        <div class="judul">
                            <a href="penyu.html">{artikelisi.title}</a>
                        </div>
                        <p>{artikelisi.body}</p>
                        <div className="link">
                        <Link href={`/blog/detail/${artikelisi.id}`}>Lihat detail
                        </Link>
                        </div>
                    </div>
                )
            })}

           </article>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousClassName='page-num'
            nextClassName='page-num'
            activeLinkClassName='active'
          />
        </>
      );

}
export default CardBlog;

