export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    // once the mathematic is done, the result is pushed to the array
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
