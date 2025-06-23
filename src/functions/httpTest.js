const { app } = require('@azure/functions');

app.http('orders-api', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'orders',
    handler: async (request, context) => {
        const body = await request.json();
        const order = body.order;

        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order: { ...order, status: 'success' },
            }),
        };
    },
});
