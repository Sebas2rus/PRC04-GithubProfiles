export async function getData(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const user = await res.json();
        return user;
    } catch (error) {
        return 'not found';
    }

    // document.getElementById('username').innerHTML = user.login;
    // document.getElementById('name').innerHTML = user.name;
    // document.getElementById('bio').innerHTML = user.blog;
    // document.getElementById('portfolio').innerHTML = user.bio;
    // document.getElementById('image').src = user.avatar_url;
}