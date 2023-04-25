/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Para ejecutar las migraciones se debe usar el comando npx knex migrate:latest
exports.up = function (knex) {
  return knex.schema.createTable("blog", (table) => {
    table.increments("id").primary();
    table.string("title").notNull();
    table.text("body").notNull();
    table.string("date").notNull();
    table.binary("image");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Para ejecutar la función down debemos utilizar el comando npx knex migrate:rollback, el cual hará un drop a la última tabla migrada
exports.down = function (knex) {
  return knex.schema.dropTable("blog");
};
