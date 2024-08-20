export interface ListingFilters {
    postal_code: string;
    status: string[];
    list_price?: Range;
    type?: string[];
}

export interface Range {
    min: number, 
    max?: number
}

export enum Status {
    SOLD = 'sold',
    FOR_RENT = 'for_rent',
    FOR_SALE = 'for_sale'
}
  
export enum HomeType {
    APARTMENT = 'apartment',
    CONDOS = 'condos',
    MULTI_FAMILY = 'multi_family',
    TOWNHOMES = 'townhomes',
    LAND = 'land',
    DUPLEX_TRIPLEX = 'duplex_triplex'
}