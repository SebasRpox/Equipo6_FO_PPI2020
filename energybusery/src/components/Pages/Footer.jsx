import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer-container'>
                <section className='footer-email'>
                    <p className='footer-subscription-heading'>
                        Para mas informacion sobre nuestro proyecto contactanos a energybusery@gmail.com.
                    </p>
                    <p className='footer-email-text'>
                        Tambien puedes hacerlo aqui:
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Tu correo:'
                            />
                            <input
                                className='footer-input'
                                name='asunto'
                                type='asunto'
                                placeholder='Asunto:'
                            />
                            <Button variant="success">Contactanos</Button>
                        </form>
                    </div>
                    <p className='footer-email-copy'>
                        EnergyBusery © 2020
                    </p>

                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.facebook.com/EnergyBusery-100283188500290/?modal=admin_todo_tour'
                            }
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.instagram.com/energybusery/'
                            }
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.youtube.com/channel/UCHAKiPvl3Ij142gVmwiz6lw?view_as=subscriber'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//twitter.com/buseruy'
                            }
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                    </div>
                </section>

            </div>
        )
    }
}

export default Footer;