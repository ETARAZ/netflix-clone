import React,{useEffect,useState,Fragment} from 'react';
import './youtube.css'
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import movieTrailer from 'movie-trailer';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const opts = {
    playerVars: {
      autoplay: 1,
      origin: 'http://localhost:3000',
    },
  };

export default function YoutubePopUp({name,close}) {
  const classes = useStyles();
  const [id, setId] = useState('');

  const handleClose = () => {
    close();
  };

  useEffect( ()=>{
  
    const prepareTrailer= async ()=>{

      await movieTrailer(name).then( url=>{
        const params=new URLSearchParams(new URL(url).search);
        setId(params.get('v'));
        console.log(id)
      } ).catch(error=>{
        console.log(error);
      })
 
   }

   prepareTrailer();

  },[name])



  return (
    <div>
        { id!='' ?
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <YouTube videoId={id} opts={opts}  containerClassName={"youtubeContainer"} />
        </Fade>
        
    </Modal>
    :
    <div></div>
    }
</div>
)
}
