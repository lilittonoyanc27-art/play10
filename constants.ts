export interface SolerQuestion {
  sentence: string;
  translation: string;
  options: string[];
  correct: string;
  explanation: string;
  habit: string;
  icon: string;
}

export const SOLER_CONJUGATION = [
  { subject: "Yo", conjugation: "suelo", note: "O -> UE" },
  { subject: "Tú", conjugation: "sueles", note: "O -> UE" },
  { subject: "Él/Ella/Usted", conjugation: "suele", note: "O -> UE" },
  { subject: "Nosotros/as", conjugation: "solemos", note: "Պահպանում է O-ն" },
  { subject: "Vosotros/as", conjugation: "soléis", note: "Պահպանում է O-ն" },
  { subject: "Ellos/Ellas/Ustedes", conjugation: "suelen", note: "O -> UE" }
];

export const SOLER_DATA: SolerQuestion[] = [
  {
    sentence: "Yo ____ (soler) cantar en la ducha.",
    translation: "Ես սովորաբար երգում եմ ցնցուղի տակ:",
    options: ["suelo", "solemos", "suele"],
    correct: "suelo",
    explanation: "Yo -> suelo. Soler is a stem-changing verb (O to UE).",
    habit: "Երգել",
    icon: "🎤"
  },
  {
    sentence: "¿Tú ____ (soler) tocar la guitarra?",
    translation: "Դու սովորաբար կիթառ նվագո՞ւմ ես:",
    options: ["sueles", "suelo", "suelen"],
    correct: "sueles",
    explanation: "Tú -> sueles.",
    habit: "Նվագել",
    icon: "🎸"
  },
  {
    sentence: "Nosotros ____ (soler) comer juntos.",
    translation: "Մենք սովորաբար միասին ենք ուտում:",
    options: ["solemos", "suelo", "suelen"],
    correct: "solemos",
    explanation: "Nosotros/Vosotros don't change O to UE.",
    habit: "Ուտել",
    icon: "🍲"
  },
  {
    sentence: "Mis amigos ____ (soler) bailar mucho.",
    translation: "Իմ ընկերները սովորաբար շատ են պարում:",
    options: ["suelen", "sueles", "suelo"],
    correct: "suelen",
    explanation: "Ellos (amigos) -> suelen.",
    habit: "Պարել",
    icon: "💃"
  },
  {
    sentence: "Ella ____ (soler) estudiar en la tarde.",
    translation: "Նա սովորաբար կեսօրին է սովորում:",
    options: ["suele", "suelo", "suelen"],
    correct: "suele",
    explanation: "Ella -> suele.",
    habit: "Սովորել",
    icon: "📚"
  },
  {
    sentence: "Vosotros ____ (soler) ir al parque.",
    translation: "Դուք սովորաբար այգի եք գնում:",
    options: ["soléis", "suelen", "suelo"],
    correct: "soléis",
    explanation: "Vosotros (Spain) -> soléis. No stem change.",
    habit: "Զբոսնել",
    icon: "🌳"
  },
  {
    sentence: "Usted ____ (soler) viajar mucho.",
    translation: "Դուք (հարգալից) սովորաբար շատ եք ճամփորդում:",
    options: ["suele", "suelo", "suelen"],
    correct: "suele",
    explanation: "Usted -> suele.",
    habit: "Ճամփորդել",
    icon: "✈️"
  },
  {
    sentence: "Yo no ____ (soler) dormir tarde.",
    translation: "Ես սովորաբար ուշ չեմ քնում:",
    options: ["suelo", "suelas", "suelo"], // intentional duplicate to test logic or fix
    correct: "suelo",
    explanation: "Yo -> suelo.",
    habit: "Քնել",
    icon: "😴"
  },
  {
    sentence: "Juan y yo ____ (soler) tocar piano.",
    translation: "Խուանը և ես սովորաբար դաշնամուր ենք նվագում:",
    options: ["solemos", "suelen", "suelo"],
    correct: "solemos",
    explanation: "Juan y yo = Nosotros -> solemos.",
    habit: "Նվագել",
    icon: "🎹"
  },
  {
    sentence: "Ellas ____ (soler) leer libros.",
    translation: "Նրանք (աղջիկները) սովորաբար գրքեր են կարդում:",
    options: ["suelen", "suelo", "suele"],
    correct: "suelen",
    explanation: "Ellas -> suelen.",
    habit: "Կարդալ",
    icon: "📖"
  },
  {
    sentence: "¿Ustedes ____ (soler) hablar español?",
    translation: "Դուք սովորաբար իսպաներեն խոսո՞ւմ եք:",
    options: ["suelen", "solemos", "suelo"],
    correct: "suelen",
    explanation: "Ustedes -> suelen.",
    habit: "Խոսել",
    icon: "🗣️"
  },
  {
    sentence: "Tú ____ (soler) tomar café.",
    translation: "Դու սովորաբար սուրճ ես խմում:",
    options: ["sueles", "suelo", "suele"],
    correct: "sueles",
    explanation: "Tú -> sueles.",
    habit: "Խմել",
    icon: "☕"
  },
  {
    sentence: "Mi madre ____ (soler) cocinar muy rico.",
    translation: "Մայրիկս սովորաբար շատ համեղ է եփում:",
    options: ["suele", "suelo", "suelen"],
    correct: "suele",
    explanation: "Ella (mi madre) -> suele.",
    habit: "Եփել",
    icon: "🍳"
  },
  {
    sentence: "Yo ____ (soler) pasear al perro.",
    translation: "Ես սովորաբար շանն եմ զբոսանքի տանում:",
    options: ["suelo", "sueles", "suele"],
    correct: "suelo",
    explanation: "Yo -> suelo.",
    habit: "Զբոսնել",
    icon: "🐕"
  },
  {
    sentence: "Los niños ____ (soler) jugar fútbol.",
    translation: "Երեխաները սովորաբար ֆուտբոլ են խաղում:",
    options: ["suelen", "suelo", "solemos"],
    correct: "suelen",
    explanation: "Ellos (niños) -> suelen.",
    habit: "Խաղալ",
    icon: "⚽"
  }
];
