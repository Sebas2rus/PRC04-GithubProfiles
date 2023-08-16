import { getData } from './getData.js';


export async function writeData(username) {
    const user = await getData(username)

    document.getElementById('username').innerHTML = user.login;
    document.getElementById('name').innerHTML = user.name;
    document.getElementById('bio').innerHTML = user.blog;
    document.getElementById('portfolio').innerHTML = user.bio;
    document.getElementById('image').src = user.avatar_url;

    return user;
}