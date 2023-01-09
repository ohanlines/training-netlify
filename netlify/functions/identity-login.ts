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

export { handler };
