import { Scene as SceneThree } from "three"
import Camara from "../clases/Camara"
import Loader from "../clases/Loader"
import Luces from "../clases/Luces"
import Logo from "../clases/pokemon/Logo"
import Skybox from "../clases/Skybox"
import Pokeball from "../clases/pokemon/Pokeball"
import Groudon from "../clases/pokemon/Groudon"
import Entei from "../clases/pokemon/Entei"
import Charizard from "../clases/pokemon/Charizard"
import Zecrom from "../clases/pokemon/Zekrom"
import Hierba from "../clases/pokemon/Hierba"




export default class Scene extends SceneThree {
    private camara: Camara

    constructor(renderer) {
        super()
        const loader = new Loader()
        this.camara = new Camara()
        new Luces(this)
        new Skybox(this)
        new Logo(this, loader)
        new Entei(this, loader)
        new Pokeball(this, loader)
        new Groudon(this,loader)
        new Charizard(this, loader)
        new Zecrom(this,loader)
        this.update(renderer)
        new Hierba(this, loader)
    }

    private update(renderer) {
        renderer.render(this, this.camara)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}