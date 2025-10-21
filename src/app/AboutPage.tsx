import { ChartAreaInteractive } from '@/components/DemoChart'
import { Briefcase, ShieldCheck, Rocket, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <section className=" px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We build innovative, scalable, and secure digital solutions that help
          businesses thrive in a connected world.
        </p>
      </div>

      {/* Chart Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Company Growth
        </h2>
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <ChartAreaInteractive />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
          <p className="text-muted-foreground">
            To empower companies through technology — providing reliable,
            future-proof, and user-centric solutions that drive real value.
          </p>
        </div>
        <div className="space-y-4 ">
          <h3 className="text-xl font-semibold text-primary text-left">
            Our Values
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Trust & Transparency in every relationship</span>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="w-5 h-5 text-primary" />
              <span>Innovation driven by purpose, not hype</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span>Customer success as our top priority</span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>End-to-end ownership and accountability</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/40 py-12 px-6 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          Ready to build the future together?
        </h3>
        <p className="text-muted-foreground mb-6">
          Let’s partner to turn your ideas into powerful digital products.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
