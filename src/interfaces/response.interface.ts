export interface Response {
    id: string,
    text: string,
    status: 'correct' | 'incorrect',
}