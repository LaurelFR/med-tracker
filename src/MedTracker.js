import React from "react";

export default function MedTracker() {
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
      <div className="med-box d-flex justify-content-evenly">
        <h5>Name</h5>
        <h5>50 mg</h5>
        <h5>9:00 AM</h5>
        <h5>
          <input type="checkbox" />
        </h5>
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
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
