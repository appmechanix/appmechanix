exports.CONFIG = {
	Port: getValue(3000, process.env.PORT)
};


function getValue(dev, live) {
    if (process.env.NODE_ENV == 'production') {
        return live;
    }

    return dev;
}