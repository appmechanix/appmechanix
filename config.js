exports.CONFIG = {
	Port: getValue(3000, 3010)
};


function getValue(dev, live) {
    if (process.env.NODE_ENV == 'production') {
        return live;
    }

    return dev;
}