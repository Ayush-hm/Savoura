import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';
const Intro = () => {
  const [play, setplay] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplay((prevPlayVideo) =>  !prevPlayVideo);
    if(play){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return (<div className='app__video'>
    <video src={meal}
    type='video/mp4'
    loop
    controls={false}
    ref={vidRef}
    muted/>
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
        { play ? 
          <BsPauseFill color='#fff' fontSize={60}/>
         : <BsFillPlayFill color='#fff' fontSize={60}/> }
      </div>
    </div>
  </div>)
}

export default Intro;
