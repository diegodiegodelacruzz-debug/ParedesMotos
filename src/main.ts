import './style.css'

const WA = '5491136267443'
const whatsapp = (mensaje: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(mensaje)}`

const img = (archivo: string, alt = '') =>
  `<img src="/images/${archivo}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='/images/accesorios-01.png'">`

const waButton = (mensaje: string, texto = 'CONSULTAR POR WHATSAPP') =>
  `<a class="btn btn-wa" href="${whatsapp(mensaje)}" target="_blank" rel="noopener noreferrer">
    <span class="wa-symbol">◉</span>${texto}<span class="btn-arrow">↗</span>
  </a>`

const categories = [
  {
    id: 'repuestos',
    title: 'Repuestos',
    eyebrow: 'RENDIMIENTO Y CONFIANZA',
    desc: 'Encontrá repuestos para mantener tu moto en condiciones y disfrutar cada recorrido. Consultanos por la pieza que necesitás y te ayudamos a encontrar la opción adecuada.',
    cover: 'repuestos.jpg',
    files: ['barrales.jpg', 'escapes.jpg', 'neumaticos.jpg', 'tableros.jpg', 'repuestos.jpg', 'repuestos-1.jpg', 'repuestos-2.jpg', 'repuestos-03.jpg', 'repuestos-04.jpg', 'repuestos-05.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por repuestos para mi moto.'
  },
  {
    id: 'accesorios',
    title: 'Accesorios',
    eyebrow: 'PERSONALIDAD SOBRE DOS RUEDAS',
    desc: 'Dale a tu moto el estilo que buscás. Explorá cubre tanques, guantes, luces, mochilas y accesorios para completar tu equipamiento.',
    cover: 'accesorios-01.png',
    files: [
      'accesorios-01.png', 'accesorios-02.png',
      'accesorios-3.jpg', 'accesorios-4.jpg',
      'accesorios-5.jpg', 'accesorios-6.jpg',
      'accesorios-7.jpg', 'accesorios-8.jpg',
      'accesorios-9.jpg', 'accesorios-10.jpg',
      'accesorios-11.jpg', 'accesorios-12.jpg',
      'cubre-tanque-01.jpg', 'cubre-tanque-02.jpg',
      'cubre-tanque-03.jpg', 'cubre-tanque-04.jpg',
      'cubre-tanque-05.jpg', 'cubre-tanque-06.png',
      'cubre-tanque-07.png', 'cubre-tanque-08.png',
      'cubre-tanque-09.png', 'cubre-tanque-10.png',
      'guantes-01.png', 'guantes-02.png', 'guantes-03.png',
      'luces.jpg', 'luz-01.png', 'luz-02.png',
      'mochila.png', 'gorras.jpg'
    ],
    message: 'Hola Paredes Motos, quiero consultar por accesorios.'
  },
  {
    id: 'cascos',
    title: 'Cascos',
    eyebrow: 'PROTECCIÓN Y ESTILO',
    desc: 'Conocé nuestra selección de cascos. Consultanos por modelos, diseños y disponibilidad para encontrar el que mejor se adapte a tus necesidades.',
    cover: 'cascos-principal.png',
    files: ['cascos-principal.png', 'cascos-01.png', 'cascos-02.png', 'cascos-03.png', 'cascos-04.png', 'cascos-5.jpg', 'cascos-6.jpg', 'cascos-7.jpg', 'cascos-8.jpg', 'cascos-9.jpg', 'cascos-10.jpg', 'cascos-11.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por cascos.'
  },
  {
    id: 'tableros',
    title: 'Tableros',
    eyebrow: 'INFORMACIÓN EN CADA VIAJE',
    desc: 'Consultá por tableros y componentes relacionados con la instrumentación de tu moto. Te ayudamos a identificar la pieza que necesitás.',
    cover: 'tableros.jpg',
    files: ['tableros.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por tableros.'
  },
  {
    id: 'neumaticos',
    title: 'Neumáticos',
    eyebrow: 'CONTACTO CON EL CAMINO',
    desc: 'El estado de los neumáticos es fundamental para el manejo. Consultanos por opciones compatibles con tu moto y disponibilidad.',
    cover: 'neumaticos.jpg',
    files: ['neumaticos.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por neumáticos.'
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    eyebrow: 'PARA EL TRABAJO BIEN HECHO',
    desc: 'Conocé nuestras herramientas y consultanos por los elementos que necesitás para el mantenimiento y la reparación de motos.',
    cover: 'herramientas.png',
    files: ['herramientas.png', 'herramientas-1.jpg', 'herramientas-2.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por herramientas.'
  },
  {
    id: 'aceites',
    title: 'Aceites',
    eyebrow: 'LUBRICACIÓN Y CUIDADO',
    desc: 'Conocé nuestra selección de aceites y productos para el cuidado de tu moto. Consultanos por opciones y disponibilidad.',
    cover: 'aceites-portada.jpg',
    files: ['aceites-01.jpg'],
    message: 'Hola Paredes Motos, quiero consultar por aceites para mi moto.'
  }
]

function gallery(files: string[], title: string) {
  return `<div class="photo-grid">
    ${files.map((file, i) => `
      <button class="photo-tile" type="button"
        data-lightbox="/images/${file}" aria-label="Ampliar ${title}, imagen ${i + 1}">
        ${img(file, `${title} ${i + 1}`)}
        <span class="photo-zoom">⌕</span>
      </button>`).join('')}
  </div>`
}

function categorySection(item: typeof categories[number]) {
  return `
    <section class="category-section section-wrap" id="${item.id}">
      <div class="section-heading">
        <div>
          <span class="eyebrow">${item.eyebrow}</span>
          <h2>${item.title}<span class="title-dot">.</span></h2>
        </div>
        <span class="section-number">PM / ${String(categories.indexOf(item) + 1).padStart(2, '0')}</span>
      </div>
      <div class="category-intro">
        <button class="category-cover" type="button" data-lightbox="/images/${item.cover}">
          ${img(item.cover, `Paredes Motos - ${item.title}`)}
          <span class="cover-label">PAREDES MOTOS / ${item.title.toUpperCase()}</span>
        </button>
        <div class="category-copy">
          <p>${item.desc}</p>
          <div class="mini-line"></div>
          <p class="muted">¿Buscás una pieza específica? Enviános tu consulta y, si podés, indicá marca, modelo y año de tu moto.</p>
          ${waButton(item.message, `CONSULTAR ${item.title.toUpperCase()}`)}
        </div>
      </div>
      <div class="gallery-heading">
        <span>GALERÍA DE ${item.title.toUpperCase()}</span>
        <span>Tocá una imagen para ampliarla ↗</span>
      </div>
      ${gallery(item.files, item.title)}
    </section>`
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) throw new Error('No se encontró el elemento #app')

app.innerHTML = `
  <div class="site-shell">
    <div class="racing-lights" aria-hidden="true"></div>

    <header class="site-header" id="inicio">
      <a href="#inicio" class="logo-banner" aria-label="Paredes Motos, inicio">
        ${img('logo.jpg', 'Logo oficial de Paredes Motos')}
      </a>
      <div class="top-strip">
        <span><i class="status-dot"></i> REPUESTOS · ACCESORIOS · TALLER</span>
        <span>SAN CRISTÓBAL · CABA</span>
      </div>
      <nav class="main-nav" aria-label="Navegación principal">
        <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰ <span>MENÚ</span></button>
        <div class="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#repuestos">Repuestos</a>
          <a href="#accesorios">Accesorios</a>
          <a href="#cascos">Cascos</a>
          <a href="#aceites">Aceites</a>
          <a href="#taller">Taller</a>
          <a href="#accidentes">Accidentes</a>
          <a href="#videos">Videos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-backdrop" aria-hidden="true"></div>
        <div class="hero-content">
          <div class="hero-copy">
            <span class="eyebrow hero-eyebrow">TU MOTO. NUESTRA PASIÓN.</span>
            <h1>TODO PARA<br>TU <span>MOTO.</span></h1>
            <div class="hero-slash"></div>
            <p class="hero-lead">Repuestos, accesorios y servicio mecánico para quienes viven cada kilómetro con pasión.</p>
            <p class="hero-description">En Paredes Motos encontrás atención personalizada, asesoramiento para elegir tus repuestos y un taller preparado para ayudarte con el mantenimiento y la reparación de tu moto.</p>
            <div class="hero-actions">
              ${waButton('Hola Paredes Motos, quiero hacer una consulta.', 'HABLÁ CON NOSOTROS')}
              <a class="btn btn-outline" href="#categorias">EXPLORAR CATÁLOGO <span>↓</span></a>
            </div>
            <div class="hero-points">
              <span><b>01</b> REPUESTOS</span>
              <span><b>02</b> ACCESORIOS</span>
              <span><b>03</b> TALLER INTEGRAL</span>
            </div>
          </div>
          <button class="hero-photo" type="button" data-lightbox="/images/portada.jpg" aria-label="Ampliar fotografía principal">
            ${img('portada.jpg', 'Fotografía principal de Paredes Motos')}
            <span class="photo-caption">PASIÓN POR LAS DOS RUEDAS <b>↗</b></span>
          </button>
        </div>
        <div class="hero-bottom">
          <span>BUEN ASESORAMIENTO</span><i></i>
          <span>ATENCIÓN PERSONALIZADA</span><i></i>
          <span>REPUESTOS Y SERVICIO</span>
        </div>
      </section>

      <section class="intro section-wrap" id="tienda">
        <div class="section-heading">
          <div>
            <span class="eyebrow">CONOCÉ NUESTRA TIENDA</span>
            <h2>HECHOS PARA<br>LOS QUE AMAN <span>RODAR.</span></h2>
          </div>
          <span class="section-number">NUESTRA CASA / PM</span>
        </div>
        <div class="store-layout">
          <button class="store-photo" type="button" data-lightbox="/images/portada-negocio.jpg" aria-label="Ampliar foto del negocio">
            ${img('portada-negocio.jpg', 'Fachada de Paredes Motos')}
            <span class="photo-caption">ASÍ SOMOS. ASÍ TRABAJAMOS. ↗</span>
          </button>
          <div class="store-story">
            <span class="story-mark">PM<span>®</span></span>
            <h3>Mucho más que una casa de repuestos.</h3>
            <p>En Paredes Motos sabemos que una moto es mucho más que un medio de transporte. Es libertad, esfuerzo, pasión y una compañera de todos los días. Por eso, cada consulta merece atención y cada trabajo merece hacerse con responsabilidad.</p>
            <p>Reunimos repuestos, accesorios y atención mecánica en un mismo lugar para que puedas resolver tus necesidades con mayor comodidad. Queremos ayudarte a encontrar lo que buscás, entender qué necesita tu moto y elegir una solución adecuada.</p>
            <p>Desde el accesorio que completa tu estilo hasta el mantenimiento que te permite seguir rodando, nuestro objetivo es brindarte un trato cercano, información clara y atención personalizada.</p>
            <div class="story-signature">PAREDES MOTOS <span>— TU MOTO, EN BUENAS MANOS.</span></div>
          </div>
        </div>

        <div class="why-grid">
          <article class="why-card"><span class="why-icon">01</span><h3>ATENCIÓN PERSONALIZADA</h3><p>Te escuchamos, respondemos tus dudas y te orientamos para identificar los repuestos y accesorios que necesitás.</p></article>
          <article class="why-card"><span class="why-icon">02</span><h3>REPUESTOS Y ACCESORIOS</h3><p>Encontrá diferentes categorías en un solo lugar. Consultá por disponibilidad y compatibilidad con tu moto.</p></article>
          <article class="why-card"><span class="why-icon">03</span><h3>TALLER MECÁNICO</h3><p>Además de vender repuestos, contamos con servicio de taller para atender trabajos de mantenimiento y reparación.</p></article>
          <article class="why-card"><span class="why-icon">04</span><h3>ASESORAMIENTO DIRECTO</h3><p>Contactanos por WhatsApp para explicar lo que buscás, consultar opciones y coordinar cómo seguir.</p></article>
        </div>
      </section>

      <section class="catalog section-wrap" id="categorias">
        <div class="section-heading">
          <div><span class="eyebrow">ENCONTRÁ LO QUE BUSCÁS</span><h2>NUESTRO <span>CATÁLOGO.</span></h2></div>
          <span class="section-number">PIEZAS / EQUIPAMIENTO / MÁS</span>
        </div>
        <p class="section-description">Explorá nuestras categorías y consultanos por modelos, compatibilidad y disponibilidad. Estamos para ayudarte a encontrar la opción que necesitás.</p>
        <div class="catalog-grid">
          ${categories.map((item, i) => `
            <a class="catalog-card card-${i + 1}" href="#${item.id}">
              <div class="catalog-image">${img(item.cover, item.title)}<span class="catalog-index">0${i + 1}</span></div>
              <div class="catalog-card-copy"><span>${item.eyebrow}</span><h3>${item.title}</h3><b>EXPLORAR <i>↗</i></b></div>
            </a>`).join('')}
        </div>
      </section>

      ${categories.map(categorySection).join('')}

      <section class="workshop section-wrap" id="taller">
        <div class="workshop-visual">
          ${img('portada.jpg', 'Paredes Motos y su pasión por las motos')}
          <div class="workshop-stamp"><span>TALLER</span><b>MECÁNICO<br>INTEGRAL</b><i>PM / SERVICE</i></div>
        </div>
        <div class="workshop-copy">
          <span class="eyebrow">MANTENIMIENTO · DIAGNÓSTICO · REPARACIÓN</span>
          <h2>EL TALLER<br>QUE TU MOTO <span>NECESITA.</span></h2>
          <p>En Paredes Motos también nos ocupamos de la parte mecánica. Queremos que tengas un lugar donde explicar qué le pasa a tu moto, recibir orientación y consultar por los trabajos que necesita.</p>
          <p>Contanos la marca, el modelo, el año y qué problema presenta. Nuestro equipo podrá evaluar tu consulta y orientarte sobre los próximos pasos.</p>
          <ul class="check-list">
            <li>Consultas de mantenimiento y reparación.</li>
            <li>Evaluación de problemas mecánicos.</li>
            <li>Orientación sobre repuestos necesarios.</li>
            <li>Consulta previa y coordinación del trabajo.</li>
          </ul>
          <p class="fine-print">Los trabajos específicos, su disponibilidad y el presupuesto se confirman según la moto y la evaluación correspondiente.</p>
          ${waButton('Hola Paredes Motos, quiero consultar por el taller mecánico.', 'CONSULTAR POR EL TALLER')}
        </div>
      </section>

      <section class="accident-section section-wrap" id="accidentes">
        <div class="accident-inner">
          <div class="accident-photo">
            <img src="/images/accidente.jpg" alt="Moto accidentada - reparación en Paredes Motos" loading="lazy">
          </div>
          <div class="accident-copy">
            <span class="eyebrow">¿TU MOTO TUVO UN ACCIDENTE?</span>
            <h2>TE AYUDAMOS A<br>VOLVER A <span>RODAR.</span></h2>
            <p>Si tu moto sufrió daños en un accidente, consultanos por la reparación y solicitá un presupuesto. Contanos qué pasó y enviá fotografías de las partes dañadas.</p>
            <p>La evaluación final y el presupuesto dependerán de la inspección correspondiente.</p>
            <div class="accident-steps"><span>01 / CONTANOS</span><span>02 / ENVIÁ FOTOS</span><span>03 / CONSULTÁ EL PRESUPUESTO</span></div>
            ${waButton('Hola Paredes Motos, necesito consultar por un presupuesto de reparación tras un accidente.', 'SOLICITAR PRESUPUESTO')}
          </div>
        </div>
      </section>

      <section class="videos-section section-wrap" id="videos">
        <div class="section-heading">
          <div>
            <span class="eyebrow">PAREDES MOTOS POR DENTRO</span>
            <h2>CONOCÉ NUESTRO <span>NEGOCIO.</span></h2>
          </div>
          <span class="section-number">PM / MEDIA</span>
        </div>
        <p class="section-description">Te invitamos a conocer Paredes Motos. Descubrí nuestro negocio, nuestros productos y todo lo que tenemos para ofrecerte.</p>

        <article class="video-card video-featured">
          <div class="video-frame">
            <video controls preload="metadata" playsinline aria-label="Conocé nuestro negocio - Paredes Motos">
              <source src="/videos/video-paredes.mp4" type="video/mp4">
              Tu navegador no puede reproducir este video.
            </video>
          </div>
          <div class="video-caption">
            <span>VIDEO PRINCIPAL</span>
            <b>CONOCÉ NUESTRO NEGOCIO</b>
          </div>
        </article>

        <div class="gallery-heading">
          <span>DESCUBRÍ MÁS DE PAREDES MOTOS</span>
          <span>NUESTROS VIDEOS</span>
        </div>

        <div class="video-grid video-grid-secondary">
          ${['video-01.mp4','video-02.mp4','video-03.mp4','video-04.mp4','video-05.mp4'].map((video, i) => `
            <article class="video-card">
              <div class="video-frame">
                <video controls preload="metadata" playsinline aria-label="Video de Paredes Motos ${i + 1}">
                  <source src="/videos/${video}" type="video/mp4">
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
              <div class="video-caption">
                <span>VIDEO / 0${i + 1}</span>
                <b>PAREDES MOTOS</b>
              </div>
            </article>`).join('')}
        </div>
      </section>

      <section class="contact-cta section-wrap">
        <div><span class="eyebrow">¿QUÉ NECESITÁS PARA TU MOTO?</span><h2>HABLEMOS.<br><span>ESTAMOS PARA AYUDARTE.</span></h2><p>Consultá por repuestos, accesorios, taller o presupuestos. Escribinos directamente por WhatsApp.</p></div>
        ${waButton('Hola Paredes Motos, quiero hacer una consulta.', 'ESCRIBINOS AHORA')}
      </section>
    </main>

    <footer class="site-footer" id="contacto">
      <div class="footer-top">
        <a href="#inicio" class="footer-logo">${img('logo.jpg', 'Paredes Motos')}</a>
        <p>REPUESTOS · ACCESORIOS · TALLER MECÁNICO</p>
      </div>
      <div class="footer-grid">
        <div class="footer-column">
          <span class="footer-label">CONTACTO DIRECTO</span>
          <h3>HABLEMOS DE TU MOTO.</h3>
          <a class="contact-link phone-link" href="${whatsapp('Hola Paredes Motos, quiero hacer una consulta.')}" target="_blank" rel="noopener noreferrer"><span class="contact-icon">◉</span><span><small>WHATSAPP</small><b>11 3626-7443</b></span></a>
          <p class="footer-note">Consultas por repuestos, accesorios, taller y presupuestos.</p>
          ${waButton('Hola Paredes Motos, quiero hacer una consulta.', 'ABRIR WHATSAPP')}
        </div>
        <div class="footer-column">
          <span class="footer-label">DÓNDE ESTAMOS</span>
          <h3>VENÍ A CONOCERNOS.</h3>
          <p class="address"><span class="contact-icon">⌖</span><span><b>Av. Entre Ríos 833</b><br>San Cristóbal, CABA<br>Buenos Aires, Argentina</span></p>
          <a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Av.+Entre+Rios+833+San+Cristobal+CABA" target="_blank" rel="noopener noreferrer">VER UBICACIÓN EN MAPS ↗</a>
        </div>
        <div class="footer-column">
          <span class="footer-label">HORARIOS DE ATENCIÓN</span>
          <h3>TE ESPERAMOS.</h3>
          <div class="hours-row"><span>Lunes a viernes</span><b>09:00 – 19:00</b></div>
          <div class="hours-row"><span>Sábados</span><b>10:00 – 15:00</b></div>
          <div class="hours-row"><span>Domingos</span><b>10:00 – 12:00</b></div>
          <p class="footer-note">Horarios de atención del negocio.</p>
        </div>
        <div class="footer-column">
          <span class="footer-label">REDES SOCIALES</span>
          <h3>SEGUINOS.</h3>
          <a class="social-link" href="https://www.instagram.com/paredesmotos_caba" target="_blank" rel="noopener noreferrer"><span class="social-icon instagram">◎</span><span><small>INSTAGRAM</small><b>@paredesmotos_caba</b></span><i>↗</i></a>
          <a class="social-link" href="https://www.facebook.com/paredes.motos33" target="_blank" rel="noopener noreferrer"><span class="social-icon facebook">f</span><span><small>FACEBOOK</small><b>Paredes Motos</b></span><i>↗</i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} PAREDES MOTOS</span>
        <span>HECHO PARA LOS QUE VIVEN SOBRE DOS RUEDAS.</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </div>
    </footer>
  </div>

  <div class="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-label="Imagen ampliada">
    <button class="lightbox-close" aria-label="Cerrar imagen">×</button>
    <img src="" alt="Imagen ampliada">
  </div>

  <a class="floating-wa" href="${whatsapp('Hola Paredes Motos, quiero hacer una consulta.')}" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Paredes Motos por WhatsApp">
    <span>◉</span><b>WHATSAPP</b>
  </a>
`

// Menú adaptable para celulares
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const navLinks = document.querySelector<HTMLDivElement>('.nav-links')

menuToggle?.addEventListener('click', () => {
  const opened = navLinks?.classList.toggle('nav-open') ?? false
  menuToggle.setAttribute('aria-expanded', String(opened))
})

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open')
    menuToggle?.setAttribute('aria-expanded', 'false')
  })
})

// Galería ampliable
const lightbox = document.querySelector<HTMLDivElement>('#lightbox')
const lightboxImage = lightbox?.querySelector<HTMLImageElement>('img')

document.querySelectorAll<HTMLButtonElement>('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.dataset.lightbox
    if (!source || !lightbox || !lightboxImage) return
    lightboxImage.src = source
    lightbox.classList.add('lightbox-open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('no-scroll')
  })
})

function closeLightbox() {
  if (!lightbox || !lightboxImage) return
  lightbox.classList.remove('lightbox-open')
  lightbox.setAttribute('aria-hidden', 'true')
  lightboxImage.src = ''
  document.body.classList.remove('no-scroll')
}

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox()
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLightbox()
})

// No reproducir varios videos simultáneamente
document.querySelectorAll<HTMLVideoElement>('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll<HTMLVideoElement>('video').forEach(other => {
      if (other !== video) other.pause()
    })
  })
})
