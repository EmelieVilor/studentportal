import { createContext } from "react";

const newsContext = createContext();
export default newsContext;

export function NewsProvider({children}){

        const newsData = [
  {
    id: 1, 
    img: "./images/ai.jpg",
    title: "Ny kurs: Introduktion till AI och maskininlärning",
    published: "Publicerad: 1 juni 2025",
    text: "Från och med höstterminen erbjuder Lumen University en ny kurs inom artificiell intelligens! Kursen ger en grundläggande förståelse för hur maskininlärning fungerar och hur tekniken tillämpas inom olika branscher. Kursen är öppen för både programstudenter och fristående studenter.",
  },

    {
    id: 2, 
     img: "./images/innovation.jpg",
    title: "Bygge av nytt innovationscenter på campus",
    published: "Publicerad: 24 maj 2025",
    text: "Arbetet med vårt nya innovationscenter är nu i full gång! Centret kommer att fungera som en kreativ mötesplats för studenter, forskare och näringsliv med fokus på teknik, hållbarhet och entreprenörskap. Invigning planeras till våren 2026.",
  },

    {
    id: 3, 
     img: "./images/graduation.jpg",
    title: "Examensceremoni 2025 – datum och anmälan",
    published: "Publicerad: 15 maj 2025",
    text: "Årets examensceremoni hålls den 14 juni i Aula Magna. Alla avgångsstudenter och deras gäster är varmt välkomna. Glöm inte att anmäla dig senast den 5 juni via studentportalen. Vi ser fram emot att fira era prestationer tillsammans!",
  },
      {
    id: 4, 
     img: "./images/phone.jpg",
    title: "Ny studentapp lanserad",
    published: "Publicerad: 2 maj 2025",
    text: 'Den nya appen StudentPlan är nu lanserad! Med appen kan du enkelt se ditt schema, få påminnelser om tentor och följa dina kursresultat – direkt i mobilen. Appen finns att ladda ner på App Store och Google Play.',
  }
];

return (
    <newsContext.Provider value={newsData}>
        {children}
    </newsContext.Provider>
)
}