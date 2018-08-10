exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments(); // Creates id column
    table.string("name"); // Creates bio column as varchar(255)
    table.string("email");
    table.string("password"); // Creates name column as varchar(255)
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");

};