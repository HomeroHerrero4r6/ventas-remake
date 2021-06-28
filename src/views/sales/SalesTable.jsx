import React, { Component } from 'react'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import "./SalesTable.scss"
import Select from 'react-select'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

function SalesTable() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const BootstrapButton = withStyles({
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          fontSize: 16,
          padding: '6px 12px',
          border: '1px solid',
          lineHeight: 1.5,
          backgroundColor: '#0063cc',
          borderColor: '#0063cc',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
        },
      })(Button);
    const data=[
        {nro:'#525',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#525',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
        {nro:'#422',client:'Homero',status:'complete',date:'12/10/2019',total:'$10'},
    ]
    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(green[500]),
          backgroundColor: green[500],
          '&:hover': {
            backgroundColor: green[700],
          },
        },
      }))(Button);
    const columns=[
        {
            title:'Nro Factura',field:'nro'
        },
        {
            title:'Client',field:'client'
        },
        {
            title:'Date',field:'date'
        },
        {
            title:'Status',field:'status'
        },
        {
            title:'Total',field:'total'
        },
        {
            title:'Detail', field:'detail',render:(row)=><Button variant="contained" size='large'>Detail</Button>
        },
    ]
    return (
        <div>
            <MaterialTable title={<div className='sales-filter-zone'>
                    <h3>Filters Category:</h3>
                    <Select options={options} style={{height:"30vw"}}/>
                    <h4 style={{color:"green"}}>Tap To Remove</h4>
                    <div>
                        <ColorButton variant="contained" color="green">
                            Mayor a $10.000
                        </ColorButton>
                        <ColorButton style={{marginLeft:"1.5rem"}} variant="contained" color="green">
                            Importaciones
                        </ColorButton>
                    </div>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                    >
        Clear
      </Button>
                </div>}
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                },
                rowStyle: {
                    backgroundColor: '#EEE',
                  },
                  search: false
              }}
            data={data}
            columns={columns}
            style={{}}
            rowsPerPageOptions={[10, 50]}/>
        </div>

    )
}

export default SalesTable
