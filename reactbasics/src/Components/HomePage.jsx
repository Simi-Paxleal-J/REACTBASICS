import React, { useState, useEffect } from "react";
//import Navigation from "./Navigation";
function HomePage() {
    const [number, setNumber] = useState(0);
  
    //ComponentDidMount
    useEffect(() => {
      console.log("Component Mounted");
    }, []);
  
    //ComponentDidUpdate
    useEffect(() => {
      console.log("Number Updated");
    }, [number]);
  
    //ComponentDidUnmount
    useEffect(() => {
      return () => console.log("Component Unmounted");
    });
  
    return (
      <>
        <div
          style={{
            color: "blueviolet",
            fontSize: "15px",
            fontStyle: "italic",
            backgroundColor: "yellow",
          }}
        >
          <h1>Professional Summary</h1>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>{number}</h1>
          <button onClick={() => setNumber((prev) => prev + 1)}>
            Click For Projects
          </button>
        </div>
      </>
    );
  }
  export default HomePage;