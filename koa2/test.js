function getSomething() {
    return 'something';
}

async function testAsync() {
    return 'Hello async'
}

function takeLoingTime() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("LONG_TIME_VALUE"), 1000)
    })
}

async function test() {
    // const v1 = await getSomething();
    // const v2 = await testAsync();
    // console.log(v1, v2);

    const v = await takeLoingTime();
    console.log(v);
}

const result = testAsync();
console.log(result) //Promise { 'Hello async' }

test();