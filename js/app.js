/**
 * APLICACIÓN PRINCIPAL - CUARTEL FUERTE GRAL. DIV. RAFAEL HOYOS RUBIO
 * Reproducción de Audio Real Directo de YouTube + Voz Militar + Banda Instrumental
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado Global
  const state = {
    currentCategory: 'todos',
    searchQuery: '',
    currentTrack: null,
    isPlaying: false,
    audioMode: 'youtube', // 'youtube' | 'voz' | 'banda'
    audioCtx: null,
    musicTimer: null,
    speechSynth: window.speechSynthesis || null,
    currentUtterance: null,
    currentSlideIndex: 0,
    carouselTimer: null
  };

  // Elementos DOM
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');

  const resourceGrid = document.getElementById('resourceGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryTabs = document.querySelectorAll('.seg-tab-btn');
  const resultsMeta = document.getElementById('resultsMeta');
  const sectionTitle = document.getElementById('currentSectionTitle');

  // Elementos Reproductor
  const stickyPlayer = document.getElementById('stickyPlayer');
  const playerTrackTitle = document.getElementById('playerTrackTitle');
  const playerTrackSub = document.getElementById('playerTrackSub');
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const timelineBarFill = document.getElementById('timelineBarFill');
  const timelineBarBg = document.getElementById('timelineBarBg');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');
  const viewLyricsBtn = document.getElementById('viewLyricsBtn');
  const closePlayerBtn = document.getElementById('closePlayerBtn');
  const btnYoutubeOfficial = document.getElementById('btnYoutubeOfficial');
  
  const modeYoutubeBtn = document.getElementById('modeYoutubeBtn');
  const modeBandaBtn = document.getElementById('modeBandaBtn');
  const modeVozBtn = document.getElementById('modeVozBtn');
  const ytPlayerContainer = document.getElementById('ytPlayerContainer');

  // Elementos Modal
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCopyBtn = document.getElementById('modalCopyBtn');
  const modalActionBtn = document.getElementById('modalActionBtn');
  const toastBar = document.getElementById('toastBar');
  const toastMessage = document.getElementById('toastMessage');

  // ==========================================================================
  // 1. CARRUSEL CON FOTOS MILITARES REALES
  // ==========================================================================
  function initCarousel() {
    if (!carouselTrack || !CAROUSEL_SLIDES.length) return;

    carouselTrack.innerHTML = CAROUSEL_SLIDES.map((slide, idx) => `
      <div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${slide.imageUrl}" alt="${slide.title}" class="slide-img-bg" onerror="this.style.display='none'">
        <div class="slide-dark-overlay"></div>
        <div class="slide-content-box">
          <div class="slide-tag"><span>${slide.badgeIcon}</span> ${slide.tag}</div>
          <h2 class="slide-title">${slide.title}</h2>
          <div class="slide-subtitle">${slide.subtitle}</div>
          <p class="slide-desc">${slide.description}</p>
          <div class="slide-actions">
            <button class="btn-apple-primary" onclick="scrollToSection('himnos')">
              <span>🎺</span> Himnos y Marchas
            </button>
            <button class="btn-apple-glass" onclick="scrollToSection('canticos')">
              <span>🏃</span> Cánticos de Trote
            </button>
            <button class="btn-apple-glass" onclick="scrollToSection('libros')">
              <span>📖</span> Biblioteca Doctrinal
            </button>
          </div>
        </div>
      </div>
    `).join('');

    carouselDots.innerHTML = CAROUSEL_SLIDES.map((_, idx) => `
      <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="Slide ${idx + 1}"></button>
    `).join('');

    const dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index, 10));
        resetCarouselTimer();
      });
    });

    if (carouselPrevBtn) {
      carouselPrevBtn.addEventListener('click', () => {
        prevSlide();
        resetCarouselTimer();
      });
    }

    if (carouselNextBtn) {
      carouselNextBtn.addEventListener('click', () => {
        nextSlide();
        resetCarouselTimer();
      });
    }

    resetCarouselTimer();
  }

  function goToSlide(index) {
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    if (!slides.length) return;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    state.currentSlideIndex = (index + slides.length) % slides.length;
    slides[state.currentSlideIndex].classList.add('active');
    if (dots[state.currentSlideIndex]) {
      dots[state.currentSlideIndex].classList.add('active');
    }
  }

  function nextSlide() {
    goToSlide(state.currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(state.currentSlideIndex - 1);
  }

  function resetCarouselTimer() {
    clearInterval(state.carouselTimer);
    state.carouselTimer = setInterval(nextSlide, 6000);
  }

  // ==========================================================================
  // 2. RENDERIZADO Y BÚSQUEDA
  // ==========================================================================
  function initResources() {
    renderResources();
    updateCategoryCounts();

    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
      renderResources();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      renderResources();
    });

    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.currentCategory = tab.dataset.category;

        const titles = {
          todos: 'Todos los Recursos Oficiales',
          himnos: 'Himnos y Marchas de la Patria',
          canticos: 'Cánticos y Trotes de Instrucción',
          libros: 'Biblioteca Doctrinal y Reglamentos',
          documentos: 'Documentos y Trámites del SMV'
        };
        sectionTitle.textContent = titles[state.currentCategory] || 'Recursos';
        renderResources();
      });
    });
  }

  function renderResources() {
    let filtered = ALL_RESOURCES;

    if (state.currentCategory !== 'todos') {
      filtered = filtered.filter(item => item.category === state.currentCategory);
    }

    if (state.searchQuery) {
      const q = state.searchQuery;
      filtered = filtered.filter(item => {
        return (item.title && item.title.toLowerCase().includes(q)) ||
               (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
               (item.description && item.description.toLowerCase().includes(q)) ||
               (item.author && item.author.toLowerCase().includes(q)) ||
               (item.lyrics && item.lyrics.toLowerCase().includes(q)) ||
               (item.code && item.code.toLowerCase().includes(q)) ||
               (item.unit && item.unit.toLowerCase().includes(q));
      });
    }

    resultsMeta.textContent = `${filtered.length} recurso${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
      resourceGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛡️</div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.3rem;">No se encontraron resultados</h3>
          <p style="color: var(--text-secondary); font-size: 0.85rem;">No hay elementos para "${state.searchQuery}".</p>
        </div>
      `;
      return;
    }

    resourceGrid.innerHTML = filtered.map(item => createCardHTML(item)).join('');

    document.querySelectorAll('.btn-play-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = ALL_RESOURCES.find(r => r.id === id);
        if (item) playTrack(item);
      });
    });

    document.querySelectorAll('.btn-view-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = ALL_RESOURCES.find(r => r.id === id);
        if (item) openModal(item);
      });
    });
  }

  function createCardHTML(item) {
    const isAudio = item.category === 'himnos' || item.category === 'canticos';
    const pillClass = `pill-${item.category.slice(0, -1)}`;

    let listHTML = '';
    if (item.topics) {
      listHTML = `
        <div class="topics-box">
          <ul>
            ${item.topics.slice(0, 3).map(t => `<li><span style="color:var(--color-gold);">▸</span> ${t}</li>`).join('')}
          </ul>
        </div>
      `;
    } else if (item.details) {
      listHTML = `
        <div class="topics-box">
          <ul>
            ${item.details.slice(0, 3).map(d => `<li><span style="color:var(--color-patria-red);">★</span> ${d}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    return `
      <article class="modern-card">
        <div>
          <div class="card-badge-row">
            <span class="apple-pill-tag ${pillClass}">${item.type}</span>
            <span class="card-code-pill">${item.code || item.badge || 'FUERTE HOYOS'}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-subtitle">${item.subtitle || item.unit || item.author || ''}</div>
          <p class="card-description">${item.description}</p>
          ${listHTML}
        </div>

        <div class="card-footer-row">
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            <button class="btn-card-action btn-card-primary btn-view-item" data-id="${item.id}">
              <span>${isAudio ? '📖 Letra Completa' : '📄 Detalle'}</span>
            </button>
            ${item.youtubeSearchUrl ? `
              <a href="${item.youtubeSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action" style="background:#400b12; color:#ff858d;" title="Ver versión oficial en YouTube">
                <span>▶ Video</span>
              </a>
            ` : ''}
            ${!isAudio ? `
              <button class="btn-card-action" onclick="simularDescarga('${item.downloadName || item.title}')">
                <span>⬇ Descargar</span>
              </button>
            ` : ''}
          </div>

          ${isAudio ? `
            <button class="card-play-btn btn-play-item" data-id="${item.id}" title="Escuchar">
              ▶
            </button>
          ` : `
            <span style="font-size: 0.74rem; color: var(--text-tertiary); font-family: ui-monospace, monospace;">${item.pages || 'PDF'}</span>
          `}
        </div>
      </article>
    `;
  }

  function updateCategoryCounts() {
    document.getElementById('count-todos').textContent = ALL_RESOURCES.length;
    document.getElementById('count-himnos').textContent = MILITARY_DATA.hymns.length;
    document.getElementById('count-canticos').textContent = MILITARY_DATA.chants.length;
    document.getElementById('count-libros').textContent = MILITARY_DATA.books.length;
    document.getElementById('count-documentos').textContent = MILITARY_DATA.documents.length;
  }

  // ==========================================================================
  // 3. MOTOR DE AUDIO INTEGRADO CON YOUTUBE REAL, VOZ MILITAR Y BANDA
  // ==========================================================================
  function playTrack(item) {
    state.currentTrack = item;
    stickyPlayer.classList.add('visible');

    playerTrackTitle.textContent = item.title;
    playerTrackSub.textContent = item.subtitle || item.unit || item.type;
    totalTimeDisplay.textContent = item.duration || "02:00";

    if (btnYoutubeOfficial) {
      if (item.youtubeSearchUrl) {
        btnYoutubeOfficial.href = item.youtubeSearchUrl;
        btnYoutubeOfficial.style.display = 'inline-flex';
      } else {
        btnYoutubeOfficial.style.display = 'none';
      }
    }

    stopPlayback();

    if (state.audioMode === 'youtube' && item.youtubeId) {
      playYouTubeAudio(item);
    } else if (state.audioMode === 'voz' && item.lyrics) {
      startVoiceRecital(item);
    } else {
      startBandMelody(item);
    }
  }

  // Reproducción directa de Audio Real desde YouTube
  function playYouTubeAudio(item) {
    state.isPlaying = true;
    updatePlayBtnUI(true);

    if (ytPlayerContainer) {
      ytPlayerContainer.innerHTML = `
        <iframe 
          id="ytPlayerFrame" 
          width="100%" 
          height="80" 
          src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&controls=1&enablejsapi=1" 
          title="${item.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          style="border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);"
        ></iframe>
      `;
      ytPlayerContainer.style.display = 'block';
    }

    let elapsed = 0;
    const totalSec = parseSec(item.duration || "02:00");

    state.musicTimer = setInterval(() => {
      elapsed++;
      const pct = Math.min(100, (elapsed / totalSec) * 100);
      timelineBarFill.style.width = `${pct}%`;
      currentTimeDisplay.textContent = formatTime(elapsed);

      if (elapsed >= totalSec) {
        stopPlayback();
      }
    }, 1000);

    showToast(`Reproduciendo Audio Real: ${item.title}`);
  }

  function startVoiceRecital(item) {
    if (ytPlayerContainer) {
      ytPlayerContainer.style.display = 'none';
      ytPlayerContainer.innerHTML = '';
    }

    if (!state.speechSynth || !item.lyrics) {
      startBandMelody(item);
      return;
    }

    state.speechSynth.cancel();
    state.isPlaying = true;
    updatePlayBtnUI(true);

    const cleanText = item.lyrics
      .replace(/\(CORO[^\)]*\)/g, "Coro.")
      .replace(/\(ESTROFA[^\)]*\)/g, "Estrofa.")
      .replace(/\(Voz de mando\):/g, "Voz de mando.")
      .replace(/\(Tropa\):/g, "Tropa.")
      .replace(/\(Todos[^\)]*\):/g, "Todos al unísono.")
      .replace(/[¡!]/g, " ");

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = 'es-PE';
    utter.rate = 1.05;
    utter.pitch = 0.95;

    let simulatedSec = 0;
    const totalSec = parseSec(item.duration || "01:30");

    state.musicTimer = setInterval(() => {
      simulatedSec++;
      const pct = Math.min(100, (simulatedSec / totalSec) * 100);
      timelineBarFill.style.width = `${pct}%`;
      currentTimeDisplay.textContent = formatTime(simulatedSec);
    }, 1000);

    utter.onend = () => stopPlayback();
    utter.onerror = () => stopPlayback();

    state.currentUtterance = utter;
    state.speechSynth.speak(utter);
    showToast(`Voz Militar: ${item.title}`);
  }

  function startBandMelody(item) {
    if (ytPlayerContainer) {
      ytPlayerContainer.style.display = 'none';
      ytPlayerContainer.innerHTML = '';
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!state.audioCtx) state.audioCtx = new AudioCtx();
      if (state.audioCtx.state === 'suspended') state.audioCtx.resume();

      state.isPlaying = true;
      updatePlayBtnUI(true);

      let elapsed = 0;
      const totalSec = parseSec(item.duration || "01:30");

      state.musicTimer = setInterval(() => {
        elapsed++;
        const pct = Math.min(100, (elapsed / totalSec) * 100);
        timelineBarFill.style.width = `${pct}%`;
        currentTimeDisplay.textContent = formatTime(elapsed);

        if (elapsed >= totalSec) stopPlayback();
      }, 1000);

      showToast(`Banda Instrumental: ${item.title}`);
    } catch (e) {
      console.error(e);
    }
  }

  function togglePlay() {
    if (!state.currentTrack) return;

    if (state.isPlaying) {
      stopPlayback();
    } else {
      if (state.audioMode === 'youtube' && state.currentTrack.youtubeId) {
        playYouTubeAudio(state.currentTrack);
      } else if (state.audioMode === 'voz' && state.currentTrack.lyrics) {
        startVoiceRecital(state.currentTrack);
      } else {
        startBandMelody(state.currentTrack);
      }
    }
  }

  function stopPlayback() {
    if (state.musicTimer) {
      clearInterval(state.musicTimer);
      state.musicTimer = null;
    }
    if (state.speechSynth) {
      state.speechSynth.cancel();
    }
    if (ytPlayerContainer) {
      ytPlayerContainer.innerHTML = '';
      ytPlayerContainer.style.display = 'none';
    }
    state.isPlaying = false;
    updatePlayBtnUI(false);
  }

  function updatePlayBtnUI(isPlaying) {
    mainPlayBtn.innerHTML = isPlaying ? '⏸' : '▶';
  }

  mainPlayBtn.addEventListener('click', togglePlay);

  // Modos de Audio
  if (modeYoutubeBtn && modeVozBtn && modeBandaBtn) {
    modeYoutubeBtn.addEventListener('click', () => {
      modeYoutubeBtn.classList.add('active');
      modeVozBtn.classList.remove('active');
      modeBandaBtn.classList.remove('active');
      state.audioMode = 'youtube';
      if (state.currentTrack && state.isPlaying) {
        stopPlayback();
        playYouTubeAudio(state.currentTrack);
      }
    });

    modeVozBtn.addEventListener('click', () => {
      modeVozBtn.classList.add('active');
      modeYoutubeBtn.classList.remove('active');
      modeBandaBtn.classList.remove('active');
      state.audioMode = 'voz';
      if (state.currentTrack && state.isPlaying) {
        stopPlayback();
        startVoiceRecital(state.currentTrack);
      }
    });

    modeBandaBtn.addEventListener('click', () => {
      modeBandaBtn.classList.add('active');
      modeYoutubeBtn.classList.remove('active');
      modeVozBtn.classList.remove('active');
      state.audioMode = 'banda';
      if (state.currentTrack && state.isPlaying) {
        stopPlayback();
        startBandMelody(state.currentTrack);
      }
    });
  }

  viewLyricsBtn.addEventListener('click', () => {
    if (state.currentTrack) openModal(state.currentTrack);
  });

  closePlayerBtn.addEventListener('click', () => {
    stopPlayback();
    stickyPlayer.classList.remove('visible');
    state.currentTrack = null;
  });

  // ==========================================================================
  // 4. MODAL DIALOG Y LETRAS COMPLETAS
  // ==========================================================================
  let currentModalData = null;

  function openModal(item) {
    currentModalData = item;
    modalTitle.textContent = item.title;
    modalSubtitle.textContent = `${item.type} • ${item.badge || item.unit || 'Cuartel Fuerte Hoyos'}`;

    if (item.lyrics) {
      modalBody.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <p style="color: var(--color-gold); font-weight: 600; font-size: 0.88rem; margin-bottom: 0.3rem;">
            ${item.subtitle || item.author || 'Ejército del Perú'}
          </p>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
            ${item.description}
          </p>
        </div>
        <div class="lyrics-pre-box">${escapeHTML(item.lyrics)}</div>
      `;
      modalCopyBtn.style.display = 'inline-flex';
      modalCopyBtn.textContent = '📋 Copiar Letra';
      modalActionBtn.textContent = '▶ Reproducir';
      modalActionBtn.onclick = () => {
        playTrack(item);
        closeModal();
      };
    } else {
      modalBody.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <span class="apple-pill-tag pill-libro" style="margin-bottom: 0.6rem; display:inline-block;">${item.type}</span>
          <p style="color: var(--text-primary); font-size: 0.92rem; margin-bottom: 1rem; line-height: 1.5;">
            ${item.description}
          </p>
          <h4 style="color: var(--color-gold); font-size: 0.98rem; margin-bottom: 0.5rem;">
            Puntos y Disposiciones Clave:
          </h4>
          <div class="topics-box" style="padding: 1rem;">
            <ul>
              ${(item.topics || item.details || []).map(t => `<li style="margin-bottom: 0.4rem;"><span style="color:var(--color-gold);">★</span> ${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      modalCopyBtn.style.display = 'inline-flex';
      modalCopyBtn.textContent = '📋 Copiar Información';
      modalActionBtn.textContent = '⬇ Descargar Documento';
      modalActionBtn.onclick = () => {
        simularDescarga(item.downloadName || item.title);
      };
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    currentModalData = null;
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  modalCopyBtn.addEventListener('click', () => {
    if (!currentModalData) return;
    const text = currentModalData.lyrics || `${currentModalData.title}\n\n${currentModalData.description}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast('¡Texto copiado al portapapeles!');
    });
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function parseSec(durStr) {
    const parts = durStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 90;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  function showToast(message) {
    toastMessage.textContent = message;
    toastBar.classList.add('show');
    setTimeout(() => toastBar.classList.remove('show'), 3000);
  }

  window.simularDescarga = function(fileName) {
    showToast(`Descargando: ${fileName}`);
  };

  window.scrollToSection = function(category) {
    const tab = Array.from(categoryTabs).find(t => t.dataset.category === category);
    if (tab) tab.click();
    document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
  };

  // Inicialización
  initCarousel();
  initResources();
});
