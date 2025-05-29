import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface PublicationProps {
    title: string;
    authors: string;
    venue: string; // journal or conference name
    year: number;
    tags: string[];
    url?: string; // link to paper (DOI, PDF, etc.)
}


const PublicationCard = ({
                             title,
                             authors,
                             venue,
                             year,
                             tags,
                             url,
                         }: PublicationProps) => {
    return (
        <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-border/50">
            <CardContent className="flex-grow p-5 space-y-3">
                <h3 className="text-lg font-heading font-semibold">{title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{authors}</p>
                <p className="text-sm italic text-muted-foreground">
                    {venue}, {year}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-2 py-1">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            {url && (
                <CardFooter className="p-5 pt-0">
                    <Button asChild variant="default" size="sm" className="w-full">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Publication
                        </a>
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
};

export default PublicationCard;
