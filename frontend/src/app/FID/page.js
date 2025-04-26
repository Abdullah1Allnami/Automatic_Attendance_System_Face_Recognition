'use client'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useRef, useState, useEffect } from 'react'
import classes from './page.module.css'

export default function FID() {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                console.log("Requesting camera access...");
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    console.log('Camera stream started:', stream);
                }
            } catch (err) {
                console.error("Error accessing the camera: ", err);
            }
        };

        startCamera();
    }, []);

    const captureImage = () => {
        if (!canvasRef.current || !videoRef.current) return;

        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext('2d');

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            setCapturedImage(blob);
            sendImageToBackend(blob);
        }, 'image/jpeg');
    };

    const sendImageToBackend = (imageBlob) => {
        const formData = new FormData();
        formData.append('image', imageBlob, 'captured-image.jpg');

        fetch('http://localhost:5002/image', {
            method: 'POST',
            body: formData,
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
    };
    return (
        <div className={classes.page} >
            <Header />
            <div style={{ flex: 1, display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <div className={classes.container}>
                    <main className={classes.main}>
                        <div className={classes.faceFrame}>
                            <div className={classes.frameImageContainer}>
                                <video className={classes.video} ref={videoRef} autoPlay playsInline />
                                <canvas ref={canvasRef} width={226} height={226} style={{ display: 'none' }} />
                                <p>Position your face inside the frame and ensure there is adequate lighting. </p>
                                <button className={classes.captureImageButton} onClick={captureImage}>Capture Image</button>
                                <p className={classes.ImageCaption}>Click Capture to proceed.</p>
                            </div>
                        </div>
                        <div className={classes.identificationResults}>
                            <div className={classes.content}>
                                <h2>Identification Results</h2>
                                <h4>Name: Abdullah</h4>
                                <h4>ID: 20220705</h4>
                                <h4>Match Confidence: 98%</h4>

                            </div>
                            <div className={classes.buttons}>
                                <button>Match</button>
                                <button>Retry</button>
                                <button>Enter ID</button>
                            </div>
                        </div>
                        <div className={classes.userDetails}>
                            <h2>User Details</h2>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div >
    )
}
