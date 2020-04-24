import React from "react";

const CSS3 = () => {
  return (
    <div>
      <h3>Images that resize</h3>
      <p>
        <strong>Normal Image: </strong>
        <img src="http://placecorgi.com/260/180" alt="" className="src" />
      </p>
      {/* 
       PICTUREFILL
       not installed on this project
       but you can use it a polyfill 
      */}
      <picture>
        <source
          srcSet="http://placecorgi.com/700/180"
          media="(min-width: 960px)"
        />
        <source
          srcSet="http://placecorgi.com/500/180"
          media="(min-width: 600px)"
        />
        <source
          srcSet="http://placecorgi.com/400/180"
          media="(min-width: 400px)"
        />
        <img src="http://placecorgi.com/400/180" alt="Corgi!" />
      </picture>
    </div>
  );
};

export default CSS3;
