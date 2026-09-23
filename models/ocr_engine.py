from PyPDF2 import PdfReader


def extract_text_from_file(filepath):
    """Extract text from PDF. Image OCR not supported without Tesseract."""
    ext = filepath.rsplit(".", 1)[1].lower()
    if ext == "pdf":
        return extract_from_pdf(filepath)
    return "[Image OCR not supported on this machine. Please upload a PDF report.]"


def extract_from_pdf(filepath):
    """Read text from PDF using PyPDF2 (no Tesseract needed)."""
    text = ""
    try:
        reader = PdfReader(filepath)
        for page in reader.pages:
            page_text = page.extract_text() or ""
            text += page_text + "\n"
    except Exception as e:
        print("PDF text extract error:", e)
        text = f"PDF Error: {e}"
    return text