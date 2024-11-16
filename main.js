import './style.css'
import { setupCounter } from './editor.js'

import "prism-code-editor/prism/languages/php"

import { createEditor } from "prism-code-editor"
import { matchBrackets } from "prism-code-editor/match-brackets"
import { indentGuides } from "prism-code-editor/guides"

// Importing styles
import "prism-code-editor/layout.css"
import "prism-code-editor/scrollbar.css"
import "prism-code-editor/themes/github-dark.css"

import { loadTheme } from "prism-code-editor/themes"

const isDark = matchMedia("(prefers-color-scheme: dark)").matches

loadTheme(isDark ? "github-dark" : "github-light").then(theme => {
  console.log(theme)
})

const editor = createEditor(
  "#editor",
  {
    language: "php",
    theme: "github-dark",
  },
  indentGuides(),
  matchBrackets(),
  () => console.log("ready"),
)

// import("./extensions")











// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
