import Link from 'next/link'

export default function BewilderingBrain() {
  return (
    <div className="min-h-screen bg-brand text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <h1 className="text-3xl font-bold mb-2">bewildering brain</h1>

        <div className="mb-6 text-subtle space-x-4">
          <a href="https://github.com/alexing/lyrics_prediciton" className="text-accent hover:underline" target="_blank">github</a>
          <a href="https://medium.com/@alexing/bewildering-brain-332d5192e95b" className="text-accent hover:underline" target="_blank">medium (Bob Dylan)</a>
          <a href="https://medium.com/datos-y-ciencia/oraciones-artificiales-88b8c66a6e3d" className="text-accent hover:underline" target="_blank">medium (Luis Alberto Spinetta - <em>in spanish</em>)</a>
        </div>

        <section className="prose prose-invert max-w-none mb-12">
          <p><strong>Bewildering Brain</strong> explores whether machines can write like poets — specifically Bob Dylan and Luis Alberto Spinetta. I trained both <strong>Markov Chains</strong> and Recurrent Neural Networks (<strong>RNNs</strong>) to generate lyrics in their styles and compared their outputs.</p>
          <br/>
          <p>The lyrics were collected using the <strong>Genius API</strong> and <strong>Spotify’s Web API</strong>. The goal was not only to see which model performed better technically, but also which one better captured the essence and tone of each artist.</p>
          <br/>
          <p>Two modeling approaches were used:</p>
          <ul>
            <li><strong>Markov Chains</strong> – predicting each word based only on the one before it, creating semi-random and often surprising lyric chains.</li>
            <li><strong>RNNs (LSTMs)</strong> – trained to retain longer-term patterns, producing more cohesive lines that sometimes felt eerily human.</li>
          </ul>
          <br/>
          <p>The result was a creative experiment that sat somewhere between data science and digital art. It sparked curiosity across tech, media, and music circles — and showed how machine learning can go beyond analytics and into culture.</p>
          <br/>
          <p>For technical details, code, or to remix it with your own favorite artist, you can check out the <a href="https://github.com/alexing/lyrics_prediciton" target="_blank" className="text-accent hover:underline">github repo</a>.</p>
          <p>To read the Medium article in Spanish published in <strong>Ciencia y Datos</strong> about L. A. Spinetta, go <a href="https://medium.com/@alexing/oraciones-artificiales-88b8c66a6e3d" target="_blank" className="text-accent hover:underline">here</a>. </p>
          <p>To read the one published in <strong>Towards Data Science</strong> about Bob Dylan, go <a href="https://medium.com/data-science/bewildering-brain-332d5192e95b" target="_blank" className="text-accent hover:underline">here</a>. </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">press</h2>
          <ul className="list-disc list-inside text-subtle space-y-1">
            <li>
              <a href="https://web.metro951.com/metronow/44029/?alex-ingberg-creador-del-bot-de-spinetta" className="text-accent hover:underline" target="_blank">
                Radio Metro
              </a> – guest in “Días como estos” about the project (🇦🇷 Spanish)
            </li>
            <li>
              <a href="https://www.lanacion.com.ar/tecnologia/creo-bot-compone-letras-estilo-luis-alberto-nid2246043" className="text-accent hover:underline" target="_blank">
                La Nación
              </a> – feature in Argentina’s leading newspaper (🇦🇷 Spanish)
            </li>
            <li>
              <a href="https://silencio.com.ar/noticias/lo-ultimo/crean-un-bot-capaz-de-escribir-en-el-estilo-de-luis-alberto-spinetta-40784/" className="text-accent hover:underline" target="_blank">
                Silencio.com.ar
              </a> – music press coverage (🇦🇷 Spanish)
            </li>
            <li>
              <a href="http://www.sitioandino.com.ar/n/294069/?fbclid=IwAR2GgV3ENxMMnj0va85gCHNWEbwWM7d4dljtWrqmWQFshCUWT7KpvnoLAJY" className="text-accent hover:underline" target="_blank">
                Radio Andina
              </a> – “Todo por la tarde” segment (🇦🇷 Spanish)
            </li>
            <li>
              <a href="http://www.radionacional.com.ar/un-bot-escribe-canciones-como-el-flaco/" className="text-accent hover:underline" target="_blank">
                Radio Nacional
              </a> – “Cómo conseguir cheques” interview (🇦🇷 Spanish)
            </li>
          </ul>
        </section>

        <div>
          <Link href="/#projects" className="text-accent underline">← back to all projects</Link>
        </div>
      </main>
    </div>
  )
}
