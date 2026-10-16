const BLOCKED_WORDS = [
  "2 girls 1 cup", "2g1c", "aborto", "acrotomophilia", "aidetica", "aidetico", "alabama hot pocket", "alaskan pipeline", "anal", "anilingus",
  "anus", "apeshit", "arrombado", "arsehole", "asesinato", "asno", "ass", "assassinar", "assassinato", "assassino",
  "asshole", "assmunch", "auto erotic", "autoerotic", "babaca", "babeland", "baby batter", "baby juice", "baitola", "ball gag",
  "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "bangbros", "bangbus", "bareback", "barely legal", "barenaked",
  "bastard", "bastardo", "bastinado", "bbw", "bdsm", "beaner", "beaners", "beastiality", "beaver cleaver", "beaver lips",
  "bebada", "bebado", "besta", "bestiality", "bi-sexual", "bicha", "big black", "big breasts", "big knockers", "big tits",
  "bimbos", "birdlock", "bisca", "biscate", "bisexual", "bissexual", "bitch", "bitches", "bixa", "black cock",
  "blonde action", "blonde on blonde action", "blow job", "blow your load", "blowjob", "blue waffle", "blumpkin", "boceta", "boiola", "bollera",
  "bollocks", "bondage", "boner", "boob", "boobs", "booty call", "boquete", "bosta", "bronha", "brown showers",
  "brunette action", "buceta", "bukkake", "bulldyke", "bullet vibe", "bullshit", "bumbum", "bunda", "bunduda", "bung hole",
  "bunghole", "burra", "burrao", "burro", "busseta", "busty", "butt", "buttcheeks", "butthole", "cabron",
  "caca", "caceta", "cacete", "cachorra", "cachorro", "caga", "cagao", "cagar", "cagona", "caguei",
  "camel toe", "camgirl", "camisinha", "camslut", "camwhore", "canalha", "cancer", "canceroso", "caraio", "caraleo",
  "caralho", "carpet muncher", "carpetmuncher", "casseta", "cassete", "checheca", "chereca", "chifruda", "chifrudo",
  "chochota", "chocolate rosebuds", "chota", "chupa", "chupada", "chupado", "chupador", "chupao", "chupapollas", "chupar",
  "chupeton", "cialis", "circlejerk", "cleveland steamer", "clit", "clitoris", "clover clamps", "clusterfuck", "cocaina", "cock",
  "cocks", "coco", "coito", "colhoes", "comedor", "comer", "comunista", "concha", "concha de tu madre", "cono",
  "consolo", "coon", "coons", "coprofagia", "coprolagnia", "coprophilia", "corna", "cornao", "cornhole", "corninho",
  "corno", "cornuda", "cornudo", "corrupta", "corrupto", "creampie", "cretina", "cretino", "criolo", "crioulo",
  "cu", "culo", "cum", "cumming", "cumshot", "cumshots", "cunnilingus", "cunt", "cuzao", "cuzuda",
  "cuzudo", "darkie", "date rape", "daterape", "debil", "debiloide", "deep throat", "deepthroat", "deficiente", "defunto",
  "demonio", "dendrophilia", "detenta", "detento", "dick", "difunto", "dildo", "dingleberries", "dingleberry", "dirty pillows",
  "dirty sanchez", "dog style", "doggie style", "doggiestyle", "doggy style", "doggystyle", "doida", "doido", "dolcett", "domination",
  "dominatrix", "dommes", "donkey punch", "double dong", "double penetration", "dp action", "droga", "drogadao", "drogadin", "drogadinho",
  "drogado", "drogas", "dry hump", "dvda", "eat my ass", "ecchi", "egua", "ejaculation", "erotic", "erotism",
  "esclerosado", "escort", "escrota", "escroto", "esperma", "esporra", "esporrada", "esporrado", "esporrar", "esporro",
  "estupida", "estupidez", "estupido", "eunuch", "facista", "fag", "faggot", "fascista", "fecal", "fedida",
  "fedido", "fedor", "fedorenta", "fedorento", "feia", "feio", "feiosa", "feioso", "feioza", "feiozo",
  "felacao", "felch", "fellatio", "feltch", "female squirting", "femdom", "fiesta de salchichas", "figging", "fingerbang", "fingering",
  "fisting", "foda", "foda-se", "fodasse", "fodecao", "fodedor", "fodendo", "foder", "fodeu", "fodi",
  "fodido", "follador", "follar", "foot fetish", "footjob", "fornica", "fornicacao", "fornicar", "frotting", "fuck",
  "fuck buttons", "fuckin", "fucking", "fucktards", "fudecao", "fudedor", "fudendo", "fudeu", "fudge packer", "fudgepacker",
  "fudi", "fudido", "furnica", "furnicacao", "furnicar", "futanari", "g-spot", "gang bang", "gangbang", "gay",
  "gay sex", "genitals", "giant cock", "gilete", "gilipichis", "gilipollas", "girl on", "girl on top", "girls gone wild", "goatcx",
  "goatse", "god damn", "gokkun", "golden shower", "gonorrea", "gonorreia", "goo girl", "goodpoop", "goregasm", "goza",
  "gozada", "gozador", "gozando", "gozar", "gozei", "gozo", "grelinho", "grelo", "grope", "group sex",
  "guro", "hacer una paja", "haciendo el amor", "hand job", "handjob", "hard core", "hardcore", "hentai", "hija de puta", "hijaputa",
  "hijo de puta", "hijoputa", "homo", "homo-sexual", "homoerotic", "homosexual", "homosexualismo", "homossexual", "homossexualismo", "honkey",
  "hooker", "horny", "hot carl", "hot chick", "how to kill", "how to murder", "huge fat", "humping", "idiota", "idiotice",
  "imbecil", "incest", "inferno", "infierno", "intercourse", "iscrota", "iscroto", "jack off", "jail bait", "jailbait",
  "jelly donut", "jerk off", "jigaboo", "jiggaboo", "jiggerboo", "jilipollas", "jizz", "juggs", "kapullo", "kike",
  "kinbaku", "kinkster", "kinky", "knobbing", "ladra", "ladrao", "ladroeira", "ladrona", "lameculos", "lazarento",
  "leather restraint", "leather straight jacket", "lemon party", "leprosa", "leproso", "lesbica", "livesex", "lolita", "lovemaking", "macaca",
  "macaco", "maciza", "macizorra", "maconha", "macumbeiro", "make me come", "malandro", "maldito", "male squirting", "mama",
  "mamada", "mamando", "mamar", "marginal", "marica", "maricon", "mariconazo", "martillo", "masturba", "masturbacao",
  "masturbar", "masturbate", "masturbating", "masturbation", "meliante", "menage a trois", "merda", "mierda", "mija", "mijada",
  "mijado", "mijar", "mijo", "milf", "missionary position", "mong", "mongol", "mongoloide", "motherfucker", "mound of venus",
  "mr hands", "muff diver", "muffdiving", "naba", "nadega", "nambla", "nawashi", "nazi", "nazis", "nazista",
  "negao", "nego", "negro", "neguin", "neguinho", "neonazi", "nig nog", "nigga", "nigger", "nimphomania",
  "nipple", "nipples", "nojeira", "nojenta", "nojento", "nojo", "nsfw", "nsfw images", "nude", "nudity",
  "nutten", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "oral", "orgasm", "orgy",
  "orina", "otaria", "otario", "paedophile", "paki", "panties", "panty", "pariu", "pau", "pauzao",
  "pauzudao", "pauzudo", "pedo", "pedobear", "pedofilia", "pedofilo", "pedophile", "pegging", "peitao", "peito",
  "peitoes", "pemba", "pendejo", "penis", "pentelha", "pentelho", "perereca", "peru", "pervertido", "pezon",
  "phone sex", "pica", "picao", "piece of shit", "pikey", "pilantra", "pinche", "pinto", "pintudao", "pintudo",
  "pis", "piss pig", "pissing", "pisspig", "playboy", "pleasure chest", "pole smoker", "ponyplay", "poof", "poon",
  "poontang", "poop chute", "poopchute", "porn", "porno", "pornography", "porra", "porrada", "prega", "preso",
  "prince albert piercing", "priquito", "prostituta", "prostituto", "pthc", "pubes", "punany", "punheta", "punhetao", "punhetar",
  "punheteiro", "pussy", "puta", "putaria", "puto", "queaf", "queef", "quim", "rabao", "rabo",
  "rabuda", "racha", "rachada", "rachadao", "rachadinha", "rachadinho", "rachado", "racista", "raghead", "raging boner",
  "ramera", "rape", "raping", "rapist", "rectum", "retardada", "retardado", "reverse cowgirl", "rimjob", "rimming",
  "rola", "rolinha", "rosca", "rosy palm", "rosy palm and her 5 sisters", "rusty trombone", "s&m", "sacana", "saco", "sadico",
  "sadism", "safada", "safado", "santorum", "sapatao", "scat", "schlong", "scissoring", "seio", "seios",
  "semen", "sex", "sexcam", "sexo", "sexual", "sexuality", "sexually", "sexy", "shaved beaver", "shaved pussy",
  "shemale", "shibari", "shit", "shitblimp", "shitty", "shoshota", "shota", "shrimping", "sifilis", "siririca",
  "skeet", "slanteye", "slut", "smut", "snatch", "snowballing", "sodomize", "sodomy", "soplagaitas", "soplapollas",
  "spastic", "spic", "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado",
  "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "suruba", "swastika", "swinger", "tainted love",
  "tarada", "tarado", "taste my", "tea bagging", "tesao", "tesuda", "tesudo", "tetas grandes", "tezao", "tezuda",
  "tezudo", "threesome", "throating", "thumbzilla", "tia buena", "tied up", "tight white", "tit", "tits", "titties",
  "titty", "tongue in a", "topless", "tosser", "towelhead", "tranny", "trans", "transa", "transando", "transar",
  "transexual", "transsexual", "traveco", "travesti", "tribadism", "trio", "trocha", "troucha", "trouxa", "troxa",
  "tub girl", "tuberculoso", "tubgirl", "tushy", "twat", "twink", "twinkie", "two girls one cup", "undressing", "upskirt",
  "urethra play", "urophilia", "vadia", "vadio", "vagaba", "vagabunda", "vagabundo", "vagina", "veadao", "veadinho",
  "veado", "venus mound", "verga", "viadagem", "viadao", "viadinho", "viado", "viagra", "vibrador", "vibrator",
  "violet wand", "vorarephilia", "voyeur", "voyeurweb", "voyuer", "vulva", "wank", "wet dream", "wetback", "white power",
  "whore", "worldsex", "wrapping men", "wrinkled starfish", "xana", "xaninha", "xavasca", "xerereca", "xexeca", "xibiu",
  "xochota", "xota", "xoxota", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia",
];

const SHORT_WORD_MAX_LEN = 4;

function normalizeForFilter(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function containsBlockedWord(rawName) {
  const normalized = normalizeForFilter(rawName);
  if (!normalized) return false;

  return BLOCKED_WORDS.some((word) => {
    const normalizedWord = normalizeForFilter(word);
    if (normalizedWord.length <= SHORT_WORD_MAX_LEN) {
      return normalized === normalizedWord
    }
    return normalized.includes(normalizedWord);
  });
}

function sanitizePlayerName(rawName, fallback = "Eu") {
  const trimmed = rawName.trim().replace(/\s+/g, " ").slice(0, 15);
  if (!trimmed) return fallback;
  if (containsBlockedWord(trimmed)) return fallback;
  return trimmed;
}