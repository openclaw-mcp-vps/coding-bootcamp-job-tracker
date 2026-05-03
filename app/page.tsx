export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Real Data. No Marketing Spin.
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the <span className="text-[#58a6ff]">real outcomes</span> before you pay $15k for a bootcamp
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          We scrape LinkedIn and job boards to track where coding bootcamp graduates actually land — real placement rates, real salaries, by program.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $7/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ 50+ bootcamps tracked</span>
          <span>✓ Updated weekly</span>
          <span>✓ Salary percentiles</span>
          <span>✓ Time-to-hire data</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { value: "50+", label: "Bootcamps" },
          { value: "12k+", label: "Graduates tracked" },
          { value: "Weekly", label: "Data refresh" }
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Full Access</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Placement rates for 50+ bootcamps",
              "Salary data by program & role",
              "Time-to-hire analytics",
              "Weekly data updates",
              "Compare programs side-by-side",
              "CSV export"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $7/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Where does the data come from?",
              a: "We scrape LinkedIn profiles, job boards, and public alumni networks weekly to track where bootcamp graduates actually work, what titles they hold, and what salaries they report."
            },
            {
              q: "How is this different from bootcamp-reported stats?",
              a: "Bootcamps self-report placement rates using definitions that can be misleading. Our data is independently collected from public sources — no marketing incentive to inflate numbers."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] border-t border-[#21262d] pt-8">
        © {new Date().getFullYear()} BootcampOutcomes. All rights reserved.
      </footer>
    </main>
  );
}
