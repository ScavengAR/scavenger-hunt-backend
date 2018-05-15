/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const { Result, User, CustomMap } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'andrew@email.com', password: '123' }), // 1
    User.create({ email: 'david@email.com', password: '123' }), // 2
    User.create({ email: 'valerie@email.com', password: '123' }), // 3
    User.create({ email: 'frances@email.com', password: '123' }), // 4
    User.create({ email: 'omri@email.com', password: '123' }), // 5
    User.create({ email: 'geoff@email.com', password: '123' }), // 6
    User.create({ email: 'corey@email.com', password: '123' }) // 7
  ]);

  const results = await Promise.all([
    Result.create({ name: 'andrew', time: 300 }).then(result =>
      result.addUser(users[0])
    ),
    Result.create({ name: 'andrew', time: 400 }).then(result =>
      result.addUser(users[0])
    ),
    Result.create({ name: 'david', time: 400 }).then(result =>
      result.addUser(users[1])
    ),
    Result.create({ name: 'valerie', time: 600 }).then(result =>
      result.addUser(users[2])
    ),
    Result.create({ name: 'frances', time: 500 }).then(result =>
      result.addUser(users[3])
    ),
    Result.create({ name: 'omri', time: 200 }).then(result =>
      result.addUser(users[4])
    ),
    Result.create({ name: 'geoff', time: 150 }).then(result =>
      result.addUser(users[5])
    ),
    Result.create({ name: 'corey', time: 200 }).then(result =>
      result.addUser(users[6])
    )
  ]);

  const customMaps = await Promise.all([
    CustomMap.create({
      name: 'Times Square',
      address: '5 times square',
      instructions: 'Here are instructions to start this banana hunt: ...',
      geolocation: ['40.758697', '-73.985011'],
      customItems: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0.2, z: -0.5 }]
    }),
    CustomMap.create({
      name: 'Full Stack Academy HQ',
      address: '5 hanover square',
      instructions: 'Here are instructions to start this banana hunt: ...',
      geolocation: ['40.705116', '-74.009236'],
      customItems: [{ x: -1, y: 0, z: 0.5 }, { x: 0.3, y: 0.4, z: -1 }]
    }),
    CustomMap.create({
      name: 'Murray Hill Theaters',
      address: '300 murray hill',
      instructions: 'Here are instructions to start this banana hunt: ...',
      geolocation: ['40.734159', '-73.990802'],
      customItems: [{ x: 0.7, y: 0, z: 1 }, { x: 0.7, y: 0.2, z: -2 }]
    }),
    CustomMap.create({
      name: 'Sunset Park',
      address: '100 sunset',
      instructions: 'Here are instructions to start this banana hunt: ...',
      geolocation: ['40.651837', '-74.004640'],
      customItems: [{ x: 1.7, y: 0.3, z: -1 }, { x: -0.7, y: -0.2, z: 0 }]
    })
  ]);

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${results.length} results`);
  console.log(`seeded ${customMaps.length} customMaps`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...');
