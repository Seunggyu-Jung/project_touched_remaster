import { atom } from 'recoil';

export const userState = atom<string>({
  key: 'userState',
  default: '',
});

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
});
