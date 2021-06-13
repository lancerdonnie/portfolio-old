import create from 'zustand';

const useStore = create((set) => ({
  isReverse: false,
  setIsReverse: (x) => set({ isReverse: x }),
}));

export default useStore;
