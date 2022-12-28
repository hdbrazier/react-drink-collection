import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseKind, chooseYear, choosePrice, chooseQuantity } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

// This page will work in conjecture w/ redux

interface drinkFormProps {
  id?: string;
  data?: {}
};

interface drinkState {
  name: string;
  kind: string;
  year: string;
  price: string;
  quantity: string;
};

export const DrinkForm = (props:drinkFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<drinkState>(state => state.name);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated: ${data} ${props.id}`);
      console.log(data)
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseName(data));
      dispatch(chooseKind(data.kind));
      dispatch(chooseYear(data.year));
      dispatch(choosePrice(data.price));
      dispatch(chooseQuantity(data.quantity));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <Input {...register('name')} name="name" placeholder='Name' />
          </div>
          <div>
            <label htmlFor="kind">Kind</label>
            <Input {...register('kind')} name="kind" placeholder='Kind' />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <Input {...register('year')} name="year" placeholder='Year' />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Input {...register('price')} name="price" placeholder='Price' />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Input {...register('quantity')} name="quantity" placeholder='Quantity' />
          </div>
          <Button type="submit">Submit</Button>
        </form>
    </div>
  );
}