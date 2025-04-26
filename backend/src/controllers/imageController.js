const uploadImage = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        res.send({
            message: 'File uploaded successfully',
            file: req.file
        });
    } catch (err) {
        console.log(err)
    }
}

module.exports = { uploadImage }