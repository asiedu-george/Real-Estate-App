export interface ListingFilters {
    status: string[];
    minPrice?: number | null;
    maxPrice?: number | null;
    minBeds?: number | null;
    maxBeds?: number | null;
    minBaths?: number | null;
    maxBaths?: number | null;
    homeTypes?: string[];
}