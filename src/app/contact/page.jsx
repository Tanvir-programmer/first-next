import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script id="contact-script">
        {`
        alert("Welcome to Contact Page!")
        `}
      </Script>
      This is the contact page
    </div>
  );
};

export default page;
