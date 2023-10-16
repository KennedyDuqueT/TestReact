import { useContext } from 'react';
import { ElectronicBillStampingContext } from './electronicBillStamping.context';

export const useElectronicBillStamping = () => useContext(ElectronicBillStampingContext);
