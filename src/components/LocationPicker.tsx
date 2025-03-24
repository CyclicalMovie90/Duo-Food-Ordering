import React, { useState, useEffect } from "react";

const LocationComponent = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log("Position fetched:", position); // Debugging
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        setLoading(false);
                    },
                    (err) => {
                        console.error("Geolocation error:", err); // Debugging
                        setError(err.message);
                        setLoading(false);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
                setLoading(false);
            }
        } catch (e) {
            console.error("Unexpected error:", e); // Debugging
            setError("An unexpected error occurred.");
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading location...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <p>
                        Latitude: {location.latitude} <br />
                        Longitude: {location.longitude}
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.0928898396608!2d78.60085722390775!3d17.20641467379022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba78f00003e29%3A0x1a67364eabb38a83!2sBharat%20Institute%20of%20engineering%20and%20technology.!5e0!3m2!1sen!2sin!4v1735749822164!5m2!1sen!2sin"
                        width="1248"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </>
            )}
        </div>
    );
};

export default LocationComponent;
