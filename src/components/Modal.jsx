import React from "react";

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="contactModalLabel">
              Contact Us
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <a className="d-block" href="tel:+919632461706">
              +91 9632461706
            </a>
            <a
              className="d-block"
              href="mailto:alphafiresafetyservices024@gmail.com"
            >
              alphafiresafetyservices024@gmail.com
            </a>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
