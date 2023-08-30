import './Footer.css'

const Footer = () => {

    return (
        <footer id="copyright">
            <p>
                <a target='_blank' href="https://www.linkedin.com/in/alvaro-garimberti/" className='footer-link mx-1'>
                    Alvaro Garimberti
                </a>

                &copy; 2023 - <strong> Todos los derechos reservados </strong> 
            </p>

            <p className='disclaimer'> Disclaimer: Esta página es un proyecto educativo. De ninguna manera condona la clonación y venta de gatos. La compra de animales contribuye a la explotación de seres sintientes para provecho humano. Adoptá, no compres. </p>
        </footer>
    )
}

export default Footer