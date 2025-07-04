import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import bibtexParse from 'bibtex-parse-js';
import { PublicationProps } from '../components/PublicationCard'; // adjust import path


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fetches a BibTeX file from public directory and parses it into PublicationProps[]
 * @param filename - name of the bibtex file inside public directory (e.g. "publications.bib")
 * @returns Promise resolving to array of PublicationProps
 */
export async function fetchAndParseBibtex(filename: string): Promise<PublicationProps[]> {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
    }
    const bibtexString = await response.text();

    const entries = bibtexParse.toJSON(bibtexString);

    return entries.map(entry => {
      const fields = entry.entryTags;

      const authorsRaw = fields.author || '';
      const authors = authorsRaw.replace(/\s+/g, ' ').trim();

      const venue = fields.journal || fields.booktitle || '';

      const year = fields.year ? parseInt(fields.year, 10) : 0;

      const title = fields.title || '';

      const tagsRaw = fields.keywords || '';
      const tags = tagsRaw
          ? tagsRaw.split(',').map(tag => tag.trim())
          : [];

      let url = fields.url || '';
      if (!url && fields.doi) {
        url = `https://doi.org/${fields.doi}`;
      }

      return {
        title,
        authors,
        venue,
        year,
        tags,
        url: url || undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching or parsing BibTeX:', error);
    return [];
  }
}

export async function fetchUpdateDate() {
  const url = 'https://api.github.com/repos/abhishekbisht1429/abhishekbisht1429.github.io/branches/main';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  return new Date(data.commit.commit.author.date); // ISO date string
}

