import './Contact.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";

export default function Contact () {
    return (
        <div className='containerContact'>
            <div className='topContact'>
                <div className='containerImageContact'>
                    <img className='imageContact' src={image} alt='profileImage'/>
                </div>
                <div className='containerTextTopContact'>
                    <span className='textTopContact'>
                        Marcos
                    </span>
                </div>
                <div className='containerIconsTopContact'>
                    <HiDotsVertical className='iconContact'/>
                </div>
            </div>
        </div>
    )
}