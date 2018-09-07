module.exports = (loader, enable) => {
    if(!enable) {
        return 'rein-loader';
    } else {
        return loader;
    }
};