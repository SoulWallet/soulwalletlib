/**
 *
 *
 * @export
 * @class ResultWithErrors
 * @template SUCC
 * @template ERR
 */
export class ResultWithErrors<SUCC, ERR>{
    succ: boolean = false;
    errors: ERR | undefined = undefined;
    result: SUCC | undefined = undefined;
    constructor(succ: boolean, result: SUCC | undefined, errors: ERR | undefined = undefined) {
        this.succ = succ;
        this.errors = errors;
        this.result = result;
        if (result === undefined && errors === undefined) {
            throw new Error("ResultWithErrors: result and errors can't be both undefined");
        }
    }
}