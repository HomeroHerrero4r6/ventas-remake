import React, { Component } from 'react'
import "./Sales.scss"
import SalesTable from './SalesTable'
import Button from '@material-ui/core/Button'
import Select from 'react-select'
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

function Sales() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    return (
        <div className='sales-zone'>
            <header>
                <ul className="nav-Sales">
                    <li className='ventas'><span>Inicio</span></li>
                    <li><span>Ventas</span></li>
                    <li><span>Compras</span></li>
                    <li><span>Cuentas</span></li>
                    <li><span>Gastos</span></li>
                </ul>
            </header>
            <div>
                <div className="sales-tools-zone">
                    <h2>Client</h2>
                    <Select options={options} className='select-filter'/>
                    <h2>Status</h2>
                    <Select options={options} className='select-filter'/>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                         Administrative Tool
                    </Button>
                </div>
                <div className='sales-table-zone'>
                    <SalesTable/>
                </div>

            </div>
        </div>

    )
}

export default Sales
