document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("button");
    const tooltip = document.querySelector(".tooltip");
    const copiedText = document.querySelector(`input[type="text"]`);

    let mql = window.matchMedia("(width <=  869px)");

    async function writeClipboardText(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error.message);
        }
    }

    function showToolTip() {
        tooltip.style.display = mql.matches ? "none" : "flex";
    }

    function hideToolTip() {
        tooltip.style.display = "none";
    }

    function setIcon(name) {
        btn.style.backgroundImage = `url('${name}.svg')`;
    }

    function setTooltipText(text) {
        tooltip.textContent = text;
    }


    btn.addEventListener("mouseenter", () => {
        showToolTip();
    });

    btn.addEventListener("mouseleave", () => {
        hideToolTip();
    });

    btn.addEventListener("click", () => {
        writeClipboardText(copiedText.value);
        showToolTip();
        setTooltipText("Copied!");
        setIcon("check");
        setTimeout(() => {
            hideToolTip();
            setTooltipText("Copy");
            setIcon("clipboard");
        }, 1000);
    });
});