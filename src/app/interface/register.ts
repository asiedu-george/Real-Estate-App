export interface Register {
    additional_properties: {
        address: {city: string},
        profile_picture: string
    },
    email: string,
    first_name: string,
    last_name: string,
    password: string
}

export interface RegisterResponse {
    message: string
}