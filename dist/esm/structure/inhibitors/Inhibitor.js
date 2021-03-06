import { SharkModule } from '../SharkModule';
import { SharkError } from '../../util';
export class Inhibitor extends SharkModule {
    reason;
    type;
    priority;
    constructor(id, options) {
        super(id, { category: options.category });
        this.reason = options.reason || '';
        this.type = options.type || 'post';
        this.priority = options.priority || 0;
    }
    exec(message, command) {
        throw new SharkError('NOT_IMPLEMENTED', this.constructor.name, 'exec');
    }
}
export default Inhibitor;
