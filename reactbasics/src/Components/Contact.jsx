import React from "react";
import { Link } from "react-router-dom";

//import Navigation from "./Navigation";

function Contact(){
   
    return (
        <>
          <div
            style={{
              color: "black",
              fontSize: "15px",
              fontStyle: "italic",
              backgroundColor: "yellow",
            }}
          >
            <h1>Contact</h1>
          </div>
          <Link
              class='social-icon-link github'
              to={{ pathname: "https://github.com" }}
              target='_blank'
              aria-label='Github'
            />
            </>
      );
    }
export default Contact;