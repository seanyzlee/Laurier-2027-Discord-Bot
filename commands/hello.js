module.exports = {
    data: {
        name: 'hello',
        description: "Replies with Hello!"
    },

    run: ({interaction}) => {
        interaction.reply('Hi!')
    }
}