import { mount, unmount } from "svelte";
import Message from "./Message.svelte";

export default async function message(
  message: string
) {
  return new Promise<boolean>((resolve) => {
    let isOpen = true;
    const messageInstance = mount(Message, {
      target: document.body,
      props: {
        isOpen: isOpen,
        message: message,
        onSelect: (selectedItem) => {
          resolve(selectedItem);
          unmount(messageInstance);
        },
      },
    });
  });
}