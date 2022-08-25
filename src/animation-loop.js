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

	game.mesh.rotation.y += deltaTime

	renderer.render( scene, camera )
}
