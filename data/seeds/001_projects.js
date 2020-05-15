// here for initial testing
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('table_name').insert([
        { colName: 'rowValue1'},
        { colName: 'rowValue2'},
        { colName: 'rowValue3'}
      ]);
};
