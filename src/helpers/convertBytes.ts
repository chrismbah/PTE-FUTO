export const convertBytes = (bytes: number) => {
    const megaBytes = (bytes / (1024 * 1024));
    const kiloBytes = (bytes / (1024))

    if(megaBytes > 1){
        return megaBytes.toFixed(2) + " MB"
    }
    else{
        return kiloBytes.toFixed(2) + " KB"
    }
};