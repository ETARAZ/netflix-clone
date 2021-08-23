import React,{useEffect,useState} from 'react';
import './nav.css'
export default function Nav() {
    const [back,setBack]=useState(false);

    useEffect( ()=>{
        function show(){
            if(window.scrollY>200){
                setBack(true);
               
            }else{
               setBack(false); 
            }
        }
        window.addEventListener('scroll',show)

        return ()=>{
            window.removeEventListener('scroll',show)
        }

    },[])
    return (
        <div className={`nav ${back ? 'back': ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" className="nav_logo" />

             <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="nav_avatar" />
        </div>
    )
}
