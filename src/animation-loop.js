import * as THREE from 'three'

/*
	Animation (Game) loop
*/
export function animationLoop( setup, game ) {

	const {
		renderer,
		scene,
		camera,
	} = setup

	const deltaTime = game.clock.getDelta()

	updateControls( camera, game, deltaTime )

	renderer.render( scene, camera )
}

/*
	Update camera controls
*/
function updateControls( camera, game, deltaTime ) {

	const move = 50 * deltaTime
	const angle = Math.PI * deltaTime

	if ( game.downKeys.KeyW ) {
		game.target.translateOnAxis( new THREE.Vector3( 0, 0, 1 ), - move )
	}
	if ( game.downKeys.KeyS ) {
		game.target.translateOnAxis( new THREE.Vector3( 0, 0, 1 ), move )
	}
	if ( game.downKeys.KeyA ) {
		game.target.rotateOnAxis( new THREE.Vector3( 0, 1, 0 ), angle )
	}
	if ( game.downKeys.KeyD ) {
		game.target.rotateOnAxis( new THREE.Vector3( 0, 1, 0 ), - angle )
	}

	if ( game.downKeys.ArrowUp ) {
		game.target.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), - angle )
	}
	if ( game.downKeys.ArrowDown ) {
		game.target.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), angle )
	}
	
	const offset = ( new THREE.Vector3( 0, 0, 3 ) ).applyMatrix4( game.target.matrixWorld )
	camera.position.lerp( offset, 0.1 )
	camera.lookAt( game.target.position )
}
