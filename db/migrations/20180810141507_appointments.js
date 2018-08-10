exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointments', (table) => {
    table.increments();
    table.string("location");
    table.string("time");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appointments");

};