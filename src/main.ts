import { factory, CalculateFunction } from './utils/factory';

let count: CalculateFunction = factory(0, 1);

// Selected DOM elements for further manipulations
const startAtInput = document.getElementById('start-at') as HTMLInputElement;
const stepInput = document.getElementById('step') as HTMLInputElement;
const currentCount = document.querySelector('.current-count') as HTMLSpanElement;
const countButton = document.querySelector('.count-button') as HTMLButtonElement;

// Gets values from elements and updates count function with new function with updated values from factory
function update_count_and_reset_counter(): void {
  const startAt = Number(startAtInput.value);
  const step = Number(stepInput.value);

  count = factory(startAt, step);
}

// Calculate and update new current_count value
function update_count(): void {
  const updatedCount = count().toString();
  currentCount.innerText = updatedCount;
}

// Event listeners
startAtInput?.addEventListener('change', update_count_and_reset_counter);
stepInput?.addEventListener('change', update_count_and_reset_counter);
countButton.addEventListener('click', update_count);
