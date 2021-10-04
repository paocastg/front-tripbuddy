import React from 'react'
import { render, cleanup } from '@testing-library/react'
import TimeLineSection from '.'

afterEach(cleanup)

const destinations = [
  {
    id: 1,
    destino: 'Lima',
    days: '2',
    order: 1
  },
  {
    id: 2,
    destino: 'Cusco',
    days: '6',
    order: 2
  },
  {
    id: 3,
    destino: 'Arequipa',
    days: '3',
    order: 1
  },
  {
    id: 4,
    destino: 'Trujillo',
    days: '1',
    order: 4
  }
]

describe('Time line section of details page', () => {
  const wrapper = render(<TimeLineSection/>)
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
  it('should render destinations', () => {
    const { getAllByTestId } = render(<TimeLineSection items={destinations}/>)
    const destiny = getAllByTestId('destiny')
    expect(destiny.length).toBe(4)
  })
  it('nothing render with zero destinations', () => {
    const { getByTestId } = render(<TimeLineSection items={[]}/>)
    const listDestiny = getByTestId('list-destiny')
    expect(listDestiny.children.length).toBe(0)
  })
  it('nothing render with undefined destinations', () => {
    const { getByTestId } = render(<TimeLineSection items={undefined}/>)
    const listDestiny = getByTestId('list-destiny')
    expect(listDestiny.children.length).toBe(0)
  })
  it('should render white space after of each destiny', () => {
    const { getAllByTestId } = render(<TimeLineSection items={destinations}/>)
    const destiny = getAllByTestId('space')
    expect(destiny.length).not.toBe(0)
  })
  it('should render text when target exist', () => {
    const { getAllByText } = render(<TimeLineSection items={destinations}/>)
    const textDestiny = getAllByText(/(1|Lima|-|2|días)/i)
    expect(textDestiny.length).not.toBe(0)
  })
})
