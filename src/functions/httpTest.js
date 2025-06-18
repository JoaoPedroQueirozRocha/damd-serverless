const { app } = require('@azure/functions');

app.http('httpTest', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'message',
    handler: async (request, context) => {
        context.log('HTTP trigger function processed a request.');

        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Hello from Azure Functions!',
                timestamp: new Date().toISOString(),
                status: 'success',
                function: 'httpTest',
            }),
        };
    },
});
