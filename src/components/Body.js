import LeftCompnent from "./BodyComponents/LeftComponent"
import RightComponent from "./BodyComponents/RightComponent"
export default function Body() {
    return (
        <section className="section-flex">
            <LeftCompnent />
            <RightComponent />
        </section>
    )
}
