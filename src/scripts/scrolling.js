const audrey = document.getElementById("audrey")

    /*
        Add an event listener to the `document` object to listen
        for the "scroll" event.
    */
    document.addEventListener("scroll", function (event) {
        /*
            Adjust the width of audrey to be 1/3 the value of
            `window.scrollY`. No lower than 50px, though.
        */
        console.log(window.scrollY);
        console.log(audrey.style);


       const newWidth = (window.scrollY / 3);
       if (newWidth > 50) {
            audrey.style.width = `${newWidth}px`;
        }

        /*
            Adjust the height of audrey to be 1/4 the value of
            `window.scrollY`. No lower than 100px, though.
        */

        const newHeight = (window.scrollY / 4);
        if (newHeight > 100) {
            audrey.style.height = `${newHeight}px`;
        }
    })