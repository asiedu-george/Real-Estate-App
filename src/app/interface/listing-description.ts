export interface ListingDescription {
    data: DescriptionData
}

export interface DescriptionData {
    home: HomeDescription
}

export interface HomeDescription {
    __typename: string
    property_id: string
    last_update_date: string
    last_price_change_date: any
    last_price_change_amount: any
    listing_id: string
    status: string
    href: string
    days_on_market: any
    list_date: string
    create_date: string
    mortgage: Mortgage
    hoa: Hoa
    buyers: any
    description: Description
    pet_policy: any
    assigned_schools: AssignedSchools
    nearby_schools: NearbySchools
    schools: Schools
    products: Products
    list_price: number
    list_price_min: any
    list_price_max: any
    price_per_sqft: number
    community: any
    lead_attributes: LeadAttributes
    flags: Flags
    provider_url: any
    source: Source
    details: Detail[]
    open_houses: any
    tax_history: TaxHistory[]
    location: Location
    branding: Branding[]
    consumer_advertisers: ConsumerAdvertiser[]
    advertisers: Advertiser[]
    photo_count: number
    photos: Photo3[]
    property_history: PropertyHistory[]
    local: Local
    last_sold_price: number
    last_sold_date: string
    estimates: Estimates
    virtual_tours: any
    videos: any
    matterport: any
    terms: any
    monthly_fees: any
    one_time_fees: any
    units: any
}

export interface Mortgage {
    __typename: string
    property_tax_rate: number
    rates_url: string
    insurance_rate: number
    estimate: Estimate
    average_rates: AverageRate2[]
}
  
export interface Estimate {
    __typename: string
    loan_amount: number
    monthly_payment: number
    total_payment: number
    down_payment: number
    average_rate: AverageRate
    monthly_payment_details: MonthlyPaymentDetail[]
}
  
export interface AverageRate {
    __typename: string
    rate: number
    loan_type: LoanType
}
  
export interface LoanType {
    __typename: string
    term: number
}
  
export interface MonthlyPaymentDetail {
    __typename: string
    type: string
    amount: number
    display_name: string
}
  
export interface AverageRate2 {
    __typename: string
    loan_type: LoanType2
    rate: number
}
  
export interface LoanType2 {
    __typename: string
    loan_id: string
}
  
export interface Hoa {
    __typename: string
    fee: number
    historic_fee: any
}
  
export interface Description {
    __typename: string
    baths_consolidated: string
    baths: number
    baths_min: any
    baths_max: any
    heating: any
    cooling: any
    beds: number
    beds_min: any
    beds_max: any
    garage: any
    garage_min: any
    garage_max: any
    pool: any
    sqft: number
    sqft_min: any
    sqft_max: any
    styles: any
    lot_sqft: number
    units: number
    stories: number
    type: string
    sub_type: any
    text: string
    year_built: number
    name: any
}
  
export interface AssignedSchools {
    __typename: string
    schools: School[]
}
  
export interface School {
    __typename: string
    district: District
}
  
export interface District {
    __typename: string
    name: string
    id: string
    phone: any
    student_count: any
    grades: any
}
  
export interface NearbySchools {
    __typename: string
    schools: School2[]
}
  
export interface School2 {
    __typename: string
    assigned?: boolean
    coordinate: Coordinate
    distance_in_miles: number
    district: District2
    education_levels: string[]
    funding_type: string
    grades: string[]
    id: string
    name: string
    parent_rating?: number
    rating?: number
    student_count?: number
}
  
export interface Coordinate {
    __typename: string
    lat: number
    lon: number
}
  
export interface District2 {
    __typename: string
    id: string
    name?: string
}
  
export interface Schools {
    __typename: string
    schools: School3[]
}
  
export interface School3 {
    __typename: string
    assigned?: boolean
    coordinate: Coordinate2
    distance_in_miles: number
    district: District3
    education_levels: string[]
    funding_type: string
    grades: string[]
    id: string
    name: string
    parent_rating?: number
    rating?: number
    student_count?: number
}
  
export interface Coordinate2 {
    __typename: string
    lat: number
    lon: number
}
  
export interface District3 {
    __typename: string
    id: string
    name?: string
}
  
export interface Products {
    __typename: string
    products: string[]
}
  
export interface LeadAttributes {
    __typename: string
    opcity_lead_attributes: OpcityLeadAttributes
    ready_connect_mortgage: ReadyConnectMortgage
    show_contact_an_agent: boolean
    lead_type: string
    show_lead_form: boolean
    disclaimer_text: any
    is_tcpa_message_enabled: any
    show_text_leads: boolean
}
  
export interface OpcityLeadAttributes {
    __typename: string
    flip_the_market_enabled: boolean
    cashback_enabled: boolean
    phones: Phone[]
    local_phone: string
}
  
export interface Phone {
    __typename: string
    number: string
    category: string
}
  
export interface ReadyConnectMortgage {
    __typename: string
    show_contact_a_lender: boolean
    show_veterans_united: boolean
}
  
export interface Flags {
    __typename: string
    is_contingent: any
    is_garage_present: boolean
    is_new_construction: any
    is_pending: any
    is_short_sale: any
    is_foreclosure: any
    is_senior_community: any
    is_for_rent: any
    is_deal_available: any
    is_price_excludes_land: any
    is_promotion_present: any
    is_subdivision: any
    is_plan: any
    is_price_reduced: any
    is_new_listing: boolean
    is_coming_soon: any
}
  
export interface Source {
    __typename: string
    id: string
    disclaimer: Disclaimer
    listing_id: string
    plan_id: any
    spec_id: any
    community_id: any
    name: string
    type: string
    raw: Raw
}
  
export interface Disclaimer {
    __typename: string
    text: string
    href: any
}
  
export interface Raw {
    __typename: string
    style: any
    tax_amount: any
}
  
export interface Detail {
    __typename: string
    category: string
    text: string[]
}
  
export interface TaxHistory {
    __typename: string
    tax: number
    year: number
    assessment: Assessment
}
  
export interface Assessment {
    __typename: string
    building: number
    land: number
    total: number
}
  
export interface Location {
    __typename: string
    address: Address
    county: County
    street_view_url: string
    neighborhoods: Neighborhood[]
}
  
export interface Address {
    __typename: string
    line: string
    street_number: string
    street_name: string
    street_suffix: string
    unit: any
    city: string
    state_code: string
    postal_code: string
    state: string
    coordinate: Coordinate3
}
  
export interface Coordinate3 {
    __typename: string
    lat: number
    lon: number
}
  
export interface County {
    __typename: string
    fips_code: string
}
  
export interface Neighborhood {
    __typename: string
    name: string
    city: string
    level: string
    geo_statistics: GeoStatistics
}
  
export interface GeoStatistics {
    __typename: string
    housing_market: HousingMarket
}
  
export interface HousingMarket {
    __typename: string
    median_price_per_sqft: number
    median_sold_price: number
    median_listing_price: number
    median_days_on_market: number
}
  
export interface Branding {
    __typename: string
    type: string
    photo: any
    name: string
    phone: any
    slogan: any
    accent_color: any
    link: any
}
  
export interface ConsumerAdvertiser {
    __typename: string
    advertiser_id: string
    office_id: string
    agent_id: string
    name: string
    phone?: string
    type: string
    href: string
    slogan: any
    photo: Photo
    show_realtor_logo: boolean
    hours: any
}
  
export interface Photo {
    __typename: string
    href: any
}
  
export interface Advertiser {
    __typename: string
    fulfillment_id: string
    name: string
    type: string
    team_name: any
    email: string
    href: string
    state_license: string
    phones: Phone2[]
    office: Office
    broker: Broker
    photo: Photo2
}
  
export interface Phone2 {
    __typename: string
    number: string
    type: string
    ext: string
}
  
export interface Office {
    __typename: string
    fulfillment_id: string
    name: string
    href: string
    photo: any
    email: string
    phones: Phone3[]
}
  
export interface Phone3 {
    __typename: string
    number: string
    type: string
    ext: string
}
  
export interface Broker {
    __typename: string
    fulfillment_id: string
    name: string
}
  
export interface Photo2 {
    __typename: string
    href: string
}
  
export interface Photo3 {
    __typename: string
    href: string
    type: string
    tags: Tag[]
}
  
export interface Tag {
    __typename: string
    label: string
    probability: number
}
  
export interface PropertyHistory {
    __typename: string
    date: string
    event_name: string
    price: number
    source_name: string
    listing?: Listing
}
  
export interface Listing {
    __typename: string
    photos: Photo4[]
    description: Description2
}
  
export interface Photo4 {
    __typename: string
    href: string
    type: string
    tags?: Tag2[]
}
  
export interface Tag2 {
    __typename: string
    label: string
    probability: number
}
  
export interface Description2 {
    __typename: string
    sqft: number
}
  
export interface Local {
    __typename: string
    noise: Noise
    flood: Flood
}
  
export interface Noise {
    __typename: string
    score: number
    noise_categories: NoiseCategory[]
}
  
export interface NoiseCategory {
    __typename: string
    type: string
    text: string
}
  
export interface Flood {
    __typename: string
    flood_factor_score: number
    fema_zone: string[]
}
  
export interface Estimates {
    __typename: string
    current_values: CurrentValue[]
    historical_values: HistoricalValue[]
    forecast_values: ForecastValue[]
}
  
export interface CurrentValue {
    __typename: string
    source: Source2
    estimate: number
    estimate_high: number
    estimate_low: number
    date: string
}
  
export interface Source2 {
    __typename: string
    type: string
    name: string
}
  
export interface HistoricalValue {
    __typename: string
    source: Source3
    estimates: Estimate2[]
}
  
export interface Source3 {
    __typename: string
    type: string
    name: string
}
  
export interface Estimate2 {
    __typename: string
    estimate: number
    date: string
}
  
export interface ForecastValue {
    __typename: string
    source: Source4
    estimates: Estimate3[]
}
  
export interface Source4 {
    __typename: string
    type: string
    name: string
}
  
export interface Estimate3 {
    __typename: string
    estimate: number
    date: string
}  