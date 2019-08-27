import { BaseService, BaseOption } from '~/core/service/base.service';
import configService from '~/core/service/config.service';
/**
 * 本地 node服务
 *
 * @class LocalService
 * @extends {BaseService}
 */
class LocalService extends BaseService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().localUrl;
		baseOption.isLocalHost = true;
		super(baseOption);
	}

	/**
	 * 获取已选择商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoodsListData(): Promise<any> {
		return await this.get('/carts.json');
	}

	/**
	 * 获取商品页面单个商品数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoodsData(): Promise<any> {
		return await this.get('/goods.json');
	}

	/**
	 * 获取商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getListData(): Promise<any> {
		return await this.get('/list.json');
	}
}

export default new LocalService();