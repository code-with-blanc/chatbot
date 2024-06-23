export interface Message {
    id: number;
    message: string;
    user: User;
}

export interface User {
    id: number;
    name: string;
    avatar: string;
}

const makeMessages = (user_message_list: Array<[User, string]>) => (
    user_message_list.map(([user, msg], idx) => (
        {
            id: idx,
            message: msg,
            user: user
        }
    ))
)

export const appUser = {
    id: 1,
    name: "Jon Doe",
    avatar: ""
} as User;

export const aiUser = {
    id: 1000,
    name: "AI Bot",
    avatar: "",
} as User;

export const sampleMessages = makeMessages([
    [ appUser, 'Hey, Jakob'],
    [ aiUser, 'Hey!'],
    [ appUser, 'How are you?'],
    [ aiUser, 'I am good, you?'],
    [ appUser, 'I am good too!'],
    [ aiUser, 'That is good to hear!'],
    [ appUser, 'How has your day been so far?'],
    [ aiUser, 'It has been good. I went for a run this morning and then had a nice breakfast. How about you?'],
    [ appUser, 'I had a relaxing day. Just catching up on some reading.'],
]);
