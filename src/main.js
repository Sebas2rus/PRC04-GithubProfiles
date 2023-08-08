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


// Defines what content to render depending on the information
export async function validateData(username) {
    const data = await writeData(username)
    if (data && data?.message == 'Not Found') {
        document.location.replace('http://127.0.0.1:5500/pages/notFound.html')
    }
    if (data && data?.login != '') {
        document.location.replace('http://127.0.0.1:5500/pages/found.html')
    }
}
