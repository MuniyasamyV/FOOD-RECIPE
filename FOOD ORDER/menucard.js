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