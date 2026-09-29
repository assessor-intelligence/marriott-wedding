/* Wedding Hub themes. To add a theme, copy one entry below and change the values.
   --ink: dark color for the hero, buttons and text     --paper: page background
   --brass: accent used on light backgrounds            --brass-lt: accent used on the dark hero
   --line: thin borders                                 --n2style: italic or normal for the second name */
const THEMES = {
  evening: {
    name: "Evening",
    note: "Deep navy with brass. The original look.",
    vars: { "--ink": "#1c2a38", "--paper": "#f5f6f8", "--brass": "#8f6a43", "--brass-lt": "#c8a274", "--line": "#c9d0d8", "--n2style": "italic" },
    serif: '"Cormorant Garamond", Georgia, serif',
    sans: 'Karla, system-ui, sans-serif',
    fonts: "family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Karla:wght@400;600"
  },
  garden: {
    name: "Garden",
    note: "Forest green with dusty rose.",
    vars: { "--ink": "#22382f", "--paper": "#f3f6f1", "--brass": "#9a5b64", "--brass-lt": "#e0a9b0", "--line": "#cbd5c8", "--n2style": "italic" },
    serif: '"Playfair Display", Georgia, serif',
    sans: 'Lato, system-ui, sans-serif',
    fonts: "family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Lato:wght@400;700"
  },
  blush: {
    name: "Blush",
    note: "Plum and soft rose with a fine display face.",
    vars: { "--ink": "#4a2c3a", "--paper": "#faf5f6", "--brass": "#a5566a", "--brass-lt": "#e8b4bf", "--line": "#e1cdd2", "--n2style": "normal" },
    serif: 'Italiana, Georgia, serif',
    sans: 'Jost, system-ui, sans-serif',
    fonts: "family=Italiana&family=Jost:wght@400;600"
  },
  blacktie: {
    name: "Black tie",
    note: "Black and white with silver-grey and high-contrast serif type.",
    vars: { "--ink": "#14161a", "--paper": "#fbfbfc", "--brass": "#5d6672", "--brass-lt": "#b9c1cb", "--line": "#d5d9de", "--n2style": "italic" },
    serif: '"Bodoni Moda", Georgia, serif',
    sans: 'Jost, system-ui, sans-serif',
    fonts: "family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&family=Jost:wght@400;600"
  },
  coastal: {
    name: "Coastal",
    note: "Deep teal with sand gold.",
    vars: { "--ink": "#16404d", "--paper": "#f2f7f8", "--brass": "#8a6a2f", "--brass-lt": "#dcc08a", "--line": "#c5d6da", "--n2style": "italic" },
    serif: '"EB Garamond", Georgia, serif',
    sans: 'Mulish, system-ui, sans-serif',
    fonts: "family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Mulish:wght@400;700"
  }
};

function applyTheme(id) {
  const key = THEMES[id] ? id : "evening";
  const t = THEMES[key];
  const root = document.documentElement.style;
  for (const [k, v] of Object.entries(t.vars)) root.setProperty(k, v);
  root.setProperty("--serif", t.serif);
  root.setProperty("--sans", t.sans);
  let link = document.getElementById("theme-fonts");
  if (!link) {
    link = document.createElement("link");
    link.id = "theme-fonts"; link.rel = "stylesheet";
    document.head.append(link);
  }
  link.href = "https://fonts.googleapis.com/css2?" + t.fonts + "&display=swap";
  try { localStorage.setItem("hub_theme", key); } catch (e) { /* storage can be unavailable */ }
}

/* Guest page: reuse the last theme this device saw so the page doesn't flash the default.
   The admin page sets window.NO_AUTO_THEME so it keeps its own plain look. */
if (!window.NO_AUTO_THEME) {
  let saved = "evening";
  try { saved = localStorage.getItem("hub_theme") || "evening"; } catch (e) { /* ignore */ }
  applyTheme(saved);
}
