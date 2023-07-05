export function translate(text, language) {
  let translated;

  if (language === "nl") {
    translated = text.nl;
  } else {
    translated = text.en;
  }

  if (translated) {
    return translated;
  } else {
    return text;
  }
}
