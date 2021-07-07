const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar();
    baz();
}

foo();

const foo1 = () => {
    console.log('foo1');
    setTimeout(bar,0)
    baz();
}

foo1();

const foo2 = () => {
    console.log('foo2')
    setTimeout(bar,0)
    new Promise((resolve,reject) => {
        resolve('应该在baz之后，bar之前。')
    }).then(resolve => console.log(resolve));
    baz();
}

foo2();