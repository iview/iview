const invokeVFunc = function(funcName, _this) {
	const root = _this.$root;
	if (root && root._$v3platform) {
		let v3platform = root._$v3platform();
		let func = v3platform.datasource[funcName];
		if (func) {
			let args = Array.prototype.slice.call(arguments, 2);
			return func.apply(root, args);
		}
	}
};


export default {
	/**
	 * 同步当前行到数据源
	 */
	synCurrentRecordToDs(_this, entityCode, newData, oldData) {
		return invokeVFunc('synCurrentRecordToDs', _this, entityCode, newData, oldData);
	},
	/**
	 * 同步选中行到数据源
	 */
	synSelectRecordToDs(_this, entityCode, data, isSel) {
		return invokeVFunc('synSelectRecordToDs', _this, entityCode, data, isSel);
	},
	registerCurrentHandler(_this, handler) {
		return  invokeVFunc('registerCurrentHandler', _this, handler);
	},
	registerSelectHandler(_this, handler) {
		return  invokeVFunc('registerSelectHandler', _this, handler);
	},
	markDsMultipleSelect(_this, entityCode) {
		return  invokeVFunc('markDsMultipleSelect', _this, entityCode);
	}
};
