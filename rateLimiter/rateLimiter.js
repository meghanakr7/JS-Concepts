function createRateLimiter(intervalInMs) {
    console.log("i came to fun")
    let lastCalledTime = 0;
    return function submit() {
        console.log("iam here in submit");
        const  now = Date.now();
        if(now - lastCalledTime >= intervalInMs) {
            lastCalledTime = now;
            document.getElementById("message").textContent = "Form submitted at " + new Date().toLocaleTimeString();

        }else {
            document.getElementById("message").textContent = "Pleae wait before submitting new form"
        }
    }
}
const rateLimitedSubmit = createRateLimiter(5000);
console.log("i just executed line 16 i guess")
try1 = document.getElementById("submitBtn")
console.log("Try1 is ",try1)
document.getElementById("submitBtn").addEventListener("click", rateLimitedSubmit)