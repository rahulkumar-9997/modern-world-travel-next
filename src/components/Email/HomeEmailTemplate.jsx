import React from "react";
export function HomeEmailTemplate({
  name,
  phoneEmail,
  destination,
  formattedDate,
}) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h2>New Home Enquiry</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone / Email:</strong> {phoneEmail}</p>
      <p><strong>Destination:</strong> {destination}</p>
      <p><strong>Travel Date:</strong> {formattedDate}</p>
    </div>
  );
}
