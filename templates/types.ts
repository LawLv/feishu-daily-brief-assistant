type Source = { label: string; url: string };
type Picture = { src: string; caption: string; source: string; date: string };
type Item = { conclusion: string; summary: string; detail: string; sources: Source[]; images: Picture[] };
type Section = { number: string; name: string; tone: string; verdict: string; intro: string; records: Item[] };
export type Brief = { id: string; title: string; period: string; summary: string; sections: Section[]; scope: string; boundary: string; historical: string; published_at: string };
