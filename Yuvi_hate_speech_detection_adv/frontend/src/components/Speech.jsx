import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/4014255.jpg";

function Speech() {
  const [text, setText] = useState('');
  const [ans, setAns] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const getAns = async () => {
    const url = "http://localhost:5000/predict";
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: text })
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const predictionValue = data.Prediction;
      setAns(predictionValue);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-5" style={{padding:"2rem"}}   >
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4 animate__animated animate__fadeInDown">Hate Speech Detection from text</h1>
          <img
          loading='lazy'
            src={img1}
            style={{ width: "25rem", height: "auto", borderRadius: "50%" }}
            className="img-fluid mb-3 animate__animated animate__zoomIn"
            alt="Placeholder"
          />
          <form>
            <div className="input-group mb-3 animate__animated animate__fadeInUp">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                value={text}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={getAns}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </form>
          {ans && (
            <div className="alert alert-info" role="alert">
              {ans}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Speech;
