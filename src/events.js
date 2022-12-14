/*
	Global events
*/
export function listen( { renderer, scene, camera, }, game ) {

	window.addEventListener( 'resize', () => {

		const width = renderer.domElement.parentNode.clientWidth
		const height = renderer.domElement.parentNode.clientHeight

		renderer.setSize( width, height )

		camera.aspect = width / height
		camera.updateProjectionMatrix()
	} )

	window.addEventListener('keydown', e => game.downKeys[e.code] = true)
	window.addEventListener('keyup', e => game.downKeys[e.code] = false)
}
