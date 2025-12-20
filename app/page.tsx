"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "es" | "pt";

interface Translation {
  hero: {
    title: string;
    subtitle: string;
  };
  vision: {
    title: string;
    content: string;
  };
  montevideo: {
    title: string;
    content: string;
  };
  players: {
    title: string;
    content: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    button: string;
  };
  investing: {
    title: string;
    content: string;
    button: string;
  };
  social: {
    title: string;
  };
}

const translations: Record<Language, Translation> = {
  en: {
    hero: {
      title: "Nexo Pickleball",
      subtitle: "Leading the launch and growth of pickleball across South America.",
    },
    vision: {
      title: "Our Vision",
      content:
        "We're building world-class pickleball clubs across South America. Vibrant spaces where sport, community, and culture meet. Whether you're a seasoned player or just discovering the game, Nexo is your new home for movement, connection and fun.",
    },
    montevideo: {
      title: "First Stop: Montevideo",
      content:
        "Our first club opens soon in Montevideo, Uruguay. Expect beautiful courts, a clubhouse with a cafe and pro shop, social events and the best vibes in town.",
    },
    players: {
      title: "Built With the Best",
      content:
        "The future of pickleball is being shaped by those who know it best. Top international players Federico Staksrud (Argentinian) and Eric Oncins (Brazilian) are part of the Nexo journey, bringing world-class experience to grow the game and the community across South America.",
    },
    newsletter: {
      title: "Be the First to Know",
      subtitle: "Get updates, early access invites and exclusive content as we open the doors.",
      button: "Join the List",
    },
    investing: {
      title: "Interested in Investing",
      content:
        "Pickleball's next chapter is being written in South America. If you're interested in investing and learning more about our vision and growth strategy, we'd love to connect.",
      button: "Get in Touch",
    },
    social: {
      title: "Follow the Journey",
    },
  },
  es: {
    hero: {
      title: "Nexo Pickleball",
      subtitle: "Liderando el lanzamiento y el crecimiento del pickleball en toda Sudamérica.",
    },
    vision: {
      title: "Nuestra Visión",
      content:
        "Estamos construyendo clubes de pickleball de clase mundial en Sudamérica—espacios vibrantes donde el deporte, la comunidad y la cultura se encuentran. Ya seas un jugador experimentado o estés descubriendo el juego, Nexo es tu nuevo hogar para el movimiento, la conexión y la diversión.",
    },
    montevideo: {
      title: "Primera Parada: Montevideo",
      content:
        "Nuestro primer club abre pronto en Montevideo, Uruguay. Espera canchas increíbles, un clubhouse con café y tienda, eventos sociales y las mejores vibras de la ciudad.",
    },
    players: {
      title: "Construido con los Mejores",
      content:
        "El futuro del pickleball está siendo moldeado por quienes mejor lo conocen. Los jugadores internacionales de primer nivel Federico Staksrud (argentino) y Eric Oncins (brasileño) forman parte del camino de Nexo, aportando experiencia de clase mundial para impulsar el crecimiento del deporte y la comunidad en toda Sudamérica.",
    },
    newsletter: {
      title: "Sé el primero en saber",
      subtitle:
        "Recibe actualizaciones, invitaciones de acceso anticipado y contenido exclusivo a medida que abrimos las puertas.",
      button: "Únete a la lista",
    },
    investing: {
      title: "Interesado en Invertir",
      content:
        "El próximo capítulo del pickleball se está escribiendo en Sudamérica. Si te interesa invertir y conocer más sobre nuestra visión y estrategia de crecimiento, nos encantaría conectar contigo.",
      button: "Contáctanos",
    },
    social: {
      title: "Sigue el viaje",
    },
  },
  pt: {
    hero: {
      title: "Nexo Pickleball",
      subtitle: "Liderando o lançamento e o crescimento do pickleball em toda a América do Sul.",
    },
    vision: {
      title: "Nossa Visão",
      content:
        "Estamos construindo clubes de pickleball de classe mundial na América do Sul—espaços vibrantes onde esporte, comunidade e cultura se encontram. Seja você um jogador experiente ou esteja descobrindo o jogo agora, o Nexo é o seu novo lar para movimento, conexão e diversão.",
    },
    montevideo: {
      title: "Primeira Parada: Montevidéu",
      content:
        "Nosso primeiro clube abre em breve em Montevidéu, Uruguai. Espere quadras incríveis, um clubhouse com café e loja, eventos sociais e as melhores vibes da cidade.",
    },
    players: {
      title: "Construído com os Melhores",
      content:
        "O futuro do pickleball está sendo moldado por quem realmente conhece o jogo. Os atletas internacionais de alto nível Federico Staksrud (argentino) e Eric Oncins (brasileiro) fazem parte da jornada da Nexo, trazendo experiência de classe mundial para expandir o esporte e a comunidade em toda a América do Sul.",
    },
    newsletter: {
      title: "Seja o primeiro a saber",
      subtitle:
        "Receba atualizações, convites para acesso antecipado e conteúdo exclusivo à medida que abrimos as portas.",
      button: "Entrar na lista",
    },
    investing: {
      title: "Interessado em Investir",
      content:
        "O próximo capítulo do pickleball está sendo escrito na América do Sul. Se você tem interesse em investir e conhecer mais sobre nossa visão e estratégia de crescimento, teremos prazer em nos conectar com você.",
      button: "Entre em Contato",
    },
    social: {
      title: "Siga a jornada",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Nexo Pickleball"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded font-bold text-sm transition-all ${
                  lang === "en"
                    ? "bg-nexo-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-2 rounded font-bold text-sm transition-all ${
                  lang === "es"
                    ? "bg-nexo-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("pt")}
                className={`px-4 py-2 rounded font-bold text-sm transition-all ${
                  lang === "pt"
                    ? "bg-nexo-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8 lg:px-12 bg-linear-to-br from-nexo-cyan/5 via-white to-nexo-lime/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-nexo-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-nexo-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-12">
            <Image
              src="/images/logo.png"
              alt="Nexo Pickleball"
              width={300}
              height={150}
              className="h-32 lg:h-40 w-auto"
            />
          </div>
          <p className="text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
            {t.hero.subtitle}
          </p>

          {/* Visual divider */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-16 h-1 bg-nexo-cyan rounded-full"></div>
            <div className="w-16 h-1 bg-nexo-lime rounded-full"></div>
            <div className="w-16 h-1 bg-nexo-cyan rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-8 lg:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-nexo-lime px-6 py-2 rounded-full text-nexo-dark font-bold mb-6 text-sm uppercase tracking-wider">
                {lang === "en" && "Our Mission"}
                {lang === "es" && "Nuestra Misión"}
                {lang === "pt" && "Nossa Missão"}
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-nexo-dark leading-tight">
                {t.vision.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.vision.content}
              </p>
            </div>

            {/* Paddle Images with hover effects */}
            <div className="flex justify-center gap-8 lg:gap-4">
              <div className="flex items-end hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta1.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-44 lg:h-52 object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex items-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta2.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-52 lg:h-64 object-contain drop-shadow-2xl"
                />
              </div>
              <div className="flex items-end hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta3.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-44 lg:h-52 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montevideo Section */}
      <section className="py-24 px-8 lg:px-12 bg-nexo-cyan relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute left-0 top-0 h-full w-auto" viewBox="0 0 1305 810" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20.7517 -4.70221L227.807 857.274L-77.8457 865.63V165.996L-20.7517 -4.70221Z" fill="white"/>
            <path d="M-11.6302 20.3818L230.088 880.078" stroke="white" strokeWidth="34"/>
            <path d="M92.0712 357.503L-176.238 574.957" stroke="white" strokeWidth="34"/>
            <path d="M131.865 516.358L377.72 379.835C392.565 370.759 410.3 367.649 427.348 371.134L685.247 423.846C699.278 426.714 713.854 425.129 726.941 419.311L1207.52 205.68" stroke="white" strokeWidth="33.103"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Uruguay Map */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/uruguay2.png"
                  alt="Uruguay Map"
                  width={600}
                  height={600}
                  className="w-full max-w-lg h-auto object-contain relative z-10"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-white order-1 lg:order-2">
              <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-white font-bold mb-6 text-sm uppercase tracking-wider">
                {lang === "en" && "Coming Soon"}
                {lang === "es" && "Próximamente"}
                {lang === "pt" && "Em Breve"}
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                {t.montevideo.title}
              </h2>
              <p className="text-xl leading-relaxed opacity-95">
                {t.montevideo.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-24 px-8 lg:px-12 bg-linear-to-br from-nexo-dark via-nexo-dark to-nexo-cyan/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-nexo-lime px-6 py-2 rounded-full text-nexo-dark font-bold mb-6 text-sm uppercase tracking-wider">
              {lang === "en" && "World-Class Team"}
              {lang === "es" && "Equipo de Clase Mundial"}
              {lang === "pt" && "Equipe de Classe Mundial"}
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
              {t.players.title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t.players.content}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Federico Staksrud */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-nexo-cyan/20">
              <div className="flex gap-6 items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-nexo-cyan/30 rounded-full blur-lg"></div>
                  <Image
                    src="/images/fede.png"
                    alt="Federico Staksrud"
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full object-cover relative z-10 border-4 border-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-nexo-dark mb-2">FEDERICO STAKSRUD</h3>
                  <p className="text-base text-gray-600">
                    {lang === "en" && "Argentina"}{lang === "es" && "Argentina"}{lang === "pt" && "Argentina"} 🇦🇷
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-nexo-cyan/10 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-nexo-cyan">#2</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {lang === "en" && "Singles"}
                    {lang === "es" && "Singles"}
                    {lang === "pt" && "Singles"}
                  </p>
                </div>
                <div className="bg-nexo-cyan/10 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-nexo-cyan">#3</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {lang === "en" && "Doubles"}
                    {lang === "es" && "Dobles"}
                    {lang === "pt" && "Duplas"}
                  </p>
                </div>
              </div>
            </div>

            {/* Eric Oncins */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-nexo-lime/20">
              <div className="flex gap-6 items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-nexo-lime/30 rounded-full blur-lg"></div>
                  <Image
                    src="/images/eric.png"
                    alt="Eric Oncins"
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full object-cover relative z-10 border-4 border-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-nexo-dark mb-2">ERIC ONCINS</h3>
                  <p className="text-base text-gray-600">
                    {lang === "en" && "Brazil"}{lang === "es" && "Brasil"}{lang === "pt" && "Brasil"} 🇧🇷
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-nexo-lime/20 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-nexo-dark">#49</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {lang === "en" && "Singles"}
                    {lang === "es" && "Singles"}
                    {lang === "pt" && "Singles"}
                  </p>
                </div>
                <div className="bg-nexo-lime/20 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-nexo-dark">#25</div>
                  <p className="text-sm text-gray-600 mt-1">
                    {lang === "en" && "Doubles"}
                    {lang === "es" && "Dobles"}
                    {lang === "pt" && "Duplas"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logo */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow max-w-xs">
              <Image
                src="/images/sixzero.png"
                alt="SIX ZERO"
                width={200}
                height={100}
                className="w-auto h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-8 lg:px-12 bg-linear-to-br from-nexo-lime/10 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-nexo-dark">
            {t.newsletter.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t.newsletter.subtitle}
          </p>
          <a
            href="mailto:asher@nexopickleball.com?subject=Join the List"
            className="bg-nexo-cyan text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-nexo-dark transition-all inline-block"
          >
            {t.newsletter.button}
          </a>
        </div>
      </section>

      {/* Investing Section */}
      <section className="py-20 px-8 lg:px-12 bg-nexo-dark">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t.investing.title}
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            {t.investing.content}
          </p>
          <a
            href="mailto:asher@nexopickleball.com?subject=Investment Inquiry"
            className="bg-nexo-lime text-nexo-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-white transition-all inline-block"
          >
            {t.investing.button}
          </a>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 px-8 lg:px-12 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-nexo-dark">
            {t.social.title}
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://instagram.com/nexo.pickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-nexo-cyan transition-colors text-lg"
            >
              Instagram @nexo.pickleball
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://linkedin.com/company/nexo-pickleball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-nexo-cyan transition-colors text-lg"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:asher@nexopickleball.com"
              className="text-gray-700 hover:text-nexo-cyan transition-colors text-lg"
            >
              asher@nexopickleball.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/logo.png"
            alt="Nexo Pickleball"
            width={100}
            height={50}
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm">
            &copy; 2024 Nexo Pickleball
          </p>
        </div>
      </footer>
    </div>
  );
}
