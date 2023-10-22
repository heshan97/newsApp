const News = require('../models/News');

const getAllNews = async (req, res) => {
    try {
        const news = await News.find({}).sort({ _id: -1 });
        res.send(news);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        res.send(news);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const addNews = async (req, res) => {
    try {
        const newNews = new News(req.body);
        await newNews.save();
        res.status(200).send({
            message: 'News Added Successfully!',
        });
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const updateNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (news) {
            news.title = req.body.title;
            news.description = req.body.description;
            news.content = req.body.description;
            news.author = req.body.author;
            news.image = req.body.image;            
            await news.save();
            res.send({ data: news, message: 'News Updated successfully!' });
        }
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const deleteNews = (req, res) => {
    News.deleteOne({ _id: req.params.id })
        .then(result => {
            if (result.deletedCount > 0) {
                res.status(200).send({
                    message: 'News Deleted Successfully!',
                });
            } else {
                res.status(404).send({
                    message: 'No News Found to Delete',
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });
};


module.exports = {
    getAllNews,
    getNewsById,
    addNews,
    updateNews,
    deleteNews,
};