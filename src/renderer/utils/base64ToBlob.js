function base64ToBlob(base64Data) {
    let parts = base64Data.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let binaryData = window.atob(parts[1]);
    let arrayBuffer = new ArrayBuffer(binaryData.length);
    let uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
    }
    return new Blob([uint8Array], { type: contentType });
}

export default base64ToBlob;