
    async function fetchData() {
        const response = await fetch('data.json');
        const data = await response.json();

        // Event Countdown
        document.getElementById('eventCountdown').innerText = data.eventCountdown + ' Days to Go';

        // Weight Progress
        data.weightProgress.forEach((goal, index) => {
            document.getElementById('weightGoal' + index).innerText = goal.goal + ': ' + goal.progress + '% Complete';
            document.getElementById('progressBar' + index).style.width = goal.progress + '%';
        });

        // Hydration and Nutrition
        document.getElementById('waterConsumed').innerText = data.hydration.waterConsumed;
        document.getElementById('proteinIntake').innerText = data.hydration.proteinIntake;

        // Stress and Mood
        document.getElementById('stressLevel').innerText = 'Stress Level: ' + data.stressMood.stressLevel;
        document.getElementById('mood').innerText = 'Mood: ' + data.stressMood.mood;

        // Weekly Activity
        document.getElementById('caloriesBurned').innerText = 'Total Calories Burned: ' + data.latestActivity.caloriesBurned;
        document.getElementById('mostActive').innerText = 'Most Active Task: ' + data.latestActivity.mostActive;
    }

    window.onload = fetchData;
    