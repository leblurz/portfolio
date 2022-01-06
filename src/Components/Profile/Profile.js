import './Profile.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";

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

            <div className='containerChatLeftTecs'>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        I am a musician since 2009, I like drawing,
                        solve puzzles and doing sports. One year
                        ago I started my programming carreer
                        with different courses and I really like
                        doing it.
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        Creativity, Good Vibes, Dauntless, Worker
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        I think that this words define me correctly!
                        </span>
                    </div>
                </div>

            </div>

            <div className='containerChatRight'>
                <div className='absoluteRight'>
                    <div className='relativeRight'>
                        <div class="flecha-right" />
                        <div className='containerSpanChatRight'>
                            <span className='textChatRight'>
                            Who is Marcos?
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerBottProfile'>
                <div className='containerDataBottProfile'>
                    <div className='containerIconsBottProfile'>
                        <BsEmojiLaughing className='iconBottProfile'/>
                        <FiPaperclip id='clipEd' className='iconBottProfile' />
                    </div>
                    <div className='containerSearchBottProfile'>
                        <input className='inputBottProfile' type='search' placeholder='Write your message here'/>
                    </div>
                    <div className='containerMicBottProfile'>
                        <BsMicFill id='micEd' className='iconBottProfile'/>
                    </div>
                </div>
            </div>
        </div>
    )
}