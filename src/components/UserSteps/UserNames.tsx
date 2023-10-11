import React, {useContext, useEffect, useMemo} from 'react';
import {RegisterOptions, useForm} from "react-hook-form";
import User from "../../utils/types/user";
import DefaultInput from "../Input/DefaultInput";
import {AppContext} from "../../utils/contexts/appContext";


function UserNames() {
  const {
    register,
    watch,
    formState: {errors},
  } = useForm<User>()
  const {user, setUser, setNextButtonEnabled} = useContext(AppContext);

  useEffect(() => {
    const subscription = watch((value, {name}) => {
        if (name) {
          setUser(u => {
            const userCopy = {...u} as any;
            userCopy[name] = value;
            return userCopy;
          })
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [watch, setUser])

  useEffect(() => {
    if (user.firstName && user.lastName) {
      setNextButtonEnabled(true);
    } else {
      setNextButtonEnabled(false);
    }
  }, [setNextButtonEnabled, user])

  const optionsFirstName: RegisterOptions = useMemo(() => ({
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name should have a minimum length of 2"
    }
  }), [])

  const optionsLastName: RegisterOptions = useMemo(() => ({
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name should have a minimum length of 2"
    }
  }), [])

  return (
    <>
      <DefaultInput defaultValue={user.firstName} {...register("firstName", optionsFirstName)}  />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <DefaultInput {...register("lastName", optionsLastName)} />
      {errors.lastName && <span>{errors.lastName.message}</span>}
    </>
  );
}

export default UserNames;