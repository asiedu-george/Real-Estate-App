export interface Login {
    email: string,
    password: string
}

export interface LoginResponse {
    login_token: string,
    message: string
}
