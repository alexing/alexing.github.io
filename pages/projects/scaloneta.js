import Link from 'next/link'
import Script from 'next/script'

export default function ScalonetaBot() {
  return (
    <div className="min-h-screen bg-brand text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <h1 className="text-3xl font-bold mb-2">scaloneta bot</h1>

        <div className="mb-6 text-subtle space-x-4">
          <a
            href="https://github.com/alexing/scaloneta"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>

        <section className="prose prose-invert max-w-none mb-12">
          <p>
            <strong>Scaloneta Bot</strong> is a tiny Twitter bot I built to count down to Argentina’s next match, so we never lose track of La Scaloneta.
          </p>
          <p>
            It tweets automated updates with the date, opponent, and how much time is left until kickoff. No scraping or manual updates — it’s fully serverless and runs on its own.
          </p>
          <p>
            The project is deployed on <strong>AWS Lambda</strong> and scheduled via <strong>CloudWatch</strong>, using the <strong>Twitter API</strong> to post updates directly to the{' '}
            <a
              href="https://x.com/nextscaloneta"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @nextscaloneta
            </a>{' '}
            account.
          </p>
          <p>
            It’s not deep learning. It’s not fancy. But it makes people smile — and that’s a win.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-center">sample tweets</h2>

          <div className="flex justify-center mb-8">
            <blockquote
              className="twitter-tweet"
              data-theme="dark"
              data-align="center"
            >
              <a href="https://twitter.com/nextscaloneta/status/1638239195906068480"></a>
            </blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote
              className="twitter-tweet"
              data-theme="dark"
              data-align="center"
            >
              <a href="https://twitter.com/nextscaloneta/status/1640775915813863424"></a>
            </blockquote>
          </div>

          <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </section>

        <div>
          <Link href="/#projects" className="text-accent underline">
            ← back to all projects
          </Link>
        </div>
      </main>
    </div>
  )
}
