import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState,useContext } from 'react'
import AdminLayout from '../../components/Layout/AdminLayout';
import AddIcon from '@material-ui/icons/Add';
import { usePopup } from '../../components/Popup/Popup'
import { Link } from "react-router-dom";
import { DataContext } from "../../components/Context";
import "../../components/css/Products.css";
import fire from "../../fire";
import Slider from 'react-input-slider';
import Fragment from 'react-input-slider'
import ProductItem from './ProductItem';


const Discount = (props) => {
    const classes = makeStyles(theme => ({
        paper: {
            padding: theme.spacing(1),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        button: {
            width: 100,
            marginBottom: theme.spacing(1),
            alignSelf: 'flex-end',
        }
    }));
    // const classes = useStyles();

   const data = useContext(DataContext)

   const { products, addCart, filterState, category } = data;
//    const { categoryProducts } = this.state;

//    products.map((item) => {
//      return item.category === category ? categoryProducts.push(item) : null;
//    });

const [state, setState] = useState({ x: 0.3 });

   


    return (
        <AdminLayout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <div id="product">
        {products
          .filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase())
          )
          .filter((product) =>
            product.title.toLowerCase().includes(filterState.toLowerCase())
          )
          .map((product,i) => (
           <ProductItem key={i} product={product} />
          ))}s
      </div>
                    </Paper>
                </Grid>
            </Grid>
        </AdminLayout>
    )
}

export default Discount;
