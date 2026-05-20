/* =============================================
   PROJECTS - Add an object here to get a new project card.
   
   image  → path relative to index.html, e.g. "assets/projects/my-app.jpg"
             if missing or broken, a placeholder icon shows automatically
   github → set to null to hide the GitHub button
   demo   → set to null to hide the Live Demo button
   tags   → style: "navy" | "sand" | "soft" | "sage" | "rose" | "slate"
   ============================================= */

const PROJECTS = [
  {
    title:  "Shica Talks",
    image:  "assets/projects/shicaTalks.png",
    tags:   [
      { label: "React",            style: "rose" },
      { label: "Vite",             style: "slate" },
      { label: "HuggingFace API",  style: "sage" },
      { label: "JavaScript",       style: "soft" },
    ],
    desc:   "An AI-powered chat app built with React and Vite, using HuggingFace's Inference API with Llama 3.1 8B. Features real-time responses, full markdown rendering, XSS-safe sanitization, and keyboard shortcuts.",
    github: "https://github.com/Koushica-BU/shica-talks",
    demo:   "https://koushica-bu.github.io/shica-talks/",
  },
  {
    title:  "Markdown Editor",
    image:  "assets/projects/markdown-editor.png",
    tags:   [
      { label: "HTML5",      style: "navy" },
      { label: "CSS3",       style: "sand" },
      { label: "JavaScript", style: "soft" },
    ],
    desc:   "An in-browser Markdown editor with a formatting toolbar, split-pane live preview, edit and preview modes, word and character counters, a syntax cheatsheet, and copy-to-clipboard support.",
    github: "https://github.com/Koushica-BU/md-editor",
    demo:   "https://koushica-bu.github.io/md-editor/",
  },
  {
    title:  "Error Decoder",
    image:  "assets/projects/error-decoder.png",
    tags:   [
      { label: "HTML5",      style: "navy" },
      { label: "CSS3",       style: "sand" },
      { label: "JavaScript", style: "soft" },
    ],
    desc:   "An AI-powered web app that transforms cryptic error messages into plain-English explanations with root cause analysis and fix suggestions — built with React, TypeScript, and Gemini AI.",
    github: "https://github.com/Koushica-BU/error-decoder",
    demo:   "https://error-decoder-kbu.vercel.app/",
  },
  {
    title:  "Pantry Pal",
    image:  "assets/projects/PantryPal.png",
    tags:   [
      { label: "React",      style: "navy" },
      { label: "TypeScript",  style: "sand" },
      { label: "Node.js", style: "soft" },
      { label: "Express.js", style: "sage" },
      { label: "MongoDB", style: "rose" },
      { label: "Tailwind CSS", style: "slate" },
      { label: "REST API", style: "navy" },
      { label: "JWT Auth", style: "sand" },
      { label: "Spoonacular API", style: "soft" }
    ],
    desc:   "A full-stack recipe discovery app that matches meals to your pantry ingredients in real time. Add what you have, get ranked recipes instantly, plan your week, and auto-generate a shopping list for missing ingredients.",
    github: "https://github.com/Koushica-BU/PantryPal",
    demo:   "https://pantry-pal-kbu.vercel.app",
  },
  {
    title:  "TicTacToe",
    image:  "assets/projects/TicTacToe.png",
    tags:   [
      {label: "React.js", style: "rose"},
      { label: "HTML5",   style: "navy" },
      { label: "CSS3", style: "sand" },
      { label: "JavaScript", style: "soft" },
    ],
    desc:   "A TicTacToe game built with React.js, demonstrating component structure, state management, and responsive gameplay.",
    github: "https://github.com/Koushica-BU/TicTacToe",
    demo:   "https://koushica-bu.github.io/TicTacToe/",
  },
  {
    title:  "Stop Watch",
    image:  "assets/projects/StopWatch.png",
    tags:   [
      { label: "HTML5",   style: "navy" },
      { label: "CSS3", style: "sand" },
      { label: "JavaScript", style: "soft" },
    ],
    desc:   "A multi-stopwatch app where multiple independent timers run simultaneously. Each instance supports start, pause, and reset with millisecond-level precision.",
    github: "https://github.com/Koushica-BU/stopwatch",
    demo: "https://koushica-bu.github.io/stopwatch/",
  },
  {
    title:  "Autocomplete",
    image:  "assets/projects/Autocomplete.png",
    tags:   [
      { label: "HTML5",      style: "navy" },
      { label: "CSS3",       style: "soft" },
      { label: "JavaScript", style: "sand" },
    ],
    desc: "An autocomplete component that filters a predefined dataset in real-time, displaying dynamic dropdown suggestions as users type.",
    github: "https://github.com/Koushica-BU/autocomplete",
    demo: "https://koushica-bu.github.io/autocomplete/",
  },
  {
    title:  "This Portfolio",
    image:  "",
    tags:   [
      { label: "HTML5",      style: "navy" },
      { label: "CSS3",       style: "soft" },
      { label: "JavaScript", style: "sand" },
    ],
    desc:   "A professional personal portfolio — clean, honest, and distinctly mine. No templates, no fluff. Good engineering, good taste.",
    github: "https://github.com/Koushica-BU/koushica-portfolio",
    demo:   "https://koushica.vercel.app",
  },
];
