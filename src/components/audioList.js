// This approach isn't ideal if we want to include many files inside a directory that having different name.
// import sound1 from '../sounds/506354__deleted-user-11009121__lofi-loop-1.mp3';
// import sound2 from '../sounds/506354__deleted-user-11009121__lofi-loop-2.mp3';

// So, instead we do this:
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
  let sounds = {};
  r.keys().map((item) => {
    return (sounds[item.replace('./', '')] = r(item));
  });
  return sounds;
}
const sounds = importAll(require.context('../sounds', false, /\.(mp3|wav)$/));

const audioList = [
  {
    Q: sounds['deleted-user-11009121__lofi-loop-1.mp3'],
    W: sounds['deleted-user-11009121__lofi-loop-2.mp3'],
    E: sounds['deleted-user-11009121__lofi-loop-3.mp3'],
    A: sounds['deleted-user-11009121__lofi-loop-4.mp3'],
    S: sounds['deleted-user-11009121__lofi-loop-5.mp3'],
    D: sounds['deleted-user-11009121__lofi-loop-6.mp3'],
    Z: sounds['deleted-user-11009121__lofi-loop-7.mp3'],
    X: sounds['deleted-user-11009121__lofi-loop-8.mp3'],
    C: sounds['deleted-user-11009121__lofi-loop-9.mp3'],
  },
  {
    Q: '',
    W: '',
    E: '',
    A: '',
    S: '',
    D: '',
    Z: '',
    X: '',
    C: '',
  },
];

export default audioList;
