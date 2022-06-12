import './styles.css'
import { useEffect } from 'react'
import HomeSearch from '../../components/home-barbershop-search'
import paraDarAqueleTrato from './para-dar-aquele-trato.png'
import cadeiraBarbershop from './tenho-uma-barbearia.jpg'

function Home() {

    return (
        <div id="home">
          <div id="main-banner">
            <HomeSearch/>
          </div>
          <div className='banner-1'>
            <img src={paraDarAqueleTrato} alt="" />
            <div className='banner-description'>
              <h1>PARA <br/> DAR <br/> AQUELE <br/> TRATO</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <p>ENCONTRE UMA BARBEARIA</p>
              </div>
            </div>
          </div>
          <div className='banner-2'>
            <div className='banner-description-2'>
              <h1>ANUNCIE GRÁTIS PARA MILHARES DE PESSOAS TODOS OS DIAS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <div>
                <p>CADASTRE SUA BARBEARIA</p>
              </div>
            </div>
            <img src={cadeiraBarbershop} alt="" />
          </div>
        </div>
    )
  }
  
  export default Home
  