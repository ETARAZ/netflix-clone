import React,{useEffect,useState} from 'react';
import './banner.css'
import myaxios from './axios'
import Loader from "react-loader-spinner";
import YoutubePopUp from './YoutubePopUp';
const image_url = "https://image.tmdb.org/t/p/original"



export default function Banner({url}) {
    const [open, setOpen] = useState(false);
    const [movie,setMovie]=useState({});

    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };

  useEffect(() => {
    
    async function getData(){
        
        await myaxios.get(url).then((res)=>{
        const i = Math.trunc(Math.random()*res.data.results.length)
          setMovie(res.data.results[i]);
          console.log(res.data.results[i]);
        }).catch((error)=>{
          console.log(error);
        });
    }
    
    getData();

  }, []);

    return (
        <div className="banner" style={
            {backgroundImage:`url(${image_url}${movie.backdrop_path})`}
        }>
        {

            Object.keys(movie).length>0 ?
            <div className="banner_info">
                <h1 className="banner_info_title">
                    {movie?.title || movie?.original_title}
                </h1>
                <p className="banner_info_text">
                    {movie.overview}
                </p>
                <button onClick={handleOpen} className="banner_info_btn">
                    Play
                </button>
            </div>
            :
            <Loader
                type="TailSpin"
                color="#FFF"
                height={100}
                width={100}
                timeout={3000}
            />
 
        }
      {open && <YoutubePopUp name={movie?.name || movie?.original_title} close={handleClose}/>}
    </div>
    )
}
