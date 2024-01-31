// Team Members: Blake K - Logan T
// Name: Blake Krueger 
// Date: 1.22.24
// Program: Maze
// Bolt: ID:2fae


// Blue LED Checkpoint

async function startProgram() {
	await scrollMatrixText('Start', { r: 660, g: 560, b: 255 }, 15, true)
	await speak("start")
	await roll (0 , 55, 2.5)
	setMainLed({ r: 0, g: 0, b: 90 })
	stopRoll(0)
	await roll (90 , 50, 2.2)
	await Sound.play()
	await roll (180, 33, 3)
	await roll(220, 28, 2.6)
	setMainLed({ r: 200, g: 0, b: 0 })
	await roll (850, 22, 2.1)
	await roll (400, 30, 2.5)
	await Sound.play()
	await roll(500, 30, 2.5)
	stopRoll(0)
	
	
	





}