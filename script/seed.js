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
    }).then(customMap => customMap.setUser(users[0])),
    CustomMap.create({
      name: 'Times Square',
      address: '5 times square',
      instructions: 'Start facing up town (42 street+)',
      latitude: '40.758697',
      longitude: '-73.985011',
      customItems: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0.2, z: -0.5 }, { x: -0.3, y: 0.3 }]
    }).then(customMap => customMap.setUser(users[4])),
    CustomMap.create({
      name: "You’ve got a friend in me",
      address:"In the privacy of your home.",
      instruction: "Play when you need a friend",
      latitude: "40.639352928935374",
      longitude: "-74.00472318503404",
      customItems: [
        { x: -0.15715917717847333, y: -0.8529463044365876, z: -0.6853219039919468},
        { x: -0.10024527433024516, y: -0.5692413242932838, z: -0.6518020274224771},
        { x: 0.01788748801279388, y: -0.26539676112182187, z: -0.5943527807456866},
        { x: 0.17374123158141302, y: -0.47231312570142525, z: -0.3472596751984321},
        { x: 0.3121933429206144, y: -0.8056719460234655, z: -0.2634202587825452},
        { x: -0.03790358739197725, y: 0.0005895380341680554, z: -0.4894784405158433},
        { x: -0.04458552810187148, y: -0.11908887382395873, z: -0.4846391741359051},
        { x: -0.04941211395887831, y: 0.21769216137509256, z: -0.4690461332140325},
        { x: -0.023342749774349775, y: 0.6451568964072424, z: -0.46515724168987704},
        { x: -0.02593755116270272, y: 0.6463894150411951, z: -0.45921271603010455},
        { x: -0.0320158591921541, y: 0.6471669557634363, z: -0.45202595867366935},
        { x: -0.035249593819940056, y: 0.6485587607396255, z: -0.450139916036934},
        { x: -0.0368349426471404, y: 0.6479003536352794, z: -0.44901260700826456},
        { x: -0.03624818570221354, y: 0.6477329190739132, z: -0.45020289276479714},
        { x: -0.03703518622274647, y: 0.6472024007232358, z: -0.44995489845443853},
        { x: -0.03639686395910403, y: 0.6478071950340631, z: -0.45091120675443574},
        { x: -0.03610969614710419, y: 0.6489559159910261, z: -0.4502148860193717},
        { x: -0.035701330721693326, y: 0.6494586231694969, z: -0.44783200996785594},
        { x: -0.038064537029262775, y: 0.6507924686586924, z: -0.4468078891776989},
        { x: -0.03928689004401027, y: 0.6509871651687228, z: -0.44488172151132727},
        { x: -0.0394150772502099, y: 0.3373572432925339, z: -0.45403795133510655},
        { x: 0.10270402017091831, y: 0.20627903897831532, z: -0.2964165931374242},
        { x: 0.15258728683266218, y: 0.21421476800119973, z: -0.24592316502967876},
        { x: 0.2662046601554604, y: 0.22469890897831618, z: -0.1787201553413511},
        { x: -0.25831245177035017, y: 0.22645002477160017, z: -0.5038486047974973},
        { x: -0.34954658855715054, y: 0.24396174661609885, z: -0.5184794929724569},
        { x: -0.4765744771390811, y: 0.2574033803204414, z: -0.5619957158083578},
        { x: -0.10668041672847278, y: 0.6553326153445768, z: -0.3846283594282532},
        { x: -0.1105164363831019, y: 0.656533137406593, z: -0.38869506196776255},
        { x: -0.11414810398784488, y: 0.6594663943165405, z: -0.39211781889283404},
        { x: -0.11703437760164143, y: 0.6616627096753652, z: -0.39378239280916183},
        { x: -0.11552072376131566, y: 0.661957885334758, z: -0.3942853431851209},
        { x: -0.09959082310524717, y: 0.5271002444047193, z: -0.3729363889720054},
        { x: -0.07472477624464845, y: 0.42137922044609233, z: -0.4225669833812705},
        { x: -0.06795801839550006, y: 0.14465977851426373, z: -0.43817385683921795},
        { x: 0.12007451936228981, y: -0.3148171494483008, z: -0.3290452460049371},
        { x: -0.14890592077820541, y: -0.3498100050275002, z: -0.6058313187777916}
      ]
    }).then(customMap => customMap.setUser(users[1])),
    CustomMap.create({
      name: 'Murray Hill Theaters',
      address: '300 Murray Hill',
      instructions: "Start facing the theatre's double red doors from the outside.",
      latitude: '40.734159',
      longitude: '-73.990802',
      customItems: [{ x: 0.7, y: 0, z: 1 }, { x: 0.7, y: 0.2, z: -2 }, { x: 1, y: 0.2, z: -0.5 }]
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
