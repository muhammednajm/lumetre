import * as THREE from 'three'

export function build( { renderer, scene, camera, }, game ) {

	/*
		Target
	*/
	{
		const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 )
		const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, visible: false, } )
		const mesh = new THREE.Mesh( geometry, material )
		mesh.position.y = 2.5

		scene.add(mesh)

		game.target = mesh
	}

	/*
		Plane (Temporary)
	*/
	{
		const geometry = new THREE.PlaneBufferGeometry( 100, 100 )
		const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } )
		const mesh = new THREE.Mesh( geometry, material )

		mesh.rotation.x = Math.PI / 2

		scene.add( mesh )
		scene.add( new THREE.AxesHelper( 100, 100 ) )
		scene.add( new THREE.GridHelper( 100, 100, 0x0000ff, 0x0000ff ) )
	}
}
