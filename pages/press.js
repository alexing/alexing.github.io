import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Press() {
  return (
    <div className="bg-brand min-h-screen text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <motion.h1
          className="text-3xl font-bold mb-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          press
        </motion.h1>

        <p className="text-subtle mb-10 leading-relaxed">
          interviews, features, and guest appearances across podcasts, tech media, and music outlets — mostly
          around <span className="text-accent">bewildering brain</span>, <span className="text-accent">data data</span>, and a few other side quests.
        </p>

        <ul className="space-y-4">
          <li>
            🎙️ <a href="https://open.spotify.com/episode/3lt9tVvCFHpcBx2F7uORXL" className="text-accent hover:underline" target="_blank" rel="noopener">
              hummus and tech
            </a> – guest in one of israel’s top tech podcasts. chat on data, jobs, and moving industries.
          </li>
          <li>
            🎙️ <a href="https://web.metro951.com/metronow/44029/?alex-ingberg-creador-del-bot-de-spinetta" className="text-accent hover:underline" target="_blank" rel="noopener">
              radio metro
            </a> – featured in “días como estos” about the bewildering brain project (🇦🇷 spanish).
          </li>
          <li>
            📰 <a href="https://www.lanacion.com.ar/tecnologia/creo-bot-compone-letras-estilo-luis-alberto-nid2246043" className="text-accent hover:underline" target="_blank" rel="noopener">
              la nación
            </a> – argentina’s leading newspaper. article on my Spinetta lyrics generator (🇦🇷 spanish).
          </li>
          <li>
            📰 <a href="https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350" className="text-accent hover:underline" target="_blank" rel="noopener">
              el observador
            </a> – uruguay’s national press. coverage on data data (🇺🇾 spanish).
          </li>
          <li>
            📰 <a href="https://www.redaccion.com.ar/inmersion-en-el-mundo-de-jorge-drexler-a-traves-de-la-exploracion-estadistica-de-su-letra-y-musica/" className="text-accent hover:underline" target="_blank" rel="noopener">
              redacción
            </a> – modern argentinean outlet. deep dive into Jorge Drexler through data (🇦🇷 spanish).
          </li>
          <li>
            📰 <a href="https://silencio.com.ar/noticias/lo-ultimo/crean-un-bot-capaz-de-escribir-en-el-estilo-de-luis-alberto-spinetta-40784/" className="text-accent hover:underline" target="_blank" rel="noopener">
              silencio
            </a> – music site from argentina. coverage on the Spinetta version of the lyrics bot (🇦🇷 spanish).
          </li>
          <li>
            📰 <a href="https://www.calcalist.co.il/local/articles/0,7340,L-3747723,00.html" className="text-accent hover:underline" target="_blank" rel="noopener">
              calcalist
            </a> – leading tech & econ newspaper in israel. interview on immigration + the local industry (🇮🇱 hebrew).
          </li>
          <li>
            🎙️ <a href="http://www.sitioandino.com.ar/n/294069/?fbclid=IwAR2GgV3ENxMMnj0va85gCHNWEbwWM7d4dljtWrqmWQFshCUWT7KpvnoLAJY" className="text-accent hover:underline" target="_blank" rel="noopener">
              radio andina
            </a> – interview on “todo por la tarde” about bewildering brain (🇦🇷 spanish).
          </li>
          <li>
            🎙️ <a href="http://www.radionacional.com.ar/un-bot-escribe-canciones-como-el-flaco/" className="text-accent hover:underline" target="_blank" rel="noopener">
              radio nacional
            </a> – guest in “cómo conseguir cheques”. ai + Spinetta convo (🇦🇷 spanish).
          </li>
        </ul>

        <div className="mt-16">
          <Link href="/" className="text-accent underline">← back home</Link>
        </div>
      </main>
    </div>
  )
}
