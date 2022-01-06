import './Projects.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";

export default function Projects () {
    return (
        <div className='containerProjects'>
            <div className='topProjects'>
                <div className='containerImageProjects'>
                    <img className='imageProjects' src={image} alt='profileImage'/>
                </div>
                <div className='containerTextTopProjects'>
                    <span className='textTopProjects'>
                        Marcos
                    </span>
                </div>
                <div className='containerIconsTopProjects'>
                    <HiDotsVertical className='iconProjects'/>
                </div>
            </div>
        </div>
    )
}