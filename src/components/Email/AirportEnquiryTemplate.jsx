import React from "react";

export function AirportEnquiryTemplate({
  name,
  phone,
  email,
  nationality,
  city,
  travelDate,
  guests,
  language,
  services,
  message,
  source,
  currenturl,
  defaultCity
}) {
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const [year, month] = dateString.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      lineHeight: 1.6, 
      maxWidth: "600px", 
      margin: "0 auto",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "8px"
    }}>
      <div style={{ 
        backgroundColor: "#004d91", 
        padding: "20px", 
        textAlign: "center", 
        borderRadius: "8px 8px 0 0",
        marginBottom: "20px"
      }}>
        <h2 style={{ color: "#ffffff", margin: 0 }}>New Airport Service Enquiry</h2>
        <p style={{ color: "#FFD700", margin: "10px 0 0 0", fontSize: "14px" }}>
          Varanasi Airport Services Modal
        </p>
      </div>
      
      <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "0 0 8px 8px" }}>
        <h3 style={{ color: "#004d91", borderBottom: "2px solid #004d91", paddingBottom: "10px" }}>
          Customer Details
        </h3>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold", width: "40%" }}>Name:</td>
              <td style={{ padding: "10px 0" }}>{name}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold" }}>Phone Number:</td>
              <td style={{ padding: "10px 0" }}>{phone}</td>
            </tr>
            {email && (
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 0", fontWeight: "bold" }}>Email:</td>
                <td style={{ padding: "10px 0" }}>{email}</td>
              </tr>
            )}
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold" }}>Nationality:</td>
              <td style={{ padding: "10px 0" }}>{nationality}</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ color: "#004d91", borderBottom: "2px solid #004d91", paddingBottom: "10px", marginTop: "20px" }}>
          Travel Details
        </h3>
        
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold", width: "40%" }}>Destination City:</td>
              <td style={{ padding: "10px 0" }}>
                <strong>{city}</strong>
                {defaultCity && defaultCity !== city && (
                  <span style={{ color: "#666", fontSize: "12px", marginLeft: "10px" }}>
                    (Originally selected: {defaultCity})
                  </span>
                )}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold" }}>Travel Month:</td>
              <td style={{ padding: "10px 0" }}>{formatDate(travelDate)}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px 0", fontWeight: "bold" }}>Number of Travellers:</td>
              <td style={{ padding: "10px 0" }}>{guests}</td>
            </tr>
            {language && (
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 0", fontWeight: "bold" }}>Preferred Language:</td>
                <td style={{ padding: "10px 0" }}>{language}</td>
              </tr>
            )}
            {services && (
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 0", fontWeight: "bold" }}>Services Needed:</td>
                <td style={{ padding: "10px 0" }}>{services}</td>
              </tr>
            )}
          </tbody>
        </table>

        {message && (
          <>
            <h3 style={{ color: "#004d91", borderBottom: "2px solid #004d91", paddingBottom: "10px", marginTop: "20px" }}>
              Additional Requirements
            </h3>
            <div style={{ 
              backgroundColor: "#f5f5f5", 
              padding: "15px", 
              borderRadius: "5px",
              marginTop: "10px"
            }}>
              <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{message}</p>
            </div>
          </>
        )}

        {currenturl && (
          <div style={{ 
            marginTop: "20px", 
            paddingTop: "20px", 
            borderTop: "2px solid #eee",
            fontSize: "12px",
            color: "#666"
          }}>
            <p><strong>Page URL:</strong> {currenturl}</p>
            <p><strong>Source:</strong> {source || "Varanasi Airport Services Modal"}</p>
          </div>
        )}

        <div style={{ 
          marginTop: "30px", 
          padding: "15px", 
          backgroundColor: "#f0f7ff", 
          borderRadius: "5px",
          fontSize: "12px",
          color: "#666",
          textAlign: "center"
        }}>
          <p style={{ margin: 0 }}>
            This enquiry was submitted through the Varanasi Airport Services enquiry form.
            Please respond to this customer within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}