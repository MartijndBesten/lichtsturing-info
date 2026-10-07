const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const VISUALS = {
  'begrip-aanwezigheidsdetectie': 'compare',
  'begrip-application-controller': 'flow',
  'begrip-automatische-lichtregeling': 'decision',
  'begrip-bacnet': 'network',
  'begrip-basislicht': 'timeline',
  'begrip-bedraad-draadloos': 'compare',
  'begrip-cybersecurity': 'layers',
  'begrip-bluetooth': 'signal',
  'begrip-bluetooth-mesh': 'network',
  'begrip-bluetooth-nlc': 'network',
  'begrip-broadcast': 'bus',
  'begrip-busvoeding': 'bus',
  'begrip-constantlichtregeling': 'threshold',
  'begrip-control-device': 'layers',
  'begrip-control-gear': 'flow',
  'begrip-d4i': 'layers',
  'begrip-daglichtregeling': 'threshold',
  'begrip-dali': 'bus',
  'begrip-dali-2': 'compare',
  'begrip-dali-relais': 'flow',
  'begrip-dali-plus': 'compare',
  'begrip-dect-nr': 'network',
  'begrip-detectieveld': 'room',
  'begrip-device-types': 'layers',
  'begrip-draadloze-lichtsturing': 'network',
  'begrip-draadloze-protocollen': 'layers',
  'begrip-drukknopdimmen': 'threshold',
  'begrip-drukknopinterface': 'flow',
  'begrip-opbouw-kiezen': 'decision',
  'begrip-energie-certificering': 'compare',
  'begrip-enocean': 'signal',
  'begrip-gacs': 'network',
  'begrip-gateway': 'flow',
  'begrip-gbs': 'network',
  'begrip-groepen': 'room',
  'begrip-handbediening': 'compare',
  'begrip-hf-sensor': 'signal',
  'begrip-dali-capaciteit': 'threshold',
  'begrip-commissioning': 'flow',
  'begrip-input-device': 'flow',
  'begrip-dali-kleur': 'threshold',
  'begrip-knx': 'network',
  'begrip-knx-rf': 'network',
  'begrip-knx-secure': 'layers',
  'begrip-leveranciersmesh': 'compare',
  'begrip-lichtregelinstallatie': 'layers',
  'begrip-lms': 'network',
  'begrip-lichtscene': 'compare',
  'begrip-lichtsturing': 'flow',
  'begrip-lorawan': 'signal',
  'begrip-matter': 'layers',
  'begrip-mesh': 'network',
  'begrip-nalooptijd': 'timeline',
  'begrip-ip-netwerk': 'network',
  'begrip-nfc': 'signal',
  'begrip-dali-noodverlichting': 'flow',
  'begrip-normenwijzer': 'layers',
  'begrip-pir': 'room',
  'begrip-regelgeving': 'flow',
  'begrip-regelstrategie': 'decision',
  'begrip-schemerschakelaar': 'threshold',
  'begrip-sensor': 'room',
  'begrip-dali2-input-devices': 'layers',
  'begrip-sensorpositie': 'room',
  'begrip-storing-zoeken': 'decision',
  'begrip-thread': 'network',
  'begrip-tijdschema': 'timeline',
  'begrip-bruikbare-data': 'flow',
  'begrip-wifi': 'network',
  'begrip-wi-sun': 'network',
  'begrip-z-wave': 'network',
  'begrip-zhaga': 'layers',
  'begrip-zigbee': 'network'
};

const SPECIAL = {
  'begrip-pir': {
    hint: 'Beweeg de persoon door het detectieveld.',
    note: 'PIR zendt niets uit: de sensor reageert op verandering in warmtestraling tussen detectiezones.'
  },
  'begrip-hf-sensor': {
    hint: 'Start de meting en kijk wat beweging met de reflectie doet.',
    note: 'HF is actief: de sensor zendt een signaal uit en beoordeelt de verandering in de terugkaatsing.'
  },
  'begrip-nalooptijd': {
    hint: 'Start de timer. Nieuwe detectie zet de nalooptijd opnieuw op de ingestelde waarde.',
    note: 'De nalooptijd begint na de laatste detectie, niet wanneer iemand de ruimte binnenkomt.'
  },
  'begrip-broadcast': {
    hint: 'Stuur één opdracht over de bus.',
    note: 'Broadcast adresseert alle aangesloten drivers tegelijk.'
  },
  'begrip-busvoeding': {
    hint: 'Schakel de busvoeding uit en let op wat wel en niet verdwijnt.',
    note: 'De busvoeding voedt de communicatie; de armaturen hebben hun eigen netvoeding.'
  },
  'begrip-gateway': {
    hint: 'Laat een bericht van de ene systeemwereld naar de andere lopen.',
    note: 'Een gateway vertaalt of koppelt twee verschillende communicatie- of systeemlagen.'
  },
  'begrip-constantlichtregeling': {
    hint: 'Schuif het daglicht omhoog en omlaag.',
    note: 'Meer daglicht betekent minder kunstlicht, met als doel een ongeveer constant totaalniveau.'
  },
  'begrip-daglichtregeling': {
    hint: 'Verander de hoeveelheid daglicht.',
    note: 'De lichtregeling verlaagt het kunstlicht zodra daglicht een groter deel van de gewenste verlichtingssterkte levert.'
  },
  'begrip-dali-kleur': {
    hint: 'Verander helderheid en kleurtemperatuur.',
    note: 'Bij DT8 kunnen helderheid en kleurinformatie via één DALI-adres worden geregeld.'
  },
  'begrip-nfc': {
    hint: 'Breng de telefoon dicht bij het apparaat.',
    note: 'NFC werkt bewust op zeer korte afstand en is daarmee iets anders dan een ruimtedekkend draadloos netwerk.'
  },
  'begrip-mesh': {
    hint: 'Klik een knooppunt uit en bekijk de nieuwe route.',
    note: 'In een mesh hoeft niet ieder apparaat rechtstreeks contact met één centraal punt te hebben.'
  },
  'begrip-bluetooth-mesh': {
    hint: 'Klik een knooppunt uit en bekijk de nieuwe route.',
    note: 'Bluetooth Mesh gebruikt Bluetooth LE als radiobasis en laat berichten via andere apparaten doorgeven.'
  },
  'begrip-sensorpositie': {
    hint: 'Verplaats de sensor en zie hoe het bruikbare detectiegebied meeverandert.',
    note: 'Een goede sensorpositie volgt uit gebruik, geometrie en wat de sensor werkelijk moet zien of meten.'
  },
  'begrip-detectieveld': {
    hint: 'Beweeg de persoon binnen en buiten het veld.',
    note: 'Een detectieveld is geen lichtbundel: het laat alleen zien waar de sensor beweging kan waarnemen.'
  }
};

function button(label, cls = '') {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'glossary-demo-button ' + cls;
  b.textContent = label;
  return b;
}

function makeShell(entry, term, desc, visual) {
  const shell = document.createElement('div');
  shell.className = 'glossary-visual';
  shell.hidden = true;
  shell.dataset.visual = visual;
  shell.setAttribute('aria-label', 'Visuele uitleg van ' + term);

  const head = document.createElement('div');
  head.className = 'glossary-visual-head';
  const title = document.createElement('strong');
  title.textContent = 'Zo werkt het';
  const hint = document.createElement('span');
  hint.className = 'glossary-visual-hint';
  hint.textContent = (SPECIAL[entry.id] && SPECIAL[entry.id].hint) || 'Probeer de visualisatie.';
  head.append(title, hint);

  const stage = document.createElement('div');
  stage.className = 'glossary-stage';
  stage.dataset.stage = '';

  const note = document.createElement('p');
  note.className = 'glossary-takeaway';
  note.textContent = (SPECIAL[entry.id] && SPECIAL[entry.id].note) || desc;

  shell.append(head, stage, note);
  return { shell, stage };
}

function svgEl(name, attrs = {}) {
  const n = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
  return n;
}

function baseSvg(label) {
  const svg = svgEl('svg', { viewBox: '0 0 720 260', role: 'img', 'aria-label': label });
  svg.classList.add('glossary-svg');
  return svg;
}

function renderRoom(stage, entry) {
  const svg = baseSvg('Ruimte met sensor en detectiegebied');
  const ceiling = svgEl('line', { x1: 40, y1: 35, x2: 680, y2: 35, class: 'gv-line' });
  const floor = svgEl('line', { x1: 40, y1: 220, x2: 680, y2: 220, class: 'gv-line' });
  const sensor = svgEl('g', { class: 'gv-sensor' });
  sensor.append(svgEl('rect', { x: 332, y: 24, width: 56, height: 18, rx: 7 }), svgEl('circle', { cx: 360, cy: 46, r: 9 }));
  const zone1 = svgEl('path', { d: 'M360 47 L205 220 L360 220 Z', class: 'gv-zone gv-zone-a' });
  const zone2 = svgEl('path', { d: 'M360 47 L360 220 L515 220 Z', class: 'gv-zone gv-zone-b' });
  const person = svgEl('g', { class: 'gv-person', tabindex: '0', role: 'button', 'aria-label': 'Persoon verplaatsen' });
  person.append(
    svgEl('circle', { cx: 250, cy: 137, r: 12 }),
    svgEl('line', { x1: 250, y1: 149, x2: 250, y2: 188 }),
    svgEl('line', { x1: 250, y1: 160, x2: 232, y2: 176 }),
    svgEl('line', { x1: 250, y1: 160, x2: 269, y2: 176 }),
    svgEl('line', { x1: 250, y1: 188, x2: 235, y2: 214 }),
    svgEl('line', { x1: 250, y1: 188, x2: 266, y2: 214 })
  );
  const status = svgEl('text', { x: 360, y: 248, 'text-anchor': 'middle', class: 'gv-status' });
  status.textContent = 'Klik op de persoon';
  svg.append(zone1, zone2, ceiling, floor, sensor, person, status);
  stage.append(svg);

  let right = false;
  const move = () => {
    right = !right;
    person.style.transform = right ? 'translateX(220px)' : 'translateX(0)';
    zone1.classList.toggle('is-active', !right);
    zone2.classList.toggle('is-active', right);
    status.textContent = entry.id === 'begrip-pir'
      ? 'Verandering tussen zones → detectie'
      : right ? 'Binnen detectiegebied' : 'Andere positie / andere dekking';
  };
  person.addEventListener('click', move);
  person.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); move(); } });
}

function renderNetwork(stage) {
  const svg = baseSvg('Netwerk met meerdere knooppunten');
  const pts = [[110,150],[250,85],[370,165],[500,90],[620,155]];
  const links = [[0,1],[1,2],[2,3],[3,4],[1,3]];
  links.forEach(([a,b]) => svg.append(svgEl('line',{x1:pts[a][0],y1:pts[a][1],x2:pts[b][0],y2:pts[b][1],class:'gv-link'})));
  pts.forEach(([x,y],i) => {
    const g = svgEl('g',{class:'gv-node',tabindex:'0',role:'button','aria-label':'Knooppunt '+(i+1)});
    g.append(svgEl('circle',{cx:x,cy:y,r:24}), svgEl('text',{x,y:y+5,'text-anchor':'middle'}));
    g.querySelector('text').textContent = String(i+1);
    svg.append(g);
  });
  const packet = svgEl('circle',{cx:110,cy:150,r:7,class:'gv-packet'});
  svg.append(packet);
  const label = svgEl('text',{x:360,y:238,'text-anchor':'middle',class:'gv-status'});
  label.textContent='Klik een knooppunt om het netwerk te verstoren';
  svg.append(label);
  stage.append(svg);

  let disabled = -1;
  const nodes=[...svg.querySelectorAll('.gv-node')];
  const run = () => {
    packet.animate(
      [{offset:0,transform:'translate(0,0)'},{offset:.25,transform:'translate(140px,-65px)'},{offset:.5,transform:'translate(260px,15px)'},{offset:.75,transform:'translate(390px,-60px)'},{offset:1,transform:'translate(510px,5px)'}],
      {duration:1700,easing:'ease-in-out'}
    );
  };
  nodes.forEach((node,i)=>{
    const toggle=()=>{
      disabled = disabled===i ? -1 : i;
      nodes.forEach((n,j)=>n.classList.toggle('is-off',j===disabled));
      label.textContent = disabled<0 ? 'Alle knooppunten actief' : 'Knooppunt '+(disabled+1)+' uit — verkeer zoekt een andere route';
      run();
    };
    node.addEventListener('click',toggle);
    node.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  });
  run();
}

function renderBus(stage, entry) {
  const wrap=document.createElement('div');
  wrap.className='gv-bus-wrap';
  const svg=baseSvg('DALI-bus met aangesloten apparaten');
  svg.append(svgEl('line',{x1:70,y1:125,x2:650,y2:125,class:'gv-bus'}));
  const xs=[130,240,350,460,570];
  xs.forEach((x,i)=>{
    svg.append(svgEl('line',{x1:x,y1:125,x2:x,y2:72,class:'gv-drop'}));
    const r=svgEl('rect',{x:x-28,y:38,width:56,height:34,rx:7,class:'gv-device'});
    r.dataset.i=String(i);
    svg.append(r);
  });
  const power=svgEl('circle',{cx:70,cy:125,r:16,class:'gv-power is-on'});
  svg.append(power);
  const packet=svgEl('circle',{cx:90,cy:125,r:7,class:'gv-packet'});
  svg.append(packet);
  const status=svgEl('text',{x:360,y:220,'text-anchor':'middle',class:'gv-status'});
  status.textContent='Bus gereed';
  svg.append(status);
  wrap.append(svg);

  const controls=document.createElement('div');
  controls.className='glossary-controls';
  const send=button(entry.id==='begrip-busvoeding'?'Schakel busvoeding':'Stuur opdracht');
  controls.append(send);
  wrap.append(controls);
  stage.append(wrap);

  let on=true;
  send.addEventListener('click',()=>{
    if(entry.id==='begrip-busvoeding'){
      on=!on;
      power.classList.toggle('is-on',on);
      svg.classList.toggle('is-bus-off',!on);
      status.textContent=on?'Busvoeding aan — communicatie beschikbaar':'Busvoeding uit — communicatie weg, armaturen blijven netspanning houden';
    } else {
      [...svg.querySelectorAll('.gv-device')].forEach((d,i)=>setTimeout(()=>d.classList.add('is-active'),250+i*110));
      setTimeout(()=>[...svg.querySelectorAll('.gv-device')].forEach(d=>d.classList.remove('is-active')),1400);
      packet.animate([{transform:'translateX(0)'},{transform:'translateX(540px)'}],{duration:1000,easing:'linear'});
      status.textContent='Eén opdracht → alle geadresseerde deelnemers reageren';
    }
  });
}

function renderTimeline(stage) {
  const box=document.createElement('div');
  box.className='gv-timeline-box';
  const clock=document.createElement('div');
  clock.className='gv-clock';
  clock.textContent='10';
  const bar=document.createElement('div');
  bar.className='gv-timeline';
  const fill=document.createElement('div');
  fill.className='gv-timeline-fill';
  bar.append(fill);
  const controls=document.createElement('div');
  controls.className='glossary-controls';
  const start=button('Start');
  const reset=button('Nieuwe detectie','secondary');
  controls.append(start,reset);
  box.append(clock,bar,controls);
  stage.append(box);
  let timer=null, value=10;
  const paint=()=>{clock.textContent=String(value);fill.style.width=(value*10)+'%';};
  const stop=()=>{if(timer)clearInterval(timer);timer=null;};
  const run=()=>{stop();timer=setInterval(()=>{value-=1;paint();if(value<=0)stop();},500);};
  start.addEventListener('click',run);
  reset.addEventListener('click',()=>{value=10;paint();run();});
  paint();
}

function renderThreshold(stage, entry) {
  const box=document.createElement('div');
  box.className='gv-threshold-box';
  const sun=document.createElement('div');
  sun.className='gv-sun';
  sun.textContent='☀';
  const lum=document.createElement('div');
  lum.className='gv-luminaire';
  const cone=document.createElement('div');
  cone.className='gv-light-cone';
  lum.append(cone);
  const value=document.createElement('div');
  value.className='gv-value';
  const input=document.createElement('input');
  input.type='range'; input.min='0'; input.max='100'; input.value='35';
  input.setAttribute('aria-label','Waarde aanpassen');
  box.append(sun,lum,value,input);
  stage.append(box);
  const paint=()=>{
    const v=Number(input.value);
    if(entry.id==='begrip-dali-kleur'){
      const kelvin=Math.round(2700+(6500-2700)*(v/100));
      value.textContent=kelvin+' K';
      cone.style.setProperty('--gv-level','82%');
      cone.style.setProperty('--gv-temp',String(v));
    } else {
      const artificial=100-v;
      value.textContent='Daglicht '+v+'% · kunstlicht '+artificial+'%';
      cone.style.setProperty('--gv-level',artificial+'%');
    }
  };
  input.addEventListener('input',paint); paint();
}

function renderLayers(stage, term) {
  const box=document.createElement('div');
  box.className='gv-layers';
  const labels = /secure|cyber/i.test(term)
    ? ['Gebruiker / beheer','Authenticatie','Versleutelde communicatie','Netwerk / installatie']
    : /draadloze protocollen|matter|d4i|device/i.test(term)
      ? ['Functie / applicatie','Netwerk / logica','Transport / bus','Fysieke laag']
      : ['Gebouwfunctie','Besturing','Interface / protocol','Apparaat'];
  labels.forEach((label,i)=>{
    const layer=document.createElement('button');
    layer.type='button';
    layer.className='gv-layer';
    layer.style.setProperty('--i',i);
    layer.textContent=label;
    layer.addEventListener('click',()=>layer.classList.toggle('is-open'));
    box.append(layer);
  });
  stage.append(box);
}

function renderFlow(stage) {
  const box=document.createElement('div');
  box.className='gv-flow';
  const labels=['Input','Beslissen / vertalen','Opdracht','Resultaat'];
  labels.forEach((label,i)=>{
    const n=document.createElement('div');
    n.className='gv-flow-node';
    n.textContent=label;
    n.style.setProperty('--delay',(i*120)+'ms');
    box.append(n);
    if(i<labels.length-1){
      const a=document.createElement('span');
      a.className='gv-flow-arrow';
      a.textContent='→';
      box.append(a);
    }
  });
  const run=button('Speel af');
  run.addEventListener('click',()=>{
    [...box.querySelectorAll('.gv-flow-node')].forEach((n,i)=>{
      n.classList.remove('is-active');
      setTimeout(()=>n.classList.add('is-active'),i*260);
      setTimeout(()=>n.classList.remove('is-active'),1500+i*260);
    });
  });
  stage.append(box,run);
}

function renderCompare(stage, term) {
  const box=document.createElement('div');
  box.className='gv-compare';
  const a=document.createElement('div');
  const b=document.createElement('div');
  a.className='gv-compare-pane is-active';
  b.className='gv-compare-pane';
  const isWire=/bedraad|dali\+|mesh|leverancier/i.test(term);
  a.innerHTML='<strong>'+(isWire?'Bedraad / open route':'Situatie A')+'</strong><span>Direct en zichtbaar</span>';
  b.innerHTML='<strong>'+(isWire?'Draadloos / alternatieve route':'Situatie B')+'</strong><span>Andere werking, zelfde doel</span>';
  const toggle=button('Wissel');
  toggle.addEventListener('click',()=>{a.classList.toggle('is-active');b.classList.toggle('is-active');});
  box.append(a,b);
  stage.append(box,toggle);
}

function renderDecision(stage) {
  const box=document.createElement('div');
  box.className='gv-decision';
  const q=document.createElement('strong');
  q.textContent='Wat bepaalt de volgende stap?';
  const out=document.createElement('div');
  out.className='gv-decision-out';
  out.textContent='Kies een criterium';
  const opts=['Gebruik','Daglicht','Tijd','Systeemgrens'];
  const row=document.createElement('div');
  row.className='glossary-controls';
  opts.forEach((x,i)=>{
    const b=button(x,i?'secondary':'');
    b.addEventListener('click',()=>{
      [...row.children].forEach(c=>c.classList.remove('is-selected'));
      b.classList.add('is-selected');
      out.textContent={
        Gebruik:'Wie is er en wat gebeurt er in de ruimte?',
        Daglicht:'Hoeveel kunstlicht is werkelijk nodig?',
        Tijd:'Wanneer moet een functie actief zijn?',
        Systeemgrens:'Welke component of welk protocol beslist?'
      }[x];
    });
    row.append(b);
  });
  box.append(q,row,out);
  stage.append(box);
}

function renderSignal(stage, entry) {
  const svg=baseSvg('Draadloze signaaloverdracht');
  const left=svgEl('g',{class:'gv-radio-device'});
  left.append(svgEl('rect',{x:90,y:90,width:80,height:70,rx:12}),svgEl('text',{x:130,y:132,'text-anchor':'middle'}));
  left.querySelector('text').textContent=entry.id==='begrip-nfc'?'Telefoon':'Sensor';
  const right=svgEl('g',{class:'gv-radio-device'});
  right.append(svgEl('rect',{x:550,y:90,width:80,height:70,rx:12}),svgEl('text',{x:590,y:132,'text-anchor':'middle'}));
  right.querySelector('text').textContent='Ontvanger';
  const waves=[1,2,3].map(i=>svgEl('path',{d:'M '+(210+i*35)+' 80 Q 360 125 '+(210+i*35)+' 170',class:'gv-wave'}));
  const status=svgEl('text',{x:360,y:220,'text-anchor':'middle',class:'gv-status'});
  status.textContent='Start signaal';
  svg.append(left,...waves,right,status);
  const run=button(entry.id==='begrip-nfc'?'Breng dichterbij':'Zend signaal');
  run.addEventListener('click',()=>{
    waves.forEach((w,i)=>{w.animate([{opacity:.1},{opacity:1},{opacity:.1}],{duration:800,delay:i*150});});
    status.textContent=entry.id==='begrip-nfc'?'Korte afstand → gerichte verbinding':'Signaal verzonden → ontvanger reageert';
  });
  stage.append(svg,run);
}

function renderVisual(stage, type, entry, term) {
  if (type === 'room') return renderRoom(stage, entry);
  if (type === 'network') return renderNetwork(stage);
  if (type === 'bus') return renderBus(stage, entry);
  if (type === 'timeline') return renderTimeline(stage);
  if (type === 'threshold') return renderThreshold(stage, entry);
  if (type === 'layers') return renderLayers(stage, term);
  if (type === 'flow') return renderFlow(stage);
  if (type === 'compare') return renderCompare(stage, term);
  if (type === 'decision') return renderDecision(stage);
  if (type === 'signal') return renderSignal(stage, entry);
}

function enhanceEntries(entries) {
  for (const { node } of entries) {
    const term = node.querySelector('.glossary-term')?.textContent?.trim() || '';
    const desc = node.querySelector('dd > p')?.textContent?.trim() || '';
    const visual = VISUALS[node.id] || 'flow';
    const dd = node.querySelector('dd');
    if (!dd || dd.querySelector('.glossary-demo-toggle')) continue;

    node.classList.add('is-interactive');

    const toggle = button('Bekijk visueel', 'glossary-demo-toggle');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-controls',node.id+'-visual');

    const { shell, stage } = makeShell(node, term, desc, visual);
    shell.id = node.id+'-visual';
    renderVisual(stage, visual, node, term);

    toggle.addEventListener('click',()=>{
      const open = shell.hidden;
      shell.hidden = !open;
      toggle.setAttribute('aria-expanded',String(open));
      toggle.textContent = open ? 'Sluit visualisatie' : 'Bekijk visueel';
      node.classList.toggle('is-visual-open',open);
      if (open) requestAnimationFrame(()=>shell.scrollIntoView({block:'nearest',behavior:'smooth'}));
    });

    const more = dd.querySelector('.glossary-more');
    if (more) dd.insertBefore(toggle, more);
    else dd.append(toggle);
    dd.append(shell);
  }
}

export function mount(el, config) {
  const strings = config.strings || {};
  const panel = el.querySelector('[data-glossary-filter]');
  const input = el.querySelector('[data-glossary-q]');
  const status = el.querySelector('[data-glossary-status]');
  const empty = el.querySelector('[data-glossary-empty]');
  const buttons = [...el.querySelectorAll('[data-glossary-type]')];
  const entries = [...el.querySelectorAll('.glossary-entry')].map((node) => ({ node, type: node.dataset.type, text: norm(node.dataset.search || node.textContent) }));
  const groups = [...el.querySelectorAll('.glossary-group')];

  enhanceEntries(entries);

  if (!panel || !input || !entries.length) return;
  panel.hidden = false;
  let type = '';

  const apply = () => {
    const tokens = norm(input.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const e of entries) {
      const ok = (!type || e.type === type) && tokens.every((tk) => e.text.includes(tk));
      e.node.hidden = !ok;
      if (ok) shown += 1;
    }
    for (const g of groups) g.hidden = !g.querySelector('.glossary-entry:not([hidden])');
    if (empty) empty.hidden = shown > 0;
    const filtered = tokens.length > 0 || type !== '';
    status.textContent = filtered ? String(strings.count || '{n} van {total}').replace('{n}', shown).replace('{total}', entries.length) : '';
  };

  input.addEventListener('input', apply);
  for (const b of buttons) {
    b.addEventListener('click', () => {
      type = b.dataset.glossaryType || '';
      for (const x of buttons) x.setAttribute('aria-pressed', String(x === b));
      apply();
    });
  }
  apply();
}
