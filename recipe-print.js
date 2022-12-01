var recipeData = {
  "name": "Broccoli Cheese Soup",
  "serves": 6,
  "servings": {
    "count": 3,
    "unit": "cup",
    "calories": 600
  },
  "ingredients": [
    {
      "name": "broccoli",
      "unit": "head",
      "count": 4
    },
    {
      "name": "garlic clove",
      "count": 2
    },
    {
      "name": "onion",
      "count": 2
    },
    {
      "name": "chicken stock",
      "count": 4.5,
      "unit": "cup"
    },
    {
      "name": "sharp cheddar cheese",
      "count": 4.5,
      "unit": "cup"
    },
    {
      "name": "parmesan cheese",
      "count": 1.25,
      "unit": "cup"
    },
    {
      "name": "milk",
      "count": 2,
      "unit": "cup"
    },
    {
      "name": "water"
    },
    {
      "name": "butter",
      "count": 4,
      "unit": "tablespoon"
    },
    {
      "name": "salt",
      "count": 2,
      "unit": "teaspoon"
    },
    {
      "name": "pepper",
      "count": 1,
      "unit": "teaspoon"
    }
  ],
  "directions": [
    "Trim broccoli florets from stalks.",
    "Chop broccoli stalks into 1 inch cubes.",
    "Dice onion.",
    "Mince garlic.",
    "In a pot large enough to contain all ingredients, sauté onions in butter until tender, about 5 minutes.",
    "Add garlic and sauté until fragrant.",
    "Add chicken stock and bring to a low simmer. Simmer uncovered for 20 minutes.",
    "Meanwhile, add milk to a pot over low heat.",
    "Stir in cheeses slowly, a 1/2 cup at a time, waiting for each batch to melt before adding any more.",
    "Remove from heat.",
    "Once broccoli is done simmering, divide up contents of pot and blend to a find consistency. Return to pot once done.",
    "Add cheese sauce, salt, and pepper to the large pot over medium heat. Stir to combine.",
    "Add water as necessary to achieve desired consistency.",
    "Remove from heat.",
    "Do not attempt to actually make this! I made it up and it would be terrible."
  ]
};


var printRecipe = function (data) {
  var str = '';

  var buildTitle = function() {
    str += data.name + '\n=====\n\n'
  };

  var buildSubtitle = function() {
    str += 'Makes: ' + data.serves + ', ' +
    data.servings.count + ' ' +
    data.servings.unit + ' servings of ' +
    data.servings.calories + ' calories each.\n\n'
  };

  var buildIngredientsTitle = function() {
    str += 'Ingredients: ' + '\n-----\n\n'
  };

  var buildIngredients = function() {
    var renderUnit = function(unit, count) {
      if (unit && count > 1) {
        return ' ' + unit + 's'
      } else if (unit) {
        return ' ' + unit
      } else {
        return ' '
      };
    };

    data.ingredients.forEach(function (ing) {
      properNoun = ing.name[0].toUpperCase() + ing.name.slice(1);
      str += '* ' + properNoun;

      if (ing.unit || ing.count) {
        str += ' (' + ing.count +
        renderUnit(ing.unit, ing.count) + ')\n'
      } else {
        str += '\n'
      };
    });
  };

  var buildDirectionsTitle = function() {
    str += '\nDirections: ' + '\n-----\n\n'
  };

  var buildDirections = function() {
    data.directions.forEach(function (d, i) {
      str += i + 1 + '. ' + d + '\n';
    });
  };

  buildTitle();
  buildSubtitle();
  buildIngredientsTitle();
  buildIngredients();
  buildDirectionsTitle();
  buildDirections();

  console.log(str);
};

printRecipe(recipeData);