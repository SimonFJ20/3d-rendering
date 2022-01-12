

const main = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const graphics = canvas.getContext('2d')!;
    graphics.fillStyle = '#f00';
    graphics.fillRect(0, 0, canvas.width, canvas.height);
}

main();