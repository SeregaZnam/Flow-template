// @flow

type Foo = (a: number, b: number) => number;

export const foo: Foo = (a: number, b: number): number => a ** b;