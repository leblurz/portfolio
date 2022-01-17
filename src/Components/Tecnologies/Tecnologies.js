import './Tecnologies.css';

import image from '../../Images/perfil.jpg';
import { HiDotsVertical } from "react-icons/hi";
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { BsMicFill } from "react-icons/bs";

import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

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

            <div className='containerChatLeftTecs'>
                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        HTML {<ImHtmlFive2 className='tecsIcon'/>} CSS {<IoLogoCss3 className='tecsIcon'/>}
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        ReactJS {<FaReact className='tecsIcon'/>} Redux {<SiRedux className='tecsIcon'/>} JavaScript{<SiJavascript className='tecsIcon'/>}
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        Node {<GrNode className='tecsIcon'/>} ExpressJS {<SiExpress className='tecsIcon'/>} 
                        PostgreSQL {<SiPostgresql className='tecsIcon'/>}
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        A little bit of Python {<FaPython className='tecsIcon'/>}
                        </span>
                    </div>
                </div>

                <div className='relativeLeft'>
                    <div class="flecha-left" />
                    <div className='containerSpanChat'>
                        <span className='textChat'>
                        And if you need others can learn and add to the list!!
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
                            What technologies do you handle?
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerBottTecnologies'>
                <div className='containerDataBottTecnologies'>
                    <div className='containerIconsBottTecnologies'>
                        <BsEmojiLaughing className='iconBottTecnologies'/>
                        <FiPaperclip id='clipEd' className='iconBottTecnologies' />
                    </div>
                    <div className='containerSearchBottTecnologies'>
                        <input className='inputBottTecnologies' type='search' placeholder='Write your message here'/>
                    </div>
                    <div className='containerMicBottTecnologies'>
                        <BsMicFill id='micEd' className='iconBottTecnologies'/>
                    </div>
                </div>
            </div>
        </div>
    )
}