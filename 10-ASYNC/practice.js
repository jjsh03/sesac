// Quiz 1. Callback -> Promise
// function call(name) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log(name);
//       res(name);
//     }, 1000);
//   });
// }

// function back(cb) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log('back');
//       res('back');
//     }, 1000);
//   });
// }

// function hell(cb) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       res('callback hell');
//     }, 1000);
//   });
// }

// call('kim')
//   .then(function (name) {
//     console.log(name, '반가워');
//     return back();
//   })
//   .then(function (cb) {
//     console.log(cb, '을 실행했구나');
//     return hell();
//   })
//   .then(function (cb) {
//     console.log('여기는', cb);
//   });

// Quiz2. Promise - async/await
function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back(cb) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log('back');
      res('back');
    }, 1000);
  });
}

function hell(cb) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res('callback hell');
    }, 1000);
  });
}

async function exec() {
  let user = await call('kim');
  console.log(user, '반가워');
  let videos = await back(user);
  console.log(videos, '을 실행했구나');
  let title = await hell(videos[0]);
  console.log('여기는', title);
}

exec();
