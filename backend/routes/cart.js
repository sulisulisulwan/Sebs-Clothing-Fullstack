const router = require('express').Router();

router.get('/', (req, res) => {

/**
 Retrieves list of products added to the cart by a user.

GET /cart |

Response

Status: 200 OK

[
    {
        "sku_id": 1,
        "count": 2
    },
    {
        "sku_id": 3,
        "count": 1
    },
    {
        "sku_id": 5,
        "count": 33
    },
    //...
]
 */




})
router.post('/', (req, res) => {

/**

Add to Cart
Adds a product to the cart.

POST /cart

Body Parameters

Parameter	Type	Description
sku_id	int	ID for the product being added to the cart
Response

Status: 201 CREATED

 */


})

module.exports = router;