
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: "Beauty Salon Website", description: 'create website for beauty salon', done: false},
        { project_name: "DJ Website", description: 'create website for local DJ business', done: false},
        { project_name: "Personal Trainer Website", description: 'create website for self-employed personal trainer', done: false},
      ]);
    });
};
