import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function build( { renderer, scene, camera, }, game ) {

	/*
		Target
	*/
	{
		const geometry = new THREE.SphereBufferGeometry( 0.5, 32, 16 )
		const material = new THREE.MeshBasicMaterial( { color: 0x000000, visible: false, } )
		const mesh = new THREE.Mesh( geometry, material )
		mesh.position.set(0, 50, 400)

		scene.add(mesh)

		game.target = mesh
	}

	/*
		Plane (Temporary)
	*/
	{
		const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 )
		const material = new THREE.MeshNormalMaterial( { side: THREE.DoubleSide } )
		const mesh = new THREE.Mesh( geometry, material )

		mesh.rotation.x = Math.PI / 2

		scene.add( mesh )
		scene.add( new THREE.GridHelper( 1000, 1000, 0xe0e0e0, 0xe0e0e0 ) )
	}

	/*
		Lights
	*/
	{
		const light = new THREE.DirectionalLight( 0xffffff, 1 )
		scene.add( light )
		scene.fog = new THREE.FogExp2( 0xffffff, 1 )
	}

	/*
		World
	*/
	const loader = new GLTFLoader()

	loader.load( 'assets/city.glb', gltf => {

		const model = gltf.scene.children[1]

		model.scale.set(10, 10, 10)
		model.position.y = 90

		model.traverse(child => {

			if (child.isMesh) {

				child.geometry.center()
				child.material = new THREE.MeshNormalMaterial()
			}
		})

		scene.add(model)
	})
}
