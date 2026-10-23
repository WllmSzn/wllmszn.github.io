// DNA Naos « room-and-pillar », accent bleu électrique (#4C82FF en aplat, #7AA2FF en texte).
// Recompiler après toute modification des pages : voir README.md dans ce dossier.
module.exports = {
  content: { relative: true, files: ['../index.html', '../portfolio.html', '../artefact.html', '../designer-augmente.html'] },
  theme: {
    extend: {
      colors: {
        surface: '#1F2025', raised: '#2A2B2F', line: '#323338', ink: '#F2F2F6', muted: '#C2C2DD',
        accent: '#4C82FF', 'accent-ink': '#131419', accent2: '#C2C2DD',
        success: '#4CC38A', warning: '#E8C547', danger: '#EF7270',
        inverse: '#131419', paper: '#F2F2F6', 'paper-soft': '#DBDBE9',
      },
      backgroundColor: { base: '#131419' },
      textColor: { accent: '#7AA2FF' },
      fontFamily: {
        display: ['Inter Tight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter Tight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: { ui: '6px', card: '30px' },
    },
  },
};
