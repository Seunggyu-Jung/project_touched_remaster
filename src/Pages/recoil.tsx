import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom<string>({
  key: 'userState',
  default: '',
  effects_UNSTABLE: [persistAtom]
});

export const nameState = atom<string>({
  key: 'nameState',
  default: '',
  effects_UNSTABLE: [persistAtom]
});

export const textState = atom<string | number>({
  key: 'textState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const fontState = atom<string>({
  key: 'fontState',
  default: 'Arial',
  effects_UNSTABLE: [persistAtom]
})

export const sizeState = atom<string>({
  key: 'sizeState',
  default: '12',
  effects_UNSTABLE: [persistAtom]
})

export const imageState = atom<string[]>({
  key: 'imageState',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const backgroundState = atom<string[]>({
  key: 'backgroundState',
  default: ['#FFC0CB', '#FFA500'],
  effects_UNSTABLE: [persistAtom]
})

export const textBackState = atom<string>({
  key: 'textBackState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})