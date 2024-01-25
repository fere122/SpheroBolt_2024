// Team Members: Blake K - Logan T
// Name: Blake Krueger 
// Date: 1.22.24
// Program: Maze
// Bolt: ID:2fae


// Blue LED Checkpoint

async function startProgram() {
	await scrollMatrixText('Start', { r: 660, g: 560, b: 255 }, 15, true)
	await speak("start")
	await roll (0 , 55, 2.7)
	setMainLed({ r: 0, g: 0, b: 90 })
	stopRoll(0)
	await roll (90 , 53, 2.5)
	await Sound.play()






}
