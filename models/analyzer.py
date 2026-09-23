import re

NORMAL_RANGES = {
    "Hemoglobin": (12, 16),
    "WBC": (4000, 11000),
    "Platelets": (150000, 450000),
    "RBC": (4.5, 5.9),
    "Glucose": (70, 100),
}


# ============================================================
#  MULTILINGUAL TRANSLATIONS
# ============================================================

TRANSLATIONS = {
    "en": {
        "condition_healthy": "✅ Healthy",
        "condition_anemia": "Mild Anemia",
        "condition_infection": "Possible Infection",
        "condition_low_platelets": "Low Platelets",
        "condition_high_sugar": "High Sugar",
        "condition_minor": "Minor abnormality",
        "symptom_none": "No symptoms detected",
        "symptom_tired": "Tiredness",
        "symptom_weak": "Weakness",
        "symptom_dizzy": "Dizziness",
        "symptom_pale": "Pale skin",
        "symptom_fever": "Fever",
        "symptom_bodypain": "Body pain",
        "symptom_fatigue": "Fatigue",
        "symptom_bruising": "Easy bruising",
        "symptom_gums": "Bleeding gums",
        "symptom_urination": "Frequent urination",
        "symptom_thirst": "Thirst",
        "rec_healthy": "Keep up your healthy lifestyle!",
        "rec_general": "Consult a doctor. Eat a balanced diet and stay hydrated.",
        "rec_upload": "Upload a valid report.",
        "advice_normal": "Value within normal range.",
        "advice_hb_low": "Possible anemia. Eat iron-rich foods.",
        "advice_hb_high": "Stay hydrated. Consult a doctor.",
        "advice_wbc_high": "Possible infection. Consult a physician.",
        "advice_wbc_low": "Low immunity. Consult a doctor.",
        "advice_plt_low": "Possible thrombocytopenia. Consult a doctor.",
        "advice_plt_high": "Monitor platelets. Consult a doctor.",
        "advice_glu_high": "Possible diabetes risk. Reduce sugar intake.",
        "advice_default": "Consult a healthcare professional.",

        "nutrient_iron": "Iron-rich foods",
        "nutrient_platelet": "Platelet boosters",
        "nutrient_lowsugar": "Low-sugar foods",
        "nutrient_immunity": "Immunity support",
        "nutrient_balanced": "Balanced diet",

        "risk_anemia": "Anemia Risk",
        "risk_infection": "Infection Risk",
        "risk_bleeding": "Bleeding Risk",
        "risk_diabetes": "Diabetes Risk",
        "risk_overall": "Overall Health",
        "risk_high": "High",
        "risk_moderate": "Moderate",
        "risk_low": "Low",

        "emergency_hb": "🚨 CRITICAL: Hemoglobin dangerously low. Immediate medical attention required!",
        "emergency_plt": "🚨 CRITICAL: Platelets dangerously low. Immediate medical attention required!",
        "emergency_wbc": "🚨 CRITICAL: WBC dangerously high. Immediate medical attention required!",
        "emergency_glu": "🚨 CRITICAL: Blood sugar dangerously high. Immediate medical attention required!",
    },
    "ta": {
        "condition_healthy": "✅ ஆரோக்கியம்",
        "condition_anemia": "இரத்த சோகை",
        "condition_infection": "சாத்தியமான தொற்று",
        "condition_low_platelets": "குறைந்த பிளேட்லெட்",
        "condition_high_sugar": "அதிக சர்க்கரை",
        "condition_minor": "சிறிய அசாதாரணம்",
        "symptom_none": "அறிகுறிகள் இல்லை",
        "symptom_tired": "சோர்வு",
        "symptom_weak": "பலவீனம்",
        "symptom_dizzy": "தலைச்சுற்றல்",
        "symptom_pale": "வெளிறிய தோல்",
        "symptom_fever": "காய்ச்சல்",
        "symptom_bodypain": "உடல் வலி",
        "symptom_fatigue": "சோர்வு",
        "symptom_bruising": "எளிதில் காயம்",
        "symptom_gums": "பற்கள் இரத்தக்கசிவு",
        "symptom_urination": "அடிக்கடி சிறுநீர்",
        "symptom_thirst": "தாகம்",
        "rec_healthy": "உங்கள் ஆரோக்கியமான வாழ்க்கை முறையை தொடரவும்!",
        "rec_general": "மருத்துவரை அணுகவும். சமச்சீர் உணவு சாப்பிடவும், தண்ணீர் குடிக்கவும்.",
        "rec_upload": "சரியான அறிக்கையை பதிவேற்றவும்.",
        "advice_normal": "மதிப்பு சாதாரண வரம்பில் உள்ளது.",
        "advice_hb_low": "இரத்த சோகை இருக்கலாம். இரும்புச்சத்து நிறைந்த உணவுகளை சாப்பிடுங்கள்.",
        "advice_hb_high": "தண்ணீர் அதிகம் குடிக்கவும். மருத்துவரை பாருங்கள்.",
        "advice_wbc_high": "தொற்று இருக்கலாம். மருத்துவரை பாருங்கள்.",
        "advice_wbc_low": "நோய் எதிர்ப்பு சக்தி குறைவு. மருத்துவரை பாருங்கள்.",
        "advice_plt_low": "பிளேட்லெட் குறைவு இருக்கலாம். மருத்துவரை பாருங்கள்.",
        "advice_plt_high": "பிளேட்லெட்டை கண்காணிக்கவும். மருத்துவரை பாருங்கள்.",
        "advice_glu_high": "நீரிழிவு ஆபத்து இருக்கலாம். இனிப்பை குறைக்கவும்.",
        "advice_default": "மருத்துவ நிபுணரை அணுகவும்.",

        "nutrient_iron": "இரும்புச்சத்து உணவுகள்",
        "nutrient_platelet": "பிளேட்லெட் அதிகரிக்கும் உணவுகள்",
        "nutrient_lowsugar": "குறைந்த சர்க்கரை உணவுகள்",
        "nutrient_immunity": "நோய் எதிர்ப்பு சக்தி",
        "nutrient_balanced": "சமச்சீர் உணவு",

        "risk_anemia": "இரத்த சோகை ஆபத்து",
        "risk_infection": "தொற்று ஆபத்து",
        "risk_bleeding": "இரத்தப்போக்கு ஆபத்து",
        "risk_diabetes": "நீரிழிவு ஆபத்து",
        "risk_overall": "ஒட்டுமொத்த ஆரோக்கியம்",
        "risk_high": "அதிகம்",
        "risk_moderate": "மிதமான",
        "risk_low": "குறைவு",

        "emergency_hb": "🚨 அவசரம்: ஹீமோகுளோபின் ஆபத்தான அளவில் குறைவு. உடனடி மருத்துவ உதவி தேவை!",
        "emergency_plt": "🚨 அவசரம்: பிளேட்லெட் ஆபத்தான அளவில் குறைவு. உடனடி மருத்துவ உதவி தேவை!",
        "emergency_wbc": "🚨 அவசரம்: WBC ஆபத்தான அளவில் அதிகம். உடனடி மருத்துவ உதவி தேவை!",
        "emergency_glu": "🚨 அவசரம்: இரத்த சர்க்கரை ஆபத்தான அளவில் அதிகம். உடனடி மருத்துவ உதவி தேவை!",
    },
    "hi": {
        "condition_healthy": "✅ स्वस्थ",
        "condition_anemia": "हल्का एनीमिया",
        "condition_infection": "संभावित संक्रमण",
        "condition_low_platelets": "कम प्लेटलेट्स",
        "condition_high_sugar": "उच्च शर्करा",
        "condition_minor": "मामूली असामान्यता",
        "symptom_none": "कोई लक्षण नहीं",
        "symptom_tired": "थकान",
        "symptom_weak": "कमजोरी",
        "symptom_dizzy": "चक्कर आना",
        "symptom_pale": "पीली त्वचा",
        "symptom_fever": "बुखार",
        "symptom_bodypain": "शरीर दर्द",
        "symptom_fatigue": "थकान",
        "symptom_bruising": "आसान चोट",
        "symptom_gums": "मसूड़ों से खून",
        "symptom_urination": "बार-बार पेशाब",
        "symptom_thirst": "प्यास",
        "rec_healthy": "अपनी स्वस्थ जीवनशैली जारी रखें!",
        "rec_general": "डॉक्टर से मिलें। संतुलित आहार लें और पानी पिएं।",
        "rec_upload": "मान्य रिपोर्ट अपलोड करें।",
        "advice_normal": "मान सामान्य सीमा में है।",
        "advice_hb_low": "एनीमिया हो सकता है। आयरन युक्त भोजन खाएं।",
        "advice_hb_high": "हाइड्रेटेड रहें। डॉक्टर से मिलें।",
        "advice_wbc_high": "संक्रमण हो सकता है। डॉक्टर से मिलें।",
        "advice_wbc_low": "कम प्रतिरक्षा। डॉक्टर से मिलें।",
        "advice_plt_low": "थ्रोम्बोसाइटोपेनिया हो सकता है। डॉक्टर से मिलें।",
        "advice_plt_high": "प्लेटलेट्स की निगरानी करें। डॉक्टर से मिलें।",
        "advice_glu_high": "मधुमेह का खतरा। चीनी कम करें।",
        "advice_default": "स्वास्थ्य विशेषज्ञ से परामर्श करें।",

        "nutrient_iron": "आयरन युक्त खाद्य पदार्थ",
        "nutrient_platelet": "प्लेटलेट बढ़ाने वाले खाद्य",
        "nutrient_lowsugar": "कम शर्करा वाले खाद्य",
        "nutrient_immunity": "प्रतिरक्षा समर्थन",
        "nutrient_balanced": "संतुलित आहार",

        "risk_anemia": "एनीमिया जोखिम",
        "risk_infection": "संक्रमण जोखिम",
        "risk_bleeding": "रक्तस्राव जोखिम",
        "risk_diabetes": "मधुमेह जोखिम",
        "risk_overall": "समग्र स्वास्थ्य",
        "risk_high": "उच्च",
        "risk_moderate": "मध्यम",
        "risk_low": "कम",

        "emergency_hb": "🚨 आपातकाल: हीमोग्लोबिन खतरनाक रूप से कम। तत्काल चिकित्सा सहायता आवश्यक!",
        "emergency_plt": "🚨 आपातकाल: प्लेटलेट्स खतरनाक रूप से कम। तत्काल चिकित्सा सहायता आवश्यक!",
        "emergency_wbc": "🚨 आपातकाल: WBC खतरनाक रूप से उच्च। तत्काल चिकित्सा सहायता आवश्यक!",
        "emergency_glu": "🚨 आपातकाल: रक्त शर्करा खतरनाक रूप से उच्च। तत्काल चिकित्सा सहायता आवश्यक!",
    },
    "ml": {
        "condition_healthy": "✅ ആരോഗ്യകരം",
        "condition_anemia": "ചെറിയ വിളർച്ച",
        "condition_infection": "സാധ്യമായ അണുബാധ",
        "condition_low_platelets": "കുറഞ്ഞ പ്ലേറ്റ്ലെറ്റുകൾ",
        "condition_high_sugar": "ഉയർന്ന പഞ്ചസാര",
        "condition_minor": "ചെറിയ അസാധാരണത",
        "symptom_none": "ലക്ഷണങ്ങളില്ല",
        "symptom_tired": "ക്ഷീണം",
        "symptom_weak": "ദൗർബല്യം",
        "symptom_dizzy": "തലകറക്കം",
        "symptom_pale": "വിളറിയ ചർമ്മം",
        "symptom_fever": "പനി",
        "symptom_bodypain": "ശരീര വേദന",
        "symptom_fatigue": "ക്ഷീണം",
        "symptom_bruising": "എളുപ്പത്തിൽ മുറിവ്",
        "symptom_gums": "മോണ രക്തസ്രാവം",
        "symptom_urination": "ഇടയ്ക്കിടെ മൂത്രം",
        "symptom_thirst": "ദാഹം",
        "rec_healthy": "നിങ്ങളുടെ ആരോഗ്യകരമായ ജീവിതശൈലി തുടരുക!",
        "rec_general": "ഡോക്ടറെ കാണുക. സമീകൃത ഭക്ഷണം കഴിക്കുക, വെള്ളം കുടിക്കുക.",
        "rec_upload": "സാധുവായ റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക.",
        "advice_normal": "മൂല്യം സാധാരണ പരിധിയിലാണ്.",
        "advice_hb_low": "വിളർച്ചയാകാം. അയൺ സമ്പുഷ്ട ഭക്ഷണം കഴിക്കുക.",
        "advice_hb_high": "വെള്ളം കുടിക്കുക. ഡോക്ടറെ കാണുക.",
        "advice_wbc_high": "അണുബാധയാകാം. ഡോക്ടറെ കാണുക.",
        "advice_wbc_low": "കുറഞ്ഞ പ്രതിരോധശേഷി. ഡോക്ടറെ കാണുക.",
        "advice_plt_low": "പ്ലേറ്റ്ലെറ്റ് കുറവാകാം. ഡോക്ടറെ കാണുക.",
        "advice_plt_high": "പ്ലേറ്റ്ലെറ്റുകൾ നിരീക്ഷിക്കുക. ഡോക്ടറെ കാണുക.",
        "advice_glu_high": "പ്രമേഹ സാധ്യത. പഞ്ചസാര കുറയ്ക്കുക.",
        "advice_default": "ആരോഗ്യ വിദഗ്ധനെ സമീപിക്കുക.",

        "nutrient_iron": "അയൺ സമ്പുഷ്ട ഭക്ഷണങ്ങൾ",
        "nutrient_platelet": "പ്ലേറ്റ്ലെറ്റ് വർദ്ധിപ്പിക്കുന്നവ",
        "nutrient_lowsugar": "കുറഞ്ഞ പഞ്ചസാര ഭക്ഷണങ്ങൾ",
        "nutrient_immunity": "പ്രതിരോധശേഷി",
        "nutrient_balanced": "സമീകൃത ഭക്ഷണം",

        "risk_anemia": "വിളർച്ച അപകടം",
        "risk_infection": "അണുബാധ അപകടം",
        "risk_bleeding": "രക്തസ്രാവ അപകടം",
        "risk_diabetes": "പ്രമേഹ അപകടം",
        "risk_overall": "മൊത്തത്തിലുള്ള ആരോഗ്യം",
        "risk_high": "ഉയർന്നത്",
        "risk_moderate": "മിതമായ",
        "risk_low": "കുറവ്",

        "emergency_hb": "🚨 അടിയന്തിരം: ഹീമോഗ്ലോബിൻ അപകടകരമായി കുറവ്. ഉടൻ വൈദ്യസഹായം ആവശ്യം!",
        "emergency_plt": "🚨 അടിയന്തിരം: പ്ലേറ്റ്ലെറ്റുകൾ അപകടകരമായി കുറവ്. ഉടൻ വൈദ്യസഹായം ആവശ്യം!",
        "emergency_wbc": "🚨 അടിയന്തിരം: WBC അപകടകരമായി ഉയർന്നത്. ഉടൻ വൈദ്യസഹായം ആവശ്യം!",
        "emergency_glu": "🚨 അടിയന്തിരം: രക്തത്തിലെ പഞ്ചസാര അപകടകരമായി ഉയർന്നത്. ഉടൻ വൈദ്യസഹായം ആവശ്യം!",
    },
    "kn": {
        "condition_healthy": "✅ ಆರೋಗ್ಯಕರ",
        "condition_anemia": "ಸೌಮ್ಯ ರಕ್ತಹೀನತೆ",
        "condition_infection": "ಸಂಭಾವ್ಯ ಸೋಂಕು",
        "condition_low_platelets": "ಕಡಿಮೆ ಪ್ಲೇಟ್ಲೆಟ್",
        "condition_high_sugar": "ಹೆಚ್ಚಿನ ಸಕ್ಕರೆ",
        "condition_minor": "ಸಣ್ಣ ಅಸಹಜತೆ",
        "symptom_none": "ಯಾವುದೇ ಲಕ್ಷಣಗಳಿಲ್ಲ",
        "symptom_tired": "ಆಯಾಸ",
        "symptom_weak": "ದೌರ್ಬಲ್ಯ",
        "symptom_dizzy": "ತಲೆಸುತ್ತು",
        "symptom_pale": "ಬಿಳಿಚಿಕೊಂಡ ಚರ್ಮ",
        "symptom_fever": "ಜ್ವರ",
        "symptom_bodypain": "ದೇಹ ನೋವು",
        "symptom_fatigue": "ಆಯಾಸ",
        "symptom_bruising": "ಸುಲಭವಾಗಿ ಗಾಯ",
        "symptom_gums": "ಒಸಡು ರಕ್ತಸ್ರಾವ",
        "symptom_urination": "ಪದೇ ಪದೇ ಮೂತ್ರ",
        "symptom_thirst": "ಬಾಯಾರಿಕೆ",
        "rec_healthy": "ನಿಮ್ಮ ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿ ಮುಂದುವರಿಸಿ!",
        "rec_general": "ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ. ಸಮತೋಲಿತ ಆಹಾರ ಸೇವಿಸಿ, ನೀರು ಕುಡಿಯಿರಿ.",
        "rec_upload": "ಮಾನ್ಯ ವರದಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "advice_normal": "ಮೌಲ್ಯ ಸಾಮಾನ್ಯ ಶ್ರೇಣಿಯಲ್ಲಿದೆ.",
        "advice_hb_low": "ರಕ್ತಹೀನತೆ ಇರಬಹುದು. ಕಬ್ಬಿಣಯುಕ್ತ ಆಹಾರ ಸೇವಿಸಿ.",
        "advice_hb_high": "ನೀರು ಕುಡಿಯಿರಿ. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "advice_wbc_high": "ಸೋಂಕು ಇರಬಹುದು. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "advice_wbc_low": "ಕಡಿಮೆ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "advice_plt_low": "ಪ್ಲೇಟ್ಲೆಟ್ ಕಡಿಮೆ ಇರಬಹುದು. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "advice_plt_high": "ಪ್ಲೇಟ್ಲೆಟ್ಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ. ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "advice_glu_high": "ಮಧುಮೇಹ ಅಪಾಯ. ಸಕ್ಕರೆ ಕಡಿಮೆ ಮಾಡಿ.",
        "advice_default": "ಆರೋಗ್ಯ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

        "nutrient_iron": "ಕಬ್ಬಿಣಯುಕ್ತ ಆಹಾರ",
        "nutrient_platelet": "ಪ್ಲೇಟ್ಲೆಟ್ ಹೆಚ್ಚಿಸುವ ಆಹಾರ",
        "nutrient_lowsugar": "ಕಡಿಮೆ ಸಕ್ಕರೆ ಆಹಾರ",
        "nutrient_immunity": "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ",
        "nutrient_balanced": "ಸಮತೋಲಿತ ಆಹಾರ",

        "risk_anemia": "ರಕ್ತಹೀನತೆ ಅಪಾಯ",
        "risk_infection": "ಸೋಂಕು ಅಪಾಯ",
        "risk_bleeding": "ರಕ್ತಸ್ರಾವ ಅಪಾಯ",
        "risk_diabetes": "ಮಧುಮೇಹ ಅಪಾಯ",
        "risk_overall": "ಒಟ್ಟಾರೆ ಆರೋಗ್ಯ",
        "risk_high": "ಹೆಚ್ಚು",
        "risk_moderate": "ಮಧ್ಯಮ",
        "risk_low": "ಕಡಿಮೆ",

        "emergency_hb": "🚨 ತುರ್ತು: ಹಿಮೋಗ್ಲೋಬಿನ್ ಅಪಾಯಕಾರಿಯಾಗಿ ಕಡಿಮೆ. ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಅಗತ್ಯ!",
        "emergency_plt": "🚨 ತುರ್ತು: ಪ್ಲೇಟ್ಲೆಟ್ಗಳು ಅಪಾಯಕಾರಿಯಾಗಿ ಕಡಿಮೆ. ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಅಗತ್ಯ!",
        "emergency_wbc": "🚨 ತುರ್ತು: WBC ಅಪಾಯಕಾರಿಯಾಗಿ ಹೆಚ್ಚು. ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಅಗತ್ಯ!",
        "emergency_glu": "🚨 ತುರ್ತು: ರಕ್ತದ ಸಕ್ಕರೆ ಅಪಾಯಕಾರಿಯಾಗಿ ಹೆಚ್ಚು. ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಅಗತ್ಯ!",
    }
}


def tr(lang, key):
    """Get translation for key in language."""
    if lang not in TRANSLATIONS:
        lang = "en"
    return TRANSLATIONS[lang].get(key, TRANSLATIONS["en"].get(key, key))


# ============================================================
#  CORE FUNCTIONS
# ============================================================

def extract_values(text):
    values = {}
    cleaned = text.replace(",", "")

    patterns = {
        "Hemoglobin": [
            r"hemoglobin\s*\(?hb\)?[^\d]*(\d+\.?\d*)",
            r"\bhb\b[^\d]*(\d+\.?\d*)",
        ],
        "WBC": [
            r"wbc\s*count[^\d]*(\d+\.?\d*)",
            r"\bwbc\b[^\d]*(\d+\.?\d*)",
            r"white blood cell[^\d]*(\d+\.?\d*)",
        ],
        "Platelets": [
            r"platelets?[^\d]*(\d+\.?\d*)",
            r"\bplt\b[^\d]*(\d+\.?\d*)",
        ],
        "RBC": [
            r"rbc\s*count[^\d]*(\d+\.?\d*)",
            r"\brbc\b[^\d]*(\d+\.?\d*)",
            r"red blood cell[^\d]*(\d+\.?\d*)",
        ],
        "Glucose": [
            r"glucose[^\d]*(\d+\.?\d*)",
            r"sugar[^\d]*(\d+\.?\d*)",
        ],
    }

    lower = cleaned.lower()

    for param, pattern_list in patterns.items():
        for pattern in pattern_list:
            match = re.search(pattern, lower)
            if match:
                try:
                    values[param] = float(match.group(1))
                    break
                except ValueError:
                    continue

    return values


def get_advice(param, status, lang="en"):
    rules = {
        ("Hemoglobin", "Low"): "advice_hb_low",
        ("Hemoglobin", "High"): "advice_hb_high",
        ("WBC", "High"): "advice_wbc_high",
        ("WBC", "Low"): "advice_wbc_low",
        ("Platelets", "Low"): "advice_plt_low",
        ("Platelets", "High"): "advice_plt_high",
        ("Glucose", "High"): "advice_glu_high",
    }
    key = rules.get((param, status), "advice_default")
    return tr(lang, key)


def analyze_report(text, lang="en"):
    extracted = extract_values(text)
    results = []
    for param, value in extracted.items():
        low, high = NORMAL_RANGES[param]
        if value < low:
            status, advice = "Low", get_advice(param, "Low", lang)
        elif value > high:
            status, advice = "High", get_advice(param, "High", lang)
        else:
            status, advice = "Normal", tr(lang, "advice_normal")

        results.append({
            "parameter": param,
            "value": value,
            "normal_range": f"{low} - {high}",
            "status": status,
            "advice": advice,
        })
    return results


def get_doctor_summary(analysis, lang="en"):
    if not analysis:
        return {
            "condition": tr(lang, "condition_minor"),
            "symptoms": [tr(lang, "symptom_none")],
            "recommendation": tr(lang, "rec_upload")
        }

    abnormals = [i for i in analysis if i["status"] != "Normal"]

    if not abnormals:
        return {
            "condition": tr(lang, "condition_healthy"),
            "symptoms": [tr(lang, "symptom_none")],
            "recommendation": tr(lang, "rec_healthy")
        }

    symptoms = []
    condition_parts = []

    for item in abnormals:
        p = item["parameter"]
        s = item["status"]

        if p == "Hemoglobin" and s == "Low":
            condition_parts.append(tr(lang, "condition_anemia"))
            symptoms += [tr(lang, "symptom_tired"), tr(lang, "symptom_weak"),
                         tr(lang, "symptom_dizzy"), tr(lang, "symptom_pale")]
        elif p == "WBC" and s == "High":
            condition_parts.append(tr(lang, "condition_infection"))
            symptoms += [tr(lang, "symptom_fever"), tr(lang, "symptom_bodypain"),
                         tr(lang, "symptom_fatigue")]
        elif p == "Platelets" and s == "Low":
            condition_parts.append(tr(lang, "condition_low_platelets"))
            symptoms += [tr(lang, "symptom_bruising"), tr(lang, "symptom_gums")]
        elif p == "Glucose" and s == "High":
            condition_parts.append(tr(lang, "condition_high_sugar"))
            symptoms += [tr(lang, "symptom_urination"), tr(lang, "symptom_thirst"),
                         tr(lang, "symptom_fatigue")]

    return {
        "condition": ", ".join(condition_parts) or tr(lang, "condition_minor"),
        "symptoms": list(set(symptoms)) or [tr(lang, "symptom_none")],
        "recommendation": tr(lang, "rec_general")
    }


def get_food_recommendations(analysis, lang="en"):
    foods = []
    values = {i["parameter"]: i for i in analysis}

    if values.get("Hemoglobin", {}).get("status") == "Low":
        foods.append({
            "nutrient": tr(lang, "nutrient_iron"),
            "foods": ["🥬 Spinach", "🍎 Pomegranate", "🌰 Dates", "🥕 Beetroot", "🍖 Red meat", "🫘 Lentils"]
        })
    if values.get("Platelets", {}).get("status") == "Low":
        foods.append({
            "nutrient": tr(lang, "nutrient_platelet"),
            "foods": ["🍈 Papaya", "🥥 Coconut water", "🥬 Green leafy veggies", "🍠 Pumpkin"]
        })
    if values.get("Glucose", {}).get("status") == "High":
        foods.append({
            "nutrient": tr(lang, "nutrient_lowsugar"),
            "foods": ["🥒 Bitter gourd", "🌾 Whole grains", "🥦 Broccoli", "🥜 Nuts"]
        })
    if values.get("WBC", {}).get("status") == "High":
        foods.append({
            "nutrient": tr(lang, "nutrient_immunity"),
            "foods": ["🍊 Citrus fruits", "🧄 Garlic", "🫚 Ginger", "🍵 Green tea"]
        })

    if not foods:
        foods.append({
            "nutrient": tr(lang, "nutrient_balanced"),
            "foods": ["🥗 Vegetables", "🍎 Fruits", "💧 Water", "🏃 Exercise daily"]
        })

    return foods


def get_risk_prediction(analysis, lang="en"):
    risks = []
    values = {i["parameter"]: i for i in analysis}

    hb = values.get("Hemoglobin", {})
    wbc = values.get("WBC", {})
    plt = values.get("Platelets", {})
    glu = values.get("Glucose", {})

    if hb.get("status") == "Low":
        risks.append({
            "name": tr(lang, "risk_anemia"),
            "level": tr(lang, "risk_high") if hb["value"] < 10 else tr(lang, "risk_moderate")
        })
    if wbc.get("status") == "High":
        risks.append({
            "name": tr(lang, "risk_infection"),
            "level": tr(lang, "risk_high") if wbc["value"] > 15000 else tr(lang, "risk_moderate")
        })
    if plt.get("status") == "Low":
        risks.append({
            "name": tr(lang, "risk_bleeding"),
            "level": tr(lang, "risk_high") if plt["value"] < 100000 else tr(lang, "risk_moderate")
        })
    if glu.get("status") == "High":
        risks.append({
            "name": tr(lang, "risk_diabetes"),
            "level": tr(lang, "risk_high") if glu["value"] > 126 else tr(lang, "risk_moderate")
        })

    if not risks:
        risks.append({
            "name": tr(lang, "risk_overall"),
            "level": tr(lang, "risk_low")
        })

    return risks


def check_emergency(analysis, lang="en"):
    for item in analysis:
        p = item["parameter"]
        v = item["value"]
        if p == "Hemoglobin" and v < 7:
            return tr(lang, "emergency_hb")
        if p == "Platelets" and v < 50000:
            return tr(lang, "emergency_plt")
        if p == "WBC" and v > 20000:
            return tr(lang, "emergency_wbc")
        if p == "Glucose" and v > 250:
            return tr(lang, "emergency_glu")
    return None