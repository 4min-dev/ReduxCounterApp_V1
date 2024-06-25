import React from 'react'
import '../../../style/css/pages/homePage/homePageMainCounterInterface.css'
import { HomePageCounterCheckbox } from './HomePageCounterCheckbox'
import { useDispatch, useSelector } from 'react-redux'
import { IcounterDelayReducerState } from '../../../ts/interfaces/bankCounter/IcounterDelayReducerState'
import { GreenStyleButton } from '../buttons/GreenStyleButton'

type TCounterProps = {
    totalCash:number
}

export const HomePageMainCounterInterface:React.FC<TCounterProps> = ({totalCash}) => {

  const selector = useSelector((state:IcounterDelayReducerState) => state.counterDelayReducer)
  const dispatch = useDispatch()

  const getCounterValue = (promptTitle:string):number | null => {
    let payload:number = Number(prompt(promptTitle))

    if(isNaN(payload)) {
      console.log('Not a number')
      return null
    }
    
    return payload

}

  const incrHandler = () => {

    let payload:number | null = getCounterValue('+ value')

    if(payload !== null && payload > 0) {
      dispatch({type:'ADD_CASH',payload:payload})
    } else {
      console.log('Increment value cannot be less 0')
    }
  }

  const decrHandler = () => {

    let payload:number | null = getCounterValue('- value')

   if(payload !== null && payload > 0) {
      if(payload <= totalCash) {
        dispatch({type:'GET_CASH',payload:payload})
      } else if(payload > totalCash) {
          dispatch({type:'GET_CASH',payload:totalCash})
      }
   } else {
      console.log('Decrement value cannot be less 0')
   }
  }

  const asyncHandlerIncrement = () => dispatch({type:'ASYNC_COUNTER_INCR'})
  const asyncHandlerDecrement = () => dispatch({type:'ASYNC_COUNTER_DECR'})

  return (
    <div className='homePageCounterUI'>
      <GreenStyleButton handleClick={() => !selector.checkboxValue ? incrHandler() : asyncHandlerIncrement()} buttonText={'+'}/>
      <HomePageCounterCheckbox delayValue={selector.delay} checkboxValue={selector.checkboxValue}/>
      <GreenStyleButton disabled={totalCash <= 0} handleClick={() => !selector.checkboxValue ? decrHandler() : asyncHandlerDecrement()} buttonText={'-'}/>
    </div>
  )
}