import React, { useState } from "react";
import axios from "axios";

function App() {
  const [phonenumber, setPhonenumber] = useState("");
  const [headers, setHeaders] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://chimpu.xyz/api/post.php",
        new URLSearchParams({ phonenumber }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setHeaders(response.headers);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
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
