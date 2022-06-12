import './styles.css'
import logo from '../header/logo-ibarber-2.png'

function Footer() {
    return (
        <div id='component-footer'>
            <div>
                <ul id='footer-links'>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                    <li>Ajuda</li>
                </ul>
                <div id='footer-logo'>
                    <img src={logo} alt="" />
                    <p>CNPJ: XX.XXX.XXX/XXXX-XX / Endereço Avenida Paulista 123 - São Paulo, SP - 01311-000</p>
                    <p>© Copyright 2021 - iBarber - Todos os direitos reservados</p>
                </div>
                <ul id='footer-social'>
                    <li><i className="fa fa-facebook-square"></i></li>
                    <li><i className="fa fa-instagram"></i></li>
                    <li><i className="fa fa-twitter-square"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;