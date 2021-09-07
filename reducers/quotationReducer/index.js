import { TYPES } from 'actions/quotationActions'

export const quotationInitialState = {
  fecha_inicio: '2021-08-06',
  fecha_fin: '2021-08-06',
  numero_ninos: 0,
  presupuesto: null,
  numero_adolescentes: 0,
  numero_adultos: 0,
  hotel: 'hotel',
  airbnb: true,
  lugar: 'unknow',
  usuario: null,
  destino: [],
  categoria: [],
  actividad: [],
  finally: null
}

export function quotationReducer (state, action) {
  switch (action.type) {
    case TYPES.UPDATE_ONE_QUOTATION: {
      return action.payload.manyOptions
        ? {
            ...state,
            [action.payload.field]: [
              ...state[action.payload.field],
              action.payload.data
            ]
          }
        : {
            ...state,
            [action.payload.field]: action.payload.data
          }
    }
    case TYPES.REMOVE_ONE_QUOTATION: {
      return action.payload.manyOptions
        ? {
            ...state,
            [action.payload.field]: state[action.payload.field].filter(
              (el) => el.id !== action.payload.data.id
            )
          }
        : {
            ...state,
            [action.payload.field]: null
          }
    }
    case TYPES.CLEAR_ALL_QUOTATION: {
      return quotationInitialState
    }
    default:
      return state
  }
}
