function maggiLana (callback) {
    setTimeout(() => {
        console.log("Maggi aa gayi");
        callback();
    }, 2000);
};

function maggiBanana (callback) {
    setTimeout(() => {
        console.log("Maggi ban gayi");
        callback();
    }, 3000);
};

function maggiKhana () {
    setTimeout(() => {
        console.log("Maggi kha li");
    }, 1000);
};

maggiLana((params) => {
    maggiBanana(() => {
        maggiKhana(() => {
            bartanDhona(() => {
                sona(() => {
                    scrolling()
                })
            })
        });
    });
});