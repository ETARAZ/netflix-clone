import requests from './requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'
import './app.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {

  
  
  return (
    <div className="app">
      <Nav/>
      <Banner url={requests.fetchActionMovies}/>
      <Row isOrigin={true} url={requests.fetchNetflixOriginals} title="Netflix Originals"/>
      <Row url={requests.fetchTrending} title="Trending"/>
      <Row url={requests.fetchTopRated} title="Top rated"/>
      <Row url={requests.fetchActionMovies} title="Action Movies"/>
      <Row url={requests.fetchRomanceMovies} title="Romance Movies"/>
      <Row url={requests.fetchComedyMovies} title="Comedy Movies"/>
      <Row url={requests.fetchHorrorMovies} title="Horror Movies"/>
      <Row url={requests.fetchDocumentaries} title="Documentaries Movies"/>

    </div>
  );
}

export default App;
