export const getRandomIntBetween10And20 = () => {
    const randomIntBetween0And10 = Math.floor(Math.random() * 10)
    return randomIntBetween0And10 + 10
  }
  
export const getCountdownText = (secondsToCountdown: number): string => {
    if (secondsToCountdown === 0) {
        return 'Exploded'
    } else if (secondsToCountdown === 1) {
        return '1 second'
    } else {
        return `${secondsToCountdown} seconds`
    }
}
