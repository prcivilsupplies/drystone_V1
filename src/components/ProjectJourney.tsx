export const projectStages = [
  { title: 'Define & plan', text: 'Review the scope, priorities and programme before work begins.' },
  { title: 'Coordinate', text: 'Bring trades, suppliers and procurement into one clear plan.' },
  { title: 'Manage the build', text: 'Coordinate site activity, track progress and communicate updates.' },
  { title: 'Check the details', text: 'Review workmanship and resolve outstanding items.' },
  { title: 'Complete & hand over', text: 'Coordinate completion, defects and the final handover.' },
]

export function ProjectJourney() {
  return (
    <section className="management-journey section-space" id="scope">
      <div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">A considered process</p><h2>Clarity at every stage.</h2></div><p className="heading-aside">One point of contact, from the early decisions to the final details.</p></div>
        <ol className="journey-stages">{projectStages.map((stage, index) => <li key={stage.title}><span>0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p></li>)}</ol>
        <div className="management-scopes">
          <article><p className="eyebrow">01 / The complete build</p><h3>End-to-end management.</h3><p>Planning, trade coordination, progress tracking and handover for your residential construction project.</p></article>
          <article><p className="eyebrow">02 / The right support</p><h3>Specialist service coordination.</h3><p>Targeted management for individual trade packages, including windows, doors, flooring, cladding and rendering.</p></article>
        </div>
      </div>
    </section>
  )
}
