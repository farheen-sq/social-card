
export default interface userType {
    user: {
        avatar_url: string|undefined,
        login: string|null,
        location: string|null,
        following: number,
        followers: number,
        bio: string|null,
        html_url: string|null,
        blog: string,
        email: string|null
    }
}
