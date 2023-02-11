import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <section className="NotFound">
        <div className="NotFound-container">
          <h1 className="animate__animated animate__2s animate__infinite animate__alternate animate__bounce">
            404
          </h1>
          <p>Page not found</p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
