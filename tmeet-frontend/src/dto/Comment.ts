import User from "./User";

export interface Comment {
    id?: number;
    content: string;
    created?: string;
    // updated?: string;
    meeting_id?: number;
    user?: User;
}