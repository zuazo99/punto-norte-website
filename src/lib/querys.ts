import type { EventsData } from "~/types.ts";

const SPACE_ID = "ijw8sdaj87dg";
const ACCESS_TOKEN = "7BszwQR2Y5XyThmASJ2PbKIbYGZ0HjFjluadiGiKuSw";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export async function fetchEvents(): Promise<EventsData> {
  const query = `
    query {
      eventsCollection {
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

export async function fetchEventById(id: string): Promise<any> {
  const query = `
    query {
      events(id: "${id}") {
        date
      }
    }
  `;
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
