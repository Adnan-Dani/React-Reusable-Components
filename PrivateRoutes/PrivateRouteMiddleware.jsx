const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      // Redirect to the login page if no token is found
      window.location.href = "/";
      return null; // Return null instead of just returning to prevent rendering children
    }
    
    // Decode the JWT token to get its expiration date
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      // Invalid JWT token format
      localStorage.removeItem("token");
      window.location.href = "/";
      return null;
    }
    
    const encodedPayload = tokenParts[1];
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload);
    
    const currentTimestamp = Date.now() / 1000; // Convert to seconds
    
    if (payload.exp && payload.exp < currentTimestamp) {
      // Token has expired, remove it from localStorage
      localStorage.removeItem("token");
      window.location.href = "/";
      return null;
    }
    
    return children;
  }
  import React from 'react'
  
  export default function App() {
    return (
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    )
  }
  