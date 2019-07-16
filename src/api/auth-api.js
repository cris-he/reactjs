export function signIn(user) {
    return {
        username: '蔡徐坤',
        token: 'ctrl'
    }
}

export async function signUp(user) {
    return true;
}

export async function signOut() {
    return false;
}