(function (root, factory) {
    root['menuCard'] = factory();
}(window, function () {
    var menuCard = {
        "foodItem": {
            "breakFast": ["idly", "puttu", "dhosa"],
            "Lunch": ["chicken priyani", "mutton priyani"],
            "dinner": ["paratto", "chapathi"]
        }
    }
    return {
      getmenuCard : function(){return menuCard}
    }
}));

window.menuCard.getmenuCard()
(function (root, factory) {
    root['food'] = factory(root['menuCard']);
}(window, function ( menuCard) 
{
 console.log(menuCard)
    var newMenuBreakFast = menuCard.getmenuCard().foodItem.breakFast;
    var newMenuLunch = menuCard.getmenuCard().foodItem.Lunch;
    var newMenuDinner = menuCard.getmenuCard().foodItem.dinner

    function getFoodName() {
        return menu;
    }
   

    function setFoodName(foodName, timing) {
        if (timing === 'breakFast') {
            return newMenuBreakFast.push(foodName)
        }
        else if (timing === 'lunch') {
            return newMenuLunch.push(foodName)
        }
        else {
            return newMenuDinner.push(foodName)
        }


    }
    
    return {
        setFoodName: setFoodName,
        getFoodName: getFoodName
    }

}));



















(function (root, factory) {
    root['menuCard'] = factory(root['menu']);
}(window, function (menu) {
    var menu = {
        "foodItem": {
            "breakFast": ["idly", "puttu", "dhosa"],
            "Lunch": ["chicken priyani", "mutton priyani"],
            "dinner": ["paratto", "chapathi"]
        }
    }
    var newMenuBreakFast = menu.foodItem.breakFast;
    var newMenuLunch = menu.foodItem.Lunch;
    var newMenuDinner = menu.foodItem.dinner

    function getFoodName() {
        return menu;
    }
   

    function setFoodName(foodName, timing) {
        if (timing === 'breakFast') {
            return newMenuBreakFast.push(foodName)
        }
        else if (timing === 'lunch') {
            return newMenuLunch.push(foodName)
        }
        else {
            return newMenuDinner.push(foodName)
        }


    }
    
    return {
        setFoodName: setFoodName,
        getFoodName: getFoodName
    }

    
}));