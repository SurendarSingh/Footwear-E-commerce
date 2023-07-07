const router = require('express').Router();
const verifyToken = require("../middleware/verifyToken");
const Footwear = require("../models/footwear");
const upload = require("../middleware/upload");

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/add', verifyToken, upload.single('image'), async (req, res) => {
    try {
        const FootwearExist = await Footwear.findOne({ name: req.body.name });
        if(FootwearExist) return res.status(400).send("Name already Exist");

        // if filename is undefined, then set a default image
        if(req.file === undefined) {
            req.file = {
                filename: "default.png"
            }
        }

        const newFootwear = new Footwear({
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            imagePath: req.file.filename,
            size: {
                1: req.body.size1,
                2: req.body.size2,
                3: req.body.size3,
                4: req.body.size4,
                5: req.body.size5,
                6: req.body.size6,
                7: req.body.size7,
                8: req.body.size8,
                9: req.body.size9,
                10: req.body.size10,
                11: req.body.size11,
                12: req.body.size12,
                13: req.body.size13
            }
        });

        const savedFootwear = await newFootwear.save();
        res.send(req.file);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/all', verifyToken, async (req, res) => {
    try {
        const allFootwear = await Footwear.find();
        res.send(allFootwear);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;