// ============================================================
// Casa Bună — Home page
// ============================================================

function HomePage({ setPage }) {
  return (
    <div className="page" data-screen-label="01 Acasă">
      <HomeHero setPage={setPage} />
      <HomeTickerBar />
      <HomeManifest />
      <HomeMonthGoal setPage={setPage} />
      <HomeCalculator setPage={setPage} />
      <HomePrograms setPage={setPage} />
      <HomeStories />
      <HomeWallOfFame setPage={setPage} />
      <HomeCorporate setPage={setPage} />
      <HomeFinalCTA setPage={setPage} />
    </div>
  );
}

// ----- Hero -----
function HomeHero({ setPage }) {
  return (
    <section className="hero">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"></span>Asociația Casa Bună · din 2020
            </div>
            <h1 className="display-xl">
              Binele<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>este<br />molipsitor.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 540, marginTop: 32, color: 'var(--ink-soft)' }}>
              Pentru <span className="mark">400+ copii</span> din Ferentari, Jilava și 7 sate din Argeș,
              o donație lunară înseamnă mai mult decât bani —
              înseamnă <span className="italic">o școală terminată, un viitor diferit.</span>
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 40, alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => setPage('doneaza')}>
                Donează lunar <Arrow size={16} />
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => setPage('transparenta')}>
                Vezi pe ce se cheltuie
              </button>
            </div>
            <div style={{ display: 'flex', gap: 36, marginTop: 56, alignItems: 'center' }}>
              <div>
                <div className="display-s">2.847</div>
                <div className="kicker">donatori lunari</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'var(--rule)' }}></div>
              <div>
                <div className="display-s">142.380<span className="text-mute" style={{ fontSize: '0.5em' }}> lei</span></div>
                <div className="kicker">strânși în mai 2026</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'var(--rule)' }}></div>
              <div>
                <div className="display-s">94<span className="text-mute" style={{ fontSize: '0.5em' }}>%</span></div>
                <div className="kicker">merg direct la copii</div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <PhotoPh label="hero · copii la lecție" h={520} style={{ marginBottom: 16 }} />
            <div style={{ position: 'absolute', bottom: -28, left: -36, background: 'var(--ink)', color: 'var(--bg)', padding: '20px 24px', maxWidth: 280, transform: 'rotate(-1.2deg)' }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, letterSpacing: '0.14em' }}>LUNA ASTA</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.15 }}>
                <span className="italic">36 de copii</span> au început cursurile de pre-școală.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative giant italic word in background */}
      <div style={{ position: 'absolute', right: -40, top: '8%', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 280, color: 'rgba(217,119,87,0.05)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        bună
      </div>
    </section>
  );
}

// ----- Ticker bar (running marquee of facts) -----
function HomeTickerBar() {
  const items = [
    '400+ copii în programe',
    '2.847 donatori activi',
    '94% din donații merg direct la copii',
    '12 voluntari în teren săptămânal',
    '8 localități · Ferentari, Jilava + 7 sate Argeș',
    'Raport lunar public · transparență totală',
    '6 ani de muncă neîntreruptă',
  ];
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '18px 0', overflow: 'hidden', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
      <div style={{ display: 'flex', gap: 56, whiteSpace: 'nowrap', animation: 'tickerSlide 60s linear infinite' }}>
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22 }}>{it}</span>
            <span style={{ color: 'var(--accent)', fontSize: 20 }}>✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes tickerSlide { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

// ----- Manifest -----
function HomeManifest() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Manifest</div>
            <div style={{ marginTop: 24, position: 'relative', height: 380 }}>
              <PhotoPh label="atelier · meditații" h={380} />
              <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'var(--forest)', color: 'var(--bg)', padding: '14px 18px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, transform: 'rotate(2deg)' }}>
                de șase ani, fără pauză.
              </div>
            </div>
          </div>
          <div>
            <h2 className="display-l">
              Am început prin a-i ajuta<br />
              cu temele. <span className="italic">Am rămas</span><br />
              pentru tot ce a urmat.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 56 }}>
              <p className="lead" style={{ fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                În 2019, ne-am cunoscut într-o iarnă la marginea Bucureștiului. Aveam câteva caiete și
                o promisiune simplă — că ne întoarcem și sâmbăta viitoare.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                Astăzi suntem o comunitate de voluntari construită în jurul nevoilor a peste 400 de copii.
                Le ținem partea la <a className="link">educație</a>, <a className="link">sănătate</a>, <a className="link">hrană caldă</a> și <a className="link">demnitate</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Monthly goal (gamified live progress) -----
function HomeMonthGoal({ setPage }) {
  const goal = 180000;
  const raised = 142380;
  const pct = Math.round((raised / goal) * 100);
  const daysLeft = 17;

  return (
    <section style={{ background: 'var(--bg-deep)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
              <span className="tag live">LIVE · MAI 2026</span>
              <span className="kicker">actualizat acum 3 min</span>
            </div>
            <h2 className="display-l">
              Obiectivul<br />
              lunii <span className="italic" style={{ color: 'var(--accent)' }}>aproape acolo.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 460 }}>
              Avem nevoie de <strong>180.000 lei</strong> în fiecare lună pentru a susține toate cele 8 comunități.
              Mai sunt <strong>{daysLeft} zile</strong>.
            </p>
            <button className="btn btn-primary btn-lg" style={{ marginTop: 32 }} onClick={() => setPage('doneaza')}>
              Adaugă-te la {raised.toLocaleString('ro-RO')} <Arrow size={16}/>
            </button>
          </div>

          <div className="panel" style={{ padding: 36, background: 'var(--bg-paper)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <div>
                <div className="tick" style={{ color: 'var(--forest)' }}>{raised.toLocaleString('ro-RO')}</div>
                <div className="kicker" style={{ marginTop: 6 }}>strânși din 180.000 lei</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="display-m" style={{ color: 'var(--accent)' }}>{pct}%</div>
                <div className="kicker">obiectiv lunar</div>
              </div>
            </div>
            <div className="bar forest" style={{ height: 14, marginBottom: 28 }}>
              <i style={{ width: pct + '%' }}></i>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              {[
                ['30 lei', '14 cărți', 312],
                ['50 lei', '1 consult', 184],
                ['100 lei', '8 meditații', 142],
                ['200 lei+', 'sponsor', 67],
              ].map(([amt, what, count], i) => (
                <div key={i} style={{ borderTop: '1px solid var(--rule)', paddingTop: 14 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{amt}</div>
                  <div className="text-mute" style={{ fontSize: 12 }}>= {what}</div>
                  <div className="mono" style={{ marginTop: 8, fontSize: 11, color: 'var(--accent-deep)' }}>{count} donatori</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 40, right: 60, fontSize: 36, color: 'var(--accent)', opacity: 0.4 }}>✦</div>
      <div style={{ position: 'absolute', bottom: 40, left: 80, fontSize: 24, color: 'var(--forest)', opacity: 0.4 }}>✦</div>
    </section>
  );
}

// ----- Calculator (donation = X) -----
function HomeCalculator({ setPage }) {
  const [amount, setAmount] = useState(50);
  const impact = useMemo(() => {
    const items = [
      { unit: 'meditații', cost: 12, color: 'var(--accent)', icon: '✎' },
      { unit: 'mese calde', cost: 9, color: 'var(--forest)', icon: '✻' },
      { unit: 'cărți & rechizite', cost: 18, color: 'var(--ink)', icon: '❒' },
      { unit: 'zile de tabără', cost: 65, color: 'var(--rose)', icon: '☉' },
    ];
    return items.map(it => ({ ...it, qty: Math.floor(amount / it.cost) }));
  }, [amount]);

  const presets = [30, 50, 100, 200, 500];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Calculator de impact"
          title={<>Vezi exact ce poate face <span className="italic" style={{ color: 'var(--accent)' }}>donația ta lunară.</span></>}
          kicker="Glisează suma sau alege un preset. Cifrele sunt costuri reale, nu marketing."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div className="tick" style={{ color: 'var(--ink)' }}>{amount}</div>
              <div className="display-s text-mute">lei / lună</div>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={amount}
              onChange={e => setAmount(parseInt(e.target.value))}
              style={{
                width: '100%',
                marginTop: 32,
                accentColor: 'var(--accent)',
                height: 6,
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }} className="kicker">
              <span>10 lei</span><span>500 lei</span>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 28, flexWrap: 'wrap' }}>
              {presets.map(p => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`btn ${amount === p ? 'btn-primary' : 'btn-ghost'} btn-pill`}
                  style={{ padding: '10px 18px', fontSize: 14 }}
                >
                  {p} lei
                </button>
              ))}
            </div>
            <button className="btn btn-forest btn-lg" style={{ marginTop: 32 }} onClick={() => setPage('doneaza')}>
              Donează {amount} lei / lună <Arrow size={16}/>
            </button>
            <p className="text-mute" style={{ fontSize: 13, marginTop: 14 }}>
              Plătești cu cardul. Poți opri oricând. Primești raport lunar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {impact.map((it, i) => (
              <div key={i} className="panel" style={{ padding: 28, background: 'var(--bg-paper)' }}>
                <div style={{ fontSize: 32, color: it.color, marginBottom: 16 }}>{it.icon}</div>
                <div className="tick" style={{ fontSize: 64, color: it.color }}>{it.qty}</div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, marginTop: 6 }}>{it.unit}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 8 }}>{it.cost} lei / buc</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Programs -----
function HomePrograms({ setPage }) {
  const progs = [
    { tag: '01', title: 'Educație', desc: 'Meditații, alfabetizare, pre-școală în 8 comunități. Pentru fiecare copil care intră în clasa I gata pregătit.', stat: '312', statLabel: 'copii sprijiniți săptămânal', img: 'meditații · ferentari' },
    { tag: '02', title: 'Sănătate', desc: 'Consulturi medicale lunare, dentare, vaccinări. Aducem medicii direct în comunitate.', stat: '1.840', statLabel: 'consulturi în 2025', img: 'cabinet · jilava' },
    { tag: '03', title: 'Hrană & demnitate', desc: 'O masă caldă, ghiozdane, rechizite, haine. Nimeni nu învață când îi e foame.', stat: '94.500', statLabel: 'mese calde în 2025', img: 'cantină socială' },
    { tag: '04', title: 'Tabere & vocațional', desc: 'Tabere de vară, ucenicie la meserii, cursuri pentru adolescenți.', stat: '186', statLabel: 'adolescenți în vocațional', img: 'tabără · munte' },
  ];
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '128px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 72 }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)' }}><span className="dot"></span>Programe</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              Patru direcții.<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Un singur scop.</span>
            </h2>
          </div>
          <p style={{ fontSize: 18, color: 'rgba(245,241,234,0.7)', maxWidth: 440 }}>
            Construim totul în jurul copilului — nu al programului. Dacă are nevoie de carte, îi dăm carte.
            Dacă are nevoie de medic, îl ducem la medic.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4 }}>
          {progs.map((p, i) => (
            <div key={i} style={{ background: '#211e1b', padding: 28, position: 'relative', minHeight: 480, display: 'flex', flexDirection: 'column', borderTop: '1px solid #2e2a26' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.14em' }}>{p.tag}</div>
              <h3 className="display-s" style={{ marginTop: 12, color: 'var(--bg)' }}>{p.title}</h3>
              <PhotoPh dark label={p.img} h={140} style={{ marginTop: 20, marginBottom: 20 }} />
              <p style={{ fontSize: 14, color: 'rgba(245,241,234,0.65)', lineHeight: 1.55, flex: 1 }}>{p.desc}</p>
              <div style={{ borderTop: '1px solid #3a342e', paddingTop: 16, marginTop: 16 }}>
                <div className="tick" style={{ fontSize: 44, color: 'var(--bg)' }}>{p.stat}</div>
                <div className="kicker" style={{ color: 'rgba(245,241,234,0.5)' }}>{p.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <button className="btn" style={{ background: 'transparent', color: 'var(--bg)', borderColor: 'rgba(245,241,234,0.3)' }} onClick={() => setPage('programe')}>
            Vezi toate programele <Arrow size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ----- Stories -----
function HomeStories() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Povești"
          title={<>Nu numere. <span className="italic">Oameni.</span></>}
          kicker="Câteva dintre poveștile care ne-au schimbat anul. Cu acordul familiilor — nume reale, fețe acoperite când au cerut-o."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 28 }}>
          <div className="panel" style={{ padding: 0, background: 'var(--bg-paper)', overflow: 'hidden' }}>
            <PhotoPh label="ana, 14 ani · jilava" h={320} />
            <div style={{ padding: 32 }}>
              <div className="quote-mark" style={{ position: 'absolute', marginTop: -90, marginLeft: -10, height: 0 }}>"</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.25, marginTop: 8 }}>
                Acum pot citi orice carte fără să mi se facă rușine
                <span className="italic" style={{ color: 'var(--accent)' }}> că nu știu să citesc.</span>
              </div>
              <div className="kicker" style={{ marginTop: 28 }}>ana · clasa a VIII-a · în programe de 4 ani</div>
            </div>
          </div>
          <div className="panel" style={{ padding: 0, background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }}>
            <div style={{ padding: 32 }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3 }}>
                „Primul medic dentist pe care l-a văzut David a fost adus de Casa Bună la noi în sat. Avea 9 ani."
              </div>
              <div className="kicker" style={{ marginTop: 24, color: 'rgba(255,255,255,0.7)' }}>Maria · mama · Argeș</div>
            </div>
            <PhotoPh label="caravana medicală" h={180} dark />
          </div>
          <div className="panel" style={{ padding: 0, background: 'var(--forest)', color: '#fff', borderColor: 'var(--forest)' }}>
            <PhotoPh label="absolvent · 2025" h={180} dark />
            <div style={{ padding: 32 }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3 }}>
                „Sunt primul din familia mea care a terminat liceul. Acum dau meditații la copii mai mici, ca mine."
              </div>
              <div className="kicker" style={{ marginTop: 24, color: 'rgba(255,255,255,0.7)' }}>Florin · 19 ani · voluntar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Wall of Fame preview -----
function HomeWallOfFame({ setPage }) {
  const donors = [
    'Ana M.', 'Cristian P.', 'Familia Ionescu', 'Anonim', 'Maria & Andrei', 'Vlad R.',
    'Diana T.', 'Bogdan S.', 'Anonim', 'Sorin A.', 'Camelia V.', 'Andreea & Mihai',
    'Anonim', 'Răzvan D.', 'Iulia C.', 'Ștefan B.', 'Anonim', 'Familia Pop',
    'Mihaela L.', 'Anonim', 'Cătălin N.', 'Alexandra G.', 'Bogdana T.', 'Anonim',
    'Ovidiu M.', 'Ioana & Radu', 'Anonim', 'George E.', 'Sabina F.', 'Anonim',
  ];
  return (
    <section style={{ background: 'var(--bg-deep)', padding: '112px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Wall of Fame</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              2.847 de oameni<br />
              fac <span className="italic" style={{ color: '#fff' }}>Casa Bună</span> posibilă.
            </h2>
          </div>
          <button className="btn btn-ghost" onClick={() => setPage('implica')}>Vezi tot zidul <Arrow size={14}/></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
          {donors.map((d, i) => (
            <div key={i} style={{ background: 'var(--bg-paper)', padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-deep)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-soft)' }}>
                {d === 'Anonim' ? '◯' : d[0]}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>{d}</div>
            </div>
          ))}
        </div>
        <div className="text-mute" style={{ marginTop: 20, fontSize: 13, textAlign: 'center' }}>
          + 2.817 alți donatori · poți alege să apari sau nu pe acest zid
        </div>
      </div>
    </section>
  );
}

// ----- Corporate partners + leaderboard -----
function HomeCorporate({ setPage }) {
  const partners = [
    { name: 'ING Bank', amount: 84600, tier: 'platinum' },
    { name: 'Arcadis', amount: 52400, tier: 'gold' },
    { name: 'Bitdefender', amount: 48000, tier: 'gold' },
    { name: 'Endava', amount: 36000, tier: 'silver' },
    { name: 'eMAG', amount: 28500, tier: 'silver' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Sponsori corporate</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              Companiile care <span className="italic">au pus umărul</span> anul ăsta.
            </h2>
            <p className="text-soft" style={{ marginTop: 24, fontSize: 17, maxWidth: 440 }}>
              Sponsorizările pot fi deductibile fiscal (până la 20% din impozitul pe profit datorat).
              Putem face contract pe 1 an sau pe proiecte punctuale.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <button className="btn btn-forest" onClick={() => setPage('implica')}>Devino partener <Arrow size={14}/></button>
              <button className="btn btn-ghost">Descarcă pachet</button>
            </div>
          </div>
          <div className="panel" style={{ padding: 0, background: 'var(--bg-paper)' }}>
            <div style={{ padding: '22px 28px', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="eyebrow">Leaderboard 2026</div>
              <span className="tag live">Q1+Q2</span>
            </div>
            {partners.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 20, alignItems: 'center', padding: '22px 28px', borderBottom: i < partners.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                <div className="tick" style={{ fontSize: 32, color: i === 0 ? 'var(--accent)' : i === 1 ? 'var(--forest)' : 'var(--ink-mute)' }}>{i+1}</div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{p.name}</div>
                  <div className="kicker" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>{p.tier}</div>
                </div>
                <div className="mono tabular" style={{ fontSize: 16, color: 'var(--ink-soft)' }}>{p.amount.toLocaleString('ro-RO')} lei</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Final CTA -----
function HomeFinalCTA({ setPage }) {
  return (
    <section style={{ padding: '160px 0', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot"></span>Decizia ta</div>
        <h2 className="display-xl" style={{ marginTop: 28, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}>
          Un copil învață<br />
          să citească <span className="italic" style={{ color: 'var(--accent)' }}>cu 30 lei</span><br />
          pe lună.
        </h2>
        <p className="lead text-soft" style={{ marginTop: 36, maxWidth: 580, margin: '36px auto 0' }}>
          Nu cerem mult. Cerem doar să fii constant. Lunile compun lecții, iar lecțiile compun vieți.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg" onClick={() => setPage('doneaza')}>Donează 30 lei / lună <Arrow size={16}/></button>
          <button className="btn btn-ghost btn-lg" onClick={() => setPage('doneaza')}>Redirecționează 3,5% impozit</button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage });
