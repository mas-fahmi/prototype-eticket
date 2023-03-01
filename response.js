const response = (statusCode, data, message, res) => {
     res.json(statusCode, [
        {
            payload: data,
            message,
            metdata: {
                prev: "",
                next: "",
                current: "",
            },
        },
     ]);
};

module.exports = response;