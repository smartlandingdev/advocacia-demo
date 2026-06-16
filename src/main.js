import './style.css'

const WHATS_BASE = 'https://wa.me/5524974033403'

const whatsLink = (msg) => {
  return `${WHATS_BASE}?text=${encodeURIComponent(msg)}`
}

const WHATS_NAV     = whatsLink(`Olá, Bernardo! 👋\n\nVim pelo site Abbott Galvão Advocacia e gostaria de uma orientação jurídica.\n\nPoderia me ajudar?`)
const WHATS_HERO    = whatsLink(`Olá, Bernardo! 👋\n\nVi o site de vocês e preciso de uma assessoria jurídica.\n\nPoderia me orientar?`)
const WHATS_EXTRAJUD = whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você é especialista em Direito Extrajudicial e gostaria de resolver meu caso em cartório.\n\nPode me ajudar?`)
const WHATS_CONTATO = whatsLink(`Olá, Bernardo! 👋\n\nEntrei em contato pelo site Abbott Galvão Advocacia e gostaria de agendar uma consulta.\n\nQuando você teria disponibilidade?`)
const WHATS_FLOAT   = whatsLink(`Olá, Bernardo! 👋\n\nVim pelo site Abbott Galvão Advocacia.\n\nGostaria de tirar uma dúvida jurídica, pode me atender?`)

// fallback para mobile nav
const WHATS = WHATS_NAV

const whatsIcon = (size = 20) => `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`

const areaIcon = (path, extra = '') => `
  <svg class="area-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${path}</svg>`

const areas = [
  {
    n: '01', title: 'Direito Extrajudicial', destaque: true,
    desc: 'Divórcios, inventários e regularização de imóveis em cartório, sem processo judicial. Presidente da Comissão de Direito Extrajudicial da OAB de Resende, Porto Real e Itatiaia/RJ.',
    icon: areaIcon(`<path d="M3 6h18M3 12h18M3 18h18"/><path d="M7 3v3m10-3v3"/><rect x="3" y="4" width="18" height="16" rx="2"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você é especialista em Direito Extrajudicial.\n\nGostaria de resolver meu caso em cartório, sem processo judicial. Pode me ajudar?`),
  },
  {
    n: '02', title: 'Direito Imobiliário',
    desc: 'Regularização de imóveis, compra e venda, locações, usucapião e due diligence imobiliária.',
    icon: areaIcon(`<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito Imobiliário.\n\nPreciso de assessoria jurídica para regularização/compra de imóvel. Pode me ajudar?`),
  },
  {
    n: '03', title: 'Direito de Família',
    desc: 'Divórcio, guarda, alimentos e planejamento familiar, pela via judicial ou extrajudicial.',
    icon: areaIcon(`<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito de Família.\n\nPreciso de orientação jurídica sobre divórcio/guarda/alimentos. Pode me ajudar?`),
  },
  {
    n: '04', title: 'Direito Sucessório',
    desc: 'Inventários, testamentos, planejamento sucessório e partilha de bens por escritura pública.',
    icon: areaIcon(`<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito Sucessório.\n\nPreciso de orientação sobre inventário ou planejamento sucessório. Pode me ajudar?`),
  },
  {
    n: '05', title: 'Direito Trabalhista e Previdenciário',
    desc: 'Rescisões, reclamatórias trabalhistas e concessão de benefícios previdenciários.',
    icon: areaIcon(`<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito Trabalhista.\n\nPreciso de orientação jurídica trabalhista/previdenciária. Pode me ajudar?`),
  },
  {
    n: '06', title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, cobranças e questões patrimoniais em geral.',
    icon: areaIcon(`<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito Civil.\n\nPreciso de assessoria em contratos/responsabilidade civil. Pode me ajudar?`),
  },
  {
    n: '07', title: 'Direito Empresarial',
    desc: 'Constituição de empresas, contratos mercantis, recuperação judicial e compliance.',
    icon: areaIcon(`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você atua em Direito Empresarial.\n\nPreciso de assessoria jurídica para minha empresa. Pode me ajudar?`),
  },
  {
    n: '08', title: 'Consultoria Jurídica',
    desc: 'Pareceres, análise de contratos e assessoria jurídica preventiva para pessoas físicas e jurídicas.',
    icon: areaIcon(`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/>`),
    wa: whatsLink(`Olá, Bernardo! 👋\n\nVi no site que você oferece Consultoria Jurídica.\n\nGostaria de uma orientação preventiva sobre meu caso. Pode me ajudar?`),
  },
]

const faqs = [
  {
    q: 'Posso fazer o divórcio sem ir ao tribunal em Resende/RJ?',
    a: 'Sim. O divórcio consensual pode ser feito diretamente no cartório por escritura pública, sem abrir processo judicial. É mais rápido, mais barato e igualmente válido perante a lei. O requisito principal é que não haja filhos menores ou incapazes e que o casal esteja de acordo. O escritório Abbott Galvão conduz todo o processo extrajudicial, do acordo à escritura lavrada.',
  },
  {
    q: 'O que é Direito Extrajudicial e quais problemas ele resolve?',
    a: 'Direito Extrajudicial é o conjunto de soluções jurídicas resolvidas em cartório, sem abertura de processo no Judiciário. Abrange divórcio consensual, inventário, regularização de imóveis, usucapião extrajudicial e partilha de bens, entre outros. O que levaria anos na Justiça pode ser resolvido em semanas no cartório, com a mesma segurança jurídica.',
  },
  {
    q: 'Quanto tempo demora um inventário extrajudicial?',
    a: 'Um inventário extrajudicial pode ser concluído em semanas, dependendo da documentação disponível. O inventário judicial, por comparação, costuma levar de 2 a 5 anos. Para o inventário em cartório é necessário que todos os herdeiros sejam maiores e capazes, estejam de acordo com a partilha e não haja testamento (salvo já homologado). O escritório orienta e organiza toda a documentação necessária.',
  },
  {
    q: 'Como regularizar um imóvel sem escritura ou com documentação irregular?',
    a: 'A regularização depende da situação específica do imóvel. Pode ser feita por usucapião extrajudicial, retificação de registro, inventário ou escritura de compra e venda, entre outros instrumentos. O escritório Abbott Galvão faz análise documental completa e indica o caminho mais rápido e seguro para colocar a situação do seu imóvel em ordem.',
  },
  {
    q: 'É obrigatório contratar advogado para procedimentos em cartório?',
    a: 'Sim. A legislação exige a participação de advogado em procedimentos extrajudiciais como divórcio, inventário e usucapião em cartório. O advogado garante que os direitos de todos os envolvidos sejam respeitados, elabora a minuta da escritura e acompanha o processo até o registro final.',
  },
  {
    q: 'O escritório atende fora de Resende/RJ?',
    a: 'Sim. O escritório Abbott Galvão atua nos estados do Rio de Janeiro, Distrito Federal e São Paulo, com atendimento presencial em Resende/RJ e à distância para as demais regiões. Muitos procedimentos podem ser conduzidos remotamente, com assinatura digital e reconhecimento em cartório local.',
  },
]

const diferenciais = [
  {
    num: '01',
    titulo: 'Presidente da Comissão OAB',
    texto: 'Bernardo preside a Comissão de Direito Extrajudicial da OAB de Resende, Porto Real e Itatiaia — referência técnica na região para soluções em cartório.',
  },
  {
    num: '02',
    titulo: 'Atuação em 3 Estados',
    texto: 'Escritório com alcance nos estados do Rio de Janeiro, Distrito Federal e São Paulo, atendendo clientes presencialmente ou à distância.',
  },
  {
    num: '03',
    titulo: 'Solução sem Processo Judicial',
    texto: 'Divórcios, inventários e regularizações de imóveis resolvidos em cartório: mais rápido, menos burocrático e com plena segurança jurídica.',
  },
  {
    num: '04',
    titulo: 'Atendimento Personalizado',
    texto: 'Cada caso é tratado com rigor técnico e sigilo absoluto. O cliente nunca fala com um estagiário — sempre com o advogado.',
  },
]

document.querySelector('#app').innerHTML = `

<!-- NAV -->
<a class="skip-link" href="#conteudo-principal">Ir para o conteúdo</a>
<nav>
  <div class="nav-inner">
    <a href="#inicio" class="logo-link">
      <img src="/logo.png" alt="Abbott Galvão Advocacia" class="logo-img">
    </a>
    <div class="nav-right">
      <a href="#diferenciais" class="nav-link">Sobre</a>
      <a href="#areas" class="nav-link">Áreas de Atuação</a>
      <a href="#contato" class="nav-link">Contato</a>
      <a href="${WHATS_NAV}" target="_blank" rel="noopener noreferrer" class="nav-btn">WhatsApp</a>
      <button class="nav-menu-btn" id="nav-menu-btn" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="nav-mobile" id="nav-mobile" role="dialog" aria-modal="true" aria-label="Menu de navegação">
  <button class="nav-mobile-close" id="nav-mobile-close" aria-label="Fechar menu">✕</button>
  <a href="#inicio" class="nav-mobile-link">Início</a>
  <a href="#diferenciais" class="nav-mobile-link">Sobre</a>
  <a href="#areas" class="nav-mobile-link">Áreas de Atuação</a>
  <a href="#contato" class="nav-mobile-link">Contato</a>
  <a href="${WHATS_NAV}" target="_blank" rel="noopener noreferrer" class="nav-mobile-link nav-mobile-link-whats">WhatsApp</a>
</div>

<main id="conteudo-principal">

<!-- HERO -->
<section class="hero" id="inicio">
  <div class="hero-left">
    <p class="hero-label">Resende/RJ — Atuação em RJ, DF e SP</p>
    <h1 class="hero-title">
      Soluções jurídicas<br><em>rápidas, seguras</em><br>e sem burocracia.
    </h1>
    <div class="hero-rule"></div>
    <p class="hero-desc">
      Especialista em Direito Extrajudicial, Imobiliário e Família.
      Divórcios, inventários e regularização de imóveis resolvidos diretamente em cartório —
      sem processo judicial, com agilidade e respaldo técnico de quem preside a Comissão de Direito Extrajudicial da OAB.
    </p>
    <div class="hero-actions">
      <a href="${WHATS_HERO}" target="_blank" rel="noopener noreferrer" class="btn-whats">
        ${whatsIcon(18)}
        Falar pelo WhatsApp
      </a>
      <a href="#areas" class="btn-outline">Ver Áreas de Atuação</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-logo-block">
      <img src="/logo.png" alt="Abbott Galvão Advocacia" class="hero-logo-img">
    </div>
    <div class="hero-oab">
      Bernardo Ururahy Abbott Galvão<br>
      Presidente — Comissão de Direito Extrajudicial<br>
      OAB · Resende, Porto Real e Itatiaia/RJ
    </div>
  </div>
</section>

<!-- PROVA SOCIAL -->
<div class="proof-bar" role="list" aria-label="Diferenciais do escritório">
  <div class="proof-inner">
    <div class="proof-item" role="listitem">
      <strong>Presidente OAB</strong>
      <span>Comissão de Direito Extrajudicial · Resende, Porto Real e Itatiaia</span>
    </div>
    <div class="proof-sep" aria-hidden="true"></div>
    <div class="proof-item" role="listitem">
      <strong>3 Estados</strong>
      <span>Atendimento em Rio de Janeiro, Distrito Federal e São Paulo</span>
    </div>
    <div class="proof-sep" aria-hidden="true"></div>
    <div class="proof-item" role="listitem">
      <strong>Sem Processo Judicial</strong>
      <span>Divórcio, inventário e regularização de imóvel em cartório</span>
    </div>
    <div class="proof-sep" aria-hidden="true"></div>
    <div class="proof-item" role="listitem">
      <strong>1ª Consulta</strong>
      <span>Sem compromisso — fale agora pelo WhatsApp</span>
    </div>
  </div>
</div>

<!-- SOBRE O ADVOGADO -->
<section class="sobre" id="sobre">
  <div class="sobre-inner">
    <div class="sobre-img-col" data-anim>
      <div class="sobre-img-frame">
        <img src="/foto-bernardo.jpg" alt="Bernardo Ururahy Abbott Galvão — Advogado em Resende/RJ" class="sobre-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="sobre-img-placeholder" style="display:none" aria-hidden="true"></div>
        <div class="sobre-img-label">Bernardo Abbott Galvão · Advogado</div>
      </div>
    </div>
    <div class="sobre-content" data-anim data-delay="120">
      <div class="section-overline">O Advogado</div>
      <h2 class="sobre-title">Bernardo<br>Abbott <em>Galvão</em></h2>
      <p class="sobre-lead">Advogado com atuação sólida em Direito Extrajudicial, Imobiliário e de Família, Bernardo Ururahy Abbott Galvão construiu sua trajetória com foco em soluções que poupam tempo, dinheiro e desgaste para os seus clientes.</p>
      <p class="sobre-text">Presidente da Comissão de Direito Extrajudicial da OAB de Resende, Porto Real e Itatiaia/RJ, é referência técnica na região para quem quer resolver divórcios, inventários e regularizações de imóveis diretamente em cartório — sem abrir processo judicial. Atende clientes em todo o estado do Rio de Janeiro, no Distrito Federal e em São Paulo, de forma presencial ou à distância, com o mesmo rigor e atenção de sempre.</p>
      <div class="sobre-badges">
        <div class="sobre-badge">
          <strong>Presidente</strong>
          <span>Comissão de Direito Extrajudicial<br>OAB · Resende, Porto Real e Itatiaia</span>
        </div>
        <div class="sobre-badge">
          <strong>3 Estados</strong>
          <span>Rio de Janeiro · Distrito Federal<br>São Paulo</span>
        </div>
      </div>
      <a href="${WHATS_HERO}" target="_blank" rel="noopener noreferrer" class="sobre-cta">
        Falar com o advogado
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- COMO FUNCIONA -->
<section class="como" id="como-funciona">
  <div class="como-inner">
    <div class="como-top" data-anim>
      <div>
        <div class="section-overline">Processo Simples</div>
        <h2 class="como-title">Como <em>funciona</em></h2>
      </div>
      <p class="como-desc">
        Do primeiro contato à escritura assinada, cada etapa é conduzida pelo próprio advogado —
        sem burocracia desnecessária, sem esperas indefinidas.
      </p>
    </div>
    <div class="como-steps">
      <div class="como-step" data-anim data-delay="0">
        <div class="como-step-num">01</div>
        <h3 class="como-step-title">Consulta Inicial</h3>
        <p class="como-step-text">Explique seu caso pelo WhatsApp ou presencialmente. O advogado analisa a situação e indica o melhor caminho — judicial ou extrajudicial.</p>
        <div class="como-step-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
      <div class="como-step" data-anim data-delay="100">
        <div class="como-step-num">02</div>
        <h3 class="como-step-title">Organização Documental</h3>
        <p class="como-step-text">O escritório orienta exatamente quais documentos reunir e verifica tudo antes de protocolar — evitando retrabalho e atrasos.</p>
        <div class="como-step-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
      <div class="como-step" data-anim data-delay="200">
        <div class="como-step-num">03</div>
        <h3 class="como-step-title">Resolução em Cartório</h3>
        <p class="como-step-text">A escritura é lavrada, assinada e registrada. Você sai com a segurança jurídica completa — sem audiência, sem processo, sem demora.</p>
      </div>
    </div>
  </div>
</section>

<!-- EXTRAJUDICIAL DESTAQUE -->
<section class="extrajud" id="extrajudicial">
  <div class="extrajud-inner">
    <div class="extrajud-tag" data-anim>Especialidade</div>
    <h2 class="extrajud-title" data-anim data-delay="100">Direito Extrajudicial:<br>resolva <em>sem ir ao tribunal.</em></h2>
    <p class="extrajud-text" data-anim data-delay="200">
      Muitos problemas jurídicos que parecem complexos podem ser resolvidos direto no cartório —
      sem abrir processo, sem anos de espera, sem desgaste. Divórcio consensual, inventário,
      regularização de imóvel e partilha de bens podem ser formalizados por escritura pública
      com total segurança jurídica.
    </p>
    <div class="extrajud-cards" data-anim data-delay="300">
      <div class="extrajud-card">
        <div class="extrajud-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </div>
        <strong>Regularização de Imóveis</strong>
        <span>Documentação, inventários e escrituras — resolva a situação do seu imóvel</span>
      </div>
      <div class="extrajud-card">
        <div class="extrajud-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <strong>Divórcio em Cartório</strong>
        <span>Separação consensual formalizada com rapidez e sem audiência judicial</span>
      </div>
      <div class="extrajud-card">
        <div class="extrajud-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <strong>Inventário Extrajudicial</strong>
        <span>Partilha de bens e herança por escritura pública sem necessidade de processo</span>
      </div>
    </div>
    <a href="${WHATS_EXTRAJUD}" target="_blank" rel="noopener noreferrer" class="extrajud-cta" data-anim data-delay="400">
      ${whatsIcon(17)}
      Consultar pelo WhatsApp
    </a>
  </div>
</section>

<!-- DIFERENCIAIS -->
<section class="diferenciais" id="diferenciais">
  <div class="dif-inner">
    <div class="dif-header" data-anim>
      <div>
        <div class="section-overline">Por que escolher</div>
        <h2 class="dif-title">O que nos<br><em>distingue</em></h2>
      </div>
      <p class="dif-subtitle">Credenciais, alcance e um método de trabalho que coloca o cliente em primeiro lugar — não o processo.</p>
    </div>
    <div class="dif-grid">
      ${diferenciais.map((d, i) => `
        <div class="dif-card" data-anim data-delay="${i * 90}">
          <div class="dif-num">${d.num}</div>
          <h3 class="dif-card-title">${d.titulo}</h3>
          <p class="dif-card-text">${d.texto}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- AREAS -->
<section class="areas" id="areas">
  <div class="areas-inner">
    <div class="areas-top" data-anim>
      <div>
        <div class="section-overline">Áreas de Atuação</div>
        <h2 class="areas-heading">Onde podemos<br><em>atuar por você</em></h2>
      </div>
      <p class="areas-desc">
        Assessoria jurídica com ênfase em soluções extrajudiciais — mais rápidas, menos custosas e igualmente eficazes.
        Atendimento em Resende/RJ e nas demais regiões do RJ, DF e SP.
      </p>
    </div>
    <div class="areas-list" aria-label="Áreas de atuação">
      <div class="areas-track">
        ${[...areas, ...areas].map(a => `
          <article class="area-item${a.destaque ? ' area-destaque' : ''}">
            <div class="area-item-top">
              <div class="area-n">${a.n}</div>
              ${a.icon}
            </div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
            <a href="${a.wa}" target="_blank" rel="noopener noreferrer" class="area-cta">
              Consultar
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>`).join('')}
      </div>
    </div>
  </div>
</section>

<!-- FAIXA VISUAL -->
<div class="visual-break" role="presentation">
  <div class="visual-break-bg" aria-hidden="true">
    <img src="/hero-bg.avif" alt="" loading="lazy">
  </div>
</div>

<!-- CONTATO -->
<section class="contato" id="contato">
  <div class="contato-inner">
    <div class="contato-header" data-anim>
      <div class="section-overline">Entre em Contato</div>
      <h2 class="contato-title">Fale com<br><em>o escritório</em></h2>
      <p class="contato-desc">
        Atendimento presencial em Resende/RJ ou à distância, em RJ, DF e SP.
        A primeira conversa é sem compromisso.
      </p>
      <a href="${WHATS_CONTATO}" target="_blank" rel="noopener noreferrer" class="contato-whats-btn">
        ${whatsIcon(20)}
        Iniciar conversa no WhatsApp
      </a>
    </div>
    <div class="contato-cards" data-anim data-delay="150">
      <address class="contato-info-grid">
        <div class="ci-card">
          <div class="ci-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div>
            <span class="ci-label">Endereço</span>
            <span class="ci-value">Av. Riachuelo, 356, Sala 02<br>Liberdade — Resende/RJ<br>CEP 27521-172</span>
          </div>
        </div>
        <div class="ci-card">
          <div class="ci-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <div>
            <span class="ci-label">Telefone / WhatsApp</span>
            <a href="tel:+5524974033403" class="ci-value ci-link">(24) 97403-3403</a>
          </div>
        </div>
        <div class="ci-card">
          <div class="ci-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div>
            <span class="ci-label">E-mail</span>
            <a href="mailto:bernardo.abbott@gmail.com" class="ci-value ci-link">bernardo.abbott@gmail.com</a>
          </div>
        </div>
        <div class="ci-card">
          <div class="ci-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"/></svg>
          </div>
          <div>
            <span class="ci-label">Estados de Atuação</span>
            <span class="ci-value">Rio de Janeiro<br>Distrito Federal · São Paulo</span>
          </div>
        </div>
      </address>
    </div>
  </div>
</section>

</main>

<!-- FOOTER -->
<footer>
  <div class="foot-inner">
    <div>
      <img src="/logo-white.png" alt="Abbott Galvão Advocacia" class="foot-logo-img">
      <div class="foot-sub">Resende/RJ · RJ · DF · SP</div>
    </div>
    <div class="foot-copy">
      &copy; ${new Date().getFullYear()} Abbott Galvão Advocacia<br>
      Todos os direitos reservados<br>
      <span class="foot-dev">Desenvolvido por <a href="https://smartlanding.com.br" target="_blank" rel="noopener noreferrer" class="foot-dev-link">SmartLanding</a></span>
    </div>
  </div>
</footer>

<!-- WHATSAPP FLUTUANTE -->
<div class="whats-wrap" id="whats-wrap">
  <div class="whats-bubble" id="whats-bubble">
    Olá! Tire suas dúvidas agora 👋
  </div>
  <a href="${WHATS_FLOAT}" target="_blank" rel="noopener noreferrer" class="whats-float" id="whats-float" aria-label="Conversar pelo WhatsApp">
    ${whatsIcon(24)}
    <span class="whats-float-label">WhatsApp</span>
    <span class="whats-badge" id="whats-badge">1</span>
  </a>
</div>
`

// Animações ao rolar
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = Number(entry.target.dataset.delay) || 0
      setTimeout(() => entry.target.classList.add('is-visible'), delay)
      animObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })
document.querySelectorAll('[data-anim]').forEach(el => animObserver.observe(el))

// Nav scroll shadow
const nav = document.querySelector('nav')
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40)
window.addEventListener('scroll', onScroll, { passive: true })

// Mobile nav
const mobileNav = document.getElementById('nav-mobile')
const openMenu = () => { mobileNav.classList.add('is-open'); document.body.style.overflow = 'hidden' }
const closeMenu = () => { mobileNav.classList.remove('is-open'); document.body.style.overflow = '' }
document.getElementById('nav-menu-btn').addEventListener('click', openMenu)
document.getElementById('nav-mobile-close').addEventListener('click', closeMenu)
document.querySelectorAll('.nav-mobile-link').forEach(l => l.addEventListener('click', closeMenu))


// FAQ accordion (CSS max-height animation)
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true'
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false')
      document.getElementById(b.getAttribute('aria-controls')).classList.remove('is-open')
    })
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true')
      document.getElementById(btn.getAttribute('aria-controls')).classList.add('is-open')
    }
  })
})

// WhatsApp bubble após 3s
setTimeout(() => {
  const badge = document.getElementById('whats-badge')
  const bubble = document.getElementById('whats-bubble')
  badge.classList.add('is-visible')
  bubble.classList.add('is-visible')

  // ao clicar no botão, esconde badge e bubble
  document.getElementById('whats-float').addEventListener('click', () => {
    badge.classList.remove('is-visible')
    bubble.classList.remove('is-visible')
  }, { once: true })
}, 3000)
