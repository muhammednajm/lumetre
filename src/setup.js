import * as THREE from 'three'

/*
	WebGLRenderer (WebGL 2.0)
*/
export function Renderer() {

	const container = document.querySelector( '#scene-container' )
	const canvas = container.querySelector( 'canvas' )

	const width = container.clientWidth
	const height = container.clientHeight
	const aspect = width / height

	const renderer = new THREE.WebGLRenderer( { canvas, antialias: true, } )

	renderer.setPixelRatio( window.devicePixelRatio )
	renderer.setSize( width, height )

	return renderer
}

/*
	Scene
*/
export function Scene() {

	const scene = new THREE.Scene()
	scene.background = new THREE.Color( 0xffffff )

	return scene
}

/*
	Camera (Perspective)
*/
export function Camera( { renderer, scene, } ) {

	const width = renderer.domElement.clientWidth
	const height = renderer.domElement.clientHeight

	const fov = 45
	const aspect = width / height
	const near = 0.1
	const far = 10000

	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far )

	camera.position.set( 0, 10, 300 )
	camera.lookAt( scene.position )

	return camera
}
