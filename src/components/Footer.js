import React from 'react';
import { Link } from 'react-router-dom';


import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-logo'>
                        <Link to='/'>Justin Holmes</Link>
                    </div>
                    <small className='website-rights'>© Justin Holmes 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link className='social-icon-link email' to='/' target='_blank' aria-label='Email'>
                            <i className='fas fa-envelope'></i>
                        </Link>
                        <Link className='social-icon-link github' to='/' target='_blank' aria-label='GitHub'>
                            <i className='fab fa-github'></i>
                        </Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='YouTube'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
