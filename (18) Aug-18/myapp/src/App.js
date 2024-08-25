import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            {!isLoggedIn && <Login onLogin={handleLogin} />}
        </>
    );
}

export default App;
