import {IMemberEntity} from '../modal';

const members: IMemberEntity[] =
[
  {
    id: 1457912,
    login: "brauliodiez",
    avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
  },
  {
    id: 4374977,
    login: "Nasdan",
    avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
  }
];

const fetchMembers = (): Promise<IMemberEntity[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(members);
    }, 1000);
  });
};

export {
  fetchMembers
};