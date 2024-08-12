import { HomeData } from "../../interface/home-listing";

export interface HomeListingState {
    isLoading: boolean;
    list: HomeData | null;
    error: string | null
}