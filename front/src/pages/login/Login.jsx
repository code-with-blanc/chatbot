import { useAuth } from "../../store/auth"

const Login = () => {
    const isLoggedIn = useAuth(state => state.isLoggedIn)
    const setIsLoggedIn = useAuth(state => state.setIsLoggedIn)
    return (
        <div>
            <div>User is {isLoggedIn ? '' : 'not'} logged in</div>
            <button onClick={setIsLoggedIn(!isLoggedIn)}>Toggle</button>
        </div>
    )
}

export default Login;
