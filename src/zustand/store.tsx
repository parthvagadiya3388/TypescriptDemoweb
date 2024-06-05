import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
  count: number;
  increase: () => void;
  decrease: () => void;
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}

const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  count: 0,
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}))

// interface StoreState {
//   count: number;
//   increase: () => void;
//   decrease: () => void;
// }

// const useStore = create<StoreState>((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
// }));

export default usePersonStore;