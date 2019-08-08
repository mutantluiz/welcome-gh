const express = require("express")
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4446, () => {
    console.log('App listening on port 4446!')
})
