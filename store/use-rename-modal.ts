// import { create } from "zustand";

// const defaultValues = { id: "", title: "" };

// interface IRenameModal {
//   isOpen: boolean;
//   initialValues: typeof defaultValues;
//   onOpen: (id: string, title: string) => void;
//   onClose: () => void;
// }

// export const useRenameModal = create<IRenameModal>((set) => ({
//   isOpen: false,
//   onOpen: (id, title) =>
//     set({
//       isOpen: true,
//       initialValues: { id, title },
//     }),
//   onClose: () =>
//     set({
//       isOpen: false,
//       initialValues: defaultValues,
//     }),
//   initialValues: defaultValues,
// }));

import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IRenameModal {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  initialValues: defaultValues, // Initial state is set here
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValues: { id, title }, // Updates initialValues when the modal opens
    }),
  onClose: () =>
    set({
      isOpen: false,
      initialValues: defaultValues, // Resets initialValues when the modal closes
    }),
}));
