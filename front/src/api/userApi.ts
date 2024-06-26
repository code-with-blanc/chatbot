import { User } from "@/store/user/user"

const createShadowUser = async () : Promise<User> => {
    await new Promise((res) => setTimeout(res, 1000))
    return {
        id: 'shadow-1234',
        name: '',
        avatar: '',
    }
}

const userAPI = {
    createShadowUser
}

export default userAPI
