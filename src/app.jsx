// ============================================================
// Casa Bună — App shell, router, tweaks
// ============================================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "warm-paper",
  "displayType": "instrument-serif",
  "bodyType": "bricolage"
}/*EDITMODE-END*/;

const PALETTES = {
  'warm-paper': {
    label: 'Hârtie caldă',
    swatches: ['#F5F1EA', '#D97757', '#2A5D3C', '#1A1A1A'],
    vars: {
      '--bg': '#F5F1EA', '--bg-deep': '#EDDFD0', '--bg-paper': '#FAF6EE',
      '--ink': '#1A1A1A', '--ink-soft': '#4A4642', '--ink-mute': '#8C857B',
      '--rule': '#D8CFC0', '--accent': '#D97757', '--accent-deep': '#B85A3C',
      '--forest': '#2A5D3C', '--forest-deep': '#1F4A2D', '--sun': '#FFD85A', '--rose': '#C8553D',
    }
  },
  'olive-clay': {
    label: 'Lut și măsline',
    swatches: ['#EFEBE0', '#A14B2E', '#5C6B2A', '#1F1A14'],
    vars: {
      '--bg': '#EFEBE0', '--bg-deep': '#E2DCC9', '--bg-paper': '#F7F3E8',
      '--ink': '#1F1A14', '--ink-soft': '#403A2D', '--ink-mute': '#857d6d',
      '--rule': '#CFC8B3', '--accent': '#A14B2E', '--accent-deep': '#7E3820',
      '--forest': '#5C6B2A', '--forest-deep': '#42501B', '--sun': '#FFD85A', '--rose': '#A14B2E',
    }
  },
  'ink-cream': {
    label: 'Cerneală pe crem',
    swatches: ['#F8F4ED', '#0F2742', '#B8431F', '#0A0A0A'],
    vars: {
      '--bg': '#F8F4ED', '--bg-deep': '#ECE5D3', '--bg-paper': '#FFFCF5',
      '--ink': '#0A0A0A', '--ink-soft': '#2C2A28', '--ink-mute': '#827D75',
      '--rule': '#D8CFC0', '--accent': '#B8431F', '--accent-deep': '#8B3217',
      '--forest': '#0F2742', '--forest-deep': '#091A2D', '--sun': '#FFD85A', '--rose': '#B8431F',
    }
  },
  'sage-rose': {
    label: 'Salvie și trandafir',
    swatches: ['#F2EFE8', '#C26F66', '#6B7E5C', '#221E1B'],
    vars: {
      '--bg': '#F2EFE8', '--bg-deep': '#E5DFCF', '--bg-paper': '#F9F6EF',
      '--ink': '#221E1B', '--ink-soft': '#48423d', '--ink-mute': '#8a8278',
      '--rule': '#D5CCBA', '--accent': '#C26F66', '--accent-deep': '#9C4F47',
      '--forest': '#6B7E5C', '--forest-deep': '#4F5F42', '--sun': '#FFD85A', '--rose': '#C26F66',
    }
  },
  'dawn-night': {
    label: 'Zori de zi',
    swatches: ['#171715', '#FAF6EE', '#F2A65A', '#88B289'],
    vars: {
      '--bg': '#171715', '--bg-deep': '#221F1B', '--bg-paper': '#1F1C18',
      '--ink': '#FAF6EE', '--ink-soft': '#C9C2B3', '--ink-mute': '#8b8478',
      '--rule': '#33302a', '--accent': '#F2A65A', '--accent-deep': '#D08A40',
      '--forest': '#88B289', '--forest-deep': '#6A9A6B', '--sun': '#FFD85A', '--rose': '#E68A7C',
    }
  },
};

const TYPE_DISPLAY = {
  'instrument-serif': { family: "'Instrument Serif', serif", label: 'Instrument Serif' },
  'newsreader': { family: "'Newsreader', serif", label: 'Newsreader Italic' },
  'cormorant': { family: "'Cormorant Garamond', serif", label: 'Cormorant' },
  'spectral': { family: "'Spectral', serif", label: 'Spectral' },
  'caslon': { family: "'Libre Caslon Text', serif", label: 'Libre Caslon' },
};
const TYPE_BODY = {
  'bricolage': { family: "'Bricolage Grotesque', sans-serif", label: 'Bricolage Grotesque' },
  'space-grotesk': { family: "'Space Grotesk', sans-serif", label: 'Space Grotesk' },
  'public-sans': { family: "'Public Sans', sans-serif", label: 'Public Sans' },
  'work-sans': { family: "'Work Sans', sans-serif", label: 'Work Sans' },
};

function loadGoogleFont(family) {
  const id = 'gf-' + family.replace(/[^a-z0-9]/gi, '');
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id; link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:ital,wght@0,300..800;1,300..800&display=swap`;
  document.head.appendChild(link);
}

function App() {
  const [page, setPage] = useState('home');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette
  useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES['warm-paper'];
    Object.entries(p.vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [t.palette]);

  // Apply typography
  useEffect(() => {
    const d = TYPE_DISPLAY[t.displayType] || TYPE_DISPLAY['instrument-serif'];
    const b = TYPE_BODY[t.bodyType] || TYPE_BODY['bricolage'];
    if (t.displayType === 'newsreader') loadGoogleFont('Newsreader');
    if (t.displayType === 'cormorant') loadGoogleFont('Cormorant Garamond');
    if (t.displayType === 'spectral') loadGoogleFont('Spectral');
    if (t.displayType === 'caslon') loadGoogleFont('Libre Caslon Text');
    if (t.bodyType === 'space-grotesk') loadGoogleFont('Space Grotesk');
    if (t.bodyType === 'public-sans') loadGoogleFont('Public Sans');
    if (t.bodyType === 'work-sans') loadGoogleFont('Work Sans');
    document.documentElement.style.setProperty('--serif', d.family);
    document.documentElement.style.setProperty('--sans', b.family);
  }, [t.displayType, t.bodyType]);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page]);

  const pageMap = {
    'home': HomePage,
    'doneaza': DoneazaPage,
    'transparenta': TransparentaPage,
    'despre': DesprePage,
    'programe': ProgramePage,
    'implica': ImplicaPage,
  };
  const PageComp = pageMap[page] || HomePage;

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main key={page}>
        <PageComp setPage={setPage} />
      </main>
      <Footer setPage={setPage} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paletă">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {Object.entries(PALETTES).map(([k, p]) => (
              <div
                key={k}
                onClick={() => setTweak('palette', k)}
                style={{
                  cursor: 'pointer',
                  padding: 10,
                  border: t.palette === k ? '2px solid var(--accent)' : '1px solid var(--rule)',
                  background: 'var(--bg-paper)',
                  borderRadius: 4,
                }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
                  {p.swatches.map((s, i) => (
                    <div key={i} style={{ width: 14, height: 14, background: s, border: '1px solid rgba(0,0,0,0.1)' }}></div>
                  ))}
                </div>
                <div style={{ fontSize: 11, fontFamily: 'var(--mono)' }}>{p.label}</div>
              </div>
            ))}
          </div>
        </TweakSection>

        <TweakSection label="Tipografie">
          <TweakSelect
            label="Display"
            value={t.displayType}
            onChange={v => setTweak('displayType', v)}
            options={Object.entries(TYPE_DISPLAY).map(([k, v]) => ({ value: k, label: v.label }))}
          />
          <TweakSelect
            label="Text"
            value={t.bodyType}
            onChange={v => setTweak('bodyType', v)}
            options={Object.entries(TYPE_BODY).map(([k, v]) => ({ value: k, label: v.label }))}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
