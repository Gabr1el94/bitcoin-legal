import {gql} from 'apollo-server';

enum Status {
    Active = 'active',
    Banned = 'banned',
    Legal = 'legal'
}

export const typeDefs = gql`

    type Countrie{
        name:String
        status:Status
    }

    type Query{
        countries:[Countrie]
    }
`;