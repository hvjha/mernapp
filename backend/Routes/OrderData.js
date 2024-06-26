// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Orders');

// router.post('/orderData', async (req, res) => {
//     let data = req.body.order_data;
//     data.splice(0, 0, { Order_date: req.body.order_date });

//     try {
//         let eId = await Order.findOne({ email: req.body.email });
//         console.log(eId);
//         if (eId === null) {
//             await Order.create({
//                 email: req.body.email,
//                 order_data: [data]
//             });
//             res.json({ success: true });
//         } else {
//             await Order.findOneAndUpdate(
//                 { email: req.body.email },
//                 { $push: { order_data: data } }
//             );
//             res.json({ success: true });
//         }
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Server Error: " + err.message);
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date });

    try {
        let eId = await Order.findOne({ email: req.body.email });
        console.log(eId);
        if (eId === null) {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            res.json({ success: true });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error: " + err.message);
    }
});

router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let myData = await Order.findOne({ 'email': req.body.email })
        res.json({orderData:myData})
    } catch (error) {
        res.send("Error",error.message)
    }
    

});
module.exports = router;


   