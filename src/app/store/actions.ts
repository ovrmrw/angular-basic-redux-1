export class IncrementAction {
  constructor(public num: number) { }
}

export class TimeUpdateAction {
  constructor(public timestamp: number) { }
}


export type Action = IncrementAction | TimeUpdateAction;