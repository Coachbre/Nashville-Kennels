import React from "react"
import "./Animal.css"

export const AnimalCard = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
        {/* this is JSX, not HTML- will automatically convert 
        ex: 'className' is the same as class */}
    </section>
)
