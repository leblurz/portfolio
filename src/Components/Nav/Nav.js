import image from '../../Images/perfil.jpg';
import './Nav.css';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import tec from '../../Images/tec.jpg';
import cod from '../../Images/cod.jpg';
import recl from '../../Images/recl.jpg';
import profile from '../../Images/profile.png';
import home from '../../Images/home.png';
import educ from '../../Images/educ.png';
import contact from '../../Images/contact.png';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav>
            <div className='containerHeaderNav'>
                <img className='imagenHeaderNav' src={recl} alt='Perfil image' />
                <div className='containerIcons'>
                    <a href='https://www.linkedin.com/in/marcos-perez-g/'>
                        <AiFillLinkedin className='iconNav'/>
                    </a>
                    <a href='https://wa.me/5492262658499' >
                        <AiOutlineWhatsApp className='iconNav' />
                    </a>
                    <a href='https://github.com/leblurz'>
                        <AiFillGithub className='iconNav'/>
                    </a>
                </div>
            </div>
            <div className='containSearchNav'>
                <div className='containTextNav'>
                    <h2 className='titleNav'>Marcos Perez</h2>
                    <br />
                    <h3 className='descpNav'>Full Stack Web Dev</h3>
                </div>
            </div>
            <hr className='hrNav'/>
            <Link to='/' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={home} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Home</li>
                        </div>
                        <div className='containerMessage'>
                            <AiOutlineCheck className='iconMessage'/>
                            <span className='message'>
                                Back home!
                            </span>
                        </div>
                    </div>
                </div>
            </Link>            
            <hr className='hrNav'/>
            <Link to='/education' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={educ} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Education</li>
                        </div>
                        <div className='containerMessage'>
                            <AiOutlineCheck className='iconMessage'/>
                            <span className='message'>
                                Open to learn
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
            <hr className='hrNav'/>
            <Link to='/tecs' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={tec} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Tecnologies</li>
                        </div>
                        <div className='containerMessage'>
                            <AiOutlineCheck className='iconMessage'/>
                            <span className='message'>
                                If u need others, I can learn
                            </span>
                        </div>
                        <span className='hourNav'>
                            A second ago!
                        </span>
                        <div className='numberNav'>
                            3
                        </div>
                        <div className='arrowNav'>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
            </Link>
            <hr className='hrNav'/>
            <Link to='/projects' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={cod} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Projects</li>
                        </div>
                    </div>
                </div>
            </Link>
            <hr className='hrNav'/>
            <Link to='/profile' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={profile} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Personal Profile</li>
                        </div>
                        <div className='containerMessage'>
                            <AiOutlineCheck className='iconMessage'/>
                            <span className='message'>
                                Check my profile!
                            </span>
                        </div>
                        <span className='hourNav'>
                            Right now!
                        </span>
                        <div className='numberNav'>
                            2
                        </div>
                        <div className='arrowNav'>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
            </Link>
            <hr className='hrNav'/>
            <Link to='/contact' className='linkNav'>
                <div className='containerNavOption'>
                    <div className='containerPerfilImage'>
                        <img className='perfilImage' src={contact} alt='Imagen de Perfil' />
                    </div>
                    <div className='granContainerTextNav'>
                        <div className='containerTextNav'>
                            <li className='textNav'>Contact</li>
                        </div>
                        <div className='containerMessage'>
                            <AiOutlineCheck className='iconMessage'/>
                            <span className='message'>
                                Im awating ur message!!
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </nav>
    )
};