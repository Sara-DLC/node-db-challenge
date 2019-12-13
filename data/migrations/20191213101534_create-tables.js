
exports.up = function(knex) {
    return knex.schema.createTable('projects', table =>{
        table.increments();
        table.string('project_name', 255).notNullable();
        table.string('description');
        table
        .boolean('done')
        .notNullable()
        .defaultTo(false);
    })

    .createTable('tasks', table => {
        table.increments();
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('description').notNullable();
        table.string('task_name', 255).notNullable();
        table.string('additional_notes', 255);
        table.boolean('done').notNullable().defaultTo(false);
    })

    .createTable('resources', table => {
        table.increments();
        table.string('name', 255).notNullable().unique();
        table.string('description');
    })

    .createTable('project_resources', table => {
        table.increments();
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
