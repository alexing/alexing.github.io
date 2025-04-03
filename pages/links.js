
import Link from 'next/link';

export default function Links() {
  return (
    <div className="min-h-screen bg-brand text-foreground w-full">
      <main className="max-w-md mx-auto px-6 py-20 font-sans text-center">
        <h1 className="text-3xl font-bold mb-2">links</h1>
        <p className="text-subtle mb-8">find me around the internet</p>

        <div className="flex flex-col space-y-4">
          <a href="https://instagram.com/al_xing" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            Instagram
          </a>
          <a href="https://soundcloud.com/al_xing" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            SoundCloud
          </a>
          <a href="https://alexingberg.com" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            Main Site
          </a>
          <a href="https://github.com/alexing" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alexingberg/" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            LinkedIn
          </a>
          <a href="https://medium.com/@alexing" target="_blank" rel="noopener noreferrer"
             className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            Medium
          </a>
          <a href="mailto:hi@alexingberg.com" className="bg-accent hover:bg-accent-dark text-background font-medium py-3 rounded-lg transition-colors">
            Email
          </a>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-accent underline">← back home</Link>
        </div>
      </main>
    </div>
  );
}
