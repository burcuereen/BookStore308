import { withStyles } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-input-slider';
import fire from '../../fire';

export default function ProductItem({ product }) {
    const [productDiscount, setproductDiscount] = useState(product.discount || 0);
    const handleSave = () => {
        fire.database().ref("/").child("Books").child(product._id).update({
            discount: productDiscount
        }).then(()=>{
            alert("Successfully Updated Discount")
        }).catch((err)=>{
            if(err){
                alert(err.message)
            }
        })
    }
    return (
        <div className="card" key={product._id}>
            {/* <Link to={`/product/${product._id}`}> */}
            <img
                src={product.coverUrlWeb}
                alt=""
                onClick={() => this.move_data(product)}
            />
            {/* </Link> */}
            <div className="content">
                <h3>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h3>
                <span>${product.price}</span>
                <p>{product.author}</p>
                <Fragment>
                    <div
                        style={{ marginLeft: "10px", }}
                    >
                        <div>Discount: {productDiscount + ' %'}</div>
                        <Slider
                            axis="x"
                            xmin={0}
                            xmax={100}
                            onChange={({ x }) => setproductDiscount(x)}
                            x={productDiscount}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={() => handleSave()} >Save</button>
                </Fragment>
            </div>
        </div>
    )
}
