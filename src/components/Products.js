import React from 'react'
import "./styles.css";

function Products() {
    return (
        <div className="container-fluid px-md-5 mb-5"  style={{marginTop: "120px"}}>
            <div class="text-center fs-1 mb-3 mt-5 ">SEZONUN ÖNE ÇIKAN <b>HİT</b> ÜRÜNLERİ</div>
            <hr />

            <div className="row mt-4 mb-5">
                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/kadin-3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">KADIN</div>
                    <div className="text-center fs-6">BU YAZIN RENGİ SENSİN</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>

                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/swim-3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">KADIN</div>
                    <div className="text-center fs-6">PLAJ GİYİM</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>


                <div className="col-md">
                    <img src="https://img-kotontr.mncdn.com/images/2022/nisan/erkek-3.jpeg" className="w-100 rounded py-3 px-2" alt=""></img>
                    <div className="text-center fs-5 fw-bold">ERKEK</div>
                    <div className="text-center fs-6">OVERSİZE KOLEKSİYONU</div>
                    <div className="text-center fs-6 productlink">KEŞFET</div>
                </div>
            </div>
        </div>
    )
}

export default Products;


