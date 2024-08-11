import { HomeSearchResult } from "../../interface/listing";

export interface HomeListingState {
    isLoading: boolean;
    data: HomeSearchResult | null;
    error: string | null
}