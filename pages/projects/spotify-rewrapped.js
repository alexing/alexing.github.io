import Link from 'next/link'

export default function SpotifyRewrapped() {
  return (
    <div className="min-h-screen bg-brand text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <h1 className="text-3xl font-bold mb-2">spotify rewrapped</h1>

        <div className="mb-6 text-subtle space-x-4">
          <a href="https://github.com/alexing/spotify_rewrapped" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://medium.com/data-science/spotify-rewrapped-e2a7cc94fb4e" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">medium</a>
        </div>

        <section className="prose prose-invert max-w-none mb-12">
          <p>
            <strong>Spotify ReWrapped</strong> is a personal data investigation into whether Spotify's end-of-year Wrapped summaries are actually accurate. Spoiler: <strong>mine wasn’t</strong>.
          </p>
          <br/>
          <p>
            I pulled my own listening data using both the Spotify and Last.fm APIs and ran a full <strong>time series analysis</strong> to compare what I’d actually heard versus what Spotify claimed.
          </p>
          <br/>
          <p>
            Turns out, they had missed out on some of my top artists — and added a few that didn’t match the data at all.
          </p>
          <br/>
          <p>
            This project uses:
          </p>
          <ul>
            <li><strong>Spotipy</strong> and <strong>Pylast</strong> for collecting listening history</li>
            <li><strong>Pandas</strong>, <strong>Matplotlib</strong> and <strong>Seaborn</strong> for analysis and visualization</li>
            <li>Charts and visuals to explore musical habits over time</li>
          </ul>
          <br/>
          <p>
            It was a fun reminder that personal data ≠ insight — unless you're willing to ask the right questions. Full story is on <a href="https://medium.com/data-science/spotify-rewrapped-e2a7cc94fb4e" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">medium</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">visuals</h2>
          <div className="space-y-8">
            <div>
              <img
                src="https://raw.githubusercontent.com/alexing/spotify_rewrapped/master/img/artists.png"
                alt="Top artists comparison"
                className="w-full rounded-lg"
              />
              <p className="text-sm text-subtle mt-2 text-center">
                📊 Who I actually listened to vs. who Spotify said I did.
              </p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/alexing/spotify_rewrapped/master/img/charly_seru.png"
                alt="Serú Girán and Charly García listening trend"
                className="w-full rounded-lg"
              />
              <p className="text-sm text-subtle mt-2 text-center">
                📈 Time series chart of plays: Serú Girán and Charly García take over the end of the year.
              </p>
            </div>
          </div>
        </section>

        <div>
          <Link href="/#projects" className="text-accent underline">← back to all projects</Link>
        </div>
      </main>
    </div>
  )
}
