import {gql} from 'apollo-server';


export default gql`
  type Query {
    """
    test message
    """
    testMessage: String!
  }
`;