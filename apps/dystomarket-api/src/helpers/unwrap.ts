export function unwrap<T>(value: T | null | undefined): T {
  if (value == null) {
    throw new Error('Value is null or undefined');
  }
  return value;
}
