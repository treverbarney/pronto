export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Dino Booking</h1>
      <p className="text-lg mb-6">Practical tools for real working days.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">A workspace for your business day</h2>
        <p>Client conversations, appointments, documents, and next tasks stay connected. Built for independent professionals and small service businesses — especially tattoo studios, salons, and consultants.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Universal + Tattoo tools</h2>
        <p>Start with everyday booking, calendar, clients, and messages. Add specialized tattoo intake, projects, consent, and aftercare when you need them.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Your data, your server</h2>
        <p>Self-hosted. Zero commission. Full control over your client records and booking website.</p>
      </section>
      <a href="/" className="mt-8 inline-block text-dino-sage underline">Back to home</a>
    </div>
  );
}
