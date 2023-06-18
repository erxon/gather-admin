import crypto from 'crypto'

const users: { createdAt: number; username: string; hash: string; salt: string }[] = []

export function createUser({ username, password }: { username: string, password: string }) {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
    const user = {
        createdAt: Date.now(),
        username,
        hash,
        salt
    }
    users.push(user)
    return {username, createdAt: Date.now()}
}

export function findUser(username: string){
    return users.find((user) => user.username === username)
}

export function validatePassword(user: {salt: string, hash: string}, inputPassword: string){
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex')
    const passwordMatch = user.hash === inputHash
    return passwordMatch;
}