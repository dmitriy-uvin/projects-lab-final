const tests = [
    require('./app'),
    require('./connection'),
];

tests.forEach(test => {
    test.run();
});