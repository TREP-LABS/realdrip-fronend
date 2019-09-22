import * as actions from '.';

describe('Auth Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('Create admin user', () => {
    it('should dispatch ADDING_USER_STARTED and ADDING_USER_RESOLVED', async (done) => {
      const samplePayload = { data: {}, message: "Created user successfully" };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ response: samplePayload });
      });
      const expectedActions = ['ADDING_USER_STARTED', 'ADDING_USER_RESOLVED'];
      const expectedPayloads = [undefined, samplePayload];
      const store = mockStore({});
      await store.dispatch(actions.createAdminUser()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        const payloads = dispatchedActions.map(action => action.payload);
        expect(actionTypes).toEqual(expectedActions);
        expect(payloads).toEqual(expectedPayloads);
      });
      done();
    });

    it('should dispatch ADDING_USER_STARTED and ADDING_USER_REJECTED', async (done) => {
      const samplePayload = { message: 'there was an error' };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.reject({ response: { data: samplePayload } });
      });
      const expectedActions = ['ADDING_USER_STARTED', 'ADDING_USER_REJECTED'];
      const expectedPayloads = [undefined, samplePayload];
      const store = mockStore({});
      await store.dispatch(actions.createAdminUser()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        const payloads = dispatchedActions.map(action => action.payload);
        expect(actionTypes).toEqual(expectedActions);
        expect(payloads).toEqual(expectedPayloads);
      });
      done();
    });
  });
});
