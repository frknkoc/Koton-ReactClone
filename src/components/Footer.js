import React from 'react'

function Footer() {
  return (
         <footer className="pt-1 text-dark border-top mt-5">
    <div className="container-fluid px-md-5 px-sm-1 mt-4">
    <div className="row">
      <div className="col-md-2 mt-2">
        <h5>KURUMSAL</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Yaşama Saygı</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Koton'da Sürdürülebilirlik</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kampanyalar</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Koton'da Kariyer</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bilgi Toplumu Hizmetleri</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kapıda Ödeme İade Formu</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sipariş Teslim ve İade Detayları</a></li>
        </ul>
      </div>

      <div className="col-md-2 mt-2">
        <h5>YARDIM</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">İade Prosedürü</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Beden Rehberi</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sipariş Takip</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kişisel Verilerin Korunması</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Site Haritası</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mağaza Bul</a></li>
        </ul>
      </div>

      <div className="col-md-2 mt-2">
        <h5>KATEGORİLER</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sweatshirt</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Elbise</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pantolon</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jean Pantolon</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gömlek</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tişört</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Eşofman Takımı</a></li>
        </ul>
      </div>

      <div className="col-md-2 mt-2">
        <h5>SOSYAL</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fab fa-facebook-f"> Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fab fa-instagram"> Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fab fa-twitter"> Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fab fa-youtube"> YouTube</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted fab fa-pinterest"> Pinterest</a></li>
        </ul>
      </div>

      <div className="col-md-4">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 mt-3 border-top">
      <p>© 2018-2022 KOTON. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </div>
  </footer>
        
  )
}

export default Footer