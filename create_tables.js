const pg = require('pg');
const { Client } = pg;
require('dotenv').config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING,
});

const createTables = async () => {
  const createIngredientsTable = `
        CREATE TABLE IF NOT EXISTS Ingredients (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            category TEXT
        );
    `;

  const createUsersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            google_id TEXT NOT NULL UNIQUE
        );
    `;

  const createPantryTable = `
        CREATE TABLE IF NOT EXISTS Pantry (
            userId INT,
            ingredientId INT,
            quantity TEXT,
            PRIMARY KEY (userId, ingredientId),
            FOREIGN KEY (userId) REFERENCES Users(id),
            FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
        );
    `;

  const createRecipesTable = `
        CREATE TABLE IF NOT EXISTS Recipes (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            instructions TEXT NOT NULL
        );
    `;

  const createRecipeIngredientsTable = `
        CREATE TABLE IF NOT EXISTS RecipeIngredients (
            recipe_id INT,
            ingredient_id INT,
            quantity TEXT,
            PRIMARY KEY (recipe_id, ingredient_id),
            FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
            FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id)
        );
    `;

  const createShoppingListTable = `
        CREATE TABLE IF NOT EXISTS ShoppingList (
            userId INT,
            ingredientId INT,
            quantity TEXT,
            PRIMARY KEY (userId, ingredientId),
            FOREIGN KEY (userId) REFERENCES Users(id),
            FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
        );
    `;

  try {
    await client.connect();
    console.log("Successfully connected to the database!");

    await client.query(createIngredientsTable);
    await client.query(createUsersTable);
    await client.query(createPantryTable);
    await client.query(createRecipesTable);
    await client.query(createRecipeIngredientsTable);
    await client.query(createShoppingListTable);

    console.log("Tables created successfully!");

  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
};

createTables();
