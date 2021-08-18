
export function playSound(){
    let audio = new Audio("/arcade_game.wav")

    const start = () => {
        audio.play()
    }
    return start();
}