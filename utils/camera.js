async function setupCamera(video) {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

function startCamera(videoElement) {
    return setupCamera(videoElement).then((video) => {
        video.play();
    });
}

export { startCamera };