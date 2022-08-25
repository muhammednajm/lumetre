import * as THREE from 'three'

export function build( { renderer, scene, camera, }, game ) {

	/*
		Target
	*/
	{
		const geometry = new THREE.SphereBufferGeometry( 0.5, 32, 16 )
		const material = new THREE.MeshBasicMaterial( { color: 0x000000, visible: false, } )
		const mesh = new THREE.Mesh( geometry, material )
		mesh.position.y = 1

		scene.add(mesh)

		game.target = mesh
	}

	/*
		Plane (Temporary)
	*/
	{
		const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 )
		const material = new THREE.MeshBasicMaterial( { color: 0xa0a0a0, side: THREE.DoubleSide } )
		const mesh = new THREE.Mesh( geometry, material )

		mesh.rotation.x = Math.PI / 2

		scene.add( mesh )
		scene.add( new THREE.GridHelper( 1000, 1000, 0xe0e0e0, 0xe0e0e0 ) )
	}
}
