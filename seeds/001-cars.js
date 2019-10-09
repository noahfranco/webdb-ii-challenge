exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars')
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('cars').insert([
          { NIV: "qin23u4n", make: "toyota", model: "camry", mileage: "100,000"},
          { NIV: "qio362u3i", make: "nissan", model: "sentra", mileage: "45,000"},
        ]);
      });
  };