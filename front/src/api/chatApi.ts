let botMsgCount = 1000;

export const sendMessage = (msg: string) => {
    return new Promise((resolve) => {
        botMsgCount += 1;
        setTimeout(() => {
            resolve({
                botResponse: {
                    id: botMsgCount,
                    message: 'This is the bot response',
                    userId: 'bot',
                },
            })
        }, 1000)
        return null
    })
}
