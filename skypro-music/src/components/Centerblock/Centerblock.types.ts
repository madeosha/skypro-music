export type Track = {
    id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string;
    duration_in_seconds: number;
    album: string;
    logo: string;
    track_file: string;
    stared_user: Array<string | number>;
};