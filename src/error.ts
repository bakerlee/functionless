import { BaseNode } from "./node";

export class Err extends BaseNode<"Err"> {
  readonly nodeKind: "Err" = "Err";

  constructor(readonly error: Error) {
    super("Err");
  }

  public clone(): this {
    return new Err(this.error) as this;
  }
}
