
// TVV - TikTok Video Viral

document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to TVV - TikTok Video Viral!");

    const uploadBtn = document.querySelector("button");

    uploadBtn.addEventListener("click", () => {
        const input = document.querySelector("input");

        if (input.value.trim() === "") {
            alert("Please paste a TikTok video link.");
        } else {
            alert("Video link submitted successfully!");
            input.value = "";
        }
    });
});
