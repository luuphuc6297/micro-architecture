export interface WorkSpaceAttributes {
    name: string;
    domain: string;
    dropletName?: string;
    description?: string;
    accentColor?: string;
    logoUrl?: string;
    bannerUrl?: string;
}

export interface WorkSpace {
    id: string;
    attributes: WorkSpaceAttributes;
}
