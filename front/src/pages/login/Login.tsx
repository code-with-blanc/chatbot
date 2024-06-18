import { Input } from "@/components/ui/input"
import { useAuth } from "../../store/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Login = () => {
    const isLoggedIn = useAuth(state => state.isLoggedIn)
    const setIsLoggedIn = useAuth(state => state.setIsLoggedIn)
    return (
        <div className="w-full h-full bg-background flex flex-col items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;
