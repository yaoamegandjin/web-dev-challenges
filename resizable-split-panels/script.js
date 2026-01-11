document.addEventListener("DOMContentLoaded", () => {
    const horizontalResizer = document.querySelector(".horizontal-resizer");
    const verticalResizer = document.querySelector(".vertical-resizer");
    const leftPanel = document.querySelector(".left-panel");
    const rightPanel = document.querySelector(".right-panel");
    const topPanel = document.querySelector(".top-panel");
    const container = document.querySelector(".container");
    const MIN_SIZE = 50;
    horizontalResizer.addEventListener("pointerdown", (e) => {
        e.preventDefault();

        horizontalResizer.setPointerCapture(e.pointerId);

        let dragX = e.clientX;
        let startLeftWidth = leftPanel.offsetWidth;
        let startRightWidth = rightPanel.offsetWidth;

        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";

        const onPointerMove = (moveEvent) => {
            const currentX = moveEvent.clientX;
            const deltaX = currentX - dragX;

            const newLeftWidth = startLeftWidth + deltaX;
            const newRightWidth = startRightWidth - deltaX;

            if (newLeftWidth > MIN_SIZE && newRightWidth > MIN_SIZE) {
                leftPanel.style.width = `${newLeftWidth}px`;
                rightPanel.style.width = `${newRightWidth}px`;
            }
        };

        const onPointerUp = () => {
            horizontalResizer.releasePointerCapture(e.pointerId);
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";

        };

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
    });


    verticalResizer.addEventListener("pointerdown", (e) => {
        e.preventDefault();

        verticalResizer.setPointerCapture(e.pointerId);
        let dragY = e.clientY;
        let startContainerHeight = container.offsetHeight;
        let startTopHeight = topPanel.offsetHeight;

        document.body.style.cursor = "row-resize";
        document.body.style.userSelect = "none";

        const onPointerMove = (moveEvent) => {
            const currentY = moveEvent.clientY;
            const deltaY = currentY - dragY;


            const newContainerHeight = startContainerHeight - deltaY;
            const newTopHeight = startTopHeight + deltaY;

            if (newContainerHeight > MIN_SIZE && newTopHeight > MIN_SIZE) {
                container.style.height = `${newContainerHeight}px`;
                topPanel.style.height = `${newTopHeight}px`;
            }
        };

        const onPointerUp = () => {
            verticalResizer.releasePointerCapture(e.pointerId);
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
        };

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
    });
});