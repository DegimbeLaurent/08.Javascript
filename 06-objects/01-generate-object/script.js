// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let user = {
            lastname: "degimbe",
            firstname: "laurent",
            year: 27,
            city: "namur",
            country: "belgium"
        }
        console.log(user);
    })
})();
