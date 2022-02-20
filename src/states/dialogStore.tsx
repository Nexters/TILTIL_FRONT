import { Toast } from 'components/dialog/Toast';
import { ReactElement } from 'react';
import { atom, useRecoilState } from 'recoil';

export const dialogStore = atom<{ key: string; jsx: ReactElement }[]>({
  key: 'dialog',
  default: [],
});

export const useDialogStore: () => {
  open: (jsx: ReactElement) => void;
  onClosed: (key: string) => void;
  closeAll: () => void;
  toast: (message: string) => void;
} = () => {
  const [dialogs, setDialogs] = useRecoilState(dialogStore);

  const open = (jsx: ReactElement) => {
    const id = new Date().getTime();
    const dialog = { key: `Dialog-${id}`, jsx };
    setDialogs((prevDialog) => [...prevDialog, dialog]);
  };
  const onClosed = (key: string) => {
    setTimeout(() => {
      setDialogs((preDialogs) => {
        const newDialogs = preDialogs.filter((dialog) => dialog.key !== key);
        return [...newDialogs];
      });
    }, 200);
  };
  const closeAll = () => {
    setDialogs([]);
  };

  const toast = (message: string) => {
    open(<Toast message={message} />);
  };

  return { open, onClosed, closeAll, toast };
};
