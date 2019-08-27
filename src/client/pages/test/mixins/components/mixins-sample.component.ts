import { Component } from 'nuxt-property-decorator';
import { BaseView } from '~/core/views/base.view';

/** Mixin demo */
@Component({})
export default class Mixin extends BaseView {
	/** Mixin示例 */
	public mixinValue: string = 'Mixin value demo';
}

