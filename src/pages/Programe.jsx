// ============================================================
// Casa Bună — Programe
// ============================================================

function ProgramePage({ setPage }) {
  return (
    <div className="page" data-screen-label="05 Programe">
      <ProgHero />
      <ProgList setPage={setPage} />
      <ProgMap />
      <ProgCTA setPage={setPage} />
    </div>
  );
}

function ProgHero() {
  return (
    <section style={{ padding: '72px 0 32px' }}>
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Programe</div>
        <h1 className="display-xl" style={{ marginTop: 24, maxWidth: 1100 }}>
          Patru programe<br />
          care merg împreună.<br />
          <span className="italic" style={{ color: 'var(--accent)' }}>Niciodată separat.</span>
        </h1>
        <p className="lead text-soft" style={{ marginTop: 32, maxWidth: 660 }}>
          Pentru că un copil flămând nu învață. Un copil bolnav nu termină școala. Un adolescent fără meserie nu rămâne acasă. Construim totul în jurul copilului — nu al programului.
        </p>
      </div>
    </section>
  );
}

function ProgList({ setPage }) {
  const progs = [
    {
      tag: '01', name: 'Educație',
      title: 'Începem cu literele. Mergem până la liceu.',
      desc: 'Meditații săptămânale, pre-școală pentru cei mici, alfabetizare pentru cei mari. Lucrăm individual sau în grupuri de 3-4. Avem profesori voluntari și două centre fizice — unul în Ferentari, unul în Jilava.',
      stats: [['312', 'copii săptămânal'], ['8', 'profesori voluntari'], ['2', 'centre fizice']],
      color: 'var(--accent)',
      activities: ['Meditații matematică & română', 'Pre-școală 4-6 ani', 'Alfabetizare adolescenți', 'Cluburi de lectură', 'After-school'],
    },
    {
      tag: '02', name: 'Sănătate',
      title: 'Caravana medicală merge la copii, nu invers.',
      desc: 'Multe familii nu pot ajunge la medic. Așa că aducem medicii la ei — caravane medicale lunare, cabinet dentar mobil, vaccinări, consulturi specialiști.',
      stats: [['1.840', 'consulturi în 2025'], ['4', 'specialiști voluntari'], ['12', 'caravane / an']],
      color: 'var(--rose)',
      activities: ['Caravană medicală lunară', 'Cabinet dentar mobil', 'Vaccinări copii', 'Consult psiholog', 'Programe de igienă'],
    },
    {
      tag: '03', name: 'Hrană & demnitate',
      title: 'O masă caldă, ghiozdane, haine de iarnă.',
      desc: 'Nu poți învăța dacă ți-e foame. Nu poți merge la școală fără haine. Distribuim mese calde, ghiozdane echipate, haine de sezon, lemne de foc iarna.',
      stats: [['94.500', 'mese calde / an'], ['620', 'ghiozdane'], ['18 tone', 'lemne foc 2025']],
      color: 'var(--forest)',
      activities: ['Cantină socială Ferentari', 'Pachete săptămânale Argeș', 'Ghiozdane echipate', 'Haine de iarnă', 'Lemne pentru încălzire'],
    },
    {
      tag: '04', name: 'Tabere & vocațional',
      title: 'Vacanțe care contează. Meserii care durează.',
      desc: 'Tabere de vară pentru cei mici (uneori prima oară când văd marea). Cursuri vocaționale pentru adolescenți — frizerie, croitorie, cofetărie, mecanică auto.',
      stats: [['186', 'adolescenți vocațional'], ['340', 'copii tabere / an'], ['12', 'meserii predate']],
      color: 'var(--sun)',
      activities: ['Tabere de vară (mare/munte)', 'Tabere de iarnă', 'Curs frizerie', 'Curs croitorie', 'Curs cofetărie', 'Mecanică auto'],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gap: 96 }}>
          {progs.map((p, i) => (
            <div key={p.tag} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div className="mono" style={{ fontSize: 11, color: p.color, letterSpacing: '0.18em' }}>{p.tag} · {p.name.toUpperCase()}</div>
                <h2 className="display-l" style={{ marginTop: 16 }}>
                  {p.title.split('.').map((part, j, arr) => (
                    <span key={j}>
                      {j === arr.length - 2 ? <span className="italic" style={{ color: p.color }}>{part}.</span> : part + (j < arr.length - 1 ? '.' : '')}
                    </span>
                  ))}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 24 }}>{p.desc}</p>

                <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
                  {p.stats.map((s, j) => (
                    <div key={j}>
                      <div className="tick" style={{ fontSize: 44, color: p.color }}>{s[0]}</div>
                      <div className="kicker">{s[1]}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.activities.map((a, j) => (
                    <span key={j} className="tag" style={{ background: 'transparent' }}>{a}</span>
                  ))}
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1, position: 'relative' }}>
                <PhotoPh label={`${p.name.toLowerCase()} · 2026`} h={480} />
                <div style={{ position: 'absolute', bottom: -20, [i % 2 === 0 ? 'left' : 'right']: -20, background: p.color, color: '#fff', padding: '14px 20px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}>
                  {p.stats[0][0]} {p.stats[0][1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgMap() {
  const locations = [
    { name: 'Ferentari', desc: 'Sediu central · 180 copii', x: 50, y: 52 },
    { name: 'Jilava', desc: 'Centru educațional · 92 copii', x: 53, y: 60 },
    { name: 'Lerești', desc: 'Argeș · 28 copii', x: 28, y: 48 },
    { name: 'Bughea de Jos', desc: 'Argeș · 22 copii', x: 25, y: 52 },
    { name: 'Albeștii de Muscel', desc: 'Argeș · 18 copii', x: 30, y: 56 },
    { name: 'Aninoasa', desc: 'Argeș · 24 copii', x: 32, y: 50 },
    { name: 'Mărăcineni', desc: 'Argeș · 16 copii', x: 27, y: 58 },
    { name: 'Stâlpeni', desc: 'Argeș · 20 copii', x: 35, y: 53 },
    { name: 'Cetățeni', desc: 'Argeș · 12 copii', x: 26, y: 46 },
  ];
  return (
    <section style={{ background: 'var(--bg-deep)', padding: '96px 0' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Hartă"
          title={<>Suntem în <span className="italic">8 localități.</span> Ne extindem.</>}
          kicker="București sud (Ferentari + Jilava) și 7 sate în județul Argeș. Toate cu nevoi diferite, dar cu același plan."
        />

        <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg-paper)', border: '1px solid var(--rule)', overflow: 'hidden' }}>
          <svg viewBox="0 0 1600 900" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--rule)" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <path
              d="M 240 380 Q 340 320 480 340 L 620 330 Q 760 350 880 400 L 1040 420 Q 1180 450 1280 530 L 1320 620 Q 1300 720 1180 740 L 1020 760 Q 880 770 740 740 L 580 720 Q 420 700 320 620 L 260 540 Q 220 460 240 380 Z"
              fill="var(--bg-deep)" stroke="var(--ink)" strokeWidth="1.5" opacity="0.7"
            />
          </svg>

          {locations.map((l, i) => (
            <div key={i} style={{ position: 'absolute', left: l.x + '%', top: l.y + '%', transform: 'translate(-50%, -50%)' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: i < 2 ? 'var(--accent)' : 'var(--forest)',
                  border: '3px solid var(--bg-paper)',
                  boxShadow: '0 0 0 1px ' + (i < 2 ? 'var(--accent)' : 'var(--forest)'),
                }}></div>
                <div style={{
                  position: 'absolute', left: 22, top: -8, whiteSpace: 'nowrap',
                  background: 'var(--ink)', color: 'var(--bg)', padding: '6px 12px',
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.06em',
                }}>
                  {l.name.toUpperCase()} · {l.desc.split('·')[1].trim()}
                </div>
              </div>
            </div>
          ))}

          <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'var(--bg-paper)', padding: 16, border: '1px solid var(--rule)' }}>
            <div className="kicker" style={{ marginBottom: 10 }}>Legendă</div>
            <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', marginRight: 6 }}></span>București</span>
              <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: 'var(--forest)', marginRight: 6 }}></span>Argeș</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgCTA({ setPage }) {
  return (
    <section style={{ padding: '128px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot"></span>Vrei să sprijini un program anume?</div>
        <h2 className="display-l" style={{ marginTop: 28 }}>
          Putem direcționa <span className="italic" style={{ color: 'var(--accent)' }}>donația ta</span><br />
          către un program specific.
        </h2>
        <p className="lead text-soft" style={{ marginTop: 24 }}>
          Pe pagina de donații poți alege ce program vrei să susții. Sau ne lași pe noi să direcționăm acolo unde e mai mare nevoia luna asta.
        </p>
        <button className="btn btn-primary btn-lg" style={{ marginTop: 36 }} onClick={() => setPage('doneaza')}>
          Donează spre un program <Arrow size={16}/>
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { ProgramePage });
