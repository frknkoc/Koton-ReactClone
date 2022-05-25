import React from 'react'
import "./styles.css";
import HitCategories from "../data/HitCategories.json";

function HitCategory() {
    return (
        <div className="container-fluid px-md-5 mb-5 hitcategory">
            <div class="text-center fs-1 mb-3 mt-5 ">SEZONUN ÖNE ÇIKAN <b>HİT</b> KATEGORİLERİ</div>
            <hr />

            <div className="row mt-4">
                {
                    HitCategories.map(hitcategory => {
                        return (

                            <div className="col-lg-2 col-md-3 productlink">
                                <img src={hitcategory.url} className="w-100 rounded py-3 px-2" alt=""></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HitCategory;