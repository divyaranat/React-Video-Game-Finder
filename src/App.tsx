import {useState, useEffect, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import {Navigation} from './layout/Navigation';
import { Game, Home } from './pages/Home';



export const AllVideoGameContext = createContext<any>(undefined);
export default function App() {
  const [allGames, setAllGames] = useState([]);
  const [gameUrl, setGameUrl] = useState('https://free-to-play-games-database.p.rapidapi.com/api/games');
  const [favorites, setFavorites] = useState<Game[]>([]);
  
  const fetchAllGames = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2546214f87msh678cb2c0305a97ep10e9ebjsna8b738d860b8',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    fetch(`${gameUrl}`, options)
      .then(response => response.json())
      .then(data => setAllGames(data))
      .catch(err => console.error(err));

  }
  useEffect(() => {
    fetchAllGames()
  }, []);
  

  
  return (
    <AllVideoGameContext.Provider value={{allGames, setAllGames, gameUrl, setGameUrl, fetchAllGames}}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home favorites={favorites} setFavorites={setFavorites} />}/>
        <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} />}/>
      </Routes>
    </BrowserRouter>
    </AllVideoGameContext.Provider>
  
  );
}


