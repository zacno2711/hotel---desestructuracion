import Rooms from "./content/rooms"
import Rooms_nav from "./content/rooms_nav"
import Rooms_title from "./content/rooms_title"
import About from "./content/about"
import Destinos from "./content/destinos"
import Contacto from "./content/contacto"
export default function Page() {
    return (
        <>
            <div className="w3-content" style={{ maxWidth: '1532px' }}>
                <Rooms_title />
                <Rooms_nav />
                <Rooms />
                <About />
                <Destinos/>
                <Contacto/>
                
            </div>

        </>
    )
}