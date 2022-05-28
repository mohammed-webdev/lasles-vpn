export default function Layer({ changeClass }) {
  return (
    <aside className={`${changeClass}`}>
      <section className="flexBox">
        <div className="close">X</div>
        <div>About</div>
        <div>Features</div>
        <div>Pricing</div>
        <div>Testimonials</div>
        <div>Help</div>
      </section>
    </aside >
  )
}
