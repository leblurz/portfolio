import './Education.css';

import { HiDotsVertical } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";

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

            <div className='containerChatLeft'>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        I finished secondary school with a certification in Italian B1 and English A2+
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        On 2020, had finished my second year of psycology when I decided to left it.
                        </span>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        I started some courses of programming, gastronomy and english.
                        </span>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        Then, I started a full stack web developer course in Henry Bootcamp! 
                        Then became a full stack web assistant
                        </span>
                    </div>
                </div>
            </div>
            <div className='containerBottEducation'>
                <div className='containerDataBottEducation'>
                    <div className='containerIconsBottEducation'>
                        <BsEmojiLaughing className='iconBottEducation'/>
                        <FiPaperclip id='clipEd' className='iconBottEducation' />
                    </div>
                    <div className='containerSearchBottEducation'>
                        <input className='inputBottEducation' type='search' placeholder='Write your message here'/>
                    </div>
                    <div className='containerMicBottEducation'>
                        <BsMicFill id='micEd' className='iconBottEducation'/>
                    </div>
                </div>
            </div>
        </div>
    )
}