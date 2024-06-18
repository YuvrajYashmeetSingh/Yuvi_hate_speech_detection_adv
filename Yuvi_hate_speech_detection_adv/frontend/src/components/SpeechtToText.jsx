import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from "../img/4061494.jpg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [ans, setAns] = useState('');

  const startListening = () => {
    setIsListening(true);
    resetTranscript(); // Reset transcript before starting listening
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    console.log(transcript);
    // Call getAns after stopping listening
    getAns();
  };

  const handleClose = () => {
    resetTranscript();
  };

  const getAns = async () => {
    const url = "http://localhost:5000/predict";
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: transcript })
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

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container my-5 " style={{padding:"2rem"}}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4 animate__animated animate__fadeInDown"> Detect Hate Speech from Speech</h1>
          <img
            src={img2}
            style={{ width: "25rem", height: "auto", borderRadius: "50%" }}
            className="img-fluid mb-3 animate__animated animate__zoomIn"
            alt="Placeholder"
            loading='lazy'
          />
          <div className="form-group mb-4">
            {isListening ? (
              <button
                className="btn btn-danger animate__animated animate__pulse animate__infinite"
                onClick={stopListening}
              >
                <FontAwesomeIcon icon={faStop} /> Stop Listening
              </button>
            ) : (
              <button
                className="btn btn-primary animate__animated animate__pulse animate__infinite"
                onClick={startListening}
              >
                <FontAwesomeIcon icon={faMicrophone} /> Start Listening
              </button>
            )}
          </div>
          {transcript && (
            <div className="alert alert-info animate__animated animate__fadeIn">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{transcript}</p>
            </div>
          )}
          {ans && (
            <div className="alert alert-success animate__animated animate__fadeIn"role="alert">
              {ans}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpeechToText;
