(function (root, factory) {
    root['recipeItem','storage'] = factory();
}(window, function () {
    var storage = {
        oil: 5,
        batter: 10,
        puttuflour: 10,
        rice: 20,
        chicken: 10,
        mutton: 10,
        maida: 10,
        wheatflour: 10
    
    }
    var recipeItem = [
        {
            name: "idly",
            recipe: [{ name: 'batter', qty: 0.5 }]
        },
        {
            name: 'dosa',
            recipe: [{ name: 'batter', qty: 0.9 }, { name: 'oil', qty: 0.5 }]
        },
        {
            name: 'puttu',
            recipe: [{ name: 'puttuflour', qty: 0.6 }]
        },
        {
            name: 'chicken priyani',
            recipe: [{ name: 'rice', qty: 1 }, { name: 'chicken', qty: 0.5 }]
        },
        {
            name: 'mutton priyani',
            recipe: [{ name: 'rice', qty: 1 }, { name: 'mutton', qty: 0.5 }]
        },
        {
            name: 'paratto',
            recipe: [{ name: 'maida', qty: 0.5 }, { name: 'oil', qty: 0.2 }]
        },
        {
            name: 'chapathi',
            recipe: [{ name: 'wheatflour', qty: 0.6 }, { name: 'oil', qty: 0.1 }]
        }
    ]
    
    return {
      getrecipeItem : function(){return recipeItem},
      getstorage : function(){return storage}
    }
}));

window.recipeItem.getrecipeItem()
window.recipeItem.getstorage()


