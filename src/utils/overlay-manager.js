const overlayStack = [];

function refreshOverlayIndex () {
    const baseIndex = overlayStack.reduce((base, item) => {
        return Math.max(base, item.component[item.zIndexName] || 0);
    }, 0);

    overlayStack.forEach((item, index) => {
        item.component[item.indexName] = baseIndex + index + 1;
    });
}

function moveToOverlayTop (component, indexName, zIndexName) {
    const index = overlayStack.findIndex(item => item.component === component);

    if (index > -1 && index === overlayStack.length - 1) return;
    if (index > -1) overlayStack.splice(index, 1);

    overlayStack.push({ component, indexName, zIndexName });
    refreshOverlayIndex();
}

function removeFromOverlayStack (component) {
    const index = overlayStack.findIndex(item => item.component === component);

    if (index > -1) {
        const item = overlayStack[index];

        overlayStack.splice(index, 1);
        item.component[item.indexName] = 0;
        refreshOverlayIndex();
    }
}

function isOverlayTop (component) {
    return overlayStack.length > 0 && overlayStack[overlayStack.length - 1].component === component;
}

function refreshOverlayStack () {
    refreshOverlayIndex();
}

export { moveToOverlayTop, removeFromOverlayStack, isOverlayTop, refreshOverlayStack };
