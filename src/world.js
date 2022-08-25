import * as THREE from 'three'

export function build( { renderer, scene, camera, }, game ) {

	/*
		Temporary object
	*/
	const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 )
	const material = new THREE.MeshBasicMaterial( {
		color: 0x277BC0,
	} )
	const mesh = new THREE.Mesh( geometry, material )
	scene.add( mesh )

	game.mesh = mesh
}
