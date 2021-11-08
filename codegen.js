module.exports = {
    schema: [
        {
            'https://optimal-elephant-42.hasura.app/v1/graphql': {
                headers: {
                    Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
                    "x-hasura-admin-secret": "UmMSuHbN1T16uqSGUfllDEcVDHyNXNqfEZrh7tVa6paO8o9xlV8DX1ALyAMvp1l4"
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
