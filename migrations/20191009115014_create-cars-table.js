exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments()
        tbl.string("NIV", 100).unique().notNullable()
        tbl.string("make", 30).notNullable()
        tbl.string("model", 30).notNullable()
        tbl.integer("mileage").notNullable()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("cars")
  };
