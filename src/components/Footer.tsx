import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src="../../public/images/logo.webp" alt="" className='footer-img__logo' />
            <div>
                <h2 className='footer-h'>Desarrollado por <span>Pr0d1gy00</span></h2>
                <h4 className='footer-h'>Contactame <span>calitoalejandro184@gmail.com</span></h4>
                <h3 className='footer-h'>Todos los derechos reservados</h3>
                <div className='social-media'>
                    <a href='https://github.com/Pr0d1gy00'><img src="../../public/images/Github.png" alt="" /></a>
                    <a href='www.linkedin.com/in/carlos-alejandro-mendoza-mendoza-85b299310'><img src="../../public/images/Linkedin.png" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
