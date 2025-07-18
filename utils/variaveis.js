export function pegarBaseURL() {
    const baseURL = __ENV.BASE_URL || 'http://localhost:3000'
    
    return baseURL
}