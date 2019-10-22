module.exports = {
    getToken: (user) => {
        const token = jwt.sign({
            email: user.email
        }, secretKey);
        return token;
    },

    isTokenValid: (token) => {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    }
}