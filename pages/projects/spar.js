import Link from 'next/link'

export default function Spar() {
    return (
        <div className="min-h-screen bg-brand text-foreground w-full">
            <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
                <h1 className="text-3xl font-bold mb-2">spar</h1>

                <div className="mb-6 text-subtle space-x-4">
                    <a href="https://github.com/alexing/spar" className="text-accent hover:underline"
                       target="_blank">github</a>
                    <a href="https://open.spotify.com/playlist/3CqUnWFXQIHH0fz0zhqYUZ?si=dd425e70b25c424d"
                       className="text-accent hover:underline" target="_blank">running playlist</a>
                </div>

                <section className="prose prose-invert max-w-none mb-12">
                    <p><strong>SPAR</strong> — short for <em>Spotify Playlist Auto-Randomizer</em> — is a tiny
                        automation project I built to fix something that’s bothered me for years: <strong>Spotify’s
                            shuffle doesn’t really shuffle</strong>.</p>
                    <br/>
                    <p>I run a lot, and my playlist is sacred. I have there more than 500 songs there and I don't really
                        care about order; on the contrary, I care about <strong>disorder</strong>. But time after time,
                        Spotify’s shuffle kept repeating the same 10–15 tracks, ignoring big chunks of the playlist, and
                        locking into weird loops. <br/>And it’s not just me — this is a well-documented pain across
                    Reddit and the Spotify community forums. People call it “pseudo-random,” “broken,” or just “bad UX.”
                    Some even reverse-engineered its behavior and found bias in how it clusters songs by artist or
                    genre. Others just gave up and manually reordered their playlists before every run.
                </p>
                <br/>
                <p>Instead of dealing with that mess, I built <strong>SPAR</strong>: a GitHub Action that runs weekly
                    and truly randomizes my running playlist. It reorders all songs using the Spotify API — no repeats,
                    no favoritism, just pure, fresh randomness every time I hit the pavement.</p>
                <br/>
                <p>It updates my main<a href="https://open.spotify.com/playlist/3CqUnWFXQIHH0fz0zhqYUZ?si=dd425e70b25c424d"
                       className="text-accent hover:underline mx-1"
                       target="_blank">running playlist</a>every Sunday, then my Garmin watch then syncs the playlist at night so it’s always ready before the first workout
                    of the week.
                </p><br/>
                <p>Built with Python, deployed as a GitHub Action, and quietly solving a niche but real-life problem —
                    my favorite kind of project. Source code is
                    <a href="https://github.com/alexing/spar" className="text-accent hover:underline mx-1"
                       target="_blank">here</a>.
                </p>
            </section>

            <div>
                <Link href="/#projects" className="text-accent underline">← back to all projects</Link>
            </div>
        </main>
</div>
)
}
