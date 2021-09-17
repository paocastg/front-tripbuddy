import { TYPES } from 'actions/quotationActions'

export const quotationInitialState = {
  fecha_inicio: '',
  fecha_fin: '',
  numero_ninos: null,
  presupuesto: null,
  numero_adolescentes: null,
  numero_adultos: null,
  hotel: false,
  airbnb: false,
  estrellas: 0,
  usuario: null,
  destino: [],
  categoria: [],
  actividad: [],
  comentarios: null
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
