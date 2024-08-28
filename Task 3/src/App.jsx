import React, { useState } from 'react';

function App() {
    const [phonenumber, setPhonenumber] = useState('');
    const [headers, setHeaders] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://chimpu.xyz/api/post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phonenumber })
            });

            // Capture headers
            const headersObj = {};
            response.headers.forEach((value, key) => {
                headersObj[key] = value;
            });
            setHeaders(headersObj);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Submit Phone Number</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <h2>Response Headers:</h2>
            <pre>{JSON.stringify(headers, null, 2)}</pre>
        </div>
    );
}

export default App;
