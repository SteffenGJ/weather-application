const resolvers = {
  Query: {
    getCurrent: (_, { location }, { dataSources }) => {
      return dataSources.weatherAPI.getCurrentByLocation(location);
    },
    getSuggestions: (_, { text }, { dataSources }) => {
      return dataSources.weatherAPI.getSuggestionsByText(text);
    },
  },
};

module.exports = resolvers;
