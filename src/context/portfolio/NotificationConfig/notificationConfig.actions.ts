import { Actions, State } from './notificationConfig.types';
import { reducerActions } from './notificationConfig.constants';
import { getDynamicVarList, getNotificationList, getPeriodicityList, getSendingChannelList, getServiceTypeList } from '@/mocks/portfolio';
import { Notification } from '@/models/portfolio';

const useActions = (state: State, dispatch: any): Actions => {
  const getAllNotifications = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getNotificationList();

      dispatch(reducerActions.setNotifications(data));
    } catch (error) {
      dispatch(reducerActions.setNotifications([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const getAllDynamicVars = async (notificationId: number): Promise<void> => {
    console.log('[TODO]: implement notificationId', notificationId);

    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getDynamicVarList();

      dispatch(reducerActions.setDynamicVars(data));
    } catch (error) {
      dispatch(reducerActions.setDynamicVars([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const getAllNeededCatalogs = async (): Promise<void> => {
    try {
      dispatch(reducerActions.setLoading(true));

      const serviceTypes = await getServiceTypeList();
      const sendingChannels = await getSendingChannelList();

      dispatch(reducerActions.setServiceTypes(serviceTypes));
      dispatch(reducerActions.setSendingChannels(sendingChannels));
    } catch (error) {
      // TODO: Implement error validation
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const getPeriodicityByNotification = async (notificationId: number): Promise<void> => {
    console.log('[TODO]: implement notificationId', notificationId);

    try {
      dispatch(reducerActions.setLoading(true));

      const data = await getPeriodicityList();

      dispatch(reducerActions.setPeriodicityOptions(data));
    } catch (error) {
      dispatch(reducerActions.setPeriodicityOptions([]));
    } finally {
      dispatch(reducerActions.setLoading(false));
    }
  };

  const selectNotification = async (notificationId: number): Promise<void> => {
    dispatch(reducerActions.setSelectedNotification(notificationId));

    await getPeriodicityByNotification(notificationId);
    await getAllDynamicVars(notificationId);
  };

  const selectServiceType = async (serviceTypeId: number): Promise<void> => {
    dispatch(reducerActions.setSelectedServiceType(serviceTypeId));
  };

  const saveNotification = async (notification: Partial<Notification>): Promise<void> => {
    console.log('[TODO]: implement notification', notification);

    // TODO: Connect with API to save changes
  };

  const clean = () => dispatch(reducerActions.setInitialState());

  return {
    getAllNotifications,
    getAllDynamicVars,
    getAllNeededCatalogs,
    getPeriodicityByNotification,
    selectNotification,
    selectServiceType,
    saveNotification,
    clean,
  };
};

export { useActions };
