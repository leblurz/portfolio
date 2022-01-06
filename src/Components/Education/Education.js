import './Education.css';

import { HiDotsVertical } from "react-icons/hi";

import image from '../../Images/perfil.jpg';

export default function Education () {
    return (
        <div className='containerEducation'>
            <div className='topEducation'>
                <div className='containerImageEducation'>
                    <img className='imageEducation' src={image} alt='profileImage'/>
                </div>
                <div className='containerTextTopEducation'>
                    <span className='textTopEducation'>
                        Marcos
                    </span>
                </div>
                <div className='containerIconsTopEducation'>
                    <HiDotsVertical className='iconEducation'/>
                </div>
            </div>
        </div>
    )
}