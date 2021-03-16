// import the GQL tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql`

    type Auth {
        token: ID!
        user: User
    }

    type Thought {
        _id: ID
        thoughtText: String
        username: String
        createdAt: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
    }
`;
                                                            // User replaced with Auth
// export the typeDefs
module.exports = typeDefs;