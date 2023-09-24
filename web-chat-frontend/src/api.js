const BASE_URL = "http://127.0.0.1:5000";  // Adjust this to your Flask API URL.

export const login = async (username, password) => {
    try {
        console.log("FRONTEND login");
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed.');
        }

        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (username, password) => {
    try {
        console.log("ATTEMPTING TO REGISTER" + username,password);
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed.');
        }

        return data;
        
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
}