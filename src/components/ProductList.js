import React from 'react'
import "./styles.css";
import ProductList1 from "../data/ProductList.json";

function ProductList() {
    return (
        <div className="container-fluid px-md-5 productlist">

            <div className="row mt-4 mb-5">

                {ProductList1.map(product =>{
                    return(

                        <div className="col-md">
                        <img src={product.url} className="w-100 rounded py-3 px-2" alt=""></img>
                        <div className="text-center fs-5 fw-bold">{product.male}</div>
                        <div className="text-center fs-6">{product.title}</div>
                        <div className="text-center fs-6 productlink">{product.link}</div>
                    </div>
    
                    )
                })}

            </div>
        </div>
    )
}

export default ProductList;


