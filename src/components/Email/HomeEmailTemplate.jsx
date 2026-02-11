import * as React from 'react';

export const HomeEmailTemplate = ({ name, phoneEmail, destination, formattedDate }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>
      New Travel Enquiry Received
    </h1>
    
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <h2 style={{ color: '#555', marginBottom: '15px' }}>Enquiry Details:</h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', width: '120px' }}>
              Name:
            </td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              {name}
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
              Contact:
            </td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              {phoneEmail}
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
              Destination:
            </td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              {destination}
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
              Preferred Date:
            </td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              {formattedDate}
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>
              Received:
            </td>
            <td style={{ padding: '8px 0' }}>
              {new Date().toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '5px', textAlign: 'center' }}>
      <p style={{ margin: 0, color: '#2e7d32' }}>
        Please follow up with the customer within 24 hours.
      </p>
    </div>
    
    <div style={{ marginTop: '30px', fontSize: '12px', color: '#777', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '10px' }}>
      <p>This is an automated message from your website contact form.</p>
    </div>
  </div>
);