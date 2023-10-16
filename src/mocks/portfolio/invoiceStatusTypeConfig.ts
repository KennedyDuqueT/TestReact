import { InvoiceStatusType } from '@/models/portfolio';
import { delay } from '../helpers';

let invoiceStatusTypeList: InvoiceStatusType[] = [
  {
    id: 1,
    name: 'Activo',
    code: 'A',
    description: 'Factura activa',
  },
  {
    id: 2,
    name: 'Refinanciado',
    code: 'AP',
    description: 'La factura fue refinanciada en algún momento',
  },
  {
    id: 3,
    name: 'Incobrable',
    code: 'I',
    description: 'Por algun motivo la factura ya no puede ser cobrada',
  },
  {
    id: 4,
    name: 'Legal',
    code: 'L',
    description: 'El cliente se encuentra en un lote enviado a legal',
  },
  {
    id: 5,
    name: 'Reclamada',
    code: 'R',
    description: 'El cliente realizo un reclamo',
  },
  {
    id: 6,
    name: 'Transferida',
    code: 'T',
    description: 'La deuda de la factura se transfirió a otro suministro',
  },
];

export const getInvoiceStatusTypeList = async (): Promise<InvoiceStatusType[]> => {
  await delay(500);

  return invoiceStatusTypeList;
};

export const createInvoiceStatusType = async (newInvoiceStatusType: InvoiceStatusType): Promise<boolean> => {
  const { length } = invoiceStatusTypeList;
  const id = length > 0 ? invoiceStatusTypeList[length - 1].id + 1 : 1;

  invoiceStatusTypeList = [...invoiceStatusTypeList, { ...newInvoiceStatusType, id }];

  return true;
};

export const updateInvoiceStatusType = async (updatedInvoiceStatusType: InvoiceStatusType): Promise<boolean> => {
  invoiceStatusTypeList = invoiceStatusTypeList.map((status) => (status.id === updatedInvoiceStatusType.id ? updatedInvoiceStatusType : status));

  return true;
};

export const deleteInvoiceStatusType = async (invoiceStatusTypeId: number): Promise<boolean> => {
  invoiceStatusTypeList = invoiceStatusTypeList.filter((status) => status.id !== invoiceStatusTypeId);

  return true;
};
