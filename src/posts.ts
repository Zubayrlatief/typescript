import { DateTime } from "luxon";

export interface Post {
    id: string
    title: string
    created: string
}

export const today: Post = {
    id: "1",
    title: "Today",
    created: DateTime.now().toISO()
}

export const thisWeek: Post = {
    id: "1",
    title: "This Week",
    created: DateTime.now().toISO()
}

export const thisMonth: Post = {
    id: "1",
    title: "This Month",
    created: DateTime.now().toISO()
}