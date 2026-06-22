import FadeUp from './FadeUp'

const team = [
  {
    name: 'Dr. Marco Ferretti',
    role: 'Osteopata D.O.',
    quote: 'Credo che ogni trattamento inizi dall\'ascolto. Il corpo racconta sempre una storia.',
    initials: 'MF',
  },
  {
    name: 'Dott.ssa Elena Marino',
    role: 'Fisioterapista – Pavimento Pelvico',
    quote: 'Accompagnare una donna nel post-parto è un privilegio che prendo con grande responsabilità.',
    initials: 'EM',
  },
  {
    name: 'Dott.ssa Sara Conti',
    role: 'Psicoterapeuta',
    quote: 'La psicoterapia non è risolvere i problemi. È imparare a stare con sé stessi in modo diverso.',
    initials: 'SC',
  },
  {
    name: 'Dott.ssa Anna Rossi',
    role: 'Logopedista',
    quote: 'La comunicazione è il primo ponte che costruiamo con il mondo. Vale la pena prendersene cura.',
    initials: 'AR',
  },
  {
    name: 'Dr. Luca Bernardi',
    role: 'Ortopedico',
    quote: 'Una buona diagnosi non è solo tecnica. È anche saper spiegare, coinvolgere, condividere.',
    initials: 'LB',
  },
  {
    name: 'Dott.ssa Chiara Galli',
    role: 'Ecografista',
    quote: 'L\'ecografia è uno strumento. La diagnosi è una relazione di fiducia con il paziente.',
    initials: 'CG',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-36 bg-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <FadeUp>
            <span className="section-label">Il team</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-heading-xl text-smeraldo max-w-xl">
              Le persone<br />
              <span className="italic text-stone-400">dietro la Clinica.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 font-sans text-base text-stone-500 max-w-md leading-relaxed">
              Professionisti scelti per la loro competenza e per la loro capacità di mettere la persona al centro.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.08}>
              <div className="group bg-travertino p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(29,61,47,0.08)] hover:-translate-y-1">
                {/* Avatar */}
                <div className="w-16 h-16 bg-smeraldo flex items-center justify-center mb-6 transition-colors group-hover:bg-smeraldo-dark">
                  <span className="font-serif text-lg text-oro">{member.initials}</span>
                </div>

                <h3 className="font-serif text-xl text-smeraldo mb-1">{member.name}</h3>
                <p className="font-sans text-xs tracking-wider uppercase text-oro mb-6">{member.role}</p>

                <div className="w-8 h-px bg-sabbia mb-6" />

                <blockquote className="font-serif italic text-stone-500 text-base leading-relaxed">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
