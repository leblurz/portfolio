import './Projects.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";

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

            <div className='containerChatLeft'>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        My most important projects are the following, 
                        although you can also see my other projects in my GitHub profile
                        </span>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        An application for search dogs's breeds using dog api and add others 
                        functions to level up the final result.
                        </span>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='https://github.com/leblurz/PI-Dogs'>
                            https://github.com/leblurz/PI-Dogs
                        </a>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        Ecommerce, where I do principally the BackEnd, The System of recomendation whit algolia and
                        Admin and SuperAdmin Profiles.
                        </span>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='https://github.com/pfEcommerce/client'>
                            https://github.com/pfEcommerce/client
                        </a>
                    </div>
                </div>
            </div>
            <div className='containerChatRight'>
            </div>
            <div className='containerBottProjects'>
                <div className='containerDataBottProjects'>
                    <div className='containerIconsBottProjects'>
                        <BsEmojiLaughing className='iconBottProjects'/>
                        <FiPaperclip id='clipEd' className='iconBottProjects' />
                    </div>
                    <div className='containerSearchBottProjects'>
                        <input className='inputBottProjects' type='search' placeholder='Write your message here'/>
                    </div>
                    <div className='containerMicBottProjects'>
                        <BsMicFill id='micEd' className='iconBottProjects'/>
                    </div>
                </div>
            </div>
        </div>
    )
}