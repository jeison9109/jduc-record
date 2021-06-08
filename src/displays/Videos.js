import React from 'react'
import ReactPlayer from 'react-player'


const Videos =() => {
    return (
        <div className='titulo-seccion3'>
            <div className='titulo-videos'>
            <h1>NUESTROS VIDEOS</h1>
            </div>
            
            <div className='video'>
                <ReactPlayer 
                url='https://www.youtube.com/watch?v=kA07rD8HHPw'
                width='100%'
                height='100%'
                controls
                playing
                muted
                >
                </ReactPlayer>
                </div>

                <div className='video2'>
                <ReactPlayer url='https://www.youtube.com/watch?v=kA07rD8HHPw'
                width='100%'
                height='100%'
                controls
                playing
                muted>

                </ReactPlayer>
            </div>
            <footer>
                <p>Julian David Uribe Cruz</p>
                <p class="copyrigth">&copy;Todos los derechos reservados</p>
            </footer>
        </div>
    );
};

export default Videos;
