import Link from 'next/link'

export default function MusicMagal() {
  return (
    <div className="min-h-screen bg-brand text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <h1 className="text-3xl font-bold mb-2">music magal</h1>

        <div className="mb-6 text-subtle space-x-4">
          <a href="https://github.com/alexing/musicmagal" className="text-accent hover:underline" target="_blank">github</a>
          <a href="https://hackernoon.com/musicmagal-c93e9dabd01a" className="text-accent hover:underline" target="_blank">medium</a>
        </div>

        <section className="prose prose-invert max-w-none mb-12">
          <p><strong>MusicMagal</strong> is a group music recommendation system designed to solve a very real problem: creating a playlist that everyone in the group actually likes.</p>
          <br/>
          <p>It works by pulling user data from <strong>Last.fm</strong> for a group of people, then modeling their musical preferences using an <strong>alternating least squares</strong> (ALS) recommender and <strong>item2vec</strong> embeddings.</p>
          <br/>
          <p>The model produces a playlist of n songs optimized to satisfy m users. The final playlist is automatically created and saved to <strong>Spotify</strong> via its Web API — no manual curation needed.</p>
          <br/>
          <p>This project combined collaborative filtering techniques with NLP-inspired embedding strategies to reflect not just what people like individually, but what resonates across a group. It was a fun technical challenge with a clear human-centered use case.</p>
          <br/>
          <p>You can explore the full repo <a href="https://github.com/alexing/musicmagal" target="_blank" className="text-accent hover:underline">here</a> or read the full writeup on <a href="https://hackernoon.com/musicmagal-c93e9dabd01a" target="_blank" className="text-accent hover:underline">Hackernoon</a>.</p>
        </section>

        <div>
          <Link href="/#projects" className="text-accent underline">← back to all projects</Link>
        </div>
      </main>
    </div>
  )
}
