import { writeData } from './writeData.js';

// Get username from input - form


// Execute function to write the user info
const form = document.getElementById('searchForm')
export function eventHandler(e) {
    const username = document.getElementById('search').value
    validateData(username)
    e.preventDefault();
    form.reset()
}
form.addEventListener('submit', eventHandler)

const formi = document.getElementById('searchFormi')
export function eventHandleri(e) {
    const username = document.getElementById('searchi').value
    validateData(username)
    e.preventDefault();
    formi.reset()
}
formi.addEventListener('submit', eventHandleri)


const formii = document.getElementById('searchFormii')
console.log(formii);
export function eventHandlerii(e) {
    console.log(e);
    const username = document.getElementById('searchii').value
    console.log(username);
    validateData(username)
    e.preventDefault();
    formii.reset()
}
formii.addEventListener('submit', eventHandlerii)



// Defines what content to render depending on the information
export async function validateData(username) {
    const data = await writeData(username)
    console.log(data);
    if (data && data?.message == 'Not Found') {
        const searchView = document.getElementById('searchView').style.display = 'none';
        const foundView = document.getElementById('foundView').style.display = 'none';
        const notFoundView = document.getElementById('notFoundView').style.display = 'block';

    } else if (data && data?.login != '') {
        const searchView = document.getElementById('searchView').style.display = 'none';
        const notFoundView = document.getElementById('notFoundView').style.display = 'none';
        const foundView = document.getElementById('foundView').style.display = 'block';

    }
}
