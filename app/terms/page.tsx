import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <Link href="/" className="text-[#D98C5A] hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-[#6B5B4F] mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-[#3C2F2F]">
          <p className="text-sm text-gray-600">Last Updated: November 4, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to Made4Me AI Molecular Beauty Lab. By accessing or using our website and services, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of our services after any changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">2. Description of Services</h2>
            <p>
              Made4Me provides AI-driven molecular beauty lab services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Active ingredient discovery and development</li>
              <li>Cosmetic formulation research and development</li>
              <li>Technology licensing services</li>
              <li>Custom R&D collaboration for B2B partners</li>
              <li>Information and educational content about our technology</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">3. User Obligations</h2>
            
            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">3.1 Acceptable Use</h3>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on our intellectual property rights or those of others</li>
              <li>Transmit harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any fraudulent or deceptive purposes</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Collect or harvest information about other users</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">3.2 Account Security</h3>
            <p>
              If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">4. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">4.1 Our Content</h3>
            <p>
              All content on our website, including text, graphics, logos, images, software, and technology, is the property of Made4Me or our licensors and is protected by intellectual property laws. The "Made4Me" name and logo are our trademarks.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">4.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal or business evaluation purposes. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">4.3 Research and Patents</h3>
            <p>
              All research findings, formulations, active ingredients, and technologies developed by Made4Me are our proprietary intellectual property. Any patents, trade secrets, or know-how remain our exclusive property unless explicitly licensed to you through a separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">5. B2B Services and Partnerships</h2>
            
            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">5.1 Licensing Agreements</h3>
            <p>
              Our active ingredients, formulations, and technology are available for licensing to qualified business partners. All licensing arrangements require a separate written agreement specifying terms, conditions, and fees.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">5.2 Custom R&D Services</h3>
            <p>
              Custom research and development services are provided under separate service agreements. Inquiries through our website do not constitute a binding agreement until formalized in writing.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">5.3 Confidentiality</h3>
            <p>
              Any proprietary or confidential information shared during partnership discussions will be protected under separate non-disclosure agreements (NDAs).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">6. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">6.1 No Warranties</h3>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">6.2 No Medical Claims</h3>
            <p>
              Information on our website is for general informational purposes only and does not constitute medical, health, or safety advice. Our products and ingredients are intended for use by qualified professionals in accordance with applicable regulations.
            </p>

            <h3 className="text-xl font-semibold text-[#6B5B4F] mt-6 mb-3">6.3 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MADE4ME SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">7. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Made4Me, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">9. Regulatory Compliance</h2>
            <p>
              Our active ingredients and formulations are developed in accordance with applicable cosmetics and chemical regulations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>EU Cosmetics Regulation (EC) No 1223/2009</li>
              <li>China Cosmetics Supervision and Administration Regulation (CSAR)</li>
              <li>Macao SAR regulatory requirements</li>
            </ul>
            <p className="mt-4">
              Business partners are responsible for ensuring compliance with all applicable regulations in their jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the Macao Special Administrative Region. Any disputes arising from these Terms or your use of our services shall be resolved through:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Arbitration in Macao SAR, if mediation fails</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">13. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any separate written agreements, constitute the entire agreement between you and Made4Me regarding your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#6B5B4F] mt-8 mb-4">14. Contact Information</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us:
            </p>
            <div className="bg-[#F5F0E9] p-6 rounded-lg mt-4">
              <p><strong>Made4Me AI Molecular Beauty Lab</strong></p>
              <p>Location: Macao SAR</p>
              <p>Contact: Via website contact form</p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

