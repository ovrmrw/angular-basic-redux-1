export class IncrementAction {
  constructor(public num: number) { }
}


export type Action = IncrementAction;