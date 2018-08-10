exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([{
          id: 1,
          name: 'troy',
          email: 'troy@troy.com',
          password: 'troyboy'
        },
        {
          id: 2,
          name: 'jeff',
          email: 'jeff@jeff.com',
          password: 'mynameisjeff'
        },
        {
          id: 3,
          name: 'nickcage',
          email: 'nick@nick.com',
          password: 'nickcage'
        }
      ]);
    });
};