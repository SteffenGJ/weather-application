const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    getCurrent(location: String!): Result!
    getSuggestions(text: String): [Suggestion]
  }

  type Result {
    location: Location!
    current: Current!
  }

  type Suggestion {
    id: ID!
    name: String!
    region: String!
    country: String!
    lat: Float!
    lon: Float!
  }

  type Location {
    name: String!
    region: String!
    country: String!
    lat: Float!
    lon: Float!
    tz_id: String!
    localtime: String!
  }

  type Current {
    last_updated: String!
    temp_c: Float!
    condition: Condition!
    wind_kph: Float!
    wind_dir: String!
    precip_mm: Float!
    feelslike_c: Float!
    uv: Float!
  }

  type Condition {
    text: String!
    icon: String!
    code: Int!
  }
`;

module.exports = typeDefs;
