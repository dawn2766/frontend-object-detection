// src/app.js

import { startCamera } from './utils/camera.js';

const video = document.createElement('video');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

async function loadModel() {
    const model = await cocoSsd.load();
    return model;
}

async function detectFrame(model) {
    const predictions = await model.detect(video);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    predictions.forEach(prediction => {
        context.beginPath();
        context.rect(...prediction.bbox);
        context.lineWidth = 2;
        context.strokeStyle = 'red';
        context.fillStyle = 'red';
        context.stroke();
        context.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    });
    requestAnimationFrame(() => detectFrame(model));
}

async function main() {
    await startCamera(video);
    const model = await loadModel();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    detectFrame(model);
}

main();