function calculate1RM(bodyWeight, weight, reps) {
    // Modified calculation using the Epley formula to include body weight and reps in reserve
    return ((bodyWeight + weight) * (1 + 0.0333 * reps)) - bodyWeight;
}

function calculatePercentage(weight, oneRM) {
    return (weight / oneRM) * 100;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('1rm-form');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const bodyWeight = parseFloat(document.getElementById('bodyWeight').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const reps = parseInt(document.getElementById('reps').value);
        const rir = parseInt(document.getElementById('rir').value);

        try {
            if (isNaN(bodyWeight) || isNaN(weight) || isNaN(reps) || isNaN(rir)) {
                throw new Error('Veuillez entrer des valeurs valides.');
            }

            const oneRM = calculate1RM(bodyWeight, weight, reps, rir);
            const percentage = calculatePercentage(weight, oneRM);
            resultElement.textContent = `Votre 1RM estimé est : ${oneRM.toFixed(2)} kg. Vous avez soulevé ${percentage.toFixed(2)}% de votre 1RM.`;
        } catch (error) {
            resultElement.textContent = error.message;
        }
    });
});