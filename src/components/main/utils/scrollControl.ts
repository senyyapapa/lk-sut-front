export const enableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
}

export const disableScroll = () => {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
}