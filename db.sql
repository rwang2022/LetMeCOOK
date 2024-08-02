CREATE TABLE Ingredients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    google_id TEXT NOT NULL UNIQUE
);

CREATE TABLE Pantry (
    userId INT,
    ingredientId INT,
    quantity TEXT,
    PRIMARY KEY (userId, ingredientId),
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
);

CREATE TABLE Recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    instructions TEXT NOT NULL
);

CREATE TABLE RecipeIngredients (
    recipe_id INT,
    ingredient_id INT,
    quantity TEXT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id)
);

CREATE TABLE ShoppingList (
    userId INT,
    ingredientId INT,
    quantity TEXT,
    PRIMARY KEY (userId, ingredientId),
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
);