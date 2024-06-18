import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import img3 from '../img/6908869.jpg'

function FileUpload() {
  const [fileContent, setFileContent] = useState('');
  const [ans, setAns] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setFileContent(e.target.result);
        setErrorMessage('');
        try {
          const url = "http://localhost:5000/predict";
          const requestOptions = {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: e.target.result })
          };
          const response = await fetch(url, requestOptions);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const predictionValue = data.Prediction;
          setAns(predictionValue);
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage('Error processing file');
          setFileContent('');
        }
      };
      reader.onerror = () => {
        setErrorMessage('Error reading file');
        setFileContent('');
      };
      reader.readAsText(file);
    }
  };

  const handleClose = () => {
    setFileContent('');
    setAns('');
    setErrorMessage('');
  };

  return (
    <div className="container my-5" style={{padding:"2rem"}}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4 animate__animated animate__fadeInDown">Detection of Hate Speech from file</h1>
          <img
            src={img3}
            style={{ width:"20rem", height: 'auto', borderRadius: '50%' }}
            className="img-fluid mb-3 animate__animated animate__zoomIn"
            alt="Placeholder"
            loading='lazy'
          />
          <div className="form-group mb-4">
            <label htmlFor="fileUpload" className="btn btn-primary animate__animated animate__pulse animate__infinite">
              <FontAwesomeIcon icon={faFileUpload} /> Upload File
            </label>
            <input
              type="file"
              id="fileUpload"
              className="d-none"
              onChange={handleFileUpload}
              accept=".txt"
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setErrorMessage('')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{errorMessage}</p>
            </div>
          )}
          {fileContent && (
            <div className="alert alert-info animate__animated animate__fadeIn">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <pre>{fileContent}</pre>
            </div>
          )}
          {ans && (
            <div className="alert alert-success animate__animated animate__fadeIn" role="alert">
              {ans}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
