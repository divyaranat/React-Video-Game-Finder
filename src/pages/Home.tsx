import {type FC, useState, useEffect, useContext} from 'react';
import {AllVideoGameContext} from '../App';
import {Container, Row, Col, Pagination} from 'react-bootstrap'
import { VideoGameCard } from '../layout/VideoGameCard';
import {PaginationComp} from '../layout/PaginationComp';
import {FilterComponent} from '../layout/FilterComponent';
import { SortComponent } from '../layout/SortComponent';
interface HomeProps {
  favorites: Game[],
  setFavorites: any,
}

export interface Game {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    developer: string,
    free_to_game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    release_date: string,
}

export const Home: FC<HomeProps> = ({favorites, setFavorites}) => {
   const {allGames, setAllGames} = useContext(AllVideoGameContext);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize:number = 10;
   const itemCount:number = allGames.length;

    //console.log(favorites)
    const getCurrentGames = (): Game[] => {
    const startIndex = (currentPage - 1) *  pageSize;
    const endIndex = startIndex + pageSize;
    return allGames.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const currentGames = getCurrentGames();

  const gameRows = [];

   for(let i = 0; i < currentGames.length; i += 10) {
    const rowGames = currentGames.slice(i, i + 10);
    const row = (
        <Row className="g-2" key={i}>
        {rowGames.map((game: Game, index) => {
            return(

                <Col sm='1' lg='2' xxl='2' className='mx-auto' style={{width: '400px'}} key={game.id}>
                    <VideoGameCard game={game} favorites={favorites} setFavorites={setFavorites} isFavorites={false} index={index} />
                </Col>
            )
        })}
    </Row>
    );
    gameRows.push(row);
   }
 
return (
    <>
        <FilterComponent />
        <Container>
            {gameRows}
            <PaginationComp
                itemCount={itemCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </Container>
    </>
)
};

