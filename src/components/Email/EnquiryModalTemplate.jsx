import React from "react";
export function EnquiryModalTemplate({
  title,
  name,
  email,
  phone,
  message,
  source,
  currenturl
}) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h2>New Itinerary Enquiry</h2>
      <h3>Itinerary Name :
       <a href={currenturl} target="_blank" rel="noopener noreferrer">
         {title}
       </a>
      </h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      <p>
        <strong>Page Url:</strong>{" "}
        <a href={currenturl} target="_blank" rel="noopener noreferrer">
          {currenturl}
        </a>
      </p>
    </div>
  );
}
