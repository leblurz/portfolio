import './Contact.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";

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

            <div className='containerChatLeft'>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        You can contact me clicking the following messages!
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='https://www.linkedin.com/in/marcos-perez-g/'>
                        LINKEDIN
                        </a>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='https://github.com/leblurz'>
                        GITHUB
                        </a>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='https://api.whatsapp.com/send/?phone=5492262658499'>
                        WHATSAPP
                        </a>
                    </div>
                </div>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <a className='textChat' href='mailto:marcoss.g.perez@gmail.com'>
                        GMAIL
                        </a>
                    </div>
                </div>
            </div>
            <div className='containerBottContact'>
                <div className='containerDataBottContact'>
                    <div className='containerIconsBottContact'>
                        <BsEmojiLaughing className='iconBottContact'/>
                        <FiPaperclip id='clipEd' className='iconBottContact' />
                    </div>
                    <div className='containerSearchBottContact'>
                        <input className='inputBottContact' type='search' placeholder='Write your message here'/>
                    </div>
                    <div className='containerMicBottContact'>
                        <BsMicFill id='micEd' className='iconBottContact'/>
                    </div>
                </div>
            </div>
        </div>
    )
}