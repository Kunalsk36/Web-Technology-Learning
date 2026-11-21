/* randomJokes.js — fetch a random joke from icanhazdadjoke.com (free public
 * API, English) and translate it to Hindi via the free public MyMemory
 * translation API. Interactive button + animated joke box. */

const API_URL = "https://icanhazdadjoke.com/";
const TRANSLATE_URL = "https://api.mymemory.translated.net/get?q=";

const button = document.getElementById("joke-btn");
const box = document.getElementById("joke-box");
const textEl = document.getElementById("joke-text");

function showJoke(text) {
  textEl.textContent = text;
  box.classList.remove("show");
  void box.offsetHeight; // force reflow so the animation can replay
  box.classList.add("show");
}

async function getHindiJoke() {
  // 1. Random joke from icanhazdadjoke.com (free public API)
  const apiJoke = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
      "User-Agent": "randomJokes.html (educational demo)",
    },
  }).then((res) => {
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    return res.json();
  });

  const english = apiJoke.joke || apiJoke.setup || "";
  if (!english) throw new Error("API returned no joke text");

  // 2. Translate to Hindi (free public MyMemory translation API)
  const translated = await fetch(
    TRANSLATE_URL + encodeURIComponent(english) + "&langpair=en|hi"
  ).then((res) => res.json());

  const hindi = translated?.responseData?.translatedText?.trim();

  showJoke(hindi || english);
}

async function loadAndShow() {
  button.disabled = true;
  button.textContent = "⏳ Loading...";
  try {
    await getHindiJoke();
  } catch (err) {
    console.error(err);
    showJoke("😄 Sorry — the joke server is being naughty. Tap again!");
  } finally {
    button.disabled = false;
    button.textContent = "🎲 New Joke";
  }
}

button.addEventListener("click", loadAndShow);

// Load the first joke right away
loadAndShow();
