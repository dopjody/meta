export interface SectionItem {
    title: string;
    desc: string;
}

export interface Section {
    title?: string;
    type: "text" | "grid" | "list" | "team";
    content?: string;
    items?: (string | SectionItem)[];
}

export interface PageData {
    title: string;
    subtitle: string;
    sections: Section[];
}
