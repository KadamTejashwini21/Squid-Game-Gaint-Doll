const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.setClearColor( 0xb7c3f3, 1 );

const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
scene.add( light );

//global variables
const start_position = 3
const end_position = -start_position
const text = document.querySelector(".text")
const TIME_LIMIT = 10
let gameStat = "loading"
let isLookingBackward = true

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

function createCube(size, positionX, rotY = 0, color = 0xfbc851){
    const geometry = new THREE.BoxGeometry(size.w, size.h, size.d);
    const material = new THREE.MeshBasicMaterial( { color: color } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = positionX;
    cube.rotation.y = rotY;
    scene.add( cube );
    return cube;
}

camera.position.z = 5;

const loader = new THREE.GLTFLoader();



function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Doll {
    constructor() {
        this.doll = null;

        loader.load("../models/scene.gltf", (gltf) => {
            this.doll = gltf.scene;
            scene.add(this.doll);

            this.doll.scale.set(1, 1, 1);
            this.doll.position.set(0, -1.3, 0);
        }, undefined, (error) => console.error("Error loading model:", error));
    }
lookBackward() {
    if (!this.doll) {
        console.error("Doll not loaded yet.");
        return;
    }
    gsap.to(this.doll.rotation, { y: -3.15, duration: 0.45 });
    setTimeout(() => isLookingBackward = true, 150)
}

lookForward() {
    if (!this.doll) {
        console.error("Doll not loaded yet.");
        return;
    }
    gsap.to(this.doll.rotation, { y: 0, duration: 0.45 });
    setTimeout(() => isLookingBackward = false, 450)
}

    async start(){
        this.lookBackward()
        await delay((Math.random() * 1000) + 1000)
        this.lookForward()
        await delay((Math.random() * 750) + 750)
        this.start()
    }

}
function createTrack(){
    createCube({w: start_position*2+0.4, h: 1, d: 1}, 0, 0, 0xe5a716).position.z = -1;
    createCube({w: 0.1, h: 1, d: 1}, start_position, -0.35);
    createCube({w: 0.1, h: 1, d: 1}, end_position, 0.35);
    
}
createTrack()

class Player {
    constructor(){
        const geometry = new THREE.SphereGeometry( 0.2, 32, 16 ); 
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
        const sphere = new THREE.Mesh( geometry, material ); 
        sphere.position.z = 1
        sphere.position.x = start_position
        scene.add( sphere );
        this.player = sphere
        this.playerInfo = {
            positionX: start_position,
            velocity: 0
        }
    }
    run(){
        this.playerInfo.velocity = 0.03
    }

    stop(){
        //this.playerInfo.velocity = 0
        gsap.to(this.playerInfo, { velocity: 0, duration: .1 })
    }

    check(){
        if (this.playerInfo.velocity > 0 && !isLookingBackward) {
           //alert("You lose!")
           text.innerText = "You lose!"
           gameStat = "over"
        }

        if (this.playerInfo.positionX < end_position + 0.4) {
            //alert("You Win!");
            text.innerText = "You win!"
            gameStat = "over"
        }


    }

    update(){
        this.check()
        this.playerInfo.positionX -= this.playerInfo.velocity
        this.player.position.x = this.playerInfo.positionX
    }
}


//const player = new Player();

window.player = new Player();// Attach to global scope for debugging
window.doll = new Doll();

async function init(){
    await delay(500)
    text.innerText = "Starting in 3"
    await delay(500)
    text.innerText = "Starting in 2"
    await delay(500)
    text.innerText = "Starting in 1"
    await delay(500)
    text.innerText = "Go!!!!!"
    startGame()

}

function startGame(){
    gameStat = "started"
    let progressBar = createCube({w: 5.5, h: 0.1, d: 1}, 0)
    progressBar.position.y = 3.35
    gsap.to(progressBar.scale, { x: 0, duration: TIME_LIMIT, ease: "none" })
    doll.start()
    setTimeout(() => {
        if (gameStat != "over") {
            text.innerText = "You ran out of Time"
            gameStat = "over"
        }
    }, TIME_LIMIT * 1000);
 
}

init()


function animate() {
    if(gameStat == "over") return
	renderer.render( scene, camera );
    requestAnimationFrame(animate);
    player.update()
}
 animate();

 window.addEventListener( 'resize', onWindowResize, false )
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
}

window.addEventListener('keydown', (e) => {
    if(gameStat != "started") return
    if (e.key == "ArrowUp"){
        player.run()
    }
    
})
window.addEventListener('keyup', (e) => {
    if (e.key == "ArrowUp"){
        player.stop()
    }
})
