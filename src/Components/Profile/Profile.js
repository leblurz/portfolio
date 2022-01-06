import './Profile.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";

export default function Profile () {
    return (
        <div className='containerProfile'>
            <div className='topProfile'>
                <div className='containerImageProfile'>
                    <img className='imageProfile' src={image} alt='profileImage'/>
                </div>
                <div className='containerTextTopProfile'>
                    <span className='textTopProfile'>
                        Marcos
                    </span>
                </div>
                <div className='containerIconsTopProfile'>
                    <HiDotsVertical className='iconProfile'/>
                </div>
            </div>
        </div>
    )
}