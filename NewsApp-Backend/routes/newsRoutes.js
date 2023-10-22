const express = require('express');
const router = express.Router();
const { 
    getAllNews,
    getNewsById,
    addNews,
    updateNews,
    deleteNews,
} = require('../controller/newsController');
const { isAuth } = require('../config/auth');

//get all news
router.get('/', getAllNews);

//get a news
router.get('/:id', getNewsById);

//add a news
router.post('/', isAuth, addNews);

//update a news
router.put('/:id', isAuth, updateNews);

//delete a news
router.delete('/:id', isAuth, deleteNews);

module.exports = router;