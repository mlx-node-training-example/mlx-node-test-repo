// Test file for GRPO training validation
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// Example function with intentional complexity
export async function fetchData(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

// Additional feature for PR
export function subtract(a: number, b: number): number {
  return a - b;
}
