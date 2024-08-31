import React from 'react';


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import the Leaflet library
import 'leaflet/dist/leaflet.css'; // Make sure you import the CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS


// Define a custom icon using Leaflet's divIcon
const flowerIcon = L.divIcon({
 className: 'my-custom-pin',
 html: '<i class="bi bi-geo-alt-fill" style="font-size: 3rem; color: #5c946e;"></i>',
 iconSize: [30, 42],
 iconAnchor: [15, 42]
});


const Contact = () => {
 return (
   <>
     
     <div className="container my-5">
       <div className="text-center mb-4">
         <h1>Contact Us</h1>
         <p>UNIT 0123, ABC BUILDING, BUSINESS PARK</p>
         {/* Additional contact information */}
         <div>
            <p><strong>Phone:</strong> +1 234 567 8900</p>
            <p><strong>Email:</strong> contact@leafymatch.com</p>
            <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
          </div>

       </div>
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '450px', width: '100%' }}>
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <Marker position={[51.505, -0.09]} icon={flowerIcon}>
           <Popup>
            <div className="map-popup">
              <h4>Welcome to Our Store!</h4>
              <img src="../images/pink.JPG"  alt="" style={{ width: '100%', height: 'auto' }} />
            <p>Visit us at UNIT 0123, ABC BUILDING, BUSINESS PARK.</p>
            </div>
           </Popup>
         </Marker>
       </MapContainer>
     </div>
     
   </>
 );
};


export default Contact;


