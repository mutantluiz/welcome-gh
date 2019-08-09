# welcome-gh

Access GraphiQL on https://graphql-server-express.glitch.me/graphql

And try the following query

{
  post(id: 1) {
    title
    description
    author {
      name
      age
    }
  },
  posts {
    title
    description
    author {
      name
      age
    }
  }
}