import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand min-h-screen text-foreground w-full">
      <main className="max-w-3xl mx-auto px-6 py-20 font-sans">
        <motion.h1
          className="text-3xl font-bold mb-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          privacy policy
        </motion.h1>

        <p className="text-subtle mb-10 leading-relaxed">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="mb-4">
              This privacy policy describes how alexingberg.com ("we", "our", or "the site") collects, uses, and protects your personal information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Automatically Collected Data:</strong> When you visit our site, we may automatically collect certain information such as your IP address, browser type, device information, and pages you visit. This information is typically collected through cookies and similar tracking technologies.</li>
              <li><strong>Information You Provide:</strong> If you contact us via email or through any forms on the site, we may collect the information you provide, such as your name and email address.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our website</li>
              <li>Respond to your inquiries and requests</li>
              <li>Analyze website usage and trends</li>
              <li>Ensure the security and integrity of our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="mb-4">
              Our website may use third-party services (such as analytics providers, hosting services, or content delivery networks) that may collect information about your visit. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="mb-4">
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt-out of certain data collection practices</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:hi@alexingberg.com" className="text-accent hover:underline">hi@alexingberg.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at <a href="mailto:hi@alexingberg.com" className="text-accent hover:underline">hi@alexingberg.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Link href="/" className="text-accent underline">← back home</Link>
        </div>
      </main>
    </div>
  )
}

