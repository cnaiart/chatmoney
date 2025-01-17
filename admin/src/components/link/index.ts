export enum LinkTypeEnum {
    'SHOP_PAGES' = 'shop',
    'CREATIVE_PICKER' = 'creative',
    'CUSTOM_LINK' = 'custom'
}

export interface Link {
    path: string
    name?: string
    type: string
    query?: Record<string, any>
}
