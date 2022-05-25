import React from 'react'
import "./styles.css";

function ProductList() {
    return (
        <div className="container-fluid px-md-5 productlist">

            <div className="row mt-4 mb-5">
                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/kadin-web3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">KADIN</div>
                    <div className="text-center fs-6">ÇİÇEKLİ ÜRÜNLER</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>

                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/cocuk-web3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">ÇOCUK & BEBEK</div>
                    <div className="text-center fs-6">TAKIMLI ÜRÜNLER</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>


                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/jeans-web3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">KADIN</div>
                    <div className="text-center fs-6">BEYAZ JEAN</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;


