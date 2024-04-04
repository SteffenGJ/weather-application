const DetermineImage = ({ condition }) => {
  return (
    <>
      {condition === "Overcast" && (
        <img
          src="https://images.unsplash.com/photo-1499956827185-0d63ee78a910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="overcast"
          className="w-full"
        />
      )}
      {condition === "Sunny" && (
        <img
          src="https://images.unsplash.com/photo-1623846736569-1d90cba76d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="sunny"
          className="w-full"
        />
      )}
      {condition === "Partly cloudy" && (
        <img
          src="https://images.unsplash.com/photo-1414269665217-a57681e266b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcnRseSUyMGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="partly cloudy"
          className="w-full"
        />
      )}
      {condition === "Clear" && (
        <img
          src="https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="partly cloudy"
          className="w-full"
        />
      )}
      {condition === "Fog" && (
        <img
          src="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="fog"
          className="w-full"
        />
      )}
      {(condition === "Light drizzle" || condition === "Light rain") && (
        <img
          src="https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpenpsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="light drizzle"
          className="w-full"
        />
      )}
    </>
  );
};

export default DetermineImage;
