export async function getRandomFact() {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'cors'
    });
    const result = await response.json();
    return result.text;
}
