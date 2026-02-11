import * as React from 'react';

export const EnquiryModalTemplate = ({ title, name, email, subject, message, source }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ background: '#410f06', color: 'white', padding: '25px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
                <h1 style={{ margin: '0', fontSize: '24px' }}>New Enquiry from Website</h1>
                <p style={{ margin: '10px 0 0 0', opacity: '0.9' }}>Source: {source || 'Enquiry Modal'}</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '0 0 8px 8px' }}>
                <div style={{ marginBottom: '25px' }}>
                    <h2 style={{ color: '#410f06', marginBottom: '20px', fontSize: '20px', borderBottom: '2px solid #aa833f', paddingBottom: '10px' }}>
                        Enquiry Details
                    </h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <tbody>
                            {title && (
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', fontWeight: '600', color: '#410f06', width: '120px' }}>
                                        Enquiry For:
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', color: '#333' }}>
                                        {title}
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', fontWeight: '600', color: '#410f06' }}>
                                    Name:
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', color: '#333' }}>
                                    {name}
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', fontWeight: '600', color: '#410f06' }}>
                                    Email:
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', color: '#333' }}>
                                    <a href={`mailto:${email}`} style={{ color: '#aa833f', textDecoration: 'none' }}>
                                        {email}
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', fontWeight: '600', color: '#410f06' }}>
                                    Subject:
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', color: '#333' }}>
                                    {subject}
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', fontWeight: '600', color: '#410f06' }}>
                                    Submitted:
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #eaeaea', color: '#333' }}>
                                    {new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                                </td>
                            </tr>

                            <tr>
                                <td style={{ padding: '15px', fontWeight: '600', color: '#410f06', verticalAlign: 'top' }}>
                                    Message:
                                </td>
                                <td style={{ padding: '15px' }}>
                                    <div style={{
                                        background: '#f9f9f9',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        borderLeft: '4px solid #410f06',
                                        color: '#555',
                                        lineHeight: '1.6'
                                    }}>
                                        {message}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>            
        </div>
    );
};