import React, { useEffect, useState } from 'react';
import PublicationCard, { PublicationProps } from './PublicationCard';
import { fetchAndParseBibtex } from '../lib/utils';
import {Button} from "@/components/ui/button.tsx";
import {ExternalLink} from "lucide-react"; // adjust path

const more_url = "https://scholar.google.com/citations?user=7vFzSTcAAAAJ&hl=en&oi=ao"

const Publications = () => {
    const [publications, setPublications] = useState<PublicationProps[]>([]);

    useEffect(() => {
        fetchAndParseBibtex('publications.bib').then(setPublications);
    }, []);

    return (
        <section id="publications" className="bg-secondary/50">
            <div className="container">
                <h2 className="section-title text-center mb-12">My Publications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {publications.map((pub, idx) => (
                        <PublicationCard key={idx} {...pub} />
                    ))}
                </div>

                <div className="p-5 pt-0">
                    <Button asChild variant="secondary" size="default" className="w-full">
                        <a
                            href={more_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            More Publications
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Publications;
