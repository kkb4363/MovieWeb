import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'local',
  storage: localStorage,
});

export const recentWordsAtom = atom({
  key: 'recentwordAtom',
  default: [],
  effects: [persistAtom],
});

export const openSearchDialogAtom = atom({
  key: 'openSearchDialog',
  default: false,
});
