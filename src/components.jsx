// ============================================================
// Casa Bună — Shared Components
// ============================================================

const { useState, useEffect, useRef, useMemo } = React;

// ---------- Navigation ----------
function Nav({ page, setPage }) {
  const [dark, setDark] = useState(() => localStorage.getItem('nav-dark') === '1');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    localStorage.setItem('nav-dark', dark ? '1' : '0');
  }, [dark]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) { setHidden(false); }
      else if (y > lastY + 6) { setHidden(true); }
      else if (y < lastY - 6) { setHidden(false); }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Acasă' },
    { id: 'programe', label: 'Programe' },
    { id: 'transparenta', label: 'Transparență' },
    { id: 'despre', label: 'Cine suntem' },
    { id: 'implica', label: 'Implică-te' },
  ];
  return (
    <header className={`nav${dark ? ' nav-dark' : ''}${hidden ? ' nav-hidden' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => setPage('home')}>
          <img src={dark ? 'casa-dark.png' : 'casa.png'} alt="Casa Bună" style={{ height: 72, display: 'block' }} />
        </div>
        <nav className="nav-links">
          {items.map(it => (
            <div
              key={it.id}
              className={`nav-link ${page === it.id ? 'active' : ''}`}
              onClick={() => setPage(it.id)}
            >{it.label}</div>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            title={dark ? 'Mod luminos' : 'Mod întunecat'}
            style={{
              appearance: 'none', border: 0, background: 'transparent',
              cursor: 'pointer', fontSize: 18, lineHeight: 1,
              padding: '4px 8px', borderRadius: 6, opacity: 0.7,
            }}
          >{dark ? '☀' : '☾'}</button>
          <div style={{ width: 6 }} />
          <button className="btn btn-primary btn-pill" onClick={() => setPage('doneaza')}>
            Donează <span className="arrow">→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

// ---------- Footer ----------
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em' }}>
              Binele este <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>molipsitor.</span>
            </div>
            <p style={{ marginTop: 20, color: 'rgba(245,241,234,0.65)', maxWidth: 360, fontSize: 15 }}>
              O comunitate de voluntari construită în jurul nevoilor copiilor din Ferentari, Jilava și 7 sate din Argeș.
            </p>
            <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => setPage('doneaza')}>
              Donează lunar <span className="arrow">→</span>
            </button>
          </div>
          <FooterCol title="Navigare" items={[
            ['Acasă', () => setPage('home')],
            ['Programe', () => setPage('programe')],
            ['Transparență', () => setPage('transparenta')],
            ['Cine suntem', () => setPage('despre')],
            ['Implică-te', () => setPage('implica')],
          ]} />
          <FooterCol title="Susține" items={[
            ['Donează acum', () => setPage('doneaza')],
            ['Redirecționează 3,5%', () => setPage('doneaza')],
            ['Sponsorizare companie', () => setPage('implica')],
            ['Voluntariat', () => setPage('implica')],
          ]} />
          <div>
            <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)', marginBottom: 14 }}>Contact</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(245,241,234,0.85)' }}>
              Șoseaua Giurgiului 78<br />
              Jilava, Ilfov 077120<br />
              contact@asociatiacasabuna.ro
            </div>
            <div className="mono" style={{ marginTop: 18, fontSize: 11, color: 'rgba(245,241,234,0.55)' }}>
              IBAN · RO47 BTRL RONC RT05 6639 8301<br />
              CUI · 1321/A/2020
            </div>
          </div>
        </div>
        <hr style={{ border: 0, borderTop: '1px solid rgba(245,241,234,0.12)', margin: '56px 0 24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(245,241,234,0.5)' }}>
          <div>© 2020–2026 Asociația Casa Bună. Toate drepturile rezervate.</div>
          <img src="casa-footer.png" alt="Casa Bună" style={{ height: 72, display: 'block' }} />
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Politica de confidențialitate</a>
            <a href="#">Politica de cookies</a>
            <a href="#">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }) {
  return (
    <div>
      <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'grid', gap: 10 }}>
        {items.map(([label, fn], i) => (
          <a key={i} onClick={fn} style={{ cursor: 'pointer', fontSize: 14 }}>{label}</a>
        ))}
      </div>
    </div>
  );
}

// ---------- Photo placeholder ----------
function PhotoPh({ label, h = 320, dark, style, children }) {
  return (
    <div
      className={`photo-ph ${dark ? 'dark' : ''}`}
      style={{ height: h, width: '100%', ...style }}
    >
      <div className="label">{label || 'PHOTO ▢'}</div>
      {children}
    </div>
  );
}

// ---------- Silhouettes (children/people abstract) ----------
function SilGroup({ color = 'var(--ink)', opacity = 1 }) {
  return (
    <svg viewBox="0 0 320 220" style={{ width: '100%', height: 'auto', color, opacity }}>
      <g>
        <circle cx="60" cy="58" r="22" />
        <path d="M30 86 Q60 76 90 86 L96 200 Q60 210 24 200 Z" />
      </g>
      <g transform="translate(110 22)">
        <circle cx="60" cy="62" r="26" />
        <path d="M26 94 Q60 82 94 94 L102 200 Q60 212 18 200 Z" />
      </g>
      <g transform="translate(218 40)">
        <circle cx="50" cy="50" r="18" />
        <path d="M24 74 Q50 66 76 74 L82 200 Q50 208 18 200 Z" />
      </g>
    </svg>
  );
}

function SilSingle({ color = 'var(--ink)' }) {
  return (
    <svg viewBox="0 0 120 200" style={{ width: '100%', height: '100%', color }}>
      <circle cx="60" cy="50" r="26" />
      <path d="M22 84 Q60 72 98 84 L106 200 Q60 212 14 200 Z" />
    </svg>
  );
}

// ---------- Number ticker (animated) ----------
function Ticker({ to, prefix = '', suffix = '', duration = 1200, format = (n) => n.toLocaleString('ro-RO') }) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={nodeRef} className="tabular">{prefix}{format(val)}{suffix}</span>;
}

// ---------- Section header ----------
function SectionHeader({ eyebrow, title, kicker, align = 'left', children }) {
  return (
    <div style={{ marginBottom: 56, textAlign: align, maxWidth: align === 'center' ? 760 : 'none', margin: align === 'center' ? '0 auto 56px' : '0 0 56px' }}>
      {eyebrow && <div className="eyebrow"><span className="dot"></span>{eyebrow}</div>}
      <h2 className="display-m" style={{ marginTop: eyebrow ? 18 : 0 }}>{title}</h2>
      {kicker && <p className="lead text-soft" style={{ marginTop: 18, maxWidth: 620 }}>{kicker}</p>}
      {children}
    </div>
  );
}

// ---------- Arrow icon ----------
function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ---------- Share to global ----------
Object.assign(window, {
  Nav, Footer, PhotoPh, SilGroup, SilSingle, Ticker, SectionHeader, Arrow, FooterCol
});
