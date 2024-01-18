import { useState, type FC } from 'react';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Game } from '../pages/Home';
import React, { useContext } from 'react';

interface VideoGameCardProps {
    game: Game,
    favorites: Game[],
    setFavorites: any,
    isFavorites: boolean,
    index: number,
    onRemove?: () => void
}


export const VideoGameCard: FC<VideoGameCardProps> = ({game, favorites, setFavorites, isFavorites, index, onRemove}) => {

    function handleAddFavorite(game: Game) {
        setFavorites([...favorites, game]);
        console.log('Favorite Clicked -- Set')
    }
    function handleRemove() {
        if(onRemove){
          onRemove()
        }
    }
        
    return (
        <>
            <Card style={{width: '100%', height: '100%'}}>
                <Card.Img variant='top' src={game.thumbnail}/>
                <Card.Title style={{fontWeight: "bold", textAlign: 'center', borderStyle: 'solid'}}>{game.title}</Card.Title>
                <Card.Text><span style={{fontWeight: "bold", textAlign: 'center'}}>Description: </span>{game.short_description}</Card.Text>
                <Card.Text><span style={{fontWeight: "bold"}}>Developer: </span>{game.developer}</Card.Text>
                { !isFavorites ? <Button onClick={() => handleAddFavorite(game)}>
                    Favorite
                </Button> : <Button onClick={handleRemove} >Remove</Button> }
                {/* <Button onClick={() => handleAddFavorite(game)}>
                    Favorite
                </Button> */}
            </Card>
        </>
    )
}