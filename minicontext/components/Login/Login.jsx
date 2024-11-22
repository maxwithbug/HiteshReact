import React from 'react';
import UserContext from '../../context/UserContext';
import DebounceHook from '../../hooks/debounceHook';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Debounced values
    const debouncedUsername = DebounceHook(username, 500);
    const debouncedPassword = DebounceHook(password, 500);

    // Accessing from context API 
    const { setUser } = React.useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username: debouncedUsername, password: debouncedPassword });
    };

    React.useEffect(() => {
        console.log(debouncedUsername, debouncedPassword); // Logs the debounced values after user stops typing
    }, [debouncedUsername, debouncedPassword]);

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
