import React from 'react'
import "./styles.css";
import Product1 from "../data/Products.json";

function Products() {
    return (
        <div className="container-fluid px-md-5 mb-5 product">
            <div class="text-center fs-1 mb-3 mt-5 ">SEZONUN ÖNE ÇIKAN <b>HİT</b> ÜRÜNLERİ</div>
            <hr />

            <div className="row mt-4 mb-5">

                {Product1.map(product => {
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

export default Products;


