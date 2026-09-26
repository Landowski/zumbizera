const SUPPORTED_LANGS = ["pt", "en", "es"];

const TRANSLATIONS = {
  pt: {
    rotateDevice: "Gire o celular para horizontal 🔄",
    createRoom: "Criar sala",
    private: "Particular",
    public: "Pública",
    publicRoomsBtn: "Salas Disponíveis",
    codePlaceholder: "CÓDIGO",
    enter: "Entrar",
    back: "< Voltar",
    minutesLabel: "Minutos:",
    start: "Iniciar",
    startMin: "Iniciar({min})",
    leave: "Sair",
    restart: "Reiniciar",
    restartMin: "Reiniciar ({min})",
    leaveRoom: "Sair da sala",

    creatingRoom: "Criando sala...",
    roomNotFound: "Sala não encontrada",
    searchingRoom: "Procurando sala...",
    searchingRooms: "Buscando salas...",
    noPublicRooms: "Nenhuma sala pública disponível",
    entering: "Entrando...",

    connecting: "Conectando...",
    beOwner: "Entre e seja o dono",
    emptyRoom: "Sala vazia",
    matchInProgress: "Partida em andamento",
    roomFull: "Sala cheia",
    roomOpen: "Sala aberta",
    youAreOwner: "Você é o dono",
    waitOwner: "Aguarde o dono iniciar",
    youJoined: "Você entrou",
    roomFullWait: "Sala cheia, aguarde vaga",
    errorReload: "Erro. Recarregue o jogo.",

    roomCodeDisplay: "Código: {code}",
    playerCountLabel: "{count}/{max} na sala",

    hostDisconnected: "O dono da sala desconectou!",
    youSurvived: "Você sobreviveu!",
    zombiesWon: "Os zumbis venceram.",
    youAndOthersSurvived: "Você e mais {count} sobreviveram!",
    zombiesLost: "Os zumbis perderam.",

    playerBecameZombie: "{name} virou zumbi!",
    defaultName: "Eu",
    countdownGo: "CORRA!",
  },

  en: {
    rotateDevice: "Rotate your phone to landscape 🔄",
    createRoom: "Create room",
    private: "Private",
    public: "Public",
    publicRoomsBtn: "Public Rooms",
    codePlaceholder: "CODE",
    enter: "Join",
    back: "< Back",
    minutesLabel: "Minutes:",
    start: "Start",
    startMin: "Start ({min})",
    leave: "Leave",
    restart: "Restart",
    restartMin: "Restart ({min})",
    leaveRoom: "Leave room",

    creatingRoom: "Creating room...",
    roomNotFound: "Room not found",
    searchingRoom: "Searching room...",
    searchingRooms: "Searching rooms...",
    noPublicRooms: "No public rooms available",
    entering: "Joining...",

    connecting: "Connecting...",
    beOwner: "Join and become the owner",
    emptyRoom: "Empty room",
    matchInProgress: "Match in progress",
    roomFull: "Room full",
    roomOpen: "Room open",
    youAreOwner: "You're the owner",
    waitOwner: "Wait for the owner to start",
    youJoined: "You joined",
    roomFullWait: "Room full, waiting for a spot",
    errorReload: "Error. Reload the game.",

    roomCodeDisplay: "Code: {code}",
    playerCountLabel: "{count}/{max} in room",

    hostDisconnected: "The room owner disconnected!",
    youSurvived: "You survived!",
    zombiesWon: "The zombies won.",
    youAndOthersSurvived: "You and {count} more survived!",
    zombiesLost: "The zombies lost.",

    playerBecameZombie: "{name} turned into a zombie!",
    defaultName: "Me",
    countdownGo: "RUN!",
  },

  es: {
    rotateDevice: "Gira el celular en horizontal 🔄",
    createRoom: "Crear sala",
    private: "Privada",
    public: "Pública",
    publicRoomsBtn: "Salas Públicas",
    codePlaceholder: "CÓDIGO",
    enter: "Entrar",
    back: "< Volver",
    minutesLabel: "Minutos:",
    start: "Iniciar",
    startMin: "Iniciar ({min})",
    leave: "Salir",
    restart: "Reiniciar",
    restartMin: "Reiniciar ({min})",
    leaveRoom: "Salir de la sala",

    creatingRoom: "Creando sala...",
    roomNotFound: "Sala no encontrada",
    searchingRoom: "Buscando sala...",
    searchingRooms: "Buscando salas...",
    noPublicRooms: "No hay salas públicas disponibles",
    entering: "Entrando...",

    connecting: "Conectando...",
    beOwner: "Entra y sé el dueño",
    emptyRoom: "Sala vacía",
    matchInProgress: "Partida en curso",
    roomFull: "Sala llena",
    roomOpen: "Sala abierta",
    youAreOwner: "Eres el dueño",
    waitOwner: "Espera a que el dueño inicie",
    youJoined: "Has entrado",
    roomFullWait: "Sala llena, espera un lugar",
    errorReload: "Error. Recarga el juego.",

    roomCodeDisplay: "Código: {code}",
    playerCountLabel: "{count}/{max} en la sala",

    hostDisconnected: "¡El dueño de la sala se desconectó!",
    youSurvived: "¡Sobreviviste!",
    zombiesWon: "Los zombis ganaron.",
    youAndOthersSurvived: "¡Tú y {count} más sobrevivieron!",
    zombiesLost: "Los zombis perdieron.",

    playerBecameZombie: "¡{name} se convirtió en zombi!",
    defaultName: "Yo",
    countdownGo: "¡CORRE!",
  },
};

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const deviceLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(deviceLang) ? deviceLang : "en";
}

let currentLang = detectLang();
document.documentElement.lang = currentLang === "pt" ? "pt-br" : currentLang;

function t(key, vars) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  let str = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] || key);

  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), vars[k]);
    });
  }

  return str;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = currentLang === "pt" ? "pt-br" : currentLang;
  applyStaticTranslations();
}

applyStaticTranslations();

window.I18N = {
  t,
  setLang,
  get lang() {
    return currentLang;
  },
};
