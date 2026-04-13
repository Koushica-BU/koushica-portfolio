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
  // {
  //   title: "Candy Crush Clone",
  //   image:  "assets/projects/CandyCrush.jpg",
  //   tags:   [
  //     { label: "HTML5",   style: "navy" },
  //     { label: "CSS3", style: "sand" },
  //     { label: "Javascript", style: "soft" },
  //   ],
  //   desc:   "A match-three puzzle game inspired by Candy Crush. Swap candies to create matches, earn points, and progress through levels with smooth animations and responsive gameplay.",
  //   github: "https://github.com/Koushica-BU/Candy-crush",
  //   demo:   "https://koushica-bu.github.io/Candy-crush/",
  // },
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
  // {
  //   title:  "Expandable card",
  //   image:  "assets/projects/Expandable Card.jpg",
  //   tags:   [
  //     { label: "HTML5",      style: "navy" },
  //     { label: "CSS3",       style: "soft" },
  //     { label: "Figma", style: "sand" },
  //   ],
  //   desc: "An interactive expandable card component with smooth transitions, built to showcase dynamic UI design and responsive front-end development.",
  //   github: "https://github.com/Koushica-BU/Expandable-Card",
  //   demo: "https://koushica-bu.github.io/Expandable-Card/"
  // },
  // {
  //   title:  "Netflix Login page - Clone",
  //   image:  "assets/projects/netflix-login-page.jpg",
  //   tags:   [
  //     { label: "HTML5",      style: "navy" },
  //     { label: "CSS3",       style: "soft" },
  //     { label: "Figma",      style: "sand" },
  //   ],
  //   desc: "A pixel-accurate Netflix login page clone, designed in Figma and built with HTML and CSS.",
  //   github: "https://github.com/Koushica-BU/NetflixLogin",
  //   demo: "https://koushica-bu.github.io/NetflixLogin/",
  // },
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
