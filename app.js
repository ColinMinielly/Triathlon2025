
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();

    document.getElementById('waterConsumed').innerText = data.hydration.waterConsumed;
    document.getElementById('proteinIntake').innerText = data.hydration.proteinIntake;
    document.getElementById('stressLevel').innerText = 'Stress Level: ' + data.stressMood.stressLevel;
    document.getElementById('mood').innerText = 'Mood: ' + data.stressMood.mood;
    document.getElementById('reflectionDate').innerText = data.reflectionJournal.lastEntry;
}
window.onload = fetchData;
