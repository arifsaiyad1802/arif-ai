import {Polls} from './polls';

export interface PollsAllData {
    hits: Array<Polls>;
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
    advancedSyntax: string;
    processingTimeMS: number;
}
