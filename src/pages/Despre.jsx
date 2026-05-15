// ============================================================
// Casa Bună — Cine suntem
// ============================================================

function DesprePage({ setPage }) {
  return (
    <div className="page" data-screen-label="04 Cine suntem">
      <DespreHero />
      <DespreStory />
      <DespreValues />
      <DespreTeam />
      <DespreHistory />
      <DespreCTA setPage={setPage} />
    </div>
  );
}

function DespreHero() {
  return (
    <section style={{ padding: '72px 0 32px' }}>
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Cine suntem</div>
        <h1 className="display-xl" style={{ marginTop: 24, maxWidth: 1000 }}>
          O comunitate de <span className="italic" style={{ color: 'var(--accent)' }}>voluntari</span>,<br />
          construită în jurul nevoilor copiilor.
        </h1>
      </div>
    </section>
  );
}

function DespreStory() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <PhotoPh label="iarna 2019 · ferentari" h={420} />
            <div className="kicker" style={{ marginTop: 12 }}>Prima iarnă · 2019</div>
          </div>
          <div style={{ display: 'grid', gap: 32 }}>
            <p className="lead">
              <span className="italic">Totul a început</span> cu câteva caiete și un drum repetat la marginea Bucureștiului.
            </p>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              În 2019, un grup mic de oameni mergea săptămânal la copii din Ferentari să-i ajute cu temele. Erau între ei părinți, profesori, programatori, jurnaliști. Nu aveau un plan mare. Aveau doar promisiunea că se întorc și sâmbăta viitoare.
            </p>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              În 2020, când totul s-a închis, copiii au rămas fără acces la școală online. Atunci am început să le ducem tablete, laptopuri, manuale. Atunci ne-am dat seama că „doar temele" era doar începutul.
            </p>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              În același an ne-am înregistrat oficial ca asociație. Astăzi suntem o comunitate de <strong>peste 800 de voluntari</strong>, lucrăm în <strong>8 localități</strong> și ținem cont de <strong>peste 400 de copii</strong>. Continuăm să ne întoarcem și sâmbăta viitoare.
            </p>
            <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 28, margin: '20px 0' }}>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 32, lineHeight: 1.25 }}>
                „Nu construim un ONG. Construim o casă bună pentru copii care nu au una."
              </div>
              <div className="kicker" style={{ marginTop: 16 }}>Valentina · co-fondatoare</div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function DespreValues() {
  const values = [
    { n: '01', t: 'Constant', d: 'Nu „acțiuni de Crăciun". Suntem acolo în fiecare săptămână, an după an.' },
    { n: '02', t: 'Transparent', d: 'Fiecare leu apare în raport. Fără calupuri, fără „diverse".' },
    { n: '03', t: 'Respectuos', d: 'Ne dăm jos pălăria în fața familiilor cu care lucrăm. Nu venim cu lecții de viață.' },
    { n: '04', t: 'Răbdător', d: 'Schimbarea ia ani, nu campanii. Avem timp.' },
  ];
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '112px 0' }}>
      <div className="container">
        <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)' }}><span className="dot"></span>Valori</div>
        <h2 className="display-l" style={{ marginTop: 22 }}>Patru lucruri pe care <span className="italic" style={{ color: 'var(--accent)' }}>nu le negociem.</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, marginTop: 56, background: 'rgba(245,241,234,0.12)' }}>
          {values.map(v => (
            <div key={v.n} style={{ background: 'var(--ink)', padding: 32 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.14em' }}>{v.n}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 42, marginTop: 12 }}>{v.t}</div>
              <p style={{ fontSize: 15, color: 'rgba(245,241,234,0.7)', marginTop: 14, lineHeight: 1.6 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DespreTeam() {
  const team = [
    { name: 'Valentina Dragotă', role: 'Co-fondatoare · directoare', img: 'valentina', tag: 'F' },
    { name: 'Andrei Lazarev', role: 'Co-fondator · operațiuni', img: 'andrei', tag: 'M' },
    { name: 'Maria Tudor', role: 'Coordonator Ferentari', img: 'maria', tag: 'F' },
    { name: 'Răzvan Popescu', role: 'Coordonator Argeș', img: 'razvan', tag: 'M' },
    { name: 'Diana Vintilă', role: 'Programe educaționale', img: 'diana', tag: 'F' },
    { name: 'Mihai Stoica', role: 'Logistică & teren', img: 'mihai', tag: 'M' },
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Echipa"
          title={<>Câțiva dintre oamenii <span className="italic">care fac asta posibil.</span></>}
          kicker="Suntem o echipă mică de coordonare, plus peste 800 de voluntari activi. Mai jos câțiva coordonatori — restul îi găsești pe Wall of Volunteers."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {team.map((t, i) => (
            <div key={i}>
              <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--bg-deep)', overflow: 'hidden', border: '1px solid var(--rule)' }}>
                <div style={{ position: 'absolute', inset: 0, color: 'var(--ink-soft)', opacity: 0.7 }}>
                  <SilSingle color="var(--ink-soft)" />
                </div>
                <div className="photo-ph" style={{ position: 'absolute', inset: 0, background: 'transparent', border: 0, alignItems: 'flex-end', padding: 16, justifyItems: 'flex-start' }}>
                  <div className="label" style={{ background: 'var(--bg-paper)', alignSelf: 'flex-end', justifySelf: 'flex-start', marginTop: 'auto' }}>portret · {t.img}</div>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, marginTop: 16 }}>{t.name}</div>
              <div className="kicker" style={{ marginTop: 4 }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DespreHistory() {
  const events = [
    { y: '2019', t: 'Primele meditații săptămânale în Ferentari', tag: 'INCEPUT' },
    { y: '2020', t: 'Înregistrare oficială ca asociație · primii 50 donatori', tag: 'FONDARE' },
    { y: '2021', t: 'Extindere în Jilava · centru fizic deschis', tag: 'CREȘTERE' },
    { y: '2022', t: 'Caravană medicală lunară în 4 sate Argeș', tag: 'SĂNĂTATE' },
    { y: '2023', t: '1000 donatori activi · primul raport audit', tag: 'TRANSPARENȚĂ' },
    { y: '2024', t: 'Program vocațional pentru adolescenți', tag: 'VOCAȚIONAL' },
    { y: '2025', t: '400+ copii · 2.500 donatori · 19 companii partenere', tag: 'COMUNITATE' },
    { y: '2026', t: 'Pregătim acreditare școlară · Argeș', tag: 'ÎN CURS' },
  ];
  return (
    <section style={{ background: 'var(--bg-deep)', padding: '96px 0' }}>
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Istoric</div>
        <h2 className="display-l" style={{ marginTop: 22 }}>Șase ani. <span className="italic">Fără pauză.</span></h2>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          {events.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 36px 1fr 160px', gap: 24, alignItems: 'center', padding: '24px 0', borderTop: '1px solid var(--rule)' }}>
              <div className="tick" style={{ fontSize: 56, lineHeight: 1, color: i === events.length - 1 ? 'var(--accent)' : 'var(--ink)' }}>{e.y}</div>
              <div style={{ position: 'relative', height: 36 }}>
                <div style={{ position: 'absolute', left: 16, top: 0, bottom: 0, width: 1, background: 'var(--rule)' }}></div>
                <div style={{ position: 'absolute', left: 8, top: 14, width: 16, height: 16, borderRadius: '50%', background: i === events.length - 1 ? 'var(--accent)' : 'var(--ink)' }}></div>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>{e.t}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.14em' }}>{e.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DespreCTA({ setPage }) {
  return (
    <section style={{ padding: '128px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ padding: 56, background: 'var(--accent)', color: '#fff' }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Vrei să te alături?</div>
          <h3 className="display-m" style={{ marginTop: 16, color: '#fff' }}>Devino <span className="italic">voluntar.</span></h3>
          <p style={{ marginTop: 14, color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>Câteva ore pe lună fac diferența. Avem deschis pentru meditații, logistică, comunicare.</p>
          <button className="btn" style={{ marginTop: 24, background: '#fff', color: 'var(--accent)', borderColor: '#fff' }} onClick={() => setPage('implica')}>Aplică <Arrow size={14}/></button>
        </div>
        <div style={{ padding: 56, background: 'var(--forest)', color: '#fff' }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Susține lunar</div>
          <h3 className="display-m" style={{ marginTop: 16, color: '#fff' }}>Donează <span className="italic">de la 30 lei.</span></h3>
          <p style={{ marginTop: 14, color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>Donațiile lunare sunt cele mai utile — ne permit să planificăm și să nu cerem ajutor la pomană.</p>
          <button className="btn" style={{ marginTop: 24, background: '#fff', color: 'var(--forest)', borderColor: '#fff' }} onClick={() => setPage('doneaza')}>Donează lunar <Arrow size={14}/></button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DesprePage });
