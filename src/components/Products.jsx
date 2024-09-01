import React from "react";

import prod_1 from '../assets/product_images/product_01.jpg';
import prod_2 from '../assets/product_images/product_02.jpeg.jpg';
import prod_3 from '../assets/product_images/product_03.png';
import prod_4 from '../assets/product_images/product_04.jpg';
import prod_pdf from '../assets/product_info.pdf';

const products = [
  { id: 1, title: "Fire Hydrant System", image: prod_1, pdf: prod_pdf },
  { id: 2, title: "Sprinkler System", image: prod_2, pdf: prod_pdf },
  { id: 3, title: "Fire Alarm", image: prod_3, pdf: prod_pdf },
  { id: 4, title: "Access Control", image: prod_4, pdf: prod_pdf },
];

export default function Products() {
  return (
    <div id="products" className="container py-5">
      <h2 className="text-center mb-4 display-4 text-dark">Products and Services</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 p-3" key={product.id}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-img-container" style={{ flex: '1 0 auto', height: '250px', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between" style={{ flex: '0 0 auto' }}>
                <h5 className="card-title text-center" style={{ fontSize: '1.2rem' }}>
                  {product.title}
                </h5>
                <div className="text-center mt-3">
                  <a 
                    href={product.pdf}
                    download
                    className="btn btn-primary"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
