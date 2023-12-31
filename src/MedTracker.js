import React, { useState } from "react";

export default function MedTracker() {
  const [checkbox, setCheckbox] = useState(
    <i className="fa-regular fa-square"></i>
  );

  function handleClick(event) {
    event.preventDefault();
    setCheckbox(<i class="fa-solid fa-square-check"></i>);
  }

  return (
    <div className="MedTracker">
      <div className="mt-4 d-flex justify-content-evenly">
        <h2>Exact Time</h2>
        <h2>Relative Time</h2>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h3>Medication</h3>
        </div>
        <div className="col">
          <h3>Dose</h3>
        </div>
        <div className="col">
          <h3>Time</h3>
        </div>
        <div className="col">
          <h3>Taken</h3>
        </div>
      </div>
      <div className="med-box mb-3 d-flex justify-content-evenly">
        <h3>Medication</h3>
        <h3>Dose</h3>
        <h3>Time</h3>
        <h3>Taken</h3>
      </div>
      <div className="med-box d-flex justify-content-evenly mb-2">
        <h5>Vitamin B</h5>
        <h5>50 mg</h5>
        <h5>9:00 AM</h5>
        <label className="check-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="med-box d-flex justify-content-evenly mb-3">
        <h5>Vitamin D</h5>
        <h5>50 mg</h5>
        <h5>10:00 AM</h5>
        <label className="check-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Medication</h3>
        </div>
        <div className="grid-item">
          <h3>Dose</h3>
        </div>
        <div className="grid-item">
          <h3>Time</h3>
        </div>
        <div className="grid-item">
          <h3>Taken</h3>
        </div>
        <div className="grid-item">
          <h5>Name</h5>
        </div>
        <div className="grid-item">
          <h5>50 mg</h5>
        </div>
        <div className="grid-item">
          <h5>9:00 AM</h5>
        </div>
        <div className="grid-item">
          <input type="checkbox" />
        </div>
        <div className="grid-item">
          <h5>Name</h5>
        </div>
        <div className="grid-item">
          <h5>50 mg</h5>
        </div>
        <div className="grid-item">
          <h5>9:30 AM</h5>
        </div>
        <div className="grid-item">
          <div
            className="d-flex align-items-center justify-content-center"
            onClick={handleClick}
          >
            {checkbox}
          </div>
        </div>
      </div>
    </div>
  );
}
