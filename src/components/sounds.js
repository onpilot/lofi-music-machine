// Rewrite the code and use jsdelivr cdn to minimize bandwidth and traffic limits
let baseDir =
  "https://cdn.jsdelivr.net/gh/onpilot/lofi-music-machine/src/sounds/";

const audioDictionary = {
  Q: {
    src: baseDir + "deleted-user-11009121__lofi-loop-1.mp3",
    name: "loop 1",
  },
  W: {
    src: baseDir + "deleted-user-11009121__lofi-loop-2.mp3",
    name: "loop 2",
  },
  E: {
    src: baseDir + "deleted-user-11009121__lofi-loop-3.mp3",
    name: "loop 3",
  },
  A: {
    src: baseDir + "deleted-user-11009121__lofi-loop-4.mp3",
    name: "loop 4",
  },
  S: {
    src: baseDir + "deleted-user-11009121__lofi-loop-5.mp3",
    name: "loop 5",
  },
  D: {
    src: baseDir + "deleted-user-11009121__lofi-loop-6.mp3",
    name: "loop 6",
  },
  Z: {
    src: baseDir + "deleted-user-11009121__lofi-loop-7.mp3",
    name: "loop 7",
  },
  X: {
    src: baseDir + "deleted-user-11009121__lofi-loop-8.mp3",
    name: "loop 8",
  },
  C: {
    src: baseDir + "deleted-user-11009121__lofi-loop-9.mp3",
    name: "loop 9",
  },
};

export default audioDictionary;

// * Iterating Audio Files in Local Directory
// This approach isn't ideal if we want to include many files inside a directory that having different name.
// import sound1 from '../sounds/506354__deleted-user-11009121__lofi-loop-1.mp3';
// import sound2 from '../sounds/506354__deleted-user-11009121__lofi-loop-2.mp3';

// So, instead we do this:
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
// function importAll(r) {
//   let sounds = {};
//   r.keys().map((item) => {
//     return (sounds[item.replace('./', '')] = r(item));
//   });
//   return sounds;
// }
// const sounds = importAll(require.context('../sounds', false, /\.(mp3|wav)$/));

// const audioDictionary = {
//   Q: {
//     src: sounds['deleted-user-11009121__lofi-loop-1.mp3'],
//     name: 'loop 1',
//   },
//   W: {
//     src: sounds['deleted-user-11009121__lofi-loop-2.mp3'],
//     name: 'loop 2',
//   },
//   E: {
//     src: sounds['deleted-user-11009121__lofi-loop-3.mp3'],
//     name: 'loop 3',
//   },
//   A: {
//     src: sounds['deleted-user-11009121__lofi-loop-4.mp3'],
//     name: 'loop 4',
//   },
//   S: {
//     src: sounds['deleted-user-11009121__lofi-loop-5.mp3'],
//     name: 'loop 5',
//   },
//   D: {
//     src: sounds['deleted-user-11009121__lofi-loop-6.mp3'],
//     name: 'loop 6',
//   },
//   Z: {
//     src: sounds['deleted-user-11009121__lofi-loop-7.mp3'],
//     name: 'loop 7',
//   },
//   X: {
//     src: sounds['deleted-user-11009121__lofi-loop-8.mp3'],
//     name: 'loop 8',
//   },
//   C: {
//     src: sounds['deleted-user-11009121__lofi-loop-9.mp3'],
//     name: 'loop 9',
//   },
// };
