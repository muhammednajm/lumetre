import { Clock } from 'three'
import * as Setup from './setup'
import * as World from './world'
import * as GameEvents from './events'
import { animationLoop } from './animation-loop'

;(async () => {

	/*
		Renderer (WebGL 2.0)
	*/
	const renderer = Setup.Renderer()

	/*
		Scene
	*/
	const scene = Setup.Scene()

	/*
		Camera (Perspective)
	*/
	const camera = Setup.Camera( { renderer, scene, } )

	/*
		Game entities (Globals)
	*/
	const game = {
		clock: new Clock(),
	}

	/*
		World
	*/
	World.build( { renderer, scene, camera, }, game)

	/*
		Listen events
	*/
	GameEvents.listen( { renderer, scene, camera, }, game )

	/*
		Animation (Game) loop
	*/
	renderer.setAnimationLoop( () => {

		animationLoop( { renderer, scene, camera, }, game )
	} )

})()
