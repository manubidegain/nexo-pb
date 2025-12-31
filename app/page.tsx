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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const t = translations[lang];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, language: lang }),
      });

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: lang === 'en' ? 'Thanks for joining!' : lang === 'es' ? '¡Gracias por unirte!' : 'Obrigado por se juntar!',
        });
        setName('');
        setEmail('');
      } else {
        const errorData = await response.json();
        if (errorData.error === 'Email already registered') {
          setSubmitMessage({
            type: 'error',
            text: lang === 'en' ? 'This email is already on the list!' : lang === 'es' ? '¡Este email ya está en la lista!' : 'Este email já está na lista!',
          });
        } else {
          throw new Error('Failed to submit');
        }
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: lang === 'en' ? 'Something went wrong. Please try again.' : lang === 'es' ? 'Algo salió mal. Por favor intenta de nuevo.' : 'Algo deu errado. Por favor, tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="pt-24 pb-16 px-6 lg:pt-28 lg:pb-20 lg:px-12 bg-linear-to-br from-nexo-cyan/5 via-white to-nexo-lime/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-nexo-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-nexo-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 lg:mb-8">
            <Image
              src="/images/logo.png"
              alt="Nexo Pickleball"
              width={300}
              height={150}
              className="h-24 lg:h-32 xl:h-40 w-auto"
            />
          </div>
          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-4 font-medium px-4">
            {t.hero.subtitle}
          </p>

          {/* Visual divider */}
          <div className="flex justify-center gap-2 mt-6 lg:mt-8">
            <div className="w-12 lg:w-16 h-1 bg-nexo-cyan rounded-full"></div>
            <div className="w-12 lg:w-16 h-1 bg-nexo-lime rounded-full"></div>
            <div className="w-12 lg:w-16 h-1 bg-nexo-cyan rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 lg:py-24 lg:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block bg-nexo-lime px-4 lg:px-6 py-2 rounded-full text-nexo-dark font-bold mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-wider">
                {lang === "en" && "Our Mission"}
                {lang === "es" && "Nuestra Misión"}
                {lang === "pt" && "Nossa Missão"}
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-nexo-dark leading-tight">
                {t.vision.title}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {t.vision.content}
              </p>
            </div>

            {/* Paddle Images with hover effects */}
            <div className="flex justify-center gap-4 lg:gap-4">
              <div className="flex items-end hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta1.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-32 lg:h-52 object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex items-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta2.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-40 lg:h-64 object-contain drop-shadow-2xl"
                />
              </div>
              <div className="flex items-end hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/paleta3.png"
                  alt="Pickleball paddle"
                  width={140}
                  height={210}
                  className="w-auto h-32 lg:h-52 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montevideo Section */}
      <section className="py-16 px-6 lg:py-24 lg:px-12 bg-nexo-cyan relative overflow-hidden">
        {/* Background SVG - hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute left-0 top-0 h-full w-auto" viewBox="0 0 1305 810" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20.7517 -4.70221L227.807 857.274L-77.8457 865.63V165.996L-20.7517 -4.70221Z" fill="white"/>
            <path d="M-11.6302 20.3818L230.088 880.078" stroke="white" strokeWidth="34"/>
            <path d="M92.0712 357.503L-176.238 574.957" stroke="white" strokeWidth="34"/>
            <path d="M131.865 516.358L377.72 379.835C392.565 370.759 410.3 367.649 427.348 371.134L685.247 423.846C699.278 426.714 713.854 425.129 726.941 419.311L1207.52 205.68" stroke="white" strokeWidth="33.103"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Uruguay Map */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/uruguay2.png"
                  alt="Uruguay Map"
                  width={600}
                  height={600}
                  className="w-full max-w-xs lg:max-w-lg h-auto object-contain relative z-10"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-white order-1 lg:order-2">
              <div className="inline-block bg-white/20 px-4 lg:px-6 py-2 rounded-full text-white font-bold mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-wider">
                {lang === "en" && "Coming Soon"}
                {lang === "es" && "Próximamente"}
                {lang === "pt" && "Em Breve"}
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                {t.montevideo.title}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-95">
                {t.montevideo.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-16 px-6 lg:py-24 lg:px-12 bg-linear-to-br from-nexo-dark via-nexo-dark to-nexo-cyan/20 relative overflow-hidden">
        {/* Pickleball Net SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto" width="612" height="242" viewBox="0 0 612 242" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.133 159.687L185.36 241.417H208.783L180.024 159.687H157.133Z" fill="#DAF928"/>
            <path d="M0 241.417H4.77L0 226.079V241.417Z" fill="#DAF928"/>
            <path d="M131.861 0L170.203 108.77L188.142 108.777C191.151 108.779 194.167 108.776 197.176 108.777V158.71H191.438V157.855C190.138 157.853 188.832 157.858 187.531 157.855L217.808 244.169H615.309V55.448C615.309 24.825 590.484 0 559.861 0H131.861Z" fill="#DAF928"/>
            <path d="M-10.2449 159.686V167.255L13.6841 244.168H178.131L177.494 241.936C168.738 216.684 160.086 191.412 151.33 166.16C150.74 164.46 150.247 162.714 149.629 161.025C149.531 160.758 149.193 159.756 149.001 159.699L-10.2449 159.686Z" fill="#DAF928"/>
            <path d="M-10.2449 24.1726V108.777H131.617L102.446 24.2266L-10.2449 24.1726Z" fill="#DAF928"/>
            <path d="M124.17 -2.28882e-05H-10.245V18.557L108.307 18.61L139.553 108.777H162.26L124.17 -2.28882e-05Z" fill="#DAF928"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block bg-nexo-lime px-4 lg:px-6 py-2 rounded-full text-nexo-dark font-bold mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-wider">
              {lang === "en" && "World-Class Team"}
              {lang === "es" && "Equipo de Clase Mundial"}
              {lang === "pt" && "Equipe de Classe Mundial"}
            </div>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-white leading-tight">
              {t.players.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              {t.players.content}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Federico Staksrud */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-nexo-cyan/20">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-center mb-6">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-nexo-cyan/30 rounded-full blur-lg"></div>
                  <Image
                    src="/images/fede.png"
                    alt="Federico Staksrud"
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover relative z-10 border-4 border-white"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-nexo-dark mb-1 lg:mb-2">FEDERICO STAKSRUD</h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    {lang === "en" && "Argentina"}{lang === "es" && "Argentina"}{lang === "pt" && "Argentina"} 🇦🇷
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-nexo-cyan/10 rounded-lg p-3 lg:p-4 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-nexo-cyan">#2</div>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    {lang === "en" && "Singles"}
                    {lang === "es" && "Singles"}
                    {lang === "pt" && "Singles"}
                  </p>
                </div>
                <div className="bg-nexo-cyan/10 rounded-lg p-3 lg:p-4 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-nexo-cyan">#3</div>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    {lang === "en" && "Doubles"}
                    {lang === "es" && "Dobles"}
                    {lang === "pt" && "Duplas"}
                  </p>
                </div>
              </div>
            </div>

            {/* Eric Oncins */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-nexo-lime/20">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-center mb-6">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-nexo-lime/30 rounded-full blur-lg"></div>
                  <Image
                    src="/images/eric.png"
                    alt="Eric Oncins"
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover relative z-10 border-4 border-white"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-nexo-dark mb-1 lg:mb-2">ERIC ONCINS</h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    {lang === "en" && "Brazil"}{lang === "es" && "Brasil"}{lang === "pt" && "Brasil"} 🇧🇷
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-nexo-lime/20 rounded-lg p-3 lg:p-4 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-nexo-dark">#49</div>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    {lang === "en" && "Singles"}
                    {lang === "es" && "Singles"}
                    {lang === "pt" && "Singles"}
                  </p>
                </div>
                <div className="bg-nexo-lime/20 rounded-lg p-3 lg:p-4 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-nexo-dark">#25</div>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    {lang === "en" && "Doubles"}
                    {lang === "es" && "Dobles"}
                    {lang === "pt" && "Duplas"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 lg:py-20 lg:px-12 bg-linear-to-br from-nexo-lime/10 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 text-nexo-dark">
            {t.newsletter.title}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 px-4">
            {t.newsletter.subtitle}
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto px-4">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={
                  lang === 'en' ? 'Your name' :
                  lang === 'es' ? 'Tu nombre' :
                  'Seu nome'
                }
                required
                className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-lg border-2 border-gray-300 focus:border-nexo-cyan focus:outline-none text-base lg:text-lg"
                disabled={isSubmitting}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  lang === 'en' ? 'Your email' :
                  lang === 'es' ? 'Tu email' :
                  'Seu email'
                }
                required
                className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-lg border-2 border-gray-300 focus:border-nexo-cyan focus:outline-none text-base lg:text-lg"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nexo-cyan text-white px-8 lg:px-10 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-nexo-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  lang === 'en' ? 'Joining...' :
                  lang === 'es' ? 'Uniéndote...' :
                  'Juntando...'
                ) : t.newsletter.button}
              </button>
            </div>

            {submitMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm lg:text-base ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Investing Section */}
      <section className="py-16 px-6 lg:py-20 lg:px-12 bg-nexo-dark">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">
            {t.investing.title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
            {t.investing.content}
          </p>
          <a
            href="mailto:asher@nexopickleball.com?subject=Investment Inquiry"
            className="bg-nexo-lime text-nexo-dark px-6 lg:px-8 py-3 rounded-lg font-bold text-base lg:text-lg hover:bg-white transition-all inline-block"
          >
            {t.investing.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/logo.png"
              alt="Nexo Pickleball"
              width={120}
              height={60}
              className="h-10 w-auto"
            />

            {/* Social Icons */}
            <div className="flex gap-6 items-center">
              <a
                href="https://instagram.com/nexopickle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
                title="@nexopickle"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              <a
                href="https://linkedin.com/company/nexo-pickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Image
                  src="/images/linkedin.svg.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              <a
                href="mailto:asher@nexopickleball.com"
                className="hover:scale-110 transition-transform flex items-center"
                aria-label="Email"
                title="asher@nexopickleball.com"
              >
                <span className="text-4xl leading-none">✉️</span>
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              &copy; 2026 Nexo Pickleball
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
