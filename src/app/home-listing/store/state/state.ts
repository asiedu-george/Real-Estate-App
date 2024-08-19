import { HomeData } from "../../../interface/home-listing";
import { DescriptionData } from "../../../interface/listing-description";
import { LoginResponse } from "../../../interface/login";

export interface HomeListingState {
    isLoading: boolean;
    list: HomeData | null;
    error: string | null;
}

export interface HomeListingDetailsState {
    isLoading: boolean;
    details: DescriptionData | null;
    error: string | null;
}

export interface LoginSate {
    isLoading: boolean;
    loggedIn: LoginResponse | null;
    error: string | null;
}