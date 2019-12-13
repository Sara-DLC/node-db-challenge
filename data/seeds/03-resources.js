
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'laptop', description: 'main tool'},
        { name: 'animista', description: 'website for animations'},
        { name: 'unsplash', description: 'website for stock photos'},
      ]);
    });
};
