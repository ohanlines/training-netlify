const netlifyIdentity = require('netlify-identity-widget')

exports.handler = async (event, context) => {
    console.log("=== CONSOLE LOG ===")
    console.log("\n=== EVENT ===\n")
    console.log(event)

    console.log("\n=== CONTEXT ===\n")
    console.log(context)
    return {
        statusCode: 200,

    }
}

/*
exports.handler = async (event, context) => {
  netlifyIdentity.init()

  const currentUser = netlifyIdentity.currentUser()
  console.log(currentUser)

  netlifyIdentity.on('login', user => console.log('Logged in', user))
  netlifyIdentity.on('logout', () => console.log('Logged out'))

  return {
    statusCode: 200,
    body: 'Identity widget initialized'
  }
}
*/

/*
 // === TypeScript Code ===
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
    const { identity, user } = context.clientContext;
    console.log('logging');
    console.log(identity);
    console.log(user);
    // Do stuff and return a response...
    return {
        statusCode: 200,
        //body: JSON.stringify({ url: user.url, email: identity.email }),
    };
};
*/
