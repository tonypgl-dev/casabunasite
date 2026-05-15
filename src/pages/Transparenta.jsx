// ============================================================
// Casa Bună — Transparență (live dashboard)
// ============================================================

function TransparentaPage({ setPage }) {
  const [month, setMonth] = useState('Mai 2026');

  return (
    <div className="page" data-screen-label="03 Transparență">
      <TPHero />
      <TPLiveBreakdown />
      <TPSankey />
      <TPTimeline month={month} setMonth={setMonth} />
      <TPYearOverYear />
      <TPMonthlyReports />
      <TPDocsAndCTA setPage={setPage} />
    </div>
  );
}

// ----- Hero -----
function TPHero() {
  return (
    <section style={{ padding: '72px 0 48px' }}>
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Transparență · live</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end', marginTop: 24 }}>
          <h1 className="display-xl">
            Vezi fiecare<br />
            <span className="italic" style={{ color: 'var(--accent)' }}>leu.</span> Pe el. Și<br />
            unde se duce.
          </h1>
          <p className="lead text-soft" style={{ maxWidth: 420 }}>
            Updateăm dashboard-ul în fiecare miercuri. Vezi de unde vin banii și cum sunt cheltuiți —
            categorie cu categorie, sat cu sat.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <span className="tag live">LIVE · actualizat 14 mai 12:42</span>
          <span className="tag">94% direct la copii</span>
          <span className="tag">6% costuri operaționale</span>
          <span className="tag">0% lobby / marketing plătit</span>
        </div>
      </div>
    </section>
  );
}

// ----- Live breakdown (big donut + categories) -----
function TPLiveBreakdown() {
  const cats = [
    { name: 'Educație', pct: 41, lei: 58375, color: 'var(--accent)', items: 'meditații · pre-școală · alfabetizare' },
    { name: 'Hrană & demnitate', pct: 22, lei: 31324, color: 'var(--forest)', items: 'mese calde · ghiozdane · haine' },
    { name: 'Sănătate', pct: 18, lei: 25628, color: 'var(--rose)', items: 'consulturi · dentar · vaccinări' },
    { name: 'Tabere & vocațional', pct: 13, lei: 18509, color: 'var(--sun)', items: 'tabere · ucenicii · cursuri' },
    { name: 'Operațional', pct: 6, lei: 8543, color: 'var(--ink-mute)', items: 'logistică · administrativ' },
  ];

  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <section style={{ background: 'var(--bg-deep)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Defalcare lunară · Mai 2026</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>Cum se duc <span className="italic" style={{ color: 'var(--accent)' }}>142.380 lei</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>← Apr 2026</button>
            <button className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>Iun 2026 →</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          {/* Donut */}
          <div style={{ position: 'relative', aspectRatio: 1, maxWidth: 380, margin: '0 auto' }}>
            <svg viewBox="0 0 280 280" style={{ width: '100%', transform: 'rotate(-90deg)' }}>
              <circle cx="140" cy="140" r={radius} fill="none" stroke="var(--bg-paper)" strokeWidth="40" />
              {cats.map((c, i) => {
                const dash = (c.pct / 100) * circumference;
                const offset = -cumulative;
                cumulative += dash;
                return (
                  <circle
                    key={i}
                    cx="140" cy="140" r={radius}
                    fill="none"
                    stroke={c.color}
                    strokeWidth="40"
                    strokeDasharray={`${dash} ${circumference}`}
                    strokeDashoffset={offset}
                  />
                );
              })}
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
              <div>
                <div className="kicker">total mai 2026</div>
                <div className="tick" style={{ fontSize: 56, marginTop: 4 }}>142.380</div>
                <div className="kicker">lei cheltuiți / 180.000 buget</div>
              </div>
            </div>
          </div>

          {/* Categories list */}
          <div style={{ display: 'grid', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {cats.map((c, i) => (
              <div key={i} style={{ background: 'var(--bg-paper)', padding: '22px 24px', display: 'grid', gridTemplateColumns: '20px 1fr 100px 110px', gap: 18, alignItems: 'center' }}>
                <div style={{ width: 14, height: 14, background: c.color, borderRadius: 3 }}></div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{c.name}</div>
                  <div className="text-mute" style={{ fontSize: 12, marginTop: 2 }}>{c.items}</div>
                </div>
                <div className="mono tabular" style={{ fontSize: 14, color: 'var(--ink-soft)', textAlign: 'right' }}>
                  {c.lei.toLocaleString('ro-RO')} lei
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ flex: 1, height: 4, background: 'var(--bg-deep)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, width: c.pct + '%', background: c.color }}></div>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, minWidth: 36, textAlign: 'right' }}>{c.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Sankey diagram (de unde → unde se duc) -----
function TPSankey() {
  const sources = [
    { id: 's1', name: 'Donatori lunari', value: 78600, pct: 55, color: 'var(--accent)' },
    { id: 's2', name: 'Companii / sponsori', value: 42400, pct: 30, color: 'var(--forest)' },
    { id: 's3', name: 'Donații unice', value: 14000, pct: 10, color: 'var(--rose)' },
    { id: 's4', name: 'Redirecț. 3,5%', value: 7380, pct: 5, color: 'var(--sun)' },
  ];
  const dests = [
    { id: 'd1', name: 'Educație', value: 58375, pct: 41 },
    { id: 'd2', name: 'Hrană', value: 31324, pct: 22 },
    { id: 'd3', name: 'Sănătate', value: 25628, pct: 18 },
    { id: 'd4', name: 'Tabere', value: 18509, pct: 13 },
    { id: 'd5', name: 'Operațional', value: 8543, pct: 6 },
  ];

  const totalIn = sources.reduce((s, x) => s + x.value, 0);
  const totalOut = dests.reduce((s, x) => s + x.value, 0);
  const W = 1240, H = 460, padTop = 12, padBot = 12, gap = 4;
  const colW = 280;

  const sourceTop = [];
  let yIn = padTop;
  sources.forEach(s => {
    const h = ((H - padTop - padBot - gap * (sources.length - 1)) * s.value) / totalIn;
    sourceTop.push({ ...s, y: yIn, h });
    yIn += h + gap;
  });
  const destTop = [];
  let yOut = padTop;
  dests.forEach(d => {
    const h = ((H - padTop - padBot - gap * (dests.length - 1)) * d.value) / totalOut;
    destTop.push({ ...d, y: yOut, h });
    yOut += h + gap;
  });

  const flows = [];
  sourceTop.forEach(s => {
    let cursorS = s.y;
    destTop.forEach(d => {
      const flow = (s.value * d.value) / totalOut;
      const flowH = (flow / totalIn) * (H - padTop - padBot - gap * (sources.length - 1));
      flows.push({ src: s, dst: d, value: flow, sy: cursorS, dy: 0, h: flowH });
      cursorS += flowH;
    });
  });
  const destCursor = {};
  destTop.forEach(d => destCursor[d.id] = d.y);
  flows.forEach(f => {
    f.dy = destCursor[f.dst.id];
    destCursor[f.dst.id] += f.h;
  });

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Sankey diagram"
          title={<>De unde vin banii. <span className="italic">Unde se duc.</span></>}
          kicker="Fiecare panglică e proporțională cu suma. Pasează mouse-ul peste fiecare flux pentru detalii."
        />

        <div style={{ background: 'var(--bg-paper)', border: '1px solid var(--rule)', padding: 32, overflow: 'visible' }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            {/* Flows */}
            {flows.map((f, i) => {
              const x1 = colW;
              const x2 = W - colW;
              const cpx1 = x1 + (x2 - x1) * 0.4;
              const cpx2 = x1 + (x2 - x1) * 0.6;
              const path = `
                M ${x1} ${f.sy}
                C ${cpx1} ${f.sy}, ${cpx2} ${f.dy}, ${x2} ${f.dy}
                L ${x2} ${f.dy + f.h}
                C ${cpx2} ${f.dy + f.h}, ${cpx1} ${f.sy + f.h}, ${x1} ${f.sy + f.h}
                Z
              `;
              return (
                <path
                  key={i}
                  d={path}
                  fill={f.src.color}
                  fillOpacity={0.32}
                  stroke="none"
                >
                  <title>{f.src.name} → {f.dst.name}: {Math.round(f.value).toLocaleString('ro-RO')} lei</title>
                </path>
              );
            })}

            {/* Source bars */}
            {sourceTop.map((s, i) => (
              <g key={s.id}>
                <rect x={colW - 24} y={s.y} width="24" height={s.h} fill={s.color} />
                <text x={colW - 36} y={s.y + s.h / 2} textAnchor="end" dominantBaseline="middle"
                  style={{ fontFamily: 'var(--serif)', fontSize: 22, fill: 'var(--ink)' }}>{s.name}</text>
                <text x={colW - 36} y={s.y + s.h / 2 + 22} textAnchor="end" dominantBaseline="middle"
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, fill: 'var(--ink-mute)' }}>
                  {s.value.toLocaleString('ro-RO')} lei · {s.pct}%
                </text>
              </g>
            ))}
            {/* Dest bars */}
            {destTop.map((d, i) => (
              <g key={d.id}>
                <rect x={W - colW} y={d.y} width="24" height={d.h} fill="var(--ink)" />
                <text x={W - colW + 36} y={d.y + d.h / 2} dominantBaseline="middle"
                  style={{ fontFamily: 'var(--serif)', fontSize: 22, fill: 'var(--ink)' }}>{d.name}</text>
                <text x={W - colW + 36} y={d.y + d.h / 2 + 22} dominantBaseline="middle"
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, fill: 'var(--ink-mute)' }}>
                  {d.value.toLocaleString('ro-RO')} lei · {d.pct}%
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 24, fontSize: 13, color: 'var(--ink-soft)', flexWrap: 'wrap' }}>
          <div>Total intrări mai 2026: <strong className="mono">{totalIn.toLocaleString('ro-RO')} lei</strong></div>
          <div>Total cheltuieli: <strong className="mono">{totalOut.toLocaleString('ro-RO')} lei</strong></div>
          <div>Rezervă luna următoare: <strong className="mono">8.000 lei</strong></div>
        </div>
      </div>
    </section>
  );
}

// ----- Monthly timeline (intrări / ieșiri zilnice) -----
function TPTimeline({ month, setMonth }) {
  const days = Array.from({ length: 14 }, (_, i) => {
    const inSum = 2400 + Math.round(Math.sin(i * 0.6) * 1800 + (i * 432 % 3200));
    const outSum = -(1800 + Math.round(Math.cos(i * 0.4) * 1400 + (i * 312 % 2400)));
    return { day: i + 1, in: inSum, out: outSum };
  });
  const max = Math.max(...days.map(d => Math.max(d.in, -d.out)));

  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)' }}><span className="dot"></span>Timeline · {month}</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>Intrări și ieșiri, <span className="italic" style={{ color: 'var(--accent)' }}>zi cu zi.</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="tag" style={{ background: 'transparent', borderColor: 'rgba(245,241,234,0.2)', color: 'rgba(245,241,234,0.8)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }}></span> intrări
            </div>
            <div className="tag" style={{ background: 'transparent', borderColor: 'rgba(245,241,234,0.2)', color: 'rgba(245,241,234,0.8)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--forest)', borderRadius: '50%', display: 'inline-block' }}></span> ieșiri
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${days.length}, 1fr)`, gap: 8, alignItems: 'center', height: 320, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: 'rgba(245,241,234,0.15)' }}></div>
          {days.map((d, i) => (
            <div key={i} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '50%' }}>
                <div style={{ width: '70%', height: (d.in / max * 100) + '%', background: 'var(--accent)' }} title={`+${d.in.toLocaleString('ro-RO')} lei`}></div>
              </div>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '50%' }}>
                <div style={{ width: '70%', height: (-d.out / max * 100) + '%', background: 'var(--forest)' }} title={`-${(-d.out).toLocaleString('ro-RO')} lei`}></div>
              </div>
              <div className="mono" style={{ position: 'absolute', bottom: -22, fontSize: 11, color: 'rgba(245,241,234,0.4)' }}>{d.day}</div>
            </div>
          ))}
        </div>

        {/* Significant events */}
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {[
            { d: '03 mai', cat: 'IN', t: 'ING Bank · sponsorizare Q2', v: '+24.000', color: 'var(--accent)' },
            { d: '07 mai', cat: 'OUT', t: 'Cantină socială · Ferentari', v: '-8.420', color: 'var(--forest)' },
            { d: '11 mai', cat: 'OUT', t: 'Caravană medicală Argeș', v: '-12.180', color: 'var(--forest)' },
            { d: '14 mai', cat: 'IN', t: '174 donatori lunari', v: '+8.640', color: 'var(--accent)' },
          ].map((e, i) => (
            <div key={i} style={{ paddingTop: 18, borderTop: '1px solid rgba(245,241,234,0.15)' }}>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(245,241,234,0.5)' }}>{e.d} · {e.cat}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 6, lineHeight: 1.2 }}>{e.t}</div>
              <div className="mono tabular" style={{ fontSize: 16, color: e.color, marginTop: 8 }}>{e.v} lei</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Year over Year -----
function TPYearOverYear() {
  const metrics = [
    { label: 'Donatori lunari activi', y1: 1284, y2: 2847, suffix: '' },
    { label: 'Total strâns', y1: 1450000, y2: 2840000, suffix: ' lei' },
    { label: 'Copii sprijiniți', y1: 248, y2: 412, suffix: '' },
    { label: 'Localități acoperite', y1: 4, y2: 8, suffix: '' },
    { label: 'Sponsori corporate', y1: 7, y2: 19, suffix: '' },
    { label: 'Consulturi medicale', y1: 940, y2: 1840, suffix: '' },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Acum un an vs. azi"
          title={<>Tot ce am construit <span className="italic">în 12 luni.</span></>}
          kicker="Comparăm aceleași 6 indicatori-cheie, mai 2025 vs. mai 2026. Datele de pe dashboard sunt cele oficiale, raportate ANAF."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {metrics.map((m, i) => {
            const growth = Math.round(((m.y2 - m.y1) / m.y1) * 100);
            return (
              <div key={i} className="panel" style={{ background: 'var(--bg-paper)', padding: 28 }}>
                <div className="kicker">{m.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 14 }}>
                  <div>
                    <div className="text-mute mono" style={{ fontSize: 13 }}>Mai '25</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--ink-mute)', textDecoration: 'line-through' }}>{m.y1.toLocaleString('ro-RO')}{m.suffix}</div>
                  </div>
                  <div style={{ fontSize: 18, color: 'var(--ink-mute)' }}>→</div>
                  <div>
                    <div className="text-mute mono" style={{ fontSize: 13 }}>Mai '26</div>
                    <div className="tick" style={{ fontSize: 44, color: 'var(--accent)' }}>{m.y2.toLocaleString('ro-RO')}{m.suffix}</div>
                  </div>
                </div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--forest)' }}>+{growth}%</div>
                  <div className="kicker">creștere YoY</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----- Monthly reports (cards with photos) -----
function TPMonthlyReports() {
  const months = [
    { m: 'Mai 2026', highlight: '36 de copii la pre-școală', count: 28, label: 'tabără · munte' },
    { m: 'Apr 2026', highlight: 'Caravana medicală în 4 sate', count: 32, label: 'caravană · argeș' },
    { m: 'Mar 2026', highlight: 'Înscriere acreditare școlară', count: 19, label: 'eveniment · bucurești' },
    { m: 'Feb 2026', highlight: 'Iarna caldă · 240 kg lemne', count: 24, label: 'iarna · jilava' },
  ];
  return (
    <section style={{ background: 'var(--bg-deep)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Rapoarte foto · video</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>Lună de lună, <span className="italic">cu poze.</span></h2>
          </div>
          <button className="btn btn-ghost">Vezi toate rapoartele <Arrow size={14}/></button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {months.map((m, i) => (
            <div key={i} style={{ background: 'var(--bg-paper)', border: '1px solid var(--rule)' }}>
              <PhotoPh label={m.label} h={200} />
              <div style={{ padding: 22 }}>
                <div className="kicker">{m.m}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 8, lineHeight: 1.2 }}>{m.highlight}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--rule)' }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{m.count} foto · 2 video</span>
                  <Arrow size={14}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Docs + CTA -----
function TPDocsAndCTA({ setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Documente publice</div>
            <h2 className="display-m" style={{ marginTop: 22 }}>
              Tot ce e <span className="italic">obligatoriu</span>. <span className="mark">+ ce nu e.</span>
            </h2>
            <div style={{ marginTop: 32, display: 'grid', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
              {[
                ['Raport anual 2025', 'PDF · 2.4 MB'],
                ['Bilanț contabil 2025', 'PDF · 184 KB'],
                ['Raport audit independent', 'PDF · 920 KB'],
                ['Statut + acte constitutive', 'PDF · 312 KB'],
                ['Politică achiziții', 'PDF · 120 KB'],
                ['Politică etică & whistleblowing', 'PDF · 84 KB'],
              ].map(([t, s], i) => (
                <div key={i} style={{ background: 'var(--bg-paper)', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{t}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 2 }}>{s}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--ink-soft)' }}>
                    descarcă <Arrow size={12}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel terra" style={{ padding: 48 }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Te-am convins?</div>
            <h2 className="display-l" style={{ marginTop: 22, color: '#fff' }}>
              Acum încep<br />
              cu <span className="italic">30 lei / lună.</span>
            </h2>
            <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.9)', fontSize: 17, maxWidth: 380 }}>
              Toți banii intră direct pe IBAN-ul asociației. Toate cheltuielile apar în acest dashboard, miercurea.
            </p>
            <button className="btn" style={{ marginTop: 32, background: '#fff', color: 'var(--accent)', borderColor: '#fff' }} onClick={() => setPage('doneaza')}>
              Donează lunar <Arrow size={16}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TransparentaPage });
