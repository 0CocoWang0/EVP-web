import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_SECRET });
const newsDataSourceId = process.env.NOTION_NEWS_DATASOURCE_ID!;
const mediaDataSourceId = process.env.NOTION_MEDIA_DATASOURCE_ID!;
const pubsDataSourceId = process.env.NOTION_PUBLICATIONS_DATASOURCE_ID!;
const teamDataSourceId = process.env.NOTION_TEAM_DATASOURCE_ID!;

export interface NewsItem {
  title: string;
  date: string;
  description: string;
  category: string;
  emoji: string;
  images: string[];
}

export interface PublicationItem {
  title: string;
  authors: string;
  journal: string;
  volume: string;
  year: number;
  doi: string;
  images: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  email: string;
  photo: string[];
  status: string;
  formerRole: string;
  currentPosition: string;
  order: number;
}

export interface MediaItem {
  title: string;
  source: string;
  description: string;
  url: string;
  date: string;
  images: string[];
}

function getUrl(
  prop: PageObjectResponse["properties"][string] | undefined,
): string {
  if (!prop || prop.type !== "url") return "";
  return prop.url ?? "";
}

function getNumber(
  prop: PageObjectResponse["properties"][string] | undefined,
): number {
  if (!prop || prop.type !== "number") return 0;
  return prop.number ?? 0;
}

function getText(
  prop: PageObjectResponse["properties"][string] | undefined,
): string {
  if (!prop) return "";
  if (prop.type === "title") {
    return prop.title.map((t) => t.plain_text).join("");
  }
  if (prop.type === "rich_text") {
    return prop.rich_text.map((t) => t.plain_text).join("");
  }
  if (prop.type === "select") {
    return prop.select?.name ?? "";
  }
  if (prop.type === "date") {
    return prop.date?.start ?? "";
  }
  return "";
}

function getFiles(
  prop: PageObjectResponse["properties"][string] | undefined,
): string[] {
  if (!prop || prop.type !== "files") return [];
  return prop.files.map((f) =>
    f.type === "file" ? f.file.url : f.external.url,
  );
}

export async function getMediaItems(): Promise<MediaItem[]> {
  const response = await notion.dataSources.query({
    data_source_id: mediaDataSourceId,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const p = page.properties;
      return {
        title: getText(p.Name),
        source: getText(p.Source),
        description: getText(p.Description),
        url: getUrl(p.URL),
        date: getText(p.Date),
        images: getFiles(p.Image),
      };
    });
}

export async function getPublications(): Promise<PublicationItem[]> {
  const response = await notion.dataSources.query({
    data_source_id: pubsDataSourceId,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const p = page.properties;
      return {
        title: getText(p.Title),
        authors: getText(p.Authors),
        journal: getText(p.Journal),
        volume: getText(p.Volume),
        year: getNumber(p.Year),
        doi: getUrl(p.DOI),
        images: getFiles(p.Image),
      };
    });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const response = await notion.dataSources.query({
    data_source_id: teamDataSourceId,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const p = page.properties;
      return {
        name: getText(p.Name),
        role: getText(p.Role),
        department: getText(p.Department),
        bio: getText(p.Bio),
        email: getText(p.Email),
        photo: getFiles(p.Photo),
        status: getText(p.Status),
        formerRole: getText(p["Former Role"]),
        currentPosition: getText(p["Current Position"]),
        order: parseInt(getText(p.Order), 10) || 0,
      };
    });
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const response = await notion.dataSources.query({
    data_source_id: newsDataSourceId,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const p = page.properties;
      return {
        title: getText(p.Title),
        date: getText(p.Date),
        description: getText(p.Description),
        category: getText(p.Category),
        emoji: getText(p.Emoji),
        images: getFiles(p.Images),
      };
    });
}
