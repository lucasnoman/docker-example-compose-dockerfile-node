export function setupCounter(buttonEl: HTMLButtonElement) {
  buttonEl.addEventListener('click', async () => {
    const updatedCounter = await updateCounter();
    buttonEl.textContent = `count is ${updatedCounter}`;
  });
}

export async function getCountNumber() {
  const res = await fetch('http://localhost:3000');
  const data = await res.json();
  return data;
}

async function updateCounter() {
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
  });
  const data = await res.json();
  return data;
}
