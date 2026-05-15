// ============================================================
// Casa Bună — Implică-te
// ============================================================

function ImplicaPage({ setPage }) {
  const [tab, setTab] = useState('voluntar');
  return (
    <div className="page" data-screen-label="06 Implică-te">
      <ImplicaHero />

      {/* Tabs */}
      <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container" style={{ display: 'flex', gap: 36, overflow: 'auto' }}>
          {[
            ['voluntar', 'Voluntariat'],
            ['fundraise', 'Strânge fonduri cu echipa ta'],
            ['corporate', 'Companie / CSR'],
            ['natura', 'Donații în natură'],
          ].map(([k, label]) => (
            <button
              key={k} onClick={() => setTab(k)}
              style={{
                background: 'transparent', border: 0,
                borderBottom: tab === k ? '2px solid var(--ink)' : '2px solid transparent',
                padding: '20px 4px', cursor: 'pointer',
                color: tab === k ? 'var(--ink)' : 'var(--ink-mute)',
                fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 500,
              }}
            >{label}</button>
          ))}
        </div>
      </section>

      {tab === 'voluntar' && <ImplicaVoluntar />}
      {tab === 'fundraise' && <ImplicaFundraise />}
      {tab === 'corporate' && <ImplicaCorporate setPage={setPage} />}
      {tab === 'natura' && <ImplicaNatura />}

      <ImplicaWallOfVolunteers />
    </div>
  );
}

function ImplicaHero() {
  return (
    <section style={{ padding: '72px 0 32px' }}>
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Implică-te</div>
        <h1 className="display-xl" style={{ marginTop: 24, maxWidth: 1100 }}>
          Vrei să dai mai mult<br />
          decât <span className="italic" style={{ color: 'var(--accent)' }}>bani?</span>
        </h1>
        <p className="lead text-soft" style={{ marginTop: 28, maxWidth: 620 }}>
          Patru moduri concrete de a te implica. Toate utile. Niciunul mai puțin important decât altul.
        </p>
      </div>
    </section>
  );
}

function ImplicaVoluntar() {
  const roles = [
    { t: 'Meditații', d: 'Matematică, română, engleză. 2-4 ore pe săptămână, în Ferentari sau Jilava.', tag: 'EDUCAȚIE', need: 'urgent' },
    { t: 'Logistică teren', d: 'Distribuire pachete, transport, ajutor la evenimente.', tag: 'LOGISTICĂ', need: 'mereu' },
    { t: 'Comunicare', d: 'Foto, video, copywriting, social media. Remote OK.', tag: 'COMS', need: 'mereu' },
    { t: 'Medic voluntar', d: 'Pediatrie, dentar, medic de familie. O zi pe lună la caravană.', tag: 'SĂNĂTATE', need: 'urgent' },
    { t: 'Tabere de vară', d: 'Animator / însoțitor pentru tabere — iulie & august.', tag: 'TABERE', need: 'sezonier' },
    { t: 'Mentor adolescenți', d: 'O oră pe săptămână cu un adolescent — meserie, școală, viață.', tag: 'VOCAȚIONAL', need: 'urgent' },
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Roluri deschise"
          title={<>Câteva ore <span className="italic">pe lună</span>. <span className="mark">Diferență mare.</span></>}
          kicker="Mai jos rolurile cu nevoie reală în luna mai 2026. Înainte de a accepta pe cineva, facem un interviu scurt și o probă."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {roles.map((r, i) => (
            <div key={i} className="panel" style={{ background: 'var(--bg-paper)', padding: 28, position: 'relative' }}>
              {r.need === 'urgent' && (
                <div className="tag" style={{ position: 'absolute', top: -10, right: 16, background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }}>nevoie urgentă</div>
              )}
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--ink-mute)' }}>{r.tag}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 28, marginTop: 10 }}>{r.t}</div>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, marginTop: 12 }}>{r.d}</p>
              <button className="btn btn-ghost" style={{ marginTop: 20, padding: '10px 16px', fontSize: 13 }}>Aplică <Arrow size={12}/></button>
            </div>
          ))}
        </div>

        {/* Application form */}
        <div className="panel" style={{ marginTop: 64, background: 'var(--bg-paper)', padding: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Cum funcționează</div>
              <h3 className="display-s" style={{ marginTop: 14 }}>De la <span className="italic">aplicare</span> la <span className="italic">prima sesiune</span> în 10 zile.</h3>
              <ol style={{ paddingLeft: 0, listStyle: 'none', marginTop: 28, display: 'grid', gap: 16 }}>
                {[
                  'Trimiți formularul ăsta',
                  'Te sunăm în 3 zile lucrătoare',
                  'Interviu scurt (video sau cafea)',
                  'Probă pe teren cu un coordonator',
                  'Începi când te simți pregătit',
                ].map((s, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ink)', color: 'var(--bg)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic' }}>{i + 1}</div>
                    <div style={{ fontSize: 15 }}>{s}</div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <VolFormRow label="Nume" placeholder="Ana" />
                <VolFormRow label="Prenume" placeholder="Popescu" />
              </div>
              <div style={{ marginTop: 12 }}><VolFormRow label="Email" placeholder="ana@example.com" /></div>
              <div style={{ marginTop: 12 }}><VolFormRow label="Telefon" placeholder="07xx xxx xxx" /></div>
              <div style={{ marginTop: 12 }}>
                <div className="kicker" style={{ marginBottom: 6 }}>Ce te interesează</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {roles.map((r, i) => (
                    <span key={i} className="tag" style={{ background: 'var(--bg-deep)', cursor: 'pointer' }}>{r.t}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <div className="kicker" style={{ marginBottom: 6 }}>Câte ore pe lună poți aloca</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['2-4', '4-8', '8-16', '16+'].map(h => (
                    <button key={h} className="btn btn-ghost" style={{ padding: '8px 14px', fontSize: 13 }}>{h} ore</button>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <div className="kicker" style={{ marginBottom: 6 }}>Spune-ne ceva despre tine</div>
                <textarea placeholder="Câteva rânduri — de unde ai aflat, ce te-a făcut să vrei să te alături…" style={{ width: '100%', minHeight: 100, padding: '14px 16px', border: '1px solid var(--rule)', background: '#fff', fontFamily: 'var(--sans)', fontSize: 15, outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              <button className="btn btn-primary btn-lg" style={{ marginTop: 20, justifyContent: 'center', width: '100%' }}>
                Trimite aplicația <Arrow size={16}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VolFormRow({ label, placeholder }) {
  return (
    <label style={{ display: 'block' }}>
      <div className="kicker" style={{ marginBottom: 6 }}>{label}</div>
      <input
        placeholder={placeholder}
        style={{
          width: '100%', padding: '14px 16px',
          border: '1px solid var(--rule)',
          background: '#fff',
          fontFamily: 'var(--sans)', fontSize: 15,
          color: 'var(--ink)',
          outline: 'none', borderRadius: 2,
        }}
      />
    </label>
  );
}

function ImplicaFundraise() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Fundraising în echipă</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              Strânge fonduri <span className="italic" style={{ color: 'var(--accent)' }}>cu colegii tăi.</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 480 }}>
              Faci o pagină pentru ziua ta, aniversarea companiei, un eveniment sportiv. Inviți prieteni să doneze în loc de cadou. Noi ne ocupăm de tot ce ține de tehnic și raportare.
            </p>
            <button className="btn btn-primary btn-lg" style={{ marginTop: 28 }}>Creează pagină <Arrow size={16}/></button>
          </div>

          <div className="panel" style={{ padding: 0, background: 'var(--bg-paper)' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--rule)' }}>
              <div className="eyebrow">Top echipe luna asta</div>
            </div>
            {[
              { name: 'Echipa Books for a Bright Future', co: 'Arcadis', sum: 14820, members: 23 },
              { name: 'Maratonul București 2026', co: 'Independent', sum: 12480, members: 142 },
              { name: 'ING Adoptă un proiect', co: 'ING Bank', sum: 9640, members: 18 },
              { name: 'Endava CSR Quarter', co: 'Endava', sum: 7240, members: 31 },
              { name: 'Diana C. · 30 ani', co: 'Personal', sum: 3180, members: 47 },
            ].map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 16, padding: '20px 24px', borderBottom: '1px solid var(--rule)', alignItems: 'center' }}>
                <div className="tick" style={{ fontSize: 28, color: i < 3 ? 'var(--accent)' : 'var(--ink-mute)' }}>{i+1}</div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{t.name}</div>
                  <div className="kicker" style={{ marginTop: 2 }}>{t.co} · {t.members} sus.</div>
                </div>
                <div className="mono tabular" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{t.sum.toLocaleString('ro-RO')} lei</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplicaCorporate({ setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div className="eyebrow">Pachet CSR</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              Sponsorizare cu <span className="italic">deducere fiscală</span> de până la 20%.
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 460, lineHeight: 1.6 }}>
              Vino cu un buget de CSR, ieși cu un proiect cu numele tău. Putem face contract pe 1 an, pe proiecte punctuale sau pe matching donation (compania dublează donațiile angajaților).
            </p>

            <div style={{ marginTop: 36 }}>
              <div className="kicker" style={{ marginBottom: 14 }}>Ce primești înapoi</div>
              <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
                {[
                  'Logo pe site, raport anual, materiale campanie',
                  'Vizită echipa ta în comunitate (team building cu sens)',
                  'Branding pe un program dedicat',
                  'Raport bilunar pentru investorii / boardul tău',
                  'Filme & poze profesional realizate, drept de folosință',
                  'Co-branding pe materialele Casa Bună (logo + 1 propoziție)',
                ].map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'start', fontSize: 15 }}>
                    <span style={{ color: 'var(--accent)', marginTop: 4 }}>✦</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-forest btn-lg" style={{ marginTop: 32 }} onClick={() => setPage('doneaza')}>
              Vorbește cu noi <Arrow size={16}/>
            </button>
          </div>

          <div className="panel deep" style={{ padding: 0, background: 'var(--bg-deep)' }}>
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--rule)' }}>
              <div className="eyebrow">Companii partenere · 2026</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--rule)' }}>
              {['ING Bank', 'Arcadis', 'Bitdefender', 'Endava', 'eMAG', 'Lidl', 'Vodafone', 'BCR', 'Microsoft', 'Adobe', 'Oracle', 'IBM'].map((c, i) => (
                <div key={i} style={{ background: 'var(--bg-deep)', padding: '24px 16px', display: 'grid', placeItems: 'center', height: 80 }}>
                  <div className="mono" style={{ fontSize: 13, letterSpacing: '0.06em', color: 'var(--ink-soft)' }}>{c}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: 28, background: 'var(--bg-paper)' }}>
              <div className="kicker">Ce înseamnă a fi partener</div>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, marginTop: 12, lineHeight: 1.3 }}>
                „Casa Bună ne-a livrat raportare de calitate enterprise. Pentru noi, e singurul ONG cu care lucrăm fără follow-up."
              </p>
              <div className="kicker" style={{ marginTop: 14 }}>Cătălin · Head of CSR · ING Bank România</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplicaNatura() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64 }}>
          <div>
            <div className="eyebrow">Donații în natură</div>
            <h2 className="display-l" style={{ marginTop: 22 }}>
              Avem nevoie <span className="italic" style={{ color: 'var(--accent)' }}>de mai mult</span> decât bani.
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, color: 'var(--ink-soft)', maxWidth: 460, lineHeight: 1.6 }}>
              Înainte să aduci ceva, verifică lista de mai jos. Lucrurile de pe listă ne ajută. Cele care nu sunt pe listă, de cele mai multe ori, nu.
            </p>
            <p style={{ marginTop: 18, fontSize: 15, color: 'var(--ink-mute)', fontStyle: 'italic' }}>
              (Suntem fericiți să primim — dar și mai fericiți când primim exact ce avem nevoie.)
            </p>
          </div>

          <div>
            <div className="kicker" style={{ marginBottom: 12 }}>Listă deschisă · mai 2026</div>
            <div style={{ display: 'grid', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
              {[
                ['Caiete, pixuri, ghiozdane noi', 'rechizite', '✓', 'var(--forest)'],
                ['Cărți copii 6-14 ani (lb. română)', 'lectură', '✓', 'var(--forest)'],
                ['Laptopuri funcționale (post-2019)', 'tehnologie', '✓', 'var(--forest)'],
                ['Haine copii (curate, în stare bună)', 'haine', '~ doar iarna', 'var(--sun)'],
                ['Mâncare neperisabilă închisă', 'alimente', '~ doar la cerere', 'var(--sun)'],
                ['Jucării vechi', 'NU primim', '✗', 'var(--rose)'],
                ['Haine de adult', 'NU primim', '✗', 'var(--rose)'],
                ['Mobilier mare', 'NU primim', '✗', 'var(--rose)'],
              ].map(([item, cat, mark, color], i) => (
                <div key={i} style={{ background: 'var(--bg-paper)', padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 120px 80px', gap: 16, alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 17 }}>{item}</div>
                  <div className="kicker">{cat}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color, textAlign: 'right' }}>{mark}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: 20, background: 'var(--bg-deep)' }}>
              <div className="kicker" style={{ marginBottom: 8 }}>Pentru a aduce ceva</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Sună înainte la <strong>0721 234 567</strong> sau scrie la <strong>donatii@asociatiacasabuna.ro</strong>. Ne organizăm să fim acolo să primim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplicaWallOfVolunteers() {
  const vols = Array.from({ length: 36 }, (_, i) => {
    const names = ['Ana M.', 'Vlad P.', 'Maria I.', 'Cristian D.', 'Diana V.', 'Razvan T.', 'Iulia C.', 'Stefan B.', 'Ovidiu M.', 'Camelia A.', 'Andreea R.', 'Bogdan S.'];
    return names[i % names.length] + (i > 11 ? ' #' + (i + 1) : '');
  });
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '112px 0' }}>
      <div className="container">
        <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.5)' }}><span className="dot"></span>Wall of Volunteers</div>
        <h2 className="display-l" style={{ marginTop: 22 }}>
          800+ de oameni<br />
          <span className="italic" style={{ color: 'var(--accent)' }}>dau ore</span>, nu vorbe.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 1, marginTop: 48, background: 'rgba(245,241,234,0.08)' }}>
          {vols.map((v, i) => (
            <div key={i} style={{ background: 'var(--ink)', padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(245,241,234,0.08)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: 'rgba(245,241,234,0.6)' }}>
                {v[0]}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 15 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, textAlign: 'center', color: 'rgba(245,241,234,0.5)', fontSize: 13 }}>
          + 764 alți voluntari activi · ore date împreună de la fondare: <strong>62.430</strong>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ImplicaPage });
