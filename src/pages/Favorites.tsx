import { useState, type FC } from 'react';
import {Container, Row, Col, Pagination} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Game } from './Home';
import { VideoGameCard } from '../layout/VideoGameCard';
import { PaginationComp } from '../layout/PaginationComp';


interface FavoritesProps {
  favorites: Game[],
  setFavorites: any,
}

export const Favorites: FC<FavoritesProps> = ({favorites, setFavorites}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);


  const pageSize:number = 10;

  const itemCount:number = favorites.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  function handleRemoveFavorites(game: Game){
    const updatedFav = favorites.filter(favorite => favorite !== game)
    setFavorites(updatedFav)
  }


  const gameRows = []
  for(let i = 0; i < favorites.length; i += 10){
    const rowGames = favorites.slice(i,i + 10)
    const row = (
        <Row className="g-2" key={i}>
        {rowGames.map((game: Game, index) => {
          return(
            <Col sm='1' xxl='2' className='mx-auto' style={{width:'400px'}} key={game.id}>
              <VideoGameCard game={game} favorites={favorites} setFavorites={setFavorites} isFavorites={true} index={index} onRemove={()=>handleRemoveFavorites(game)}/>
            </Col>
          )
        })}
        </Row>
    )
    gameRows.push(row)
  }

  return (
    <>
    <Container>
      {gameRows}
    </Container>
    <PaginationComp
      itemCount={itemCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange} />
    </>
  )
}