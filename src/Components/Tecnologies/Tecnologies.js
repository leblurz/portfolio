import './Tecnologies.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";

export default function Tecnologies () {
    return (
        <div className='containerTecnologies'>
            <div className='topTecnologies'>
                <div className='containerImageTecnologies'>
                    <img className='imageTecnologies' src={image} alt='profileImage'/>
                </div>
                <div className='containerTextTopTecnologies'>
                    <span className='textTopTecnologies'>
                        Marcos
                    </span>
                </div>
                <div className='containerIconsTopTecnologies'>
                    <HiDotsVertical className='iconTecnologies'/>
                </div>
            </div>
        </div>
    )
}