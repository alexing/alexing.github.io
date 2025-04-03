import Link from 'next/link';

export default function Links() {
    return (
        <div className="min-h-screen bg-brand text-foreground w-full">
            <main className="max-w-md mx-auto px-6 py-20 font-sans text-center">
                <h1 className="text-3xl font-bold mb-2 text-left">links</h1>
                <p className="text-subtle mb-8 text-left">main thread & side quests</p>

                <div className="flex flex-col space-y-4 ">
                    <a
                        href="https://instagram.com/al_xing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent/40 hover:bg-accent/70 text-foreground font-medium py-3 rounded-lg transition-colors"
                    >
                        ig (@al_xing) 📸
                    </a>
                    <a
                        href="https://soundcloud.com/al_xing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent/40 hover:bg-accent/70 text-foreground font-medium py-3 rounded-lg transition-colors"
                    >
                        soundcloud – DJ sets 🎧
                    </a>
                    <a
                        href="https://open.spotify.com/user/11130460071?si=c712af8852364812"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent/40 hover:bg-accent/70 text-foreground font-medium py-3 rounded-lg transition-colors"
                    >
                        spotify - playlists
                    </a>
                    <a
                        href="https://alexingberg.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent/40 hover:bg-accent/70 text-foreground font-medium py-3 rounded-lg transition-colors"
                    >
                        ai projects, resume, and work-ish stuff 🧑🏻‍💻📊💪🏼
                    </a>
                    <a
                        href="mailto:hi@alexingberg.com"
                        className="bg-accent/40 hover:bg-accent/70 text-foreground font-medium py-3 rounded-lg transition-colors"
                    >
                        email – say hi 👋
                    </a>
                </div>
            </main>
        </div>
    );
}
