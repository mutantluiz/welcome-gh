const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = graphql



const posts = [
    {
        title: 'Javascript post',
        description: 'Ecmascript 2015',
        author: 'Luiz'
    },
    {
        title: 'Python',
        description: 'artificial intelligence',
        author: 'John'
    }
]

const authors = {
    'Luiz': {
        name: 'Luiz Filho',
        age: 30
    },
    'John': {
        name: 'John Doe',
        age: 31
    }
}

const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        author: {
            type: authorType,
            resolve: (source, params) => {
                return authors[source.author]
            }
        }
    }
})

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        post: {
            type: postType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (source, { id }) => {
                return posts[id]
            }
        },
        posts: {
            type: new GraphQLList(postType),
            resolve: () => {
                return posts
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: queryType
})

module.exports = schema