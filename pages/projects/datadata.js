import Link from 'next/link';
import Script from 'next/script'

export default function DataData() {
    return (
        <div className="min-h-screen bg-brand text-foreground w-full">
            <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
                <h1 className="text-3xl font-bold mb-2">data, data</h1>

                <div className="mb-6 text-subtle space-x-4">
                    <a
                        href="https://github.com/alexing/datadata"
                        className="text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <a
                        href="https://medium.com/data-science/data-data-1fedfac91c79"
                        className="text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        medium (english)
                    </a>
                    <a
                        href="https://medium.com/datos-y-ciencia/data-data-b82201ec1cf4"
                        className="text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        medium (español)
                    </a>
                </div>

                <section className="prose prose-invert max-w-none mb-12">
                    <p>
                        <strong>Data, data</strong> is a deep dive into the sonic and lyrical universe of <strong>Jorge
                        Drexler</strong> — exploring his work through the lens of data science and music theory.
                    </p>
                    <br/>
                    <p>
                        I analyzed all of Drexler’s officially released songs using APIs, scraped lyrics, and combined
                        tools from natural language processing, emotion modeling, and music theory. The result? A
                        multi-layered view of the artist’s evolution, themes, and creative patterns.
                    </p>
                    <br/>
                    <p>
                    </p>
                    <ul>
                        <li>For data collection i
                            used <strong>pandas</strong>, <strong>BeautifulSoup</strong>, <strong>Spotipy</strong>,
                            the <strong>Genius API</strong>, and <strong>Spotify's Web API</strong></li>
                        <li>Analysis and modeling
                            using <strong>pandas</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>, <strong>Seaborn</strong>, <strong>scikit-learn</strong>, <strong>SciPy</strong>, <strong>NLTK</strong>, <strong>wordcloud</strong>,
                            and <strong>py-lex</strong></li>
                        <li>All wrapped in <strong>Python 3</strong>, <strong>Jupyter Notebook</strong>, and the
                            occasional <strong>PyCharm</strong> pass
                        </li>
                    </ul>
                    <br/>
                    <p>
                        Beyond the data, what made this special was that Jorge Drexler himself acknowledged the work —
                        in <a href="https://twitter.com/drexlerjorge/status/1053024431893831682" className="text-accent hover:underline" target="_blank">a tweet</a> that completely made my year.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">visuals</h2>
                    <div className="space-y-8">
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/emotions_through_time.jpg?raw=true"
                                alt="Emotions through time"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">🧠 Emotional trends in Drexler's lyrics
                                over time</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/tempo_by_albums.jpg?raw=true"
                                alt="Tempo by albums"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">🎵 Tempo patterns by album — from slow
                                ballads to faster experiments</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/keys.jpg?raw=true"
                                alt="Musical keys"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">🎼 Most common keys used across his
                                discography</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/top_songs_more_words.jpg?raw=true"
                                alt="Top songs by word count"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">📝 The songs with the most lyrical
                                density</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/wordcloud.jpg?raw=true"
                                alt="Wordcloud"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">☁️ Wordcloud of Drexler’s most frequent
                                words</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/lyrical_density_v_lexical_density.jpg?raw=true"
                                alt="Lyrical vs lexical density"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">📚 Comparing lyrical and lexical
                                complexity</p>
                        </div>
                        <div>
                            <img
                                src="https://github.com/alexing/datadata/raw/master/img/correlation_in_emotions.jpg?raw=true"
                                alt="Correlation between emotions"
                                className="w-full rounded-lg"
                            />
                            <p className="text-sm text-center text-subtle mt-2">🧩 Correlation matrix between emotional
                                markers</p>
                        </div>
                    </div>
                </section>
<section className="mb-12">
  <h2 className="text-xl font-semibold mb-6">from the artist himself</h2>
  <div className="flex justify-center">
    <blockquote
      className="twitter-tweet"
      data-theme="dark"
      data-align="center"
    >
      <a href="https://twitter.com/drexlerjorge/status/1053024431893831682"></a>
    </blockquote>
  </div>
  <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
</section>

                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-2">press</h2>
                    <ul className="list-disc list-inside text-subtle space-y-1">
                        <li>
                            <a href="https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350"
                               className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                                El Observador
                            </a> – one of Uruguay's major newspapers (🇺🇾 Spanish)
                        </li>
                        <li>
                            <a href="https://www.redaccion.com.ar/inmersion-en-el-mundo-de-jorge-drexler-a-traves-de-la-exploracion-estadistica-de-su-letra-y-musica/"
                               className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                                Redacción
                            </a> – Argentinean digital media spotlight (🇦🇷 Spanish)
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
