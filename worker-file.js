export const bar = '';

const worker = new Worker(new URL('./app.worker', import.meta.url));
worker.onmessage = ({ data }) => {
  console.log(foo)
  console.log(`page got messagxe: ${data}`);
};
worker.postMessage('hello');
