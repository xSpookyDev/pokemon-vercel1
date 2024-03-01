import {useEffect } from "react"
import {Scene,
WebGL1Renderer, PerspectiveCamera, Mesh, MeshBasicMaterial, BoxGeometry,SphereGeometry, TextureLoader, BackSide, MeshPhongMaterial,DirectionalLight, HemisphereLight, AmbientLight
} from "three"


function HomePage(){
    useEffect(()=>{
        const scene = new Scene()
        const rederer = new WebGL1Renderer({
            antialias:true,
            canvas: document.getElementById("bg")
        })
        
        const camara = new PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1,1000)

        //mover camara 
        camara.position.z = 6;



        //crear cubo
        const geometria = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({color: 0xffffff })
        const cubo = new Mesh(geometria, material)
        scene.add(cubo)


        //crear skybox
        const skyGeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const textura = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: textura
        })
        const skybox = new Mesh(skyGeometry,material2)
        scene.add(skybox);
        skybox.material.side= BackSide


        //crear iluminacion
        scene.add(new AmbientLight(0xffffff, 0.8))
        scene.add(new HemisphereLight(0xffffff, 0.8))

        rederer.setSize(window.innerWidth, window.innerHeight)


        function animate(){
            cubo.rotation.x +=0.02
            cubo.rotation.y +=0.02
            rederer.render(scene, camara)
            requestAnimationFrame(animate)
        }
        animate();
    },[])

    return <canvas id="bg"/>
}

export default HomePage