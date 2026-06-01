import './style.css'

const WHATS = 'https://wa.me/5561964832336'

const logoMark = (w = 34, h = 44) => `
  <svg width="${w}" height="${h}" viewBox="0 0 68 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="52" height="56" rx="12" fill="#5FA5A0"/>
    <rect x="12" y="18" width="32" height="38" rx="7" fill="white"/>
    <rect x="32" y="44" width="22" height="20" fill="white"/>
    <rect x="50" y="2" width="16" height="84" rx="8" fill="#5FA5A0"/>
  </svg>`

const whatsIcon = `
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`

const areas = [
  { n: '01', title: 'Direito Civil', desc: 'Contratos, responsabilidade civil, obrigações e questões patrimoniais.' },
  { n: '02', title: 'Direito Empresarial', desc: 'Sociedades, contratos mercantis, recuperação judicial e compliance.' },
  { n: '03', title: 'Direito Administrativo', desc: 'Licitações, contratos públicos e processos administrativos.' },
  { n: '04', title: 'Direito de Família', desc: 'Divórcio, guarda, alimentos, inventário e sucessões.' },
  { n: '05', title: 'Direito Imobiliário', desc: 'Compra e venda, locações, regularização fundiária e due diligence.' },
  { n: '06', title: 'Consultoria Jurídica', desc: 'Pareceres, análise de contratos e assessoria jurídica preventiva.' },
]

document.querySelector('#app').innerHTML = `

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#inicio" class="logo-link">
      <img src="/logo.png" alt="Abbott Galvão Advocacia" class="logo-img">
    </a>
    <div class="nav-right">
      <a href="#areas" class="nav-link">Áreas de Atuação</a>
      <a href="#contato" class="nav-link">Contato</a>
      <a href="${WHATS}" target="_blank" class="nav-btn">WhatsApp</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero" id="inicio">
  <div class="hero-left">
    <p class="hero-label">Brasília, DF — OAB/DF</p>
    <h1 class="hero-title">
      Assessoria jurídica<br>com <em>precisão</em><br>e comprometimento.
    </h1>
    <div class="hero-rule"></div>
    <p class="hero-desc">
      Atendimento personalizado, rigor técnico e sigilo absoluto
      em cada caso. Soluções jurídicas pensadas para a sua realidade.
    </p>
    <div class="hero-actions">
      <a href="${WHATS}" target="_blank" class="btn-whats">
        ${whatsIcon}
        Falar pelo WhatsApp
      </a>
      <a href="#contato" class="btn-outline">Enviar Mensagem</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-logo-block">
      <img src="/logo.png" alt="Abbott Galvão Advocacia" class="hero-logo-img">
    </div>
    <div class="hero-oab">
      Bernardo Ururahy Abbott Galvão — OAB/DF<br>
      www.ABBOTTGALVAO.jur.adv.br
    </div>
  </div>
</section>

<!-- AREAS -->
<section class="areas" id="areas">
  <div class="areas-inner">
    <div class="areas-top">
      <div>
        <div class="section-overline">Áreas de Atuação</div>
        <h2 class="areas-heading">Onde podemos<br><em>atuar por você</em></h2>
      </div>
      <p class="areas-desc">
        Assessoria jurídica nas principais esferas do direito, com enfoque
        em soluções efetivas e resguardo pleno dos interesses do cliente.
      </p>
    </div>
    <div class="areas-list">
      ${areas.map(a => `
        <div class="area-item">
          <div class="area-n">${a.n}</div>
          <h3>${a.title}</h3>
          <p>${a.desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- CONTATO -->
<section class="contato" id="contato">
  <div class="contato-inner">
    <div class="contato-left">
      <div class="section-overline">Entre em Contato</div>
      <h2 class="contato-title">Fale com<br><em>nosso escritorio</em></h2>
      <p class="contato-desc">
        Atendimento presencial em Brasília ou pelos canais abaixo.
        Primeira conversa sem compromisso.
      </p>
      <div class="contato-data">
        <div class="cd-row">
          <span class="cd-label">Advogado</span>
          <span class="cd-value">Bernardo Ururahy Abbott Galvão</span>
        </div>
        <div class="cd-row">
          <span class="cd-label">Endereço</span>
          <span class="cd-value">STRC, Trecho 02, Conj. A, Lote 06<br>SIA, Brasília/DF — CEP 71225-521</span>
        </div>
        <div class="cd-row">
          <span class="cd-label">Telefone</span>
          <span class="cd-value">
            <a href="tel:+556135339437">(61) 3533-9437</a> &nbsp;/&nbsp;
            <a href="tel:+5561964832336">(61) 9648-2336</a>
          </span>
        </div>
        <div class="cd-row">
          <span class="cd-label">E-mail</span>
          <span class="cd-value">
            <a href="mailto:bernardo.abbott@adv.oabdf.org.br">bernardo.abbott@adv.oabdf.org.br</a>
          </span>
        </div>
        <div style="margin-top:8px">
          <a href="${WHATS}" target="_blank" class="btn-whats">
            ${whatsIcon}
            Iniciar conversa no WhatsApp
          </a>
        </div>
      </div>
    </div>

    <form class="contato-form" id="form-contato">
      <div class="row2">
        <div class="fg">
          <label>Nome</label>
          <input type="text" name="nome" placeholder="Seu nome">
        </div>
        <div class="fg">
          <label>Telefone</label>
          <input type="tel" name="telefone" placeholder="(00) 00000-0000">
        </div>
      </div>
      <div class="fg">
        <label>E-mail</label>
        <input type="email" name="email" placeholder="seu@email.com.br">
      </div>
      <div class="fg">
        <label>Área de interesse</label>
        <select name="area">
          <option value="" disabled selected>Selecione</option>
          <option>Direito Civil</option>
          <option>Direito Empresarial</option>
          <option>Direito Administrativo</option>
          <option>Direito de Família e Sucessões</option>
          <option>Direito Imobiliário</option>
          <option>Consultoria Jurídica</option>
          <option>Outra área</option>
        </select>
      </div>
      <div class="fg">
        <label>Mensagem</label>
        <textarea name="mensagem" placeholder="Descreva brevemente sua situação..."></textarea>
      </div>
      <button type="submit" class="btn-enviar">Enviar Mensagem</button>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="foot-inner">
    <div>
      <img src="/logo-white.png" alt="Abbott Galvão Advocacia" class="foot-logo-img">
      <div class="foot-sub">OAB/DF</div>
    </div>
    <div class="foot-copy">
      &copy; ${new Date().getFullYear()} Abbott Galvão Advocacia<br>
      Todos os direitos reservados
    </div>
  </div>
</footer>
`

// Form submit handler
document.querySelector('#form-contato').addEventListener('submit', e => {
  e.preventDefault()
  const data = new FormData(e.target)
  const msg = encodeURIComponent(
    `Olá, meu nome é ${data.get('nome')}.\nÁrea: ${data.get('area')}\n${data.get('mensagem')}`
  )
  window.open(`${WHATS}?text=${msg}`, '_blank')
})
