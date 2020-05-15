
exports.up = function(knex) {
    return knex.schema 
      .createTable('projects', table => {
          table.increments();
          table.string('project_name')
              .notNullable()
              .unique()
          table.string('project_description')
          table.boolean('project_completed')
              .notNullable()
              .defaultTo(false)
      })
      .createTable('resources', table => {
          table.increments();
          table.string('resource_name')
              .notNullable()
              .unique()
          table.string('resource_description')
      })
      .createTable('tasks', table => {
          table.increments();
          table.integer('project_id')
              .unsigned()
              .references('id')
              .inTable('projects')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          table.string('task_description')
              .notNullable()
          table.string('notes')
          table.boolean('task_completed')
              .notNullable()
              .defaultTo(false)
      });
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects')
  };
  