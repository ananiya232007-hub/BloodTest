from flask import Flask, render_template, request, redirect, url_for, session, flash
import os
from werkzeug.utils import secure_filename
from models.ocr_engine import extract_text_from_file
from models.analyzer import (
    analyze_report, get_doctor_summary,
    get_food_recommendations, get_risk_prediction, check_emergency
)
from models.health_score import calculate_health_score, predict_disease

app = Flask(__name__)
app.secret_key = "blood_test_ai_secret"

UPLOAD_FOLDER = "static/uploads"
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg"}
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

SUPPORTED_LANGS = ["en", "ta", "hi", "ml", "kn"]


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        session["user"] = request.form.get("username")
        flash("Login successful!", "success")
        return redirect(url_for("dashboard"))
    return render_template("login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        flash("Registered! Please login.", "success")
        return redirect(url_for("login"))
    return render_template("register.html")


@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("home"))


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/upload", methods=["POST"])
def upload():
    file = request.files.get("report")
    if not file or file.filename == "":
        flash("No file selected", "error")
        return redirect(url_for("dashboard"))

    if allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(filepath)

        # Get language from form
        lang = request.form.get("lang", "en")
        if lang not in SUPPORTED_LANGS:
            lang = "en"

        # ============ DEBUG ============
        print("\n" + "=" * 60)
        print(">>> LANGUAGE RECEIVED:", lang)
        print(">>> FILE:", filename)
        print("=" * 60)

        text = extract_text_from_file(filepath)
        print("\n>>> EXTRACTED TEXT (first 500 chars):")
        print(repr(text[:500]) if text else "[EMPTY TEXT]")
        print("=" * 60)

        analysis = analyze_report(text, lang)
        print("\n>>> ANALYSIS RESULT:")
        print(analysis if analysis else "[EMPTY ANALYSIS]")
        print("=" * 60 + "\n")
        # ============ DEBUG END ============

        score = calculate_health_score(analysis)
        disease = predict_disease(analysis)

        summary = get_doctor_summary(analysis, lang)
        foods = get_food_recommendations(analysis, lang)
        risks = get_risk_prediction(analysis, lang)
        emergency = check_emergency(analysis, lang)

        return render_template("result.html",
                               analysis=analysis,
                               score=score,
                               disease=disease,
                               summary=summary,
                               foods=foods,
                               risks=risks,
                               emergency=emergency,
                               lang=lang,
                               hide_lang_switch=True)

    flash("Invalid file type. Use PDF, JPG, or PNG.", "error")
    return redirect(url_for("dashboard"))


if __name__ == "__main__":
    app.run(debug=True)