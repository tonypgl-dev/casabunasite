// ============================================================
// Casa Bună — Donează page
// Gamified donation flow with calculator, tiers, levels
// ============================================================

function DoneazaPage({ setPage }) {
  const [type, setType] = useState('recurrent'); // recurrent | unic | 3.5 | corporate
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState('');
  const [step, setStep] = useState(1);

  // Donor level system
  const levels = [
    { min: 10, max: 29, name: 'Picătură', icon: '◦', color: 'var(--ink-mute)', desc: 'Începe drumul. O lumânare aprinsă lunar.' },
    { min: 30, max: 79, name: 'Prieten al casei', icon: '✦', img: 'favicon.png', color: 'var(--accent)', desc: 'Susții un copil la meditații săptămânale.' },
    { min: 80, max: 199, name: 'Sprijinitor', icon: '✱', color: 'var(--forest)', desc: 'Acoperi consult medical + meditații pentru un copil.' },
    { min: 200, max: 499, name: 'Erou anonim', icon: '✺', color: 'var(--rose)', desc: 'Susții o întreagă comunitate de 5 copii.' },
    { min: 500, max: 99999, name: 'Pilon de comunitate', icon: '✸', color: 'var(--ink)', desc: 'Un nume pe care îl ținem minte zeci de ani.' },
  ];
  const currentLevel = levels.find(l => amount >= l.min && amount <= l.max) || levels[0];
  const nextLevel = levels[levels.indexOf(currentLevel) + 1];
  const toNext = nextLevel ? nextLevel.min - amount : 0;

  return (
    <div className="page" data-screen-label="02 Donează">
      {/* Top */}
      <section style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="eyebrow"><span className="dot"></span>Donează</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end', marginTop: 24 }}>
            <h1 className="display-xl">
              Trei minute.<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Patru sute</span><br />
              de copii.
            </h1>
            <p className="lead text-soft" style={{ maxWidth: 420 }}>
              Alege cum vrei să te implici. Toate variantele sunt sigure, cu raportare transparentă,
              fără comisioane ascunse.
            </p>
          </div>
        </div>
      </section>

      {/* Type tabs */}
      <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', position: 'sticky', top: 68, background: 'rgba(245,241,234,0.96)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: 0, overflow: 'auto' }}>
          {[
            ['recurrent', 'Lunar recurent', 'cel mai util'],
            ['unic', 'O singură dată', null],
            ['3.5', 'Redirecționează 3,5%', 'din impozit'],
            ['corporate', 'Sponsorizare companie', null],
          ].map(([k, label, tag]) => (
            <button
              key={k}
              onClick={() => setType(k)}
              style={{
                background: 'transparent', border: 0, borderBottom: type === k ? '2px solid var(--ink)' : '2px solid transparent',
                padding: '20px 4px', marginRight: 36, cursor: 'pointer',
                color: type === k ? 'var(--ink)' : 'var(--ink-mute)',
                fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 10,
              }}
            >
              {label}
              {tag && (
                <span className="mono" style={{ fontSize: 10, background: 'var(--accent)', color: '#fff', padding: '3px 7px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Main flow */}
      {type === 'recurrent' && <RecurrentFlow {...{ amount, setAmount, custom, setCustom, currentLevel, nextLevel, toNext, levels, step, setStep }} />}
      {type === 'unic' && <SingleFlow amount={amount} setAmount={setAmount} />}
      {type === '3.5' && <TaxRedirectFlow />}
      {type === 'corporate' && <CorporateFlow setPage={setPage} />}

      {/* Trust */}
      <TrustStrip />
    </div>
  );
}

// ----- Recurrent (main) -----
function RecurrentFlow({ amount, setAmount, custom, setCustom, currentLevel, nextLevel, toNext, levels, step, setStep }) {
  const presets = [30, 50, 100, 200, 500];

  const impact = [
    { unit: 'meditații / lună', cost: 12, icon: '✎' },
    { unit: 'mese calde', cost: 9, icon: '✻' },
    { unit: 'rechizite', cost: 18, icon: '❒' },
  ].map(it => ({ ...it, qty: Math.floor(amount / it.cost) }));

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left — amount + level */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Pasul 1 / 3 · alege suma</div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {presets.map(p => (
                <button
                  key={p}
                  onClick={() => { setAmount(p); setCustom(''); }}
                  style={{
                    flex: '1 1 100px', padding: '24px 12px',
                    background: amount === p && !custom ? 'var(--ink)' : 'var(--bg-paper)',
                    color: amount === p && !custom ? 'var(--bg)' : 'var(--ink)',
                    border: '1px solid ' + (amount === p && !custom ? 'var(--ink)' : 'var(--rule)'),
                    cursor: 'pointer',
                    fontFamily: 'var(--serif)', fontSize: 28,
                    transition: 'all 180ms ease',
                  }}
                >
                  {p}<span style={{ fontSize: 14, opacity: 0.6, fontFamily: 'var(--sans)' }}> lei</span>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 12, alignItems: 'center' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="number"
                  placeholder="Sumă personalizată"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); if (e.target.value) setAmount(parseInt(e.target.value) || 0); }}
                  style={{
                    width: '100%', padding: '18px 60px 18px 16px',
                    border: '1px solid var(--rule)', background: 'var(--bg-paper)',
                    fontFamily: 'var(--serif)', fontSize: 20,
                    outline: 'none', borderRadius: 2,
                  }}
                />
                <span style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-mute)', fontFamily: 'var(--mono)', fontSize: 14 }}>LEI</span>
              </div>
            </div>

            {/* Level progress bar */}
            <div style={{ marginTop: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Nivelul tău</div>
              <div className="panel" style={{ background: 'var(--bg-paper)', padding: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {currentLevel.img
                      ? <img src={currentLevel.img} alt="" style={{ height: 48, width: 48, objectFit: 'contain' }} />
                      : <div style={{ fontSize: 48, color: currentLevel.color, lineHeight: 1 }}>{currentLevel.icon}</div>
                    }
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic' }}>{currentLevel.name}</div>
                      <div className="kicker" style={{ marginTop: 4 }}>nivelul tău de donator</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="tick" style={{ fontSize: 44 }}>{amount}</div>
                    <div className="kicker">lei / lună</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.4 }}>
                  „{currentLevel.desc}"
                </p>

                {/* Level ladder */}
                <div style={{ marginTop: 28 }}>
                  <div style={{ position: 'relative', height: 36, marginBottom: 12 }}>
                    <div style={{ position: 'absolute', top: 17, left: 0, right: 0, height: 2, background: 'var(--rule)' }}></div>
                    {levels.map((l, i) => {
                      const reached = amount >= l.min;
                      const pct = (i / (levels.length - 1)) * 100;
                      return (
                        <div key={l.name} style={{ position: 'absolute', left: pct + '%', top: 0, transform: 'translateX(-50%)' }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: reached ? l.color : 'var(--bg-deep)',
                            border: '2px solid ' + (reached ? l.color : 'var(--rule)'),
                            color: reached ? '#fff' : 'var(--ink-mute)',
                            display: 'grid', placeItems: 'center', fontSize: 18,
                            transition: 'all 300ms ease',
                          }}>
                            {l.icon}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {levels.map(l => (
                      <div key={l.name} style={{ textAlign: 'center', maxWidth: 90 }}>
                        <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{l.min}+</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 12, fontStyle: 'italic', lineHeight: 1.2, marginTop: 2 }}>{l.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {nextLevel && (
                  <div style={{ marginTop: 24, padding: 14, background: 'var(--bg-deep)', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ fontSize: 24, color: nextLevel.color }}>{nextLevel.icon}</div>
                    <div style={{ flex: 1, fontSize: 14 }}>
                      Încă <strong>{toNext} lei</strong> și treci la <span className="italic" style={{ fontFamily: 'var(--serif)' }}>{nextLevel.name}</span>
                    </div>
                    <button className="btn btn-ghost" style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => setAmount(nextLevel.min)}>+{toNext} lei</button>
                  </div>
                )}
              </div>
            </div>

            {/* Impact preview */}
            <div style={{ marginTop: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Lunar, asta înseamnă</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                {impact.map((it, i) => (
                  <div key={i} style={{ background: 'var(--bg-paper)', border: '1px solid var(--rule)', padding: 20 }}>
                    <div style={{ fontSize: 22 }}>{it.icon}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
                      <div className="tick" style={{ fontSize: 40 }}>{it.qty}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, marginTop: 2 }}>{it.unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Summary card (sticky) */}
          <div style={{ position: 'sticky', top: 160 }}>
            <SummaryCard amount={amount} level={currentLevel} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Summary card -----
function SummaryCard({ amount, level }) {
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [card, setCard] = useState({ no: '', exp: '', cvv: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const monthsToImpact = [
    { m: 1, what: '8 meditații pentru un copil' },
    { m: 3, what: 'un consult dentar complet' },
    { m: 6, what: 'rechizite pentru o clasă' },
    { m: 12, what: 'o tabără de vară plătită' },
  ];

  return (
    <div className="panel ink" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: 28, borderBottom: '1px solid rgba(245,241,234,0.12)' }}>
        <div className="kicker" style={{ color: 'rgba(245,241,234,0.6)' }}>Rezumat donație lunară</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 14 }}>
          <div className="tick" style={{ fontSize: 80, color: 'var(--bg)' }}>{amount}</div>
          <div style={{ fontSize: 18, fontFamily: 'var(--sans)', color: 'rgba(245,241,234,0.6)' }}>lei / lună</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{ color: level.color, fontSize: 18 }}>{level.icon}</span>
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18 }}>{level.name}</span>
        </div>
      </div>

      {/* Identity */}
      <div style={{ padding: 28, borderBottom: '1px solid rgba(245,241,234,0.12)' }}>
        <div className="kicker" style={{ color: 'rgba(245,241,234,0.6)', marginBottom: 14 }}>Identitate</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <input
            placeholder={anonymous ? 'Vei apărea ca: Anonim' : 'Numele tău'}
            value={name}
            disabled={anonymous}
            onChange={e => setName(e.target.value)}
            style={inputDark}
          />
          <input
            placeholder="Email pentru raport lunar"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputDark}
          />
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4, cursor: 'pointer', fontSize: 14, color: 'rgba(245,241,234,0.8)' }}>
            <input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} style={{ accentColor: 'var(--accent)' }} />
            Apare anonim pe Wall of Fame
          </label>
        </div>
      </div>

      {/* Card */}
      <div style={{ padding: 28, borderBottom: '1px solid rgba(245,241,234,0.12)' }}>
        <div className="kicker" style={{ color: 'rgba(245,241,234,0.6)', marginBottom: 14 }}>Card</div>
        <input
          placeholder="1234  5678  9012  3456"
          value={card.no}
          onChange={e => setCard({ ...card, no: e.target.value })}
          style={inputDark}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          <input placeholder="MM / YY" value={card.exp} onChange={e => setCard({ ...card, exp: e.target.value })} style={inputDark} />
          <input placeholder="CVV" value={card.cvv} onChange={e => setCard({ ...card, cvv: e.target.value })} style={inputDark} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <CardLogo>VISA</CardLogo><CardLogo>MC</CardLogo><CardLogo>AMEX</CardLogo>
        </div>
      </div>

      {/* Submit */}
      <div style={{ padding: 28 }}>
        <button
          className="btn btn-primary btn-lg"
          style={{ width: '100%', justifyContent: 'center', fontSize: 16 }}
          onClick={() => {
            setSubmitting(true);
            setTimeout(() => { setDone(true); setSubmitting(false); }, 1400);
          }}
          disabled={submitting || done}
        >
          {done ? 'Mulțumim ❤' : submitting ? 'Se procesează…' : <>Donează {amount} lei / lună <Arrow size={16}/></>}
        </button>
        <div style={{ fontSize: 12, color: 'rgba(245,241,234,0.5)', marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>
          Plată securizată Stripe · poți opri oricând din contul tău
        </div>

        {done && (
          <div style={{ marginTop: 20, padding: 16, background: 'rgba(217,119,87,0.12)', border: '1px solid var(--accent)', borderRadius: 2 }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--bg)' }}>
              Bine ai venit la Casa Bună.
            </div>
            <div style={{ fontSize: 13, color: 'rgba(245,241,234,0.75)', marginTop: 8 }}>
              Primul raport îl trimitem pe 30 iunie. Vei vedea fiecare leu.
            </div>
          </div>
        )}
      </div>

      {/* Timeline */}
      <div style={{ padding: 28, background: '#211e1b', borderTop: '1px solid rgba(245,241,234,0.08)' }}>
        <div className="kicker" style={{ color: 'rgba(245,241,234,0.6)', marginBottom: 16 }}>Drumul tău cu noi</div>
        <div style={{ display: 'grid', gap: 12 }}>
          {monthsToImpact.map(m => (
            <div key={m.m} style={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: 12, alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontStyle: 'italic', color: 'var(--accent)' }}>{m.m}L</div>
              <div style={{ fontSize: 13, color: 'rgba(245,241,234,0.8)' }}>{m.what}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputDark = {
  width: '100%', padding: '14px 16px',
  background: '#0f0d0b', border: '1px solid #2a2622',
  color: 'var(--bg)', fontFamily: 'var(--sans)', fontSize: 15,
  outline: 'none', borderRadius: 2,
};

function CardLogo({ children }) {
  return (
    <div style={{ padding: '4px 8px', background: 'rgba(245,241,234,0.08)', border: '1px solid rgba(245,241,234,0.15)', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,241,234,0.6)', letterSpacing: '0.1em' }}>{children}</div>
  );
}

// ----- Single donation -----
function SingleFlow({ amount, setAmount }) {
  const presets = [50, 100, 200, 500, 1000, 2000];
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 820 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>O singură dată</div>
          <h2 className="display-m">
            O donație unică ne ajută. <span className="italic" style={{ color: 'var(--accent)' }}>O donație lunară ne salvează.</span>
          </h2>
          <p className="text-soft" style={{ marginTop: 14, fontSize: 17, maxWidth: 540 }}>
            Dacă totuși preferi o donație unică acum, e perfect. Putem trece la lunar oricând.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8, marginTop: 32 }}>
            {presets.map(p => (
              <button
                key={p}
                onClick={() => setAmount(p)}
                style={{
                  padding: '20px 8px',
                  background: amount === p ? 'var(--ink)' : 'var(--bg-paper)',
                  color: amount === p ? 'var(--bg)' : 'var(--ink)',
                  border: '1px solid ' + (amount === p ? 'var(--ink)' : 'var(--rule)'),
                  cursor: 'pointer',
                  fontFamily: 'var(--serif)', fontSize: 22,
                }}
              >{p}<span style={{ fontSize: 11, fontFamily: 'var(--sans)', opacity: 0.6 }}> lei</span></button>
            ))}
          </div>
          <button className="btn btn-primary btn-lg" style={{ marginTop: 28 }}>Donează {amount} lei o dată <Arrow size={16}/></button>
        </div>
      </div>
    </section>
  );
}

// ----- 3.5% Tax redirect -----
function TaxRedirectFlow() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>3,5% din impozit</div>
            <h2 className="display-m">
              <span className="italic">Nu te costă nimic.</span><br />
              Pe noi ne ajută <span className="mark forest">enorm.</span>
            </h2>
            <p className="text-soft" style={{ marginTop: 24, fontSize: 17, maxWidth: 480 }}>
              Statul oprește oricum 10% din venitul tău. Poți redirecționa 3,5% din ce a oprit deja
              către Casa Bună. Banii ajung direct la noi, fără să scoți tu un leu în plus.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 40 }}>
              <div>
                <div className="tick" style={{ fontSize: 48 }}>≈ 87 lei</div>
                <div className="kicker">salariu mediu 4.500 lei net</div>
              </div>
              <div>
                <div className="tick" style={{ fontSize: 48, color: 'var(--accent)' }}>= 7 meditații</div>
                <div className="kicker">pentru un copil din Ferentari</div>
              </div>
            </div>

            <ol style={{ marginTop: 40, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 18 }}>
              {[
                ['Completezi datele tale (CNP, venituri 2025)'],
                ['Generăm Formularul 230 pre-completat'],
                ['Semnezi cu Click & Sign sau printezi & depui la ANAF'],
                ['Casa Bună primește banii în iulie 2026'],
              ].map(([s], i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14, alignItems: 'start' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ink)', color: 'var(--bg)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic' }}>{i+1}</div>
                  <div style={{ fontSize: 16 }}>{s}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="panel" style={{ padding: 0, background: 'var(--bg-paper)' }}>
            <div style={{ padding: '20px 28px', borderBottom: '1px solid var(--rule)' }}>
              <div className="eyebrow">Formular 230 · pre-completat</div>
            </div>
            <div style={{ padding: 28, display: 'grid', gap: 14 }}>
              <FormRow label="Nume și prenume" placeholder="Ion Popescu" />
              <FormRow label="CNP" placeholder="1234567890123" />
              <FormRow label="Adresă completă" placeholder="Str. Aurel Vlaicu nr. 5, București" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <FormRow label="Județ" placeholder="București" />
                <FormRow label="Cod poștal" placeholder="010001" />
              </div>
              <div style={{ borderTop: '1px solid var(--rule)', marginTop: 14, paddingTop: 14 }}>
                <FormRow label="Beneficiar" value="Asociația Casa Bună" disabled />
                <FormRow label="CIF beneficiar" value="1321/A/2020" disabled />
                <FormRow label="IBAN" value="RO47 BTRL RONC RT05 6639 8301" disabled mono />
              </div>
              <button className="btn btn-forest btn-lg" style={{ marginTop: 14, justifyContent: 'center' }}>
                Generează & semnează <Arrow size={16}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormRow({ label, placeholder, value, disabled, mono }) {
  return (
    <label style={{ display: 'block' }}>
      <div className="kicker" style={{ marginBottom: 6 }}>{label}</div>
      <input
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        style={{
          width: '100%', padding: '14px 16px',
          border: '1px solid var(--rule)',
          background: disabled ? 'var(--bg-deep)' : '#fff',
          fontFamily: mono ? 'var(--mono)' : 'var(--sans)',
          fontSize: mono ? 13 : 15,
          color: disabled ? 'var(--ink-soft)' : 'var(--ink)',
          outline: 'none', borderRadius: 2,
        }}
      />
    </label>
  );
}

// ----- Corporate -----
function CorporateFlow({ setPage }) {
  const tiers = [
    { name: 'Prieten', range: '6.000 – 24.000 lei / an', perks: ['Logo pe site', 'Raport anual', 'Mențiune în campanii'] },
    { name: 'Sprijinitor', range: '24.000 – 60.000 lei / an', perks: ['Tot ce e mai sus', 'Branding pe campanie', 'Vizită în comunitate', '2 evenimente CSR'] },
    { name: 'Pilon', range: '60.000+ lei / an', perks: ['Tot ce e mai sus', 'Proiect dedicat cu numele tău', 'Raportare bilunară', 'Co-branding pe materiale'] },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Sponsorizare companie</div>
        <h2 className="display-m" style={{ maxWidth: 900 }}>
          Sponsorizarea către ONG poate fi <span className="italic">deductibilă fiscal</span> până la 20% din impozitul pe profit.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 48 }}>
          {tiers.map((t, i) => (
            <div key={i} style={{ padding: 32, background: i === 1 ? 'var(--ink)' : 'var(--bg-paper)', color: i === 1 ? 'var(--bg)' : 'var(--ink)', border: '1px solid ' + (i === 1 ? 'var(--ink)' : 'var(--rule)') }}>
              <div className="kicker" style={{ color: i === 1 ? 'rgba(245,241,234,0.5)' : 'var(--ink-mute)' }}>{`0${i+1}`}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, marginTop: 8 }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, marginTop: 4, color: 'var(--accent)' }}>{t.range}</div>
              <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                {t.perks.map((p, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'start', fontSize: 14 }}>
                    <span style={{ color: 'var(--accent)', marginTop: 2 }}>✦</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 36, background: 'var(--forest)', color: 'var(--bg)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(245,241,234,0.6)' }}>Pas următor</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 40, marginTop: 12 }}>
              Hai să facem o întâlnire.
            </div>
            <p style={{ marginTop: 14, color: 'rgba(245,241,234,0.85)', maxWidth: 460 }}>
              Vorbim 30 de minute despre obiectivele tale de CSR și îți trimitem pachet de sponsorizare personalizat.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>Programează call <Arrow size={16}/></button>
            <button className="btn btn-ghost btn-lg" style={{ justifyContent: 'center', borderColor: 'rgba(245,241,234,0.3)', color: 'var(--bg)' }}>Descarcă deck PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Trust strip -----
function TrustStrip() {
  return (
    <section style={{ background: 'var(--bg-deep)', padding: '64px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {[
          ['🔒', 'Plăți securizate', 'Stripe & Netopia · PCI-DSS L1'],
          ['📊', 'Transparență totală', 'Raport public lunar'],
          ['✋', 'Oprire oricând', 'Un click în contul tău'],
          ['📜', 'ONG verificat', 'Înreg. 1321/A/2020 · UE'],
        ].map(([icon, title, desc], i) => (
          <div key={i}>
            <div style={{ fontSize: 24 }}>{icon}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 12 }}>{title}</div>
            <div className="text-mute" style={{ fontSize: 13, marginTop: 4 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { DoneazaPage });
