const bcrypt = require('bcrypt')

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'hmis_api_user', password: '$2b$10$I8UWtQdthNW1eFn8J8fRtOqACzEUDAjzdlpUJp84kFFw1w6GYPiI2', firstName: 'HMIS', lastName: 'Api User' }];

module.exports = {
    authenticate,
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
