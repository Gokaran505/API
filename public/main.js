const type = document.getElementById('type');
const f = document.getElementById('first');
const s = document.getElementById('second');
const postTemplate = document.getElementById('single-or-double-jokes')
const listElement = document.getElementById('joke-section')
const btn = document.getElementById('btn');

btn.addEventListener('click', show);

async function show() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h1').textContent = data.category.toUpperCase();
        if (data.type != 'twopart') {
            postEl.querySelector('p').textContent = data.joke;
        } else {
            postEl.querySelector('p').textContent = `${data.setup}\n${data.delivery}`;
        }
        listElement.append(postEl);
        setTimeout(() => {
            location.reload(true)
        }, 5000);
        console.log(data.type)
    } catch (error) {
        console.log(error);
    }
}
