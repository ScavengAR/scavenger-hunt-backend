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
      result.setUser(users[0])
    ),
    Result.create({ name: 'andrew', time: 400 }).then(result =>
      result.setUser(users[0])
    ),
    Result.create({ name: 'david', time: 400 }).then(result =>
      result.setUser(users[1])
    ),
    Result.create({ name: 'valerie', time: 600 }).then(result =>
      result.setUser(users[2])
    ),
    Result.create({ name: 'frances', time: 500 }).then(result =>
      result.setUser(users[3])
    ),
    Result.create({ name: 'omri', time: 200 }).then(result =>
      result.setUser(users[4])
    ),
    Result.create({ name: 'geoff', time: 150 }).then(result =>
      result.setUser(users[5])
    ),
    Result.create({ name: 'corey', time: 200 }).then(result =>
      result.setUser(users[6])
    )
  ]);

  const customMaps = await Promise.all([
    CustomMap.create({
      name: 'Times Square',
      address: '5 times square',
      instructions: 'Here are instructions to start this banana hunt: ...',
      latitude: '40.758697',
      longitude: '-73.985011',
      customItems: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0.2, z: -0.5 }, { x: -0.3, y: 0.3 }]
    }).then(customMap => customMap.setUser(users[0])),
    CustomMap.create({
      name: 'Full Stack Academy HQ',
      address: '5 hanover square',
      instructions: 'Face your phone at the pink outline on the white board.',
      latitude: '40.705116',
      longitude: '-74.009236',
      customItems: [{
          x: 0.06518097042973661,
          y: -0.018196591949322313,
          z: 0.06200135454383886
        },
        {
          x: -3.624997093812364,
          y: -0.46887821009475755,
          z: 1.9980520908759025
        },
        {
          x: -1.6710298463811302,
          y: 0.6254725027932175,
          z: 3.5885598624587707
        },
        {
          x: -3.870294632772992,
          y: -0.245423321092815,
          z: 7.718979766303994
        },
        {
          x: 0.19921613730886312,
          y: 0.28704271129710324,
          z: 13.282829767801465
        },
        {
          x: -0.24986483400948828,
          y: -0.5658843894220565,
          z: 7.5964914558197485
        },
        {
          x: 0.02544026463775911,
          y: -0.620973113671865,
          z: 7.903682520844832
        },
        {
          x: 0.31277519966403783,
          y: -0.6175987710419334,
          z: 7.54153097089776
        },
        {
          x: 0.2791039394701071,
          y: -1.219492645685125,
          z: -1.1676812101384455
        },
        {
          x: 7.357788417819801,
          y: -0.2975692035887778,
          z: 8.227692381067504
        }
      ]
    }).then(customMap => customMap.setUser(users[4])),
    CustomMap.create({
      name: 'Murray Hill Theaters',
      address: '300 murray hill',
      instructions: 'Here are instructions to start this banana hunt: ...',
      latitude: '40.734159',
      longitude: '-73.990802',
      customItems: [{ x: 0.7, y: 0, z: 1 }, { x: 0.7, y: 0.2, z: -2 }]
    }).then(customMap => customMap.setUser(users[2])),
    CustomMap.create({
      name: 'Sunset Park',
      address: '100 sunset',
      instructions: 'Here are instructions to start this banana hunt: ...',
      latitude: '40.651837',
      longitude: '-74.004640',
      customItems: [{ x: 1.7, y: 0.3, z: -1 }, { x: -0.7, y: -0.2, z: 0 }]
    }).then(customMap => customMap.setUser(users[3]))
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
