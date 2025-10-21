export default function HomePage() {
  return (
    <section className="mb-20 max-w-6xl mx-auto px-4 mt-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Welcome to MyCompany
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          We build cutting-edge digital products that help businesses scale,
          innovate, and succeed in a digital-first world.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/products"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition"
          >
            View Products
          </a>
          <a
            href="/contact"
            className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-muted transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Scalable Architecture',
            description:
              'We design backend systems that scale with your users — built on modern cloud-native technologies.',
          },
          {
            title: 'User-Centric Design',
            description:
              'Our frontends are not just fast — they’re intuitive and delightful, prioritizing user experience at every level.',
          },
          {
            title: 'Agile Development',
            description:
              'We iterate fast, ship frequently, and work closely with clients to stay aligned and responsive to change.',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
