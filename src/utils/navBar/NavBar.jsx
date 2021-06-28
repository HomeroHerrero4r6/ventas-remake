import React, { Component } from 'react'
import Select from 'react-select'
import "./NavBar.scss"
import logo from "../img/logo.png"

function NavBar() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    return (
        <nav className="navbar">
          <div className="left-zone">

            <button className="menu-button">
              <i className="menu fas fa-bars"></i>
            </button>

            <img src={logo} width="160px" height="45px" alt="Logo" />

            <Select className='select' options={options} />

            <ul className="nav-links">
              <li><i className="fas fa-home"></i> <span>Inicio</span></li>
              <li><i className="fas fa-dollar-sign"></i><span>Ventas</span></li>
              <li><i className="fas fa-shopping-basket"></i><span>Compras</span></li>
              <li><i className="fas fa-hand-holding-usd"></i><span>Cuentas</span></li>
              <li><i className="fas fa-calculator"></i><span>Gastos</span></li>
              <li><i className="fas fa-boxes"></i><span>Inventario</span></li>
              <li><i className="fas fa-cog"></i><span>Produccion</span></li>
              <li><i className="fas fa-users-cog"></i><span>Recursos humanos</span></li>
              <li><i className="far fa-chart-bar"></i><span>Reportes</span></li>
              <li style={{background:'#2ECC71'}}><i className="fas fa-dollar-sign"></i><span style={{color:'#FFFFFF'}}> Modulo Punto de Venta</span></li>
              <li style={{background:'#2E6FF2'}}><i className="fas fa-hand-holding-usd"></i><span style={{color:'#FFFFFF'}}>Modulo Contabilidad</span></li>
              <li style={{background:'#FF8C00'}}><span style={{color:'#FFFFFF'}}>Yo <i className="fas fa-heart heart"></i> TuGerente</span></li>
              <li style={{background:'#4F3F8B'}}><i className="fas fa-laptop"></i><span style={{color:'#FFFFFF'}}>Webinars</span></li>
            </ul>
          </div>
          <div className="right-zone">            
            <Select className='select' options={options} />
            <Select className='select' options={options} />
            <button className="menu-button">
              <i className="fas fa-gift"></i>
            </button>
            <button className="menu-button">
            <i class="fas fa-question"></i>
            </button>
            <button className="menu-button">
             <i class="fas fa-cogs"></i>
            </button>
            <button className="menu-button">
              <i class="fad fa-shopping-bag"></i>
            </button>
          </div>
        </nav>
    )
}

export default NavBar
