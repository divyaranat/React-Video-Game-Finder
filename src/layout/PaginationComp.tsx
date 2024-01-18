import {type FC} from 'react';
import {Pagination, Container} from 'react-bootstrap';

interface PaginationCompProps {
    itemCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const PaginationComp: FC<PaginationCompProps> = (props: PaginationCompProps) => {
    const {itemCount, pageSize, currentPage, onPageChange} = props;

    const pagesCount = Math.ceil(itemCount / pageSize);
    const pagesToShow = 5;
    const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
    const endPage = Math.min(startPage + pagesToShow -1, pagesCount);

    const pages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);

    const handleClick = (page: number) => {
        onPageChange(page);
    };

    return (
        <>
        <Container className='fixed'>
            <Pagination>
                <Pagination.First
                    disabled={currentPage === 1}  
                    onClick={() => handleClick(1)}
                />
                <Pagination.Prev 
                    disabled={currentPage === 1}
                    onClick={() => handleClick(currentPage - 1)}
                />
            {pages.map((page) => (
                <Pagination.Item
                    key={page}
                    active={currentPage === page}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
                <Pagination.Next
                    disabled={currentPage === pagesCount}
                    onClick={() => handleClick(currentPage + 1)}
                />
                <Pagination.Last 
                    disabled={currentPage === pagesCount}
                    onClick={() => handleClick(pagesCount)}
                />
            </Pagination>
        </Container>
        </>
    )
}