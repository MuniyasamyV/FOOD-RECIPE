(function (root, factory) {
    root['foodOrderQuantity'] = factory(root['recipeItem','storage']);
}(window, function (recipeItem,storage) 
{
 function getOrderItem(orderItem, quantity) {
    for (var i = 0; i < recipeItem.length; i++) {
        if (recipeItem[i].name === orderItem) {
            for (var j = 0; j < recipeItem[i].recipe.length; j++) {

                if (recipeItem[i].recipe[j].qty * quantity <= storage[recipeItem[i].recipe[j].name]) {
                    console.log("successs")
                    console.log(storage[recipeItem[i].recipe[j].name] - recipeItem[i].recipe[j].qty * quantity)
                }
                else {
                    console.log("Insufficient ingredients")
                }


            }

        }

    }
    return{
        getOrderItem:getOrderItem

    }
}
}))
