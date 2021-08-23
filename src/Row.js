import myaxios from './axios';
import React,{useEffect,useState} from 'react';
import './row.css'
import YoutubePopUp from './YoutubePopUp';
const image_url = "https://image.tmdb.org/t/p/original"




export default function Row({isOrigin,url,title}) {
    const [name, setName] = useState('');
    const [movies,setMovies]=useState([]);

    const handleClose = () => {
      setName('');
    };
    const handleOpen = (movie) => {
      setName(movie?.name || movie?.original_title);
    };

  useEffect(() => {
    
    async function getData(){

        await myaxios.get(url).then((res)=>{
          setMovies(res.data.results);
          console.log(res.data.results);
        }).catch((error)=>{
          console.log(error);
        });
    }
    
    getData();

  }, [url]);

    return (
        <div className="row">
          <h2 className="row_title">{title}</h2>
            {movies.length>0 ?

            <div className="row_movies">
                {
                    movies.map((e,i) => {
                    return (<img onClick={()=>{handleOpen(e)}} className={isOrigin ? "isOrigin" : "isNotOrigin"} key={i} src={`${image_url}${e.poster_path}`} alt="sfs"/>);
                    })
                }
            </div>
            :
            <h3>loading</h3> 
            }
            {name && <YoutubePopUp name={name} close={handleClose}/>}
        </div>
    )
}
