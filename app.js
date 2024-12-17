
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();

    // Weekly Activity
    document.getElementById('weeklyCalories').innerText = data.weeklyActivity.totalCalories;
    document.getElementById('topActivity').innerText = data.weeklyActivity.topActivity;

    // Hydration and Nutrition
    document.getElementById('waterConsumed').innerText = data.hydration.waterConsumed;
    document.getElementById('proteinIntake').innerText = data.hydration.proteinIntake;

    // Stress and Mood
    document.getElementById('stressLevel').innerText = 'Stress Level: ' + data.stressMood.stressLevel;
    document.getElementById('mood').innerText = 'Mood: ' + data.stressMood.mood;

    // Reflection Journal
    document.getElementById('reflectionDate').innerText = data.reflectionJournal.lastEntry;

    // Weight Milestones
    document.getElementById('weightMilestone').innerText = data.weightProgress.currentProgress;
}
window.onload = fetchData;
