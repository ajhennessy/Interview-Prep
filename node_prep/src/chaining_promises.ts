function stepOne(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step one complete');
        }, 1000);
    });
}

function stepTwo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Step two complete');
        }, 2000);
    });
}

stepOne()
    .then((result: string) => {
        console.log(result);
        return stepTwo();
    })
    .then((result: string) => {
        console.log(result)
    })
    .catch((error: any) => {
        console.error(`Error: ${error}`);
    });