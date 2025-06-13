import { createContext } from "react";

const courseContext = createContext();
export default courseContext;

export function CourseProvider({children}){

    const courseData = [
  {
    id: "psykologi", 
    img: "/images/books.jpg",
    title: "Introduktion till psykologi",
    summary: "En grundläggande kurs i mänskligt beteende, tankeprocesser och emotioner.",
    duration: "10 veckor",
    language: "Språk: Svenska",
    level: "Grundnivå",
    more: "Denna kurs ger en bred introduktion till psykologi som vetenskap och ämnesområde. Du får lära dig om psykologins historiska rötter, olika psykologiska teorier, samt forskningsmetoder. Kursen tar även upp centrala områden som kognition, inlärning, motivation, perception och utvecklingspsykologi. Praktiska exempel och tillämpningar gör kursen relevant för både vardagsliv och framtida studier.",
  },
    {
    id: "python", 
    img: "/images/python1.jpg",
    title: "Programmering i Python",
    summary: "Lär dig grunderna i programmering med ett av världens mest populära språk – Python.",
    duration: "8 veckor",
    language: "Språk: Svenska",
    level: "Grundnivå",
    more: "Kursen riktar sig till nybörjare och täcker grundläggande koncept som variabler, datatyper, loopar, funktioner och objektorientering. Genom praktiska övningar utvecklar du färdigheter för att skriva, felsöka och förstå kod. Python används inom allt från webbutveckling till artificiell intelligens, vilket gör kursen användbar inom många fält.",
  },
  {
  id: "webbutveckling-js",
  img: "/images/javascript.jpg",
  title: "Webbutveckling med JavaScript",
  summary: "Bygg moderna webbapplikationer med HTML, CSS och JavaScript.",
  more: "Denna kurs ger dig praktiska färdigheter i frontendutveckling med JavaScript som huvudfokus. Du lär dig att skapa interaktiva webbsidor med DOM-manipulation, eventhantering och API-anrop. Kursen introducerar också grundläggande ramverk som React, och avslutas med ett eget webbutvecklingsprojekt.",
  duration: "10 veckor",
  level: "Grundnivå",
  language: "Svenska",
},
    {
    id: "hållbarutv", 
    img: "/images/sustainability.jpg",
    title: "Hållbar utveckling – teori och praktik",
    summary: "En kurs som behandlar ekologiska, sociala och ekonomiska aspekter av hållbarhet.",
    duration: "10 veckor",
    language: "Språk: Svenska",
    level: "Avancerad nivå",
    more: "Här får du fördjupad kunskap om hållbar utveckling och dess betydelse i samtida samhällen. Kursen kombinerar teoretiska perspektiv med praktiska fallstudier, och du lär dig analysera och föreslå lösningar på hållbarhetsutmaningar. Ämnen inkluderar klimatförändringar, resurshantering, miljöetik och FN:s globala mål.",
  },
    {
    id: "excel-powerbi", 
    img: "/images/excel.jpg",
    title: "Dataanalys med Excel och Power BI",
    summary: "Lär dig hantera och analysera data med moderna verktyg.",
    duration: "8 veckor",
    language: "Språk: Engelska",
    level: "Grundnivå",
    more: "Kursen introducerar dig till grundläggande begrepp inom dataanalys och visualisering. Med hjälp av Excel och Power BI lär du dig att importera, bearbeta och tolka data, samt skapa interaktiva rapporter. Kursen passar både för nybörjare och yrkesverksamma som vill stärka sin datakompetens.",
  },
    {
    id: "marknadsföring", 
    img: "/images/studying2.jpg",
    title: "Digital marknadsföring",
    summary: "Strategier och verktyg för att nå ut online.",
    duration: "10 veckor",
    language: "Språk: Svenska",
    level: "Grundnivå",
    more: "I denna kurs lär du dig grunderna i digital marknadsföring, inklusive SEO (sökmotoroptimering), SEM (sökmotormarknadsföring), sociala medier, e-postmarknadsföring och innehållsstrategi. Kursen kombinerar teori med praktiska övningar och riktar sig till dig som vill arbeta med marknadsföring i en digital värld.",
  },
    {
    id: "ekonomistyrning", 
    img: "/images/economy.jpg",
    title: "Ekonomistyrning",
    summary: "Kontrollera och påverka ekonomin i en organisation.",
    duration: "13 veckor",
    language: "Språk: Svenska",
    level: "Avancerad nivå",
    more: "Kursen introducerar grundläggande begrepp och verktyg inom ekonomistyrning, som budgetering, kalkylering, prestationsmätning och intern kontroll. Du får en inblick i hur företag analyserar sina kostnader och intäkter för att fatta välgrundade beslut. Kursen passar för blivande chefer, ekonomer eller entreprenörer.",
  },
    {
    id: "int-relationer", 
    img: "/images/international.jpg",
    title: "Internationella relationer",
    summary: "Förstå världen genom teorier om konflikter, makt och diplomati.",
    duration: "20 veckor",
    language: "Språk: Engelska",
    level: "Avancerad nivå",
    more: "Kursen ger en introduktion till de viktigaste teorierna och begreppen inom internationella relationer. Du studerar historiska och aktuella konflikter, internationella organisationer som FN och NATO, samt diplomati och globalisering. Kursen utvecklar din analytiska förmåga och förståelse för det internationella systemets dynamik.",
  },
    {
    id: "kreativt-skrivande", 
    img: "/images/writing.jpg",
    title: "Kreativt skrivande – fiktion",
    summary: "Utforska ditt berättande och utveckla dina skönlitterära texter.",
    duration: "8 veckor",
    language: "Språk: Svenska",
    level: "Grundnivå",
    more: "En kurs för dig som vill skriva noveller, romaner eller andra former av fiktion. Du får lära dig om berättarteknik, dramaturgi, karaktärsutveckling och dialog. Arbetet sker både individuellt och i grupp med feedback. Kursen passar såväl nybörjare som mer erfarna skribenter.",
  }
];

return (
    <courseContext.Provider value={courseData}>
        {children}
    </courseContext.Provider>
);

    
}