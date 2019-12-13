
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 2, description: 'wire-frame site', task_name: 'Beauty Salon to-do', additional_notes: 'none', done:false},
        { project_id: 3, description: 'wire-frame site', task_name: 'DJ business to-do', additional_notes: 'none', done:false},
        { project_id: 1, description: 'wire-frame site', task_name: 'Personal trainer site to-do', additional_notes: 'none', done:false},
      ]);
    });
};
