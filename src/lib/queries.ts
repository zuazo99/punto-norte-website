import type { EventsData } from "~/types.ts";

const SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN;
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export async function queryGraphQL(query: string): Promise<EventsData> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  return json.data;
}

export async function fetchFutureEvents(fromDate: string): Promise<EventsData> {
  const query = `
    query {
      eventCollection(
        where: {
          date_gte: "${fromDate}"
        }
      ) {
        items {
          sys {
            id
          }
          name
          date
          price
          image {
            url
          }
        }
      }
    }
  `;
  return queryGraphQL(query);
}

export async function fetchPastEvents(untilDate: string): Promise<EventsData> {
  const query = `
    query {
      eventCollection(
        where: {
          date_lt: "${untilDate}"
        }
      ) {
        items {
          sys {
            id
          }
          name
          date
          image {
            url
          }
        }
      }
    }
  `;
  return queryGraphQL(query);
}

export async function fetchEventById(id: string): Promise<any> {
  const query = `
    query {
      event(id: "${id}") {
        name
        date
        image {
          url
        }
        content {
          json
        }
        location {
          lat
          lon
        }
        locationAddress
        locationCity
      }
    }
  `;
  return queryGraphQL(query);
}
