import { gql } from "@apollo/client";

export const GET_WEATHER_DATA = gql`
  query Query($location: String!) {
    getCurrent(location: $location) {
      current {
        temp_c
        condition {
          icon
        }
      }
    }
  }
`;

export const GET_OPTIONS_BY_TEXT = gql`
  query Query($text: String!) {
    getSuggestions(text: $text) {
      name
      country
    }
  }
`;

export const GET_INDEPTH_DATA_BY_LOCATION = gql`
  query Query($location: String!) {
    getCurrent(location: $location) {
      current {
        temp_c
        wind_kph
        wind_dir
        precip_mm
        feelslike_c
        uv
        condition {
          icon
          text
        }
      }
      location {
        country
        name
        region
        localtime
        tz_id
      }
    }
  }
`;
