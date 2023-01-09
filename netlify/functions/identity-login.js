/*
exports.handler = async function (event, context) {
    const { identity, user } = context.clientContext;
    // Do stuff and return a response...
    console.log(identity)
    console.log(user)

    return {
        statusCode: 200,
        body: JSON.stringify({ user: user, identity: identity }),
    };
};
*/


const netlifyIdentity = require('netlify-identity-widget')

netlifyIdentity.init()

const currentUser = netlifyIdentity.currentUser()
console.log(currentUser)


netlifyIdentity.on('login', user => console.log('Logged in', user))
netlifyIdentity.on('logout', () => console.log('Logged out'))
