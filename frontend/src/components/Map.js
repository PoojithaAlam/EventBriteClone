import React from 'react';

const Map = ({ address }) => {
  const formattedAddress = address.replace(/ /g, '+');
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBlCxpBxsL62WJ69Xpx8bY3TA_8fODvlYY&q=${formattedAddress}`;
  

  return (
    <iframe
      style={{ border: 0, width: "30%" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl}
    ></iframe>
  );
};

export default Map;
