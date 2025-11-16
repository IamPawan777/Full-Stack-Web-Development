function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(dataId);
            resolve("completed bro");
        }, 2000);
    });
}

(async function() {
    await getData(11);
    await getData(22);
    await getData(33);
    await getData(44);
})();
