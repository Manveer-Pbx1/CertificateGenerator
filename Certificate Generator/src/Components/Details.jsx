import React, { useState } from 'react';
import certificate from "../Images/certificate.png";
import background from "../Images/sign_up_horizon.png";

export default function Details() {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Logic to overlay details on the certificate image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Load the certificate image
        const certImage = new Image();
        certImage.onload = () => {
            canvas.width = certImage.width;
            canvas.height = certImage.height;
            ctx.drawImage(certImage, 0, 0);

            // Draw text on the canvas (adjust positions as needed)
            ctx.font = ' 64px bold Arial';
            ctx.fillStyle = 'golden';
            ctx.fillText(`${name}`, 350, 280, 400);
            ctx.fillStyle = 'Black';
            ctx.font = ' 32px arial';
            ctx.fillText(`for the successful completion in ${course}`, 200, 320, 1300);
            ctx.fillText(`course on ${date}.`, 320, 30, 1000);

            // Convert canvas to data URL and set it as the src for the image element
            const certificateWithDetails = canvas.toDataURL('image/png');
            document.getElementById('certificateImage').src = certificateWithDetails;
        };
        certImage.src = certificate;

        // You can also save or download the modified certificate here if needed
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Enter details to generate Certificate: </h1>
            <br /> <br />
            <img className="-z-10 absolute bottom-0 h-[450px] p-3" src={background} alt="Background"></img>
            <form className="h-12 w-12 p-8 ml-4" onSubmit={handleFormSubmit} autoComplete='on'>
                <label>Name: </label>
                <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Course: </label>
                <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="text" value={course} onChange={(e) => setCourse(e.target.value)}></input>
                <label>Date: </label>
                <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <button type="submit" className="w-[120px] bg-yellow-300 font-bold italic cursor-pointer rounded-sm relative top-4 ml-48 border border-gray-300">Submit Details</button>
            </form>
            <div className="certificate-container">
                <img id="certificateImage" className="h-[450px] w-[550px] left-[700px] p-10 absolute bottom-6" src={certificate} alt="Certificate"></img>
            </div>
        </div>
    )
}
