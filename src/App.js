import './App.css';
import MainContent from './components/footer/MainContent';
import Header from './components/header/Header';

function App() {
  const movies = [
    {
      id: 1,
      title:"Avatar",
      image: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
      rating: 4,
    },
    {
      id: 2,
      title:"Kunfu panda",
      image: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
    },
    {
      id: 3,
      title:"Naruto Shipuden",
      image: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
      rating: 5,
    },
    {
      id: 4,
      title:"Hobbit",
      image: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
    },
    
  ]
  return (
    <div className="App">
      <Header/>
      <MainContent movies={movies}/>
    </div>
  );
}

export default App;
