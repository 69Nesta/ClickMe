import { lauchConfettis } from './confettis.ts';

import '../style/main.css'
import '../style/Button.css'
import '../style/winScreen.css'
import winScreenHtml from './winScreenHtml.ts';

const btn = document.getElementById('btn');

const newRandomBtnPos = () => {
    if (!btn) return

    const time = Date.now();

    const pos = {
        x: random(),
        y: random(),
    };

    btn.style.top = `${pos.x}%`;
    btn.style.left = `${pos.y}%`;

    console.log(`x: ${pos.x} | y: ${pos.y} | latency: ${Date.now() - time}ms`);
};

const random = (max = 99) => {
    return (Math.random() * max).toFixed(4);
};




btn?.addEventListener("mouseover", () => {
    setTimeout(newRandomBtnPos, 20);
});




btn?.addEventListener("click", () => {
    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML += winScreenHtml()

    const interval = setInterval(lauchConfettis, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 800);
});

window.onload = () => {
    newRandomBtnPos();
};