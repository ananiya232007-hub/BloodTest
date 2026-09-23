// ============================================================
//  BLOODWISE AI — Main JavaScript
//  5 Languages + Chatbot + Voice + Animations
// ============================================================

const translations = {
    en: {
        nav_home: "Home", nav_dash: "Dashboard", nav_logout: "Logout",
        nav_login: "Login", nav_reg: "Register",

        hero_title: "Blood Test Report Analysis Using AI",
        hero_sub: "Upload your blood report. AI reads values, detects abnormalities, and gives you easy-to-understand health advice.",
        get_started: "Get Started →",

        feat_ocr_title: "📄 OCR Scanner",
        feat_ocr_desc: "Reads PDF & images automatically.",
        feat_ai_title: "🧠 AI Analysis",
        feat_ai_desc: "Compares values with normal ranges.",
        feat_score_title: "📊 Health Score",
        feat_score_desc: "0–100 score with risk level.",
        feat_voice_title: "🔊 Voice Assistant",
        feat_voice_desc: "Speaks your report in your language.",
        feat_food_title: "🍎 Food Advice",
        feat_food_desc: "Personalized food recommendations.",
        feat_risk_title: "📈 Risk Prediction",
        feat_risk_desc: "Future health risk analysis.",

        upload_title: "Upload Blood Report",
        upload_sub: "Supported: PDF, JPG, PNG",
        upload_click: "📤 Click to upload or drag file here",
        analyze_btn: "Analyze Report",

        result_title: "Analysis Result",
        score_label: "Health Score",
        doctor_title: "AI Doctor Summary",
        param_header: "Blood Parameters",
        rec_header: "Recommendations",
        cond_header: "Possible Conditions",
        simple_header: "Easy Explanation",
        risk_header: "Future Health Risk Prediction",
        food_header: "Food Recommendations",
        disclaimer: "⚠️ This is AI-assisted only. Consult a real doctor for accurate diagnosis.",
        analyze_another: "Analyze Another Report",

        doc_condition: "🩺 Condition:",
        doc_symptoms: "😣 Possible Symptoms:",
        doc_recommendation: "💊 Recommendation:",

        chat_title: "AI Health Assistant",
        chat_placeholder: "Ask about your report...",
        chat_welcome: "Hi! Ask me about Hemoglobin, WBC, Platelets, Anemia, etc.",

        speak_btn: "🔊 Speak Report",
        pdf_btn: "📄 Save as PDF"
    },

    ta: {
        nav_home: "முகப்பு", nav_dash: "டாஷ்போர்டு", nav_logout: "வெளியேறு",
        nav_login: "உள்நுழை", nav_reg: "பதிவு",

        hero_title: "AI மூலம் இரத்த பரிசோதனை அறிக்கை பரிசோதனை",
        hero_sub: "உங்கள் இரத்த அறிக்கையை பதிவேற்றவும். AI மதிப்புகளை படித்து, அசாதாரணங்களை கண்டறிந்து, எளிதில் புரியும் ஆரோக்கிய ஆலோசனைகளை வழங்கும்.",
        get_started: "தொடங்கு →",

        feat_ocr_title: "📄 OCR ஸ்கேனர்",
        feat_ocr_desc: "PDF மற்றும் படங்களை தானாக படிக்கும்.",
        feat_ai_title: "🧠 AI பரிசோதனை",
        feat_ai_desc: "சாதாரண வரம்புகளுடன் ஒப்பிடுகிறது.",
        feat_score_title: "📊 ஆரோக்கிய மதிப்பெண்",
        feat_score_desc: "0–100 மதிப்பெண் + ஆபத்து நிலை.",
        feat_voice_title: "🔊 குரல் உதவியாளர்",
        feat_voice_desc: "உங்கள் மொழியில் அறிக்கையை பேசும்.",
        feat_food_title: "🍎 உணவு ஆலோசனை",
        feat_food_desc: "தனிப்பட்ட உணவு பரிந்துரைகள்.",
        feat_risk_title: "📈 ஆபத்து கணிப்பு",
        feat_risk_desc: "எதிர்கால ஆரோக்கிய ஆபத்து பரிசோதனை.",

        upload_title: "இரத்த அறிக்கையை பதிவேற்றவும்",
        upload_sub: "ஆதரிக்கப்படும்: PDF, JPG, PNG",
        upload_click: "📤 பதிவேற்ற கிளிக் செய்யவும்",
        analyze_btn: "அறிக்கையை பரிசோதி",

        result_title: "பரிசோதனை முடிவு",
        score_label: "ஆரோக்கிய மதிப்பெண்",
        doctor_title: "AI மருத்துவர் சுருக்கம்",
        param_header: "இரத்த அளவுகள்",
        rec_header: "பரிந்துரைகள்",
        cond_header: "சாத்தியமான நிலைகள்",
        simple_header: "எளிய விளக்கம்",
        risk_header: "எதிர்கால ஆரோக்கிய ஆபத்து",
        food_header: "உணவு பரிந்துரைகள்",
        disclaimer: "⚠️ இது AI உதவி மட்டுமே. துல்லியமான கண்டறிதலுக்கு மருத்துவரை அணுகவும்.",
        analyze_another: "மற்றொரு அறிக்கையை பரிசோதி",

        doc_condition: "🩺 நிலை:",
        doc_symptoms: "😣 சாத்தியமான அறிகுறிகள்:",
        doc_recommendation: "💊 பரிந்துரை:",

        chat_title: "AI ஆரோக்கிய உதவியாளர்",
        chat_placeholder: "உங்கள் அறிக்கை பற்றி கேளுங்கள்...",
        chat_welcome: "வணக்கம்! ஹீமோகுளோபின், WBC, பிளேட்லெட், இரத்த சோகை பற்றி கேளுங்கள்.",

        speak_btn: "🔊 அறிக்கையை பேசு",
        pdf_btn: "📄 PDF ஆக சேமி"
    },

    hi: {
        nav_home: "होम", nav_dash: "डैशबोर्ड", nav_logout: "लॉगआउट",
        nav_login: "लॉगिन", nav_reg: "रजिस्टर",

        hero_title: "AI का उपयोग करके रक्त परीक्षण रिपोर्ट विश्लेषण",
        hero_sub: "अपनी रक्त रिपोर्ट अपलोड करें। AI मानों को पढ़ता है, असामान्यताओं का पता लगाता है, और आसान भाषा में स्वास्थ्य सलाह देता है।",
        get_started: "शुरू करें →",

        feat_ocr_title: "📄 OCR स्कैनर",
        feat_ocr_desc: "PDF और छवियों को स्वतः पढ़ता है।",
        feat_ai_title: "🧠 AI विश्लेषण",
        feat_ai_desc: "सामान्य सीमाओं से तुलना करता है।",
        feat_score_title: "📊 स्वास्थ्य स्कोर",
        feat_score_desc: "0–100 स्कोर और जोखिम स्तर।",
        feat_voice_title: "🔊 वॉयस सहायक",
        feat_voice_desc: "आपकी भाषा में रिपोर्ट बोलता है।",
        feat_food_title: "🍎 खाद्य सलाह",
        feat_food_desc: "व्यक्तिगत खाद्य सिफारिशें।",
        feat_risk_title: "📈 जोखिम भविष्यवाणी",
        feat_risk_desc: "भविष्य के स्वास्थ्य जोखिम का विश्लेषण।",

        upload_title: "रक्त रिपोर्ट अपलोड करें",
        upload_sub: "समर्थित: PDF, JPG, PNG",
        upload_click: "📤 अपलोड करने के लिए क्लिक करें",
        analyze_btn: "रिपोर्ट का विश्लेषण करें",

        result_title: "विश्लेषण परिणाम",
        score_label: "स्वास्थ्य स्कोर",
        doctor_title: "AI डॉक्टर सारांश",
        param_header: "रक्त पैरामीटर",
        rec_header: "सिफारिशें",
        cond_header: "संभावित स्थितियां",
        simple_header: "आसान व्याख्या",
        risk_header: "भविष्य स्वास्थ्य जोखिम",
        food_header: "खाद्य सिफारिशें",
        disclaimer: "⚠️ यह केवल AI सहायता है। सटीक निदान के लिए असली डॉक्टर से परामर्श करें।",
        analyze_another: "दूसरी रिपोर्ट का विश्लेषण करें",

        doc_condition: "🩺 स्थिति:",
        doc_symptoms: "😣 संभावित लक्षण:",
        doc_recommendation: "💊 सिफारिश:",

        chat_title: "AI स्वास्थ्य सहायक",
        chat_placeholder: "अपनी रिपोर्ट के बारे में पूछें...",
        chat_welcome: "नमस्ते! हीमोग्लोबिन, WBC, प्लेटलेट्स, एनीमिया के बारे में पूछें।",

        speak_btn: "🔊 रिपोर्ट बोलें",
        pdf_btn: "📄 PDF सहेजें"
    },

    ml: {
        nav_home: "ഹോം", nav_dash: "ഡാഷ്ബോർഡ്", nav_logout: "ലോഗൗട്ട്",
        nav_login: "ലോഗിൻ", nav_reg: "രജിസ്റ്റർ",

        hero_title: "AI ഉപയോഗിച്ച് രക്ത പരിശോധന റിപ്പോർട്ട് വിശകലനം",
        hero_sub: "നിങ്ങളുടെ രക്ത റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക. AI മൂല്യങ്ങൾ വായിക്കുകയും, അസാധാരണതകൾ കണ്ടെത്തുകയും, എളുപ്പത്തിൽ ആരോഗ്യ ഉപദേശം നൽകുകയും ചെയ്യുന്നു.",
        get_started: "ആരംഭിക്കുക →",

        feat_ocr_title: "📄 OCR സ്കാനർ",
        feat_ocr_desc: "PDF, ചിത്രങ്ങൾ സ്വയമേവ വായിക്കുന്നു.",
        feat_ai_title: "🧠 AI വിശകലനം",
        feat_ai_desc: "സാധാരണ പരിധികളുമായി താരതമ്യം ചെയ്യുന്നു.",
        feat_score_title: "📊 ആരോഗ്യ സ്കോർ",
        feat_score_desc: "0–100 സ്കോർ + അപകട നില.",
        feat_voice_title: "🔊 വോയ്സ് അസിസ്റ്റന്റ്",
        feat_voice_desc: "നിങ്ങളുടെ ഭാഷയിൽ റിപ്പോർട്ട് പറയുന്നു.",
        feat_food_title: "🍎 ഭക്ഷണ ഉപദേശം",
        feat_food_desc: "വ്യക്തിഗത ഭക്ഷണ ശുപാർശകൾ.",
        feat_risk_title: "📈 അപകട പ്രവചനം",
        feat_risk_desc: "ഭാവി ആരോഗ്യ അപകട വിശകലനം.",

        upload_title: "രക്ത റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക",
        upload_sub: "പിന്തുണയ്ക്കുന്നത്: PDF, JPG, PNG",
        upload_click: "📤 അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
        analyze_btn: "റിപ്പോർട്ട് വിശകലനം ചെയ്യുക",

        result_title: "വിശകലന ഫലം",
        score_label: "ആരോഗ്യ സ്കോർ",
        doctor_title: "AI ഡോക്ടർ സംഗ്രഹം",
        param_header: "രക്ത പാരാമീറ്ററുകൾ",
        rec_header: "ശുപാർശകൾ",
        cond_header: "സാധ്യമായ അവസ്ഥകൾ",
        simple_header: "എളുപ്പ വിശദീകരണം",
        risk_header: "ഭാവി ആരോഗ്യ അപകടം",
        food_header: "ഭക്ഷണ ശുപാർശകൾ",
        disclaimer: "⚠️ ഇത് AI സഹായം മാത്രമാണ്. കൃത്യമായ രോഗനിർണയത്തിന് യഥാർത്ഥ ഡോക്ടറെ കാണുക.",
        analyze_another: "മറ്റൊരു റിപ്പോർട്ട് വിശകലനം ചെയ്യുക",

        doc_condition: "🩺 അവസ്ഥ:",
        doc_symptoms: "😣 സാധ്യമായ ലക്ഷണങ്ങൾ:",
        doc_recommendation: "💊 ശുപാർശ:",

        chat_title: "AI ആരോഗ്യ സഹായി",
        chat_placeholder: "നിങ്ങളുടെ റിപ്പോർട്ടിനെക്കുറിച്ച് ചോദിക്കുക...",
        chat_welcome: "ഹലോ! ഹീമോഗ്ലോബിൻ, WBC, പ്ലേറ്റ്ലെറ്റുകൾ, വിളർച്ച എന്നിവയെക്കുറിച്ച് ചോദിക്കുക.",

        speak_btn: "🔊 റിപ്പോർട്ട് സംസാരിക്കുക",
        pdf_btn: "📄 PDF ആയി സേവ് ചെയ്യുക"
    },

    kn: {
        nav_home: "ಮುಖಪುಟ", nav_dash: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", nav_logout: "ಲಾಗ್ ಔಟ್",
        nav_login: "ಲಾಗಿನ್", nav_reg: "ನೋಂದಣಿ",

        hero_title: "AI ಬಳಸಿ ರಕ್ತ ಪರೀಕ್ಷೆ ವರದಿ ವಿಶ್ಲೇಷಣೆ",
        hero_sub: "ನಿಮ್ಮ ರಕ್ತ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. AI ಮೌಲ್ಯಗಳನ್ನು ಓದಿ, ಅಸಹಜತೆಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ, ಸುಲಭವಾಗಿ ಆರೋಗ್ಯ ಸಲಹೆ ನೀಡುತ್ತದೆ.",
        get_started: "ಪ್ರಾರಂಭಿಸಿ →",

        feat_ocr_title: "📄 OCR ಸ್ಕ್ಯಾನರ್",
        feat_ocr_desc: "PDF, ಚಿತ್ರಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಓದುತ್ತದೆ.",
        feat_ai_title: "🧠 AI ವಿಶ್ಲೇಷಣೆ",
        feat_ai_desc: "ಸಾಮಾನ್ಯ ಶ್ರೇಣಿಗಳೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
        feat_score_title: "📊 ಆರೋಗ್ಯ ಸ್ಕೋರ್",
        feat_score_desc: "0–100 ಸ್ಕೋರ್ + ಅಪಾಯ ಮಟ್ಟ.",
        feat_voice_title: "🔊 ಧ್ವನಿ ಸಹಾಯಕ",
        feat_voice_desc: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ವರದಿ ಮಾತನಾಡುತ್ತದೆ.",
        feat_food_title: "🍎 ಆಹಾರ ಸಲಹೆ",
        feat_food_desc: "ವೈಯಕ್ತಿಕ ಆಹಾರ ಶಿಫಾರಸುಗಳು.",
        feat_risk_title: "📈 ಅಪಾಯ ಮುನ್ಸೂಚನೆ",
        feat_risk_desc: "ಭವಿಷ್ಯದ ಆರೋಗ್ಯ ಅಪಾಯ ವಿಶ್ಲೇಷಣೆ.",

        upload_title: "ರಕ್ತ ವರದಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        upload_sub: "ಬೆಂಬಲಿತ: PDF, JPG, PNG",
        upload_click: "📤 ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
        analyze_btn: "ವರದಿ ವಿಶ್ಲೇಷಿಸಿ",

        result_title: "ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶ",
        score_label: "ಆರೋಗ್ಯ ಸ್ಕೋರ್",
        doctor_title: "AI ವೈದ್ಯರ ಸಾರಾಂಶ",
        param_header: "ರಕ್ತ ನಿಯತಾಂಕಗಳು",
        rec_header: "ಶಿಫಾರಸುಗಳು",
        cond_header: "ಸಂಭಾವ್ಯ ಪರಿಸ್ಥಿತಿಗಳು",
        simple_header: "ಸರಳ ವಿವರಣೆ",
        risk_header: "ಭವಿಷ್ಯದ ಆರೋಗ್ಯ ಅಪಾಯ",
        food_header: "ಆಹಾರ ಶಿಫಾರಸುಗಳು",
        disclaimer: "⚠️ ಇದು AI ಸಹಾಯ ಮಾತ್ರ. ನಿಖರ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ನಿಜವಾದ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        analyze_another: "ಇನ್ನೊಂದು ವರದಿ ವಿಶ್ಲೇಷಿಸಿ",

        doc_condition: "🩺 ಸ್ಥಿತಿ:",
        doc_symptoms: "😣 ಸಂಭಾವ್ಯ ಲಕ್ಷಣಗಳು:",
        doc_recommendation: "💊 ಶಿಫಾರಸು:",

        chat_title: "AI ಆರೋಗ್ಯ ಸಹಾಯಕ",
        chat_placeholder: "ನಿಮ್ಮ ವರದಿ ಬಗ್ಗೆ ಕೇಳಿ...",
        chat_welcome: "ನಮಸ್ಕಾರ! ಹಿಮೋಗ್ಲೋಬಿನ್, WBC, ಪ್ಲೇಟ್ಲೆಟ್ಗಳು, ರಕ್ತಹೀನತೆ ಬಗ್ಗೆ ಕೇಳಿ.",

        speak_btn: "🔊 ವರದಿ ಮಾತನಾಡಿ",
        pdf_btn: "📄 PDF ಆಗಿ ಉಳಿಸಿ"
    }
};


let currentLang = localStorage.getItem('lang') || 'en';


function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
        || translations.en[key]
        || key;
}


function setLang(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all [data-key] elements
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const translated = t(key);
        if (translated) el.textContent = translated;
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder-key]').forEach(el => {
        const key = el.getAttribute('data-placeholder-key');
        el.placeholder = t(key);
    });

    // Active button highlight
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // Update hidden lang input (for upload form)  ← MOST IMPORTANT
    const langInput = document.getElementById('langInput');
    if (langInput) langInput.value = lang;

    document.documentElement.lang = lang;
}


document.addEventListener("DOMContentLoaded", () => {
    setLang(currentLang);

    // File upload preview
    const uploadInput = document.getElementById("report");
    if (uploadInput) {
        uploadInput.addEventListener("change", (e) => {
            const fileName = e.target.files[0]?.name || "";
            const label = uploadInput.closest(".upload-box")?.querySelector("span");
            if (label && fileName) label.textContent = "📎 " + fileName;
        });
    }

    // Score counter animation
    const scoreEl = document.querySelector('.score');
    if (scoreEl) {
        const finalScore = parseInt(scoreEl.textContent) || 0;
        let current = 0;
        const step = Math.max(1, Math.floor(finalScore / 40));
        const timer = setInterval(() => {
            current += step;
            if (current >= finalScore) {
                current = finalScore;
                clearInterval(timer);
            }
            scoreEl.textContent = current + '%';
        }, 25);
    }
});


// ---------- CHATBOT ----------
function toggleChat() {
    const win = document.getElementById('chatWindow');
    if (win) win.classList.toggle('open');
}


function sendChat() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    if (!input || !body) return;
    const msg = input.value.trim();
    if (!msg) return;

    const userDiv = document.createElement('div');
    userDiv.className = 'chat-msg user';
    userDiv.textContent = msg;
    body.appendChild(userDiv);
    input.value = '';

    setTimeout(() => {
        const reply = getBotReply(msg.toLowerCase());
        const botDiv = document.createElement('div');
        botDiv.className = 'chat-msg bot';
        botDiv.textContent = reply;
        body.appendChild(botDiv);
        body.scrollTop = body.scrollHeight;
    }, 500);

    body.scrollTop = body.scrollHeight;
}


function getBotReply(q) {
    const L = currentLang;

    // ============ FOOD / DIET (NEW) ============
    if (q.includes('food') || q.includes('eat') || q.includes('diet') || q.includes('nutrition')
        || q.includes('உணவு') || q.includes('சாப்பிட') || q.includes('வகையான')
        || q.includes('खाना') || q.includes('भोजन') || q.includes('आहार')
        || q.includes('ഭക്ഷണം') || q.includes('ആഹാരം')
        || q.includes('ಆಹಾರ') || q.includes('ತಿನ್ನು')) {
        return {
            en: "Healthy diet tips:\n• Vegetables (spinach, carrots, broccoli)\n• Fruits (apple, banana, pomegranate)\n• Whole grains (brown rice, oats)\n• Protein (eggs, fish, lentils)\n• 8 glasses of water daily\n• Avoid sugar, oil, and junk food",
            ta: "ஆரோக்கியமான உணவு குறிப்புகள்:\n• காய்கறிகள் (கீரை, கேரட், ப்ரோக்கோலி)\n• பழங்கள் (ஆப்பிள், வாழை, மாதுளை)\n• முழு தானியங்கள் (கைக்குத்தல் அரிசி, ஓட்ஸ்)\n• புரதம் (முட்டை, மீன், பருப்பு)\n• தினமும் 8 டம்ளர் தண்ணீர்\n• இனிப்பு, எண்ணெய், junk food தவிர்க்கவும்",
            hi: "स्वस्थ आहार युक्तियाँ:\n• सब्जियां (पालक, गाजर, ब्रोकली)\n• फल (सेब, केला, अनार)\n• साबुत अनाज (ब्राउन राइस, ओट्स)\n• प्रोटीन (अंडे, मछली, दालें)\n• रोज़ 8 गिलास पानी\n• चीनी, तेल, जंक फूड से बचें",
            ml: "ആരോഗ്യകരമായ ഭക്ഷണ നിർദ്ദേശങ്ങൾ:\n• പച്ചക്കറികൾ (ചീര, കാരറ്റ്, ബ്രോക്കോളി)\n• പഴങ്ങൾ (ആപ്പിൾ, വാഴപ്പഴം, മാതളനാരങ്ങ)\n• മുഴുധാന്യങ്ങൾ\n• പ്രോട്ടീൻ (മുട്ട, മീൻ, പരിപ്പ്)\n• ദിവസവും 8 ഗ്ലാസ് വെള്ളം\n• പഞ്ചസാര, എണ്ണ, ജങ്ക് ഫുഡ് ഒഴിവാക്കുക",
            kn: "ಆರೋಗ್ಯಕರ ಆಹಾರ ಸಲಹೆಗಳು:\n• ತರಕಾರಿಗಳು (ಪಾಲಕ್, ಕ್ಯಾರೆಟ್, ಬ್ರೊಕೊಲಿ)\n• ಹಣ್ಣುಗಳು (ಸೇಬು, ಬಾಳೆ, ದಾಳಿಂಬೆ)\n• ಇಡೀ ಧಾನ್ಯಗಳು\n• ಪ್ರೋಟೀನ್ (ಮೊಟ್ಟೆ, ಮೀನು, ಬೇಳೆ)\n• ದಿನಕ್ಕೆ 8 ಗ್ಲಾಸ್ ನೀರು\n• ಸಕ್ಕರೆ, ಎಣ್ಣೆ, ಜಂಕ್ ಫುಡ್ ತಪ್ಪಿಸಿ"
        }[L];
    }

    // ============ HEMOGLOBIN ============
    if (q.includes('hemoglobin') || q.includes('hb') || q.includes('ஹீமோகுளோபின்') || q.includes('हीमोग्लोबिन') || q.includes('ഹീമോഗ്ലോബിൻ') || q.includes('ಹಿಮೋಗ್ಲೋಬಿನ್')) {
        return {
            en: "Hemoglobin carries oxygen in your blood. Low hemoglobin may mean anemia. Eat iron-rich foods like spinach, beans, and red meat.",
            ta: "ஹீமோகுளோபின் இரத்தத்தில் ஆக்ஸிஜனை எடுத்துச் செல்லும். குறைவாக இருந்தால் இரத்த சோகை. கீரை, பீன்ஸ், சிவப்பு இறைச்சி சாப்பிடுங்கள்.",
            hi: "हीमोग्लोबिन रक्त में ऑक्सीजन ले जाता है। कम होने पर एनीमिया हो सकता है। पालक, बीन्स, लाल मांस खाएं।",
            ml: "ഹീമോഗ്ലോബിൻ രക്തത്തിൽ ഓക്സിജൻ കൊണ്ടുപോകുന്നു. കുറവാണെങ്കിൽ വിളർച്ച. ചീര, ബീൻസ് കഴിക്കുക.",
            kn: "ಹಿಮೋಗ್ಲೋಬಿನ್ ರಕ್ತದಲ್ಲಿ ಆಮ್ಲಜನಕ ಸಾಗಿಸುತ್ತದೆ. ಕಡಿಮೆಯಿದ್ದರೆ ರಕ್ತಹೀನತೆ. ಪಾಲಕ್, ಬೀನ್ಸ್ ತಿನ್ನಿರಿ."
        }[L];
    }

    // ============ WBC ============
    if (q.includes('wbc') || q.includes('white') || q.includes('வெள்ளை') || q.includes('सफेद') || q.includes('വെളുത്ത') || q.includes('ಬಿಳಿ')) {
        return {
            en: "WBC protects you from infections. High WBC may indicate infection. Consult a doctor.",
            ta: "WBC உங்களை தொற்றுகளிலிருந்து பாதுகாக்கும். அதிகமாக இருந்தால் தொற்று. மருத்துவரை பாருங்கள்.",
            hi: "WBC आपको संक्रमण से बचाती है। उच्च WBC संक्रमण का संकेत। डॉक्टर से मिलें।",
            ml: "WBC അണുബാധയിൽ നിന്ന് സംരക്ഷിക്കുന്നു. ഉയർന്നതാണെങ്കിൽ ഡോക്ടറെ കാണുക.",
            kn: "WBC ಸೋಂಕಿನಿಂದ ರಕ್ಷಿಸುತ್ತದೆ. ಹೆಚ್ಚಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಕಾಣಿ."
        }[L];
    }

    // ============ PLATELETS ============
    if (q.includes('platelet') || q.includes('plt') || q.includes('பிளேட்லெட்') || q.includes('प्लेटलेट') || q.includes('പ്ലേറ്റ്ലെറ്റ്') || q.includes('ಪ್ಲೇಟ್ಲೆಟ್')) {
        return {
            en: "Platelets help blood clot. If low, avoid injuries and consult a doctor.",
            ta: "பிளேட்லெட் இரத்தம் உறைவதற்கு உதவும். குறைவாக இருந்தால் மருத்துவரை பாருங்கள்.",
            hi: "प्लेटलेट्स रक्त जमने में मदद करते हैं। कम होने पर डॉक्टर से मिलें।",
            ml: "പ്ലേറ്റ്ലെറ്റുകൾ രക്തം കട്ടപിടിക്കാൻ സഹായിക്കുന്നു. കുറവാണെങ്കിൽ ഡോക്ടറെ കാണുക.",
            kn: "ಪ್ಲೇಟ್ಲೆಟ್ಗಳು ರಕ್ತ ಹೆಪ್ಪುಗಟ್ಟಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಕಡಿಮೆಯಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಕಾಣಿ."
        }[L];
    }

    // ============ RBC ============
    if (q.includes('rbc') || q.includes('red blood') || q.includes('சிவப்பு') || q.includes('लाल') || q.includes('ചുവന്ന') || q.includes('ಕೆಂಪು')) {
        return {
            en: "RBC (Red Blood Cells) carry oxygen throughout your body. Keep them in the normal range with a balanced diet.",
            ta: "RBC (சிவப்பு இரத்த அணுக்கள்) ஆக்ஸிஜனை உடல் முழுவதும் எடுத்துச் செல்லும். சமச்சீர் உணவு சாப்பிடுங்கள்.",
            hi: "RBC (लाल रक्त कोशिकाएं) पूरे शरीर में ऑक्सीजन ले जाती हैं। संतुलित आहार लें।",
            ml: "RBC (ചുവന്ന രക്താണുക്കൾ) ശരീരത്തിലുടനീളം ഓക്സിജൻ കൊണ്ടുപോകുന്നു.",
            kn: "RBC (ಕೆಂಪು ರಕ್ತ ಕಣಗಳು) ದೇಹದಾದ್ಯಂತ ಆಮ್ಲಜನಕವನ್ನು ಸಾಗಿಸುತ್ತವೆ."
        }[L];
    }

    // ============ ANEMIA ============
    if (q.includes('anemia') || q.includes('இரத்த சோகை') || q.includes('एनीमिया') || q.includes('വിളർച്ച') || q.includes('ರಕ್ತಹೀನತೆ')) {
        return {
            en: "Anemia is caused by low hemoglobin. Eat iron + vitamin C rich foods. Consult a doctor if symptoms persist.",
            ta: "இரத்த சோகை ஹீமோகுளோபின் குறைவால் வரும். இரும்புச்சத்து, வைட்டமின் C சாப்பிடுங்கள்.",
            hi: "एनीमिया कम हीमोग्लोबिन से होता है। आयरन और विटामिन C खाएं।",
            ml: "വിളർച്ച കുറഞ്ഞ ഹീമോഗ്ലോബിൻ മൂലമാണ്. അയൺ, വിറ്റാമിൻ C കഴിക്കുക.",
            kn: "ರಕ್ತಹೀನತೆ ಕಡಿಮೆ ಹಿಮೋಗ್ಲೋಬಿನ್ನಿಂದ. ಕಬ್ಬಿಣ, ವಿಟಮಿನ್ C ಸೇವಿಸಿ."
        }[L];
    }

    // ============ DIABETES / SUGAR ============
    if (q.includes('diabetes') || q.includes('sugar') || q.includes('சர்க்கரை') || q.includes('शुगर') || q.includes('പഞ്ചസാര') || q.includes('ಸಕ್ಕರೆ')) {
        return {
            en: "High glucose may indicate diabetes risk. Reduce sugar, exercise daily, and get HbA1c tested.",
            ta: "சர்க்கரை அதிகமாக இருந்தால் நீரிழிவு ஆபத்து. இனிப்பு குறைக்கவும், உடற்பயிற்சி செய்யவும்.",
            hi: "उच्च ग्लूकोज मधुमेह का खतरा। चीनी कम करें, व्यायाम करें।",
            ml: "ഉയർന്ന ഗ്ലൂക്കോസ് പ്രമേഹ സാധ്യത. പഞ്ചസാര കുറയ്ക്കുക, വ്യായാമം ചെയ്യുക.",
            kn: "ಹೆಚ್ಚಿನ ಗ್ಲೂಕೋಸ್ ಮಧುಮೇಹ ಅಪಾಯ. ಸಕ್ಕರೆ ಕಡಿಮೆ ಮಾಡಿ, ವ್ಯಾಯಾಮ ಮಾಡಿ."
        }[L];
    }

    // ============ TIRED / WEAK ============
    if (q.includes('tired') || q.includes('weak') || q.includes('சோர்வு') || q.includes('பலவீனம்')
        || q.includes('थकान') || q.includes('कमजोरी') || q.includes('ക്ഷീണം') || q.includes('ಆಯಾಸ')) {
        return {
            en: "Tiredness and weakness can be caused by low hemoglobin (anemia). Get a blood test and eat iron-rich foods like spinach, dates, and red meat.",
            ta: "சோர்வு, பலவீனம் ஹீமோகுளோபின் குறைவால் வரலாம். இரத்த பரிசோதனை செய்து, கீரை, பேரிச்சம்பழம் சாப்பிடுங்கள்.",
            hi: "थकान और कमजोरी कम हीमोग्लोबिन के कारण हो सकती है। रक्त परीक्षण कराएं।",
            ml: "ക്ഷീണം ഹീമോഗ്ലോബിൻ കുറവ് മൂലമാകാം. രക്തപരിശോധന ചെയ്യുക.",
            kn: "ಆಯಾಸ ಹಿಮೋಗ್ಲೋಬಿನ್ ಕಡಿಮೆಯಿಂದ ಆಗಬಹುದು. ರಕ್ತ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ."
        }[L];
    }

    // ============ NORMAL / HEALTHY ============
    if (q.includes('normal') || q.includes('healthy') || q.includes('சரி') || q.includes('सामान्य') || q.includes('സാധാരണ') || q.includes('ಸಾಮಾನ್ಯ')) {
        return {
            en: "Your report looks normal! Continue with a healthy diet and exercise.",
            ta: "உங்கள் அறிக்கை சாதாரணம்! ஆரோக்கியமான உணவு, உடற்பயிற்சி தொடரவும்.",
            hi: "रिपोर्ट सामान्य है! स्वस्थ आहार और व्यायाम जारी रखें।",
            ml: "റിപ്പോർട്ട് സാധാരണമാണ്! ആരോഗ്യകരമായ ഭക്ഷണം തുടരുക.",
            kn: "ವರದಿ ಸಾಮಾನ್ಯವಾಗಿದೆ! ಆರೋಗ್ಯಕರ ಆಹಾರ ಮುಂದುವರಿಸಿ."
        }[L];
    }

    // ============ DOCTOR ============
    if (q.includes('doctor') || q.includes('மருத்துவர்') || q.includes('डॉक्टर') || q.includes('ഡോക്ടർ') || q.includes('ವೈದ್ಯ')) {
        return {
            en: "If any value is outside the normal range, consult a doctor immediately.",
            ta: "மதிப்புகள் சாதாரண வரம்பிற்கு வெளியே இருந்தால், மருத்துவரை அணுகவும்.",
            hi: "यदि कोई मान सामान्य सीमा से बाहर है, तो डॉक्टर से मिलें।",
            ml: "ഏതെങ്കിലും മൂല്യം സാധാരണ പരിധിക്ക് പുറത്താണെങ്കിൽ ഡോക്ടറെ കാണുക.",
            kn: "ಯಾವುದೇ ಮೌಲ್ಯ ಸಾಮಾನ್ಯ ಶ್ರೇಣಿಯ ಹೊರಗಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
        }[L];
    }

    // ============ GREETING ============
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('வணக்கம்') || q.includes('नमस्ते') || q.includes('നമസ്കാരം') || q.includes('ನಮಸ್ಕಾರ')) {
        return {
            en: "Hello! Ask me about your report — I'm here to help.",
            ta: "வணக்கம்! அறிக்கை பற்றி கேளுங்கள் — உதவுகிறேன்.",
            hi: "नमस्ते! रिपोर्ट के बारे में पूछें — मदद के लिए हूं।",
            ml: "ഹലോ! റിപ്പോർട്ടിനെക്കുറിച്ച് ചോദിക്കുക.",
            kn: "ನಮಸ್ಕಾರ! ವರದಿ ಬಗ್ಗೆ ಕೇಳಿ."
        }[L];
    }

    // ============ DEFAULT ============
    return {
        en: "Sorry, I didn't understand. Try asking about Hemoglobin, WBC, Platelets, Anemia, Diabetes, Food, or Diet.",
        ta: "மன்னிக்கவும், புரியவில்லை. ஹீமோகுளோபின், WBC, பிளேட்லெட், இரத்த சோகை, சர்க்கரை, உணவு பற்றி கேளுங்கள்.",
        hi: "क्षमा करें। हीमोग्लोबिन, WBC, प्लेटलेट्स, एनीमिया, मधुमेह, भोजन के बारे में पूछें।",
        ml: "ക്ഷമിക്കണം. ഹീമോഗ്ലോബിൻ, WBC, പ്ലേറ്റ്ലെറ്റുകൾ, വിളർച്ച, പ്രമേഹം, ഭക്ഷണം എന്നിവയെക്കുറിച്ച് ചോദിക്കുക.",
        kn: "ಕ್ಷಮಿಸಿ. ಹಿಮೋಗ್ಲೋಬಿನ್, WBC, ಪ್ಲೇಟ್ಲೆಟ್ಗಳು, ರಕ್ತಹೀನತೆ, ಮಧುಮೇಹ, ಆಹಾರ ಬಗ್ಗೆ ಕೇಳಿ."
    }[L];
}

// ---------- VOICE OUTPUT ----------
function speakReport() {
    const condition = document.querySelector('.doctor-value')?.textContent || '';

    const texts = {
        en: "Your blood report analysis is complete. " + condition,
        ta: "உங்கள் இரத்த அறிக்கை பரிசோதனை முடிந்தது. " + condition,
        hi: "आपकी रक्त रिपोर्ट विश्लेषण पूरा हुआ। " + condition,
        ml: "നിങ്ങളുടെ രക്ത റിപ്പോർട്ട് വിശകലനം പൂർത്തിയായി. " + condition,
        kn: "ನಿಮ್ಮ ರಕ್ತ ವರದಿ ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ. " + condition
    };
    const text = texts[currentLang] || texts.en;

    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = currentLang === 'ta' ? 'ta-IN'
                : currentLang === 'hi' ? 'hi-IN'
                : currentLang === 'ml' ? 'ml-IN'
                : currentLang === 'kn' ? 'kn-IN' : 'en-US';
        u.rate = 0.9;
        speechSynthesis.speak(u);
    } else {
        alert("Your browser doesn't support voice output.");
    }
}