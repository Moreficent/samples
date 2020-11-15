const input = document.getElementById('quesinp')

const deck = document.getElementById('deck');

function buildNode(question, answer){
    const col = document.createElement('div');
    col.className = 'col mb-4'

    const card = document.createElement('div');
    card.className = 'card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = question;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = answer;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    col.appendChild(card);
    return col;
}

const btn = document.getElementById('quesbtn')
btn.onclick = () => {
    const question = input.value;
    if (!question){
        console.warn('No Question');
        return;
    }
    input.value = ''
    fetch('answer')
        .then(resp => {
            if(!resp.ok) {
                console.error('Failed to fetch data');
                return;
            }
            return resp.text();
        })
        .then(answer => {
            const node = buildNode(question, answer);
            deck.insertBefore(node, deck.firstChild);
        });
}

console.log('Ho gaya');