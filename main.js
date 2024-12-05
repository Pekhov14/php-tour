import './style.css'

import "prism-code-editor/prism/languages/php"

import { createEditor } from "prism-code-editor"
import { matchBrackets } from "prism-code-editor/match-brackets"
import { indentGuides } from "prism-code-editor/guides"

import 'prism-code-editor/layout.css';
import 'prism-code-editor/scrollbar.css';
import 'prism-code-editor/themes/github-dark.css';
import 'prism-code-editor/themes/github-light.css';
import { loadTheme } from "prism-code-editor/themes"

const themeToggle = document.getElementById('themeToggle');
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');
const editorElement = document.getElementById('editor');

// let isDark = matchMedia('(prefers-color-scheme: dark)').matches;
let isDark = false;

document.body.classList.toggle("dark", isDark);
lightIcon.classList.toggle("hidden", isDark);
darkIcon.classList.toggle("hidden", !isDark);

const loadEditorTheme = (darkMode) => {
  loadTheme(darkMode ? 'github-dark' : 'github-light').then((theme) => {
    console.log('Theme loaded:');
  });
};

const editor = createEditor(
  "#editor",
  {
    language: "php",
    theme: "github-dark",
    tabSize: 4,
    useTabs: true,
  },
  indentGuides(),
  matchBrackets(),
  () => console.log("ready"),
)

loadEditorTheme(isDark);

themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);

  lightIcon.classList.toggle("hidden", isDark);
  darkIcon.classList.toggle("hidden", !isDark);

  loadTheme(isDark ? "github-dark" : "github-light");
});

document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById('editor');

    editor.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            editor.value = editor.value.substring(0, start) + '\t' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 1;
        }
    });
});
