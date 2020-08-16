import { list } from '../services/admin';

export default {
  namespace: 'product',
  state: {
    products: [],
    loading: false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    },
    showLoading(state, action) {
      return { ...state, loading: true };
    },
  },
  effects: {
    *loadData({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const result = yield call(list);
      yield put({
        type: 'save',
        payload: {
          products: result.data,
        },
      });
    },
  },
};
