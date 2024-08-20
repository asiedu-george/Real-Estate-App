export interface HomeListingResponse {
    data: HomeData
}
  
export interface HomeData {
    home_search: HomeSearchResult
}
  
export interface HomeSearchResult {
    __typename: string
    count: number
    total: number
    results: Result[]
}
  
export interface Result {
    __typename: string
    property_id: string
    listing_id: string
    plan_id: any
    status: string
    photo_count?: number
    branding: Branding[]
    location: Location
    open_houses?: OpenHouse[]
    description: Description
    virtual_tours?: VirtualTour[]
    matterport: boolean
    advertisers: Advertiser[]
    flags: Flags
    source: Source
    pet_policy?: PetPolicy
    community: any
    primary_photo?: PrimaryPhoto
    href: string
    list_price?: number
    list_price_min?: number
    list_price_max?: number
    price_reduced_amount?: number
    estimate?: Estimate
    lead_attributes: LeadAttributes
    last_sold_date?: string
    list_date: string
    products?: Products
    last_sold_price?: number
}
  
export interface Branding {
  __typename: string
  photo?: string
  name?: string
  phone: any
  link: any
}

export interface Location {
  __typename: string
  address: Address
  street_view_url: string
  county: County
}

export interface Address {
  __typename: string
  city: string
  line: string
  street_name: string
  street_number: string
  street_suffix?: string
  country: string
  postal_code: string
  state_code: string
  state: string
  coordinate: Coordinate
}

export interface Coordinate {
  __typename: string
  lat: number
  lon: number
  accuracy: any
}

export interface County {
  __typename: string
  fips_code: string
}

export interface OpenHouse {
  __typename: string
  start_date: string
  end_date: string
  description?: string
  time_zone: string
}

export interface Description {
  __typename: string
  sub_type?: string
  type: string
  beds?: number
  baths?: number
  lot_sqft?: number
  sqft?: number
  beds_max?: number
  beds_min?: number
  sqft_max?: number
  sqft_min?: number
  baths_full?: number
  baths_half?: number
  baths_min?: number
  baths_max?: number
  baths_full_calc?: number
  baths_partial_calc?: number
}

export interface VirtualTour {
  __typename: string
  href: string
}

export interface Advertiser {
  __typename: string
  fulfillment_id?: string
  name?: string
  email?: string
  href?: string
  slogan?: string
  type: string
}

export interface Flags {
  __typename: string
  is_price_reduced?: boolean
  is_new_construction?: boolean
  is_foreclosure: any
  is_plan: any
  is_new_listing: boolean
  is_coming_soon: any
  is_contingent?: boolean
  is_pending?: boolean
}

export interface Source {
  __typename: string
  agents?: Agent[]
  id: string
  type: string
  spec_id: any
  plan_id: any
  listing_href: any
  listing_id: string
}

export interface Agent {
  __typename: string
  id: string
  agent_id: string
  agent_name?: string
  office_id: string
  office_name?: string
}

export interface PetPolicy {
  __typename: string
  cats: boolean
  dogs: boolean
}

export interface PrimaryPhoto {
  __typename: string
  href: string
}

export interface Estimate {
  __typename: string
  estimate: number
}

export interface LeadAttributes {
  __typename: string
  lead_type: string
  show_contact_an_agent: boolean
  opcity_lead_attributes: OpcityLeadAttributes
}

export interface OpcityLeadAttributes {
  __typename: string
  flip_the_market_enabled: boolean
}

export interface Products {
  __typename: string
  brand_name?: string
  products: string[]
}  