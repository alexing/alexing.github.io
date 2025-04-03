import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-brand text-foreground min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-4xl font-bold">alex ingberg</h1>
        </header>

        <section id="about" className="mb-24">
          <motion.h2 className="text-2xl font-semibold mb-4"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 0.4 }} />
          <p className="leading-relaxed">
            Co-founder & CTO at <a href="https://nivii.ai" className="text-accent hover:underline">nivii.ai</a>, where we're rethinking how people interact with data — turning boring dashboards into sharp conversations that actually tell you what matters.

            <br />I'm a builder at heart, with deep experience across the data stack — from pipelines and platforms to models, MLOps, and AI systems that ship. I like working end-to-end and getting things moving fast.

            <br /><br />Beyond the code, I love travelling with <a href="https://photos.alexingberg.com/" className="text-accent hover:underline">a camera in hand </a>
            or serving as the self-appointed <a href="https://soundcloud.com/al_xing" className="text-accent hover:underline">music selector and DJ</a> for my friends.
          </p>
        </section>

        <section id="projects" className="mb-24">
          <motion.h2 className="text-2xl font-semibold mb-4"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 0.4 }}>
            latest projects
          </motion.h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link href="https://nivii.ai" className="text-accent hover:underline">nivii.ai</Link> – building an AI-powered platform to turn raw data into real insights using LLMs.</li>
            <li><Link href="/projects/spar" className="text-accent hover:underline">SPAR</Link> – a GitHub Action that randomizes <a href="https://open.spotify.com/playlist/3CqUnWFXQIHH0fz0zhqYUZ?si=a96b218ac5104262" className="text-accent hover:underline">my running playlist</a> every week</li>
            <li><Link href="/projects/scaloneta" className="text-accent hover:underline">Scaloneta bot</Link> – a twitter bot counting down to Argentina’s next match</li>
            <li><Link href="/projects/bewildering-brain" className="text-accent hover:underline">Bewildering Brain</Link> – Markov Chains vs. RNNs trained on Bob Dylan & Luis Alberto Spinetta</li>
            <li><Link href="/projects/spotify-rewrapped" className="text-accent hover:underline">Spotify ReWrapped</Link> – my data vs. Spotify Wrapped – who told the truth?</li>
            <li><Link href="/projects/datadata" className="text-accent hover:underline">Data, data</Link> – data-driven exploration of Jorge Drexler’s lyrics and music</li>
            <li><Link href="/projects/musicmagal" className="text-accent hover:underline">Music Magal</Link> – group recommender system using item2vec</li>
          </ul>
        </section>

        <section id="work" className="mb-24">
          <motion.h2 className="text-2xl font-semibold mb-4"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 0.4 }}>
            work experience
          </motion.h2>
          <ul className="space-y-2">
            <li>📍 <strong>CTO & Co-Founder @ nivii.ai</strong> (2025–present) – leading technical vision</li>
            <li>📍 <strong>Senior ML Engineer @ Mastercard (Dynamic Yield)</strong> (2023–2025) – scaled visual recommendations, LLMs, infra, and CV-powered shopping assistants</li>
            <li>📍 <strong>Senior ML/MLOps Engineer @ Outbrain</strong> (2019–2023) – built internal tooling that 10x’d data science velocity, from POC to production</li>
            <li>📍 <strong>Data Engineer @ Namogoo</strong> (2018–2019) – full-stack data work on cloud pipelines, ML models, and real-time infrastructure</li>
            <li>
              <a href="https://www.linkedin.com/in/alexingberg/details/experience/"
                 className="text-accent hover:underline"
                 target="_blank" rel="noopener">
                → see previous on LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <section id="press" className="mb-24">
          <motion.h2 className="text-2xl font-semibold mb-4"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 0.4 }}>
            press
          </motion.h2>
          <p className="mb-4">
            Featured in podcasts, tech publications, and music media.
          </p>
          <Link href="/press" className="text-accent underline">
            → see full list
          </Link>
        </section>

        <section id="contact" className="mb-32">
          <motion.h2 className="text-2xl font-semibold mb-4"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 20 }}
                     transition={{ duration: 0.4 }}>
            contact me
          </motion.h2>
          <p>
            Let's chat! Feel free to reach out via <a href="mailto:hi@alexingberg.com"
              className="text-accent hover:underline">email</a>
          </p>
        </section>

        <footer className="text-sm text-subtle flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex space-x-4">
            <a href="https://medium.com/@alexing" target="_blank" rel="noopener">medium</a>
            <a href="https://github.com/alexing" target="_blank" rel="noopener">github</a>
            <a href="https://www.linkedin.com/in/alexingberg/" target="_blank" rel="noopener">linkedin</a>
            <a href="mailto:hi@alexingberg.com">email</a>
            <a href="/cv.pdf" download className="text-accentSoft font-medium hover:underline">my cv</a>
          </div>
          <p>© {new Date().getFullYear()} Alex Ingberg</p>
        </footer>
      </div>
    </main>
  )
}
