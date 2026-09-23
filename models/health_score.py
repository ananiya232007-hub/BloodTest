def calculate_health_score(analysis):
    if not analysis:
        return {"score": 0, "level": "No Data"}
    total = len(analysis)
    normal = sum(1 for i in analysis if i["status"] == "Normal")
    score = int((normal / total) * 100)

    if score >= 90:
        level = "Excellent"
    elif score >= 70:
        level = "Good"
    elif score >= 50:
        level = "Moderate Risk"
    else:
        level = "High Risk"

    return {"score": score, "level": level}


def predict_disease(analysis):
    predictions = []
    values = {i["parameter"]: i for i in analysis}

    if values.get("Hemoglobin", {}).get("status") == "Low":
        predictions.append("Possible Anemia")
    if values.get("WBC", {}).get("status") == "High":
        predictions.append("Possible Infection")
    if values.get("Platelets", {}).get("status") == "Low":
        predictions.append("Possible Thrombocytopenia")
    if values.get("Glucose", {}).get("status") == "High":
        predictions.append("Possible Diabetes Risk")

    if not predictions:
        predictions.append("No major abnormalities detected")
    return predictions