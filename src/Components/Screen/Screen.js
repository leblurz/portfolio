import './Screen.css';

import image from '../../Images/perfil.jpg';

export default function Screen () {
    return (
        <div className='containerScreen'>
            <div className='containerDataScreen'>
                <img className='ImageScreen' src={image} alt='Imagen de muestra' />
                <h2>Stay alert, you need this profile in your team!</h2>
                <p>Hello, welcome to my little portfolio, you can help me reading and contacting me!
                    Thanks for your time
                </p>
                <hr/>
                <p className='textGreenScreen'>Happy new year!</p>
            </div>
        </div>
    )
}