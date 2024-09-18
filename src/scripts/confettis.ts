import { confetti } from '@tsparticles/confetti'

const duration = 60 * 60 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 20, zIndex: 0 };

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export const lauchConfettis = () => {
    const timeLeft = animationEnd - Date.now();

    const particleCount = 20 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random

    confetti(
        Object.assign({}, defaults, {
            particleCount,

            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
    );

    confetti(
        Object.assign({}, defaults, {
            particleCount,

            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
    );
};