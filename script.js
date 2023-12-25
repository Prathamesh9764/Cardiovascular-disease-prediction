function predict() {
    // Get user input
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var cholesterol = document.getElementById('cholesterol').value;
    var bloodPressure = document.getElementById('bloodPressure').value;

    // Perform prediction (dummy result, replace with actual prediction logic)
    var prediction = makePrediction(age, gender, cholesterol, bloodPressure);

    // Display result
    displayResult(prediction);
}

function makePrediction(age, gender, cholesterol, bloodPressure) {
    // Replace this with actual machine learning model prediction logic
    // In a real-world scenario, you would use a trained model for predictions
    // For simplicity, here is a dummy prediction
    var probability = Math.random(); // Dummy probability

    return probability > 0.5 ? 'High Risk' : 'Low Risk';
}

function displayResult(prediction) {
    // Show result container
    var resultContainer = document.getElementById('result');
    resultContainer.style.display = 'block';

    // Display prediction result
    var resultElement = document.getElementById('predictionResult');
    resultElement.textContent = 'The predicted risk is: ' + prediction;
}
